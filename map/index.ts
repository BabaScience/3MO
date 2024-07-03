// packages/arcgis/index.ts

// import '@arcgis/core/assets/esri/themes/light/main.css';
import Map from "@arcgis/core/Map.js"
import MapView from '@arcgis/core/views/MapView.js';
import View from '@arcgis/core/views/View.js';

// Types
import { ArcGISInitParams } from './types.js';

/**
 * Initialize a map view and return it
 * @param {ArcGISInitParams} params
 * @returns {Promise<MapView>}
 * ArcGISInitParams {
 *  container: HTMLDivElement;
 *  center: number[];
 *  zoom: number;
 *  basemap?: string;
 * }
 */
export const initializeMap = async ({ container, center, zoom, basemap }: ArcGISInitParams): Promise<View> => {
  const map = new Map({
    basemap: basemap,
  });

  const view = new MapView({
    container,
    map,
    center,
    zoom,
  });

  return view;
};
