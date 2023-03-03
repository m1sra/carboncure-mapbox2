import React, { useState, createElement } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { config } from '../config/config';
import Map from './MapScroll';
import MapScroll from './MapScroll';


const ScrollApp = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [layer, setLayer] = useState(null);
  const [layerExitSecond, setLayerExitSecond] = useState(null);
  const [layerEnterSecond, setLayerEnterSecond] = useState(null);
  const [state, setState] = useState({
    center: [-121.85807, 37.33818],
    zoom: 2.53,
    pitch: 0.00,
    bearing: 0.00
  });
  const [animation, setAnimation]= useState(true);
  const onStepEnter = (e) => {
    setState(e.data.location);
    setCurrentStepIndex(e.data.numbreChapter);
    setAnimation(e.data.rotateAnimation)
    if(e.data.onChapterEnter){
      setLayer({onChapterEnter:e.data.onChapterEnter, onChapterExit:e.data.onChapterExit})
    }else{
      setLayer(null);
    }
  };
  const onStepExitSecond = (e) => {
    if(e.data.onChapterEnterSecond.length > 0){
      e.data.onChapterEnterSecond.forEach((d, i) => {
        if(d.time < (parseInt(e.progress * 10) + 1)){
          setLayerEnterSecond([d]);
        }else{
          setLayerEnterSecond(null);
        }
      })
    }
    if(e.data.onChapterExitSecond.length > 0){
      e.data.onChapterExitSecond.forEach((d, i) => {
        if(d.time < (parseInt(e.progress * 10) + 1)){
          setLayerExitSecond([d]);
        }else{
          setLayerExitSecond(null);
        }
      })
    }
  };

  return (
    <div >
      <div className='text-logo'>
        <img src='icons/logo.svg' style={Number(currentStepIndex) !== 1 ? {display:'none'}: {zIndex:'3'}} alt="logo" className='logo'></img>
        <p className='foot-page' style={Number(currentStepIndex) !== 1 ? {display:'none'}: {zIndex:'3'}}>Copyright, 2023: CarbonCure</p>
      </div>
      <figure className={'sticky'}>
        <MapScroll location={state} layer={layer} animation={animation} layerExitSecond={layerExitSecond} layerEnterSecond={layerEnterSecond}/>
      </figure>
      
      <div className='borde-color' style={{width:'100%'}}>
        <div className='borde' style={{width:`${currentStepIndex * 7.142857142857143}%`}}>
      </div>
      </div>
      <Scrollama offset={0.8} onStepEnter={(e)=>{onStepEnter(e)}} onStepProgress={(e)=>{onStepExitSecond(e)}}>
        {config.chapters.map((info, stepIndex) => (
          <Step data={info} key={stepIndex}>
            <div
              style={{
                // margin: '50vh 0',
                opacity: Number(currentStepIndex) === stepIndex ? 0.2 : 1,
              }}
            >
              {info.component ?
								createElement(info.component) :
								(
									<div/>
								)}
            </div>
          </Step>
        ))}

      </Scrollama>
    </div>
  );
};

export default ScrollApp;