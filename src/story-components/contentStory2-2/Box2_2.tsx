import { FC,useRef } from "react";
import Story from "./Story";

const Box2:FC = () =>{
  const fixedRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className='map-2-2' ref={wrapperRef}>
      <Story/>
    </div>
  )
}
export default Box2;