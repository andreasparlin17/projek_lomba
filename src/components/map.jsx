import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import * as turf from "@turf/turf";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const bandung = { lng: 107.60484, lat: -6.914397 };
  const zoom = 14;
  maptilersdk.config.apiKey = "KP8XxRPzOszUwLbNmQud";

  const [geojsonVisibility, setGeojsonVisibility] = useState({
    geojson1: true,
    geojson2: false,
    geojson3: false
  });

  const animationFrames = useRef({});
  const popups = useRef({});
  const pointData = useRef({});

  const toggleLayerVisibility = (layerId) => {
    setGeojsonVisibility((prev) => {
      const newVisibility = !prev[layerId];
      
      if (map.current) {
        // Toggle route line visibility based on layer
        if (layerId === 'geojson1') {
          map.current.setLayoutProperty('lineLayer1', 'visibility', newVisibility ? 'visible' : 'none');
          map.current.setLayoutProperty('pointLayer1', 'visibility', newVisibility ? 'visible' : 'none');
          
          Object.keys(animationFrames.current).forEach(frameId => {
            if (frameId.startsWith('bus-')) {
              const pointLayer = map.current.getLayer(frameId);
              if (pointLayer) {
                map.current.setLayoutProperty(frameId, 'visibility', newVisibility ? 'visible' : 'none');
                handlePopupVisibility(frameId, newVisibility, 'bus');
              }
            }
          });
        }
        
        if (layerId === 'geojson2') {
          map.current.setLayoutProperty('lineLayer2', 'visibility', newVisibility ? 'visible' : 'none');
          
          Object.keys(animationFrames.current).forEach(frameId => {
            if (frameId.startsWith('angkot-')) {
              const pointLayer = map.current.getLayer(frameId);
              if (pointLayer) {
                map.current.setLayoutProperty(frameId, 'visibility', newVisibility ? 'visible' : 'none');
                handlePopupVisibility(frameId, newVisibility, 'angkot');
              }
            }
          });
        }

        if (layerId === 'geojson3') {
          map.current.setLayoutProperty('lineLayer3', 'visibility', newVisibility ? 'visible' : 'none');
          map.current.setLayoutProperty('pointLayer3', 'visibility', newVisibility ? 'visible' : 'none');
          
          Object.keys(animationFrames.current).forEach(frameId => {
            if (frameId.startsWith('train-')) {
              const pointLayer = map.current.getLayer(frameId);
              if (pointLayer) {
                map.current.setLayoutProperty(frameId, 'visibility', newVisibility ? 'visible' : 'none');
                handlePopupVisibility(frameId, newVisibility, 'train');
              }
            }
          });
        }
      }
      
      return {
        ...prev,
        [layerId]: newVisibility,
      };
    });
  };

  const handlePopupVisibility = (pointId, visible, vehicleType) => {
    if (popups.current[pointId]) {
      popups.current[pointId].remove();
      delete popups.current[pointId];
    }

    if (visible && pointData.current[pointId]) {
      const point = pointData.current[pointId];
      const popup = new maptilersdk.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 0,
      })
        .setLngLat(point.geometry.coordinates)
        .setHTML(
          vehicleType === 'bus' ?
            `<div class="font-sans text-white bg-transparent rounded-xl shadow-md flex w-full h-full">
                <div class='bg-[#DB3A34] flex items-center font-medium justify-center w-1/4 text-xl'>${point.properties.ref}</div>
                <div class='h-full flex flex-col justify-between py-3 px-2 bg-[#224869]'>
                    <div class='font-medium'>${point.properties.to}</div>
                    <div> Next Stop in ${Math.floor(Math.random() * 60)} minutes</div>
                </div>
            </div>` :
          vehicleType === 'train' ?
            `<div class="font-sans text-white rounded-xl shadow-md flex flex-col justify-between items-center w-full h-full bg-[#224869]">
                <div class='font-medium'>${point.properties.name}</div>
                <div> Next Stop in ${Math.floor(Math.random() * 60)} minutes</div>
            </div>` :
            `<div class="font-sans text-white rounded-lg p-3 shadow-md flex flex-col justify-center bg-[#224869] items-center w-full h-full">
                <div class='font-medium'>${point.properties.name}</div>
            </div>`
        );
      
      popup.addTo(map.current);
      popups.current[pointId] = popup;
    }
  };

  useEffect(() => {
    if (map.current) return;

    const geoDataUrl1 = "https://api.maptiler.com/data/7d16dd3f-8474-4b2d-b393-c4fd780a1d4e/features.json?key=7LnyUGyoYYqDbwcsO9ec";
    const geoDataUrl2 = "https://api.maptiler.com/data/be13c8dd-455a-4ad7-a0d9-1a652b0e90fb/features.json?key=7LnyUGyoYYqDbwcsO9ec";
    const geoDataUrl3 = "https://api.maptiler.com/data/403613e8-b9f1-48f1-ad8f-7065ee7c6202/features.json?key=7LnyUGyoYYqDbwcsO9ec";

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.DATAVIZ.DARK,
      center: [bandung.lng, bandung.lat],
      zoom: zoom,
    });

    map.current.on("load", async() => {  
      try {
        const customBus = await map.current.loadImage('/assets/icon-bus.png');
        map.current.addImage('custom-bus', customBus.data);
        const customAngkot = await map.current.loadImage('/assets/icon-angkot.png');
        map.current.addImage('custom-angkot', customAngkot.data);
        const customKereta = await map.current.loadImage('/assets/icon-kereta.png');
        map.current.addImage('custom-kereta', customKereta.data);

        // Load bus routes
        fetch(geoDataUrl1)
          .then((response) => response.json())
          .then((geoData) => {
            if (map.current.getSource("geoData")) return;

            map.current.addSource("geoData", {
              type: "geojson",
              data: geoData,
            });

            map.current.addLayer({
              id: "lineLayer1",
              type: "line",
              source: "geoData",
              paint: {
                "line-color": ["get", "colour"],
                "line-width": 4
              },
              layout: {
                visibility: geojsonVisibility.geojson1 ? 'visible' : 'none'
              }
            });

            
            const stopFeatures = geoData.features.filter(feature => {
              return feature.properties["@relations"] &&
                feature.properties["@relations"][0] &&
                feature.properties["@relations"][0]["role"] === "stop";
            });

            map.current.addLayer({
              id: "pointLayer1",
              type: "circle",
              source: {
                type: "geojson",
                data: { type: "FeatureCollection", features: stopFeatures }
              },
              paint: {
                "circle-radius": 10,
                "circle-color": "white",
              },
              layout: {
                visibility: geojsonVisibility.geojson1 ? 'visible' : 'none'
              }
            });

            let popup = new maptilersdk.Popup({
              closeButton: true,
              closeOnClick: true
            });
            
            map.current.on("click", "lineLayer1", (e) => {
              map.current.getCanvas().style.cursor = "pointer";
              const feature = e.features[0];
              const coordinates = e.lngLat;

              const roadName = feature.properties["name"] || "Unknown Road";
              
              popup.setLngLat(coordinates)
                   .setHTML(`<strong>${roadName}</strong>`)
                   .addTo(map.current);
            });

            map.current.on("mouseenter", "lineLayer1", (e) => {
              map.current.getCanvas().style.cursor = "pointer";
            });
            map.current.on("mouseleave", "lineLayer1", () => {
              map.current.getCanvas().style.cursor = "";
            });
            
            map.current.on("click", "pointLayer1", (e) => {
              const coordinates = e.features[0].geometry.coordinates.slice();

              const description = JSON.parse(e.features[0].properties['@relations'])[0]['stop_name'] || "Unknown Stop";
              popup
                .setLngLat(coordinates)
                .setHTML(`<strong>${description}</strong>`)
                .addTo(map.current);
            });
            
            map.current.on("mouseenter", "pointLayer1", (e) => {
              map.current.getCanvas().style.cursor = "pointer";
            });
            map.current.on("mouseleave", "pointLayer1", () => {
              map.current.getCanvas().style.cursor = "";
            });

            geoData.features
              .filter((feature) => feature.geometry.type === "LineString")
              .forEach((lineFeature, index) => {
                const pointId = `bus-${index}`;
                setupMovingIcon(lineFeature, pointId, 'bus', map.current);
              });
          });

        // Load angkot routes
        fetch(geoDataUrl2)
          .then((response) => response.json())
          .then((geoData2) => {
            if (map.current.getSource("geoData2")) return;

            map.current.addSource("geoData2", {
              type: "geojson",
              data: geoData2,
            });

            map.current.addLayer({
              id: "lineLayer2",
              type: "line",
              source: "geoData2",
              paint: {
                "line-color": [
                  "case",
                  ["has", "colour"],
                  ["get", "colour"],
                  "#0000FF",
                ],
                "line-width": 3,
              },
              layout: {
                visibility: geojsonVisibility.geojson2 ? 'visible' : 'none'
              }
            });

            let popup = new maptilersdk.Popup({
              closeButton: true,
              closeOnClick: true
            });
            
            map.current.on("click", "lineLayer2", (e) => {
              map.current.getCanvas().style.cursor = "pointer";
              const feature = e.features[0];
              const coordinates = e.lngLat;

              const roadName = feature.properties["name"] || "Unknown Road";
              
              popup.setLngLat(coordinates)
                   .setHTML(`<strong>${roadName}</strong>`)
                   .addTo(map.current);
            });

            map.current.on("mouseenter", "lineLayer2", (e) => {
              map.current.getCanvas().style.cursor = "pointer";
            });
            map.current.on("mouseleave", "lineLayer2", () => {
              map.current.getCanvas().style.cursor = "";
            });

            geoData2.features
              .filter((feature) => feature.geometry.type === "LineString")
              .forEach((lineFeature, index) => {
                const pointId = `angkot-${index}`;
                setupMovingIcon(lineFeature, pointId, 'angkot', map.current);
              });
          });

        // Load train routes
        fetch(geoDataUrl3)
        .then((response) => response.json())
        .then((geoData3) => {
          // Tambahkan sumber GeoJSON hanya jika belum ada
          if (!map.current.getSource("geoData3")) {
            map.current.addSource("geoData3", {
              type: "geojson",
              data: geoData3,
            });

            // Tambahkan layer garis
            map.current.addLayer({
              id: "lineLayer3",
              type: "line",
              source: "geoData3",
              paint: {
                "line-color": ["get", "colour"] || "#0000ff",
                "line-width": 5,
              },
              layout: {
                visibility: geojsonVisibility.geojson3 ? "visible" : "none",
              },
            });

            // Tambahkan layer titik
            const trainStops = geoData3.features.filter(
              (feature) =>
                feature.properties.railway === "station" ||
                feature.properties.railway === "halt"
            );

            map.current.addLayer({
              id: "pointLayer3",
              type: "circle",
              source: {
                type: "geojson",
                data: { type: "FeatureCollection", features: trainStops },
              },
              paint: {
                "circle-radius": 12,
                "circle-color": ["get", "colour"] || "#0000ff",
              },
              layout: {
                visibility: geojsonVisibility.geojson3 ? "visible" : "none",
              },
            });
          }

          // Tambahkan marker kereta dengan kondisi opasitas
          if (!map.current.getSource("MarkerKeretaSource")) {
            map.current.addSource("MarkerKeretaSource", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [107.5606244, -6.8956811],
                    },
                    properties: {},
                  },
                ],
              },
            });

            map.current.addLayer({
              id: "MarkerKereta",
              type: "symbol",
              source: "MarkerKeretaSource",
              layout: {
                "icon-image": "custom-kereta",
                "icon-size": 0.5,
                "icon-anchor": "center",
              },
              paint: {
                "icon-opacity": geojsonVisibility.geojson3 ? 1 : 0,
              },
            });

            // Tambahkan popup permanen
            // new maptilersdk.Popup({
            //   closeButton: false,
            //   closeOnClick: false,
            // })
            //   .setLngLat([107.5606244, -6.8956811])
            //   .setHTML(
            //     `<strong>Custom Marker</strong><p>Koordinat: [107.5606244, -6.8956811]</p>`
            //   )
            //   .addTo(map.current);
          }

          // Perbarui visibilitas jika geojsonVisibility.geojson3 berubah
          map.current.setLayoutProperty(
            "lineLayer3",
            "visibility",
            geojsonVisibility.geojson3 ? "visible" : "none"
          );
          map.current.setLayoutProperty(
            "pointLayer3",
            "visibility",
            geojsonVisibility.geojson3 ? "visible" : "none"
          );
          map.current.setPaintProperty(
            "MarkerKereta",
            "icon-opacity",
            geojsonVisibility.geojson3 ? 1 : 0
          );
        });



      } catch(error) {
        console.error('Error setting up map:', error);
      }
    });

    return () => {
      Object.values(animationFrames.current).forEach(frameId => {
        cancelAnimationFrame(frameId);
      });
      Object.values(popups.current).forEach(popup => {
        popup.remove();
      });
    };
  }, [bandung.lng, bandung.lat, zoom, geojsonVisibility]);

  const setupMovingIcon = (lineFeature, pointId, vehicleType, mapInstance) => {
    const route = turf.featureCollection([lineFeature]);
    const lineDistance = turf.length(route.features[0], { units: "kilometers" });
    const steps = 1200;
    const arc = [];
    
    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
      const segment = turf.along(route.features[0], i, { units: "kilometers" });
      arc.push(segment.geometry.coordinates);
    }
    
    route.features[0].geometry.coordinates = arc;
    
    const point = turf.featureCollection([
      turf.point(route.features[0].geometry.coordinates[0], {
        ...(vehicleType === 'bus' ? {
          ref: route.features[0].properties.ref,
          from: route.features[0].properties.from,
          to: route.features[0].properties.to,
        } : vehicleType === 'train' ? {
          name: route.features[0].properties.name || 'Railway Line'
        } : {
          name: route.features[0].properties.name,
        })
      }),
    ]);
    
    pointData.current[pointId] = point.features[0];
    
    mapInstance.addSource(pointId, {
      type: "geojson",
      data: point,
    });
    
    mapInstance.addLayer({
      id: pointId,
      source: pointId,
      type: "symbol",
      layout: {
        "icon-image": vehicleType === 'bus' ? 'custom-bus' : vehicleType === 'train' ? 'custom-kereta' : 'custom-angkot',
        "icon-size": vehicleType === 'bus' ? 0.5 : vehicleType === 'train' ? 0.2 : 0.1,
        "icon-rotate": ["get", "bearing"],
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        visibility: 
          vehicleType === 'bus' ? (geojsonVisibility.geojson1 ? 'visible' : 'none') :
          vehicleType === 'train' ? (geojsonVisibility.geojson3 ? 'visible' : 'none') :
          (geojsonVisibility.geojson2 ? 'visible' : 'none')
      },
    });
    
    const initialVisibility = 
      vehicleType === 'bus' ? geojsonVisibility.geojson1 :
      vehicleType === 'train' ? geojsonVisibility.geojson3 :
      geojsonVisibility.geojson2;
    
    if (initialVisibility) {
      handlePopupVisibility(pointId, true, vehicleType);
    }
    
    let counter = 0;
    const speed = vehicleType === 'train' ? 750 : 500;  // Trains move slightly slower
    
    function animate() {
      if (counter >= steps) {
        counter = 0;
      }
    
      const currentCoord = route.features[0].geometry.coordinates[counter];
      point.features[0].geometry.coordinates = currentCoord;
    
      const nextCoord = route.features[0].geometry.coordinates[
        counter < steps - 1 ? counter + 1 : counter
      ];
      
      point.features[0].properties.bearing = turf.bearing(
        turf.point(currentCoord),
        turf.point(nextCoord)
      );
    
      mapInstance.getSource(pointId).setData(point);
      
      pointData.current[pointId] = point.features[0];
      const isVisible = 
        vehicleType === 'bus' ? geojsonVisibility.geojson1 :
        vehicleType === 'train' ? geojsonVisibility.geojson3 :
        geojsonVisibility.geojson2;
    
      if (popups.current[pointId] && isVisible) {
        popups.current[pointId].setLngLat(currentCoord);
      }
    
      counter += 1;
      animationFrames.current[pointId] = setTimeout(() => {
        requestAnimationFrame(() => animate());
      }, speed);
    }
    
    animate();
  };

  return (
    <div className="flex flex-col items-center w-full lg:items-stretch lg:flex-row justify-center gap-10 text-black mt-20">
      <div className="z-10 flex flex-row md:w-[80%] w-[90%] pt-4 pb-2 lg:w-[14.5%] lg:max-w-[170px] lg:flex-col gap-4 bg-[#272727] pl-4 pr-2 items-center justify-center rounded-3xl">
        <label className="mb-2 w-32 text-white cursor-pointer items-center justify-center -z-99 flex flex-col bg-[rgba(44,108,165,0.59)] py-3 rounded-lg px-2 mr-2 text-xl font-medium text-center">
          <input
            type="checkbox"
            checked={geojsonVisibility.geojson2}
            onChange={() => toggleLayerVisibility('geojson2')}
            className="mr-2 hidden"
          />
          Angkot
          <div className="w-[85%] h-4 rounded-xl px-1 py-0.5 bg-[#222222] flex justify-center items-center mt-2">
            <div className={`w-full h-full bg-[#4577A2] rounded-xl ${geojsonVisibility.geojson2 ? 'opacity-100' : 'opacity-0'} transition-all duration-200`}></div>
          </div>
        </label>
        <label className="mb-2 w-32 text-white cursor-pointer items-center justify-center  flex flex-col bg-[rgba(44,108,165,0.59)] py-3 rounded-lg px-2 mr-2 text-xl font-medium text-center">
          <input
            type="checkbox"
            checked={geojsonVisibility.geojson1}
            onChange={() => toggleLayerVisibility('geojson1')}
            className="mr-2 hidden"
          />
          Bus
          <div className="w-[85%] h-4 rounded-xl px-1 py-0.5 bg-[#222222] flex justify-center items-center mt-2">
            <div className={`w-full h-full bg-[#4577A2] rounded-xl ${geojsonVisibility.geojson1 ? 'opacity-100' : 'opacity-0'} transition-all duration-200`}></div>
          </div>
        </label>
        <label className="mb-2 w-32 text-white cursor-pointer items-center justify-center  flex flex-col bg-[rgba(44,108,165,0.59)] py-3 rounded-lg px-2 mr-2 text-xl font-medium text-center">
          <input
            type="checkbox"
            checked={geojsonVisibility.geojson3}
            onChange={() => toggleLayerVisibility('geojson3')}
            className="mr-2 hidden"
          />
          Train
          <div className="w-[85%] h-4 rounded-xl px-1 py-0.5 bg-[#222222] flex justify-center items-center mt-2">
            <div className={`w-full h-full bg-[#4577A2] rounded-xl ${geojsonVisibility.geojson3 ? 'opacity-100' : 'opacity-0'} transition-all duration-200`}></div>
          </div>
        </label>
      </div>
      <div className="relative lg:w-[51%] md:w-[80%] w-[90%] lg:aspect-[1920/1000] md:aspect-[1920/1280] aspect-[1920/1400]">
        <div
          ref={mapContainer}
          className="absolute w-full h-full flex justify-center lg:rounded-[30px] md:rounded-3xl rounded-lg"
        />
      </div>
    </div>
  )
};