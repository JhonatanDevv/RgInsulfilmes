import {useEffect,useState} from 'react'
// Devolve o "#endereço" atual (usado para alternar entre o site e o formulário)
export default function useHash(){
  const [h,setH]=useState(location.hash)
  useEffect(()=>{const f=()=>setH(location.hash);addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[])
  return h
}
