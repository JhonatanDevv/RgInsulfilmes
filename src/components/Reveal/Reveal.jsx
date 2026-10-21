import {useEffect,useRef,useState} from 'react'
// Envolve qualquer elemento: ele aparece suavemente quando entra na tela. (estilo em styles/base.css)
export default function Reveal({as:T='div',delay=0,className='',style,children,...p}){
  const r=useRef(null),[on,set]=useState(false)
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){set(true);io.disconnect()}},{threshold:.15})
    io.observe(r.current);return()=>io.disconnect()},[])
  return <T ref={r} className={`reveal ${on?'in':''} ${className}`} style={{'--d':delay+'ms',...style}} {...p}>{children}</T>
}
