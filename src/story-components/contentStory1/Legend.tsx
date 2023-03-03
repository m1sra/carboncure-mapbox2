import { FC,useRef,useEffect } from "react";

const Legend = ({fixedRef}:{fixedRef: React.RefObject<HTMLDivElement>}) =>{
  return (
      <div className="legend-0" ref={fixedRef}>
        <p>
          CarbonCure's Footprint
        </p>
        <p style={{marginBottom:'4px'}}><span className="circle"/><span className="text">Concrete Plant</span></p>
        <p className="importan">Data: <span>CarbonCure and </span><a  href="https://www.openstreetmap.org/#map=4/38.01/-95.84" target="_blank">OSM</a></p>
      </div>
    
  )
}
export default Legend;