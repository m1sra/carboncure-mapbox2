import mapboxgl, { LngLatLike, Projection  } from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
import React, { useRef, useEffect, useState } from 'react';
import { LayersMap } from './constant/map';

// @ts-ignore
// mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoicmFodWxtaXNyYSIsImEiOiJja3llbmEzYTgwYTBwMm9zMjJhb2Ztc3owIn0.I1MitrjH3q3nUI9LbvKyQQ';
 
const MapScroll: any = ({ location, layer, animation, layerExitSecond, layerEnterSecond }:{location:any, layer:any, animation:boolean, layerExitSecond:any, layerEnterSecond:any}) => {
  const mapContainer:any = useRef(null);
  const map:any = useRef(null);
  const [lng, setLng] = useState(-98.4);
  const [bearing, setBearing] = useState(0);
  const [lat, setLat] = useState(32.6);
  const [zoom, setZoom] = useState(3.53);
  const setLayerVisible = (layers:any) => {
    if(map.current){
      map.current.on('load', () => {
        if( map?.current?.getStyle() && map?.current?.getStyle()?.layers){
              map.current.getStyle().layers.map((value:any) =>{
                map.current.setZIndex(value.id, 200);
              })
            }
            map.current.setZIndex(layers.layer, 200);

      })
      map.current.on('move', () => {
        map.current.setLayoutProperty(layers.layer, 'visibility', 'visible');
        if('457-queens-fill' === layers.layer){
          map.current.setPaintProperty(layers.layer, layers.opacity, 0.3, {duration: 100});
        }
        else{
          map.current.setPaintProperty(layers.layer, layers.opacity, 1, {duration: 1000});
        }
        if(layers.opacity === 'circle-opacity'){
          map.current.setPaintProperty(layers.layer, 'circle-stroke-color', '#f5f5f5', {duration: 100});
        }
    })
    }
    
  }
  const setLayerOpacity = (layers:any) => {
    if (map.current){
      map.current.on('move', () => {
        map.current.setPaintProperty(layers.layer, layers.opacity, 0, {duration: 700});
        if(layers.opacity === 'circle-opacity'){
          map.current.setPaintProperty(layers.layer, 'circle-stroke-color', 'transparent');
        }
      if( map?.current?.getStyle() && map?.current?.getStyle()?.layers){
      }
      })
      // 
    }
    
  }
  const setLayerOpacitySecond = (layers:any) => {
    if (map.current){
      map.current.on('move', () => {
        map.current.setPaintProperty(layers.layer, layers.opacity, 0);
        if(layers.opacity === 'circle-opacity'){
          map.current.setPaintProperty(layers.layer, 'circle-stroke-color', 'transparent');
        }
      if( map?.current?.getStyle() && map?.current?.getStyle()?.layers){
      }
      })
      // 
    }
    
  }
  const setLayerVisibleSecond = (layers:any) => {
    if (map.current){
      map.current.on('load', () => {
        if( map?.current?.getStyle() && map?.current?.getStyle()?.layers){
              map.current.getStyle().layers.map((value:any) => {
                map.current.setZIndex(value.id, 200);
              })
            }
            map.current.setZIndex(layers.layer, 200);

      })
      map.current.on('move', () => {
        map.current.setLayoutProperty(layers.layer, 'visibility', 'visible');
        if('457-queens-fill' === layers.layer){
          map.current.setPaintProperty(layers.layer, layers.opacity, 0.3, {duration: 100});
        }
        else{
          map.current.setPaintProperty(layers.layer, layers.opacity, 1, {duration: 1000});
        }
        if(layers.opacity === 'circle-opacity'){
          map.current.setPaintProperty(layers.layer, 'circle-stroke-color', '#f5f5f5', {duration: 100});
        }
    })
    }
    
  }
  useEffect(() => {
    let zoom = 3.53;
    let center:LngLatLike | undefined =[-97.58748, 38.55337];
    if(location && location.zoom){
      zoom= location.zoom;
    }
    if(location && location.center){
        center= location.center;
    }
    if (map.current) {} else{
        map.current = new mapboxgl.Map({
        projection: {name: "globe"},
        container: mapContainer.current,
        style: 'mapbox://styles/rahulmisra/cld2kjmk9000101k5y7yk3cml',
        center: center ? center : [-97.58748, 38.55337],
        zoom: zoom,
        pitch: 0,
        bearing: 0,
      });
    }
    map.current.resize();
  }, []);
  useEffect(() =>{
    // map.current.setProjection({
    //   name: "globe",
    //   });
    let zoom = 3.53;
    let center:LngLatLike | undefined =[-97.58748, 38.55337];
    if(location && location.zoom){
        zoom= location.zoom;
    }
    if(location && location.center){
        center= location.center;
    }
    if (map.current) {
        // map.current.setProjection('globe');
        map.current.flyTo({
          center: location.center ? location.center : [-97.58748, 38.55337],
          zoom: location.zoom,
          speed: location.speed,
          curve: 1, // curvatura de la animacion
          pitch: location.pitch,
          bearing: location.bearing
        });
        if(animation){
          if(map.current){
            map.current.easeTo({
            center: location.center ? location.center  : [-97.58748, 38.55337],
            speed: 50,
            duration: 40200,
            zoom: location.zoom,
            easing(t:any  ) {
            return t;
            }
          });
          }
          
          map.current.on('load', () => {
            map.current.easeTo({
              center: location.center ? location.center  : [-97.58748, 38.55337],
              speed: 50,
              duration: 40200,
              zoom: location.zoom,
              // bearing: bearing + 180,
              easing(t:any  ) {
              return t;
              }
            });
          });
        }else{
          
        }
      map.current.resize();
      if(layer !== null && layer.onChapterEnter){
          layer.onChapterEnter.forEach(setLayerVisible)
      }
      if(layer !== null && layer.onChapterExit){
        layer.onChapterExit.forEach(setLayerOpacity)
      }
  }
  },[animation, location, layer])
  useEffect(() =>{
    if (map.current) {
      map.current.resize();
      if(layerExitSecond !== null && layerExitSecond){
        layerExitSecond.forEach(setLayerOpacitySecond);

      }
  }
  },[layerExitSecond])
  useEffect(() =>{
    if (map.current) {
      map.current.resize();
      if(layerEnterSecond !== null && layerEnterSecond){
        layerEnterSecond.forEach(setLayerVisibleSecond);

      }
  }
  },[layerEnterSecond])
  useEffect(() => {
    if (!map.current) return;
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('load', () => {
      if(map.current.getStyle().layers){
      }
      LayersMap.map((value:any,index:any )=>{
        map.current.setPaintProperty(value[0], value[1], 0);
        if(value[1] === 'circle-opacity'){
          map.current.setPaintProperty(value[0], 'circle-stroke-color', "transparent");
        }
      })
    });
  },[]);

  return (
  <div>
    <div className="sidebar">
    </div>
      <div className='map-wrapper'></div>
    <div ref={mapContainer} className="map-container" />
  </div>
  );
}
export default MapScroll;
