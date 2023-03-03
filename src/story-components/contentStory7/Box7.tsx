import { FC,useRef } from "react";
import Story from "./Story";
import Story2 from "./Story2";

const Box7:FC = () =>{
  const fixedRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  setTimeout(() =>{
    if (fixedRef.current && wrapperRef.current ) {
      const fixedRect = fixedRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      if (fixedRect.top < wrapperRect.top || fixedRect.bottom > wrapperRect.bottom  || fixedRect.left < wrapperRect.left || fixedRect.right > wrapperRect.right) {
        fixedRef.current.style.opacity = '0';
      } else {
        fixedRef.current.style.opacity = '1';
      }
    }
  },100)
  return (
    <div className='map-7' ref={wrapperRef}>
      <Story/>
      <Story2  fixedRef={fixedRef}/>
    </div>
  )
}
export default Box7;