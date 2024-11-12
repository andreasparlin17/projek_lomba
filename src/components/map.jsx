import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const bandung = { lng: 107.604840, lat: -6.914397 };
  const zoom = 14;
  maptilersdk.config.apiKey = 'KP8XxRPzOszUwLbNmQud';

  useEffect(() => {
    if (map.current) return; 

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [bandung.lng, bandung.lat],
      zoom: zoom
    });

  }, [bandung.lng, bandung.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}