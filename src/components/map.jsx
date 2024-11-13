import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const bandung = { lng: 107.604840, lat: -6.914397 };
  const zoom = 14;
  maptilersdk.config.apiKey = "KP8XxRPzOszUwLbNmQud";

  useEffect(() => {
    if (map.current) return;

    const geoDataUrl = "https://api.maptiler.com/data/48b467c0-3be9-4a15-9328-04fc78a6f462/features.json?key=7LnyUGyoYYqDbwcsO9ec";

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.DATAVIZ.DARK,
      center: [bandung.lng, bandung.lat],
      zoom: zoom
    });

    map.current.on("load", () => {
      fetch(geoDataUrl)
        .then(response => response.json())
        .then(geoData => {
          map.current.addSource("geoData", {
            type: "geojson",
            data: geoData
          });

          map.current.addLayer({
            id: "lineLayer",
            type: "line",
            source: "geoData",
            paint: {
              "line-color": "#FF0000",
              "line-width": 3
            }
          });

          map.current.addLayer({
            id: "pointLayer",
            type: "circle",
            source: "geoData",
            paint: {
              "circle-radius": 6,
              "circle-color": "#00FF00"
            }
          });

          let popup = new maptilersdk.Popup({
            closeButton: false,
            closeOnClick: false
          });

          map.current.on("mouseenter", "pointLayer", (e) => {
            map.current.getCanvas().style.cursor = "pointer";
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.name || "Informasi Titik";

            popup
              .setLngLat(coordinates)
              .setHTML(`<strong>${description}</strong>`)
              .addTo(map.current);
          });

          map.current.on("mouseleave", "pointLayer", () => {
            map.current.getCanvas().style.cursor = "";
            popup.remove();
          });

          map.current.on("mouseenter", "lineLayer", (e) => {
            map.current.getCanvas().style.cursor = "pointer";
            const coordinates = e.lngLat;
            const description = e.features[0].properties.name || "Informasi Jalan";

            popup
              .setLngLat(coordinates)
              .setHTML(`<strong>${description}</strong>`)
              .addTo(map.current);
          });

          map.current.on("mouseleave", "lineLayer", () => {
            map.current.getCanvas().style.cursor = "";
            popup.remove();
          });
        })
        .catch(error => console.log('Error loading GeoJSON data:', error));
    });

  }, [bandung.lng, bandung.lat, zoom]);

  return (
    <div className="flex justify-center items-center h-screen w-full text-black">
      <div className="relative w-[85%] aspect-[1920/1000]">
        <div ref={mapContainer} className="absolute w-full h-full flex justify-center rounded-[50px]" />
      </div>
    </div>

  );
}
