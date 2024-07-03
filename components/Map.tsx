'use client'
// apps/arcgis-app/components/Map.tsx
import { useEffect, useRef } from 'react';

// types
import { ArcGISInitParams } from '../map/types';
import { initializeMap } from '../map';

import View from '@arcgis/core/views/View.js';



const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let view: View | null = null
    const mapParams: ArcGISInitParams = {
      container: mapRef.current as HTMLDivElement,
      center: [12.49, 41.9],
      zoom: 7,
      basemap: 'gray-vector'
    };

    initializeMap(mapParams).then((v) => {
      view = v;
    });
    
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
};

export default MapComponent;
