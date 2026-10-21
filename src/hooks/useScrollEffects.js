import {useEffect,useState} from 'react'
// Atualiza --y (profundidade do topo) e --p (barra de progresso) e avisa quando a página já foi rolada
export default function useScrollEffects(){
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{
    const f=()=>{const y=scrollY,m=document.documentElement.scrollHeight-innerHeight,s=document.documentElement.style
      s.setProperty('--y',Math.min(y,600));s.setProperty('--p',(m>0?y/m*100:0)+'%');setScrolled(y>40)}
    f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)
  },[])
  return scrolled
}
