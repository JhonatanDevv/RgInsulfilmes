import {useState} from 'react'
import Reveal from '../../components/Reveal/Reveal.jsx'
import {levels} from '../../data/content.js'
import {Scene,Frame} from './SimulatorScene.jsx'
import './Simulator.css'

const Meter=({label,v,txt})=>(
  <div><div className="meter__top"><span>{label}</span><b>{txt}</b></div><div className="meter__bar"><i style={{width:v+'%'}}/></div></div>)

export default function Simulator(){
  const [p,setP]=useState(20),[pos,setPos]=useState(50)    // p = nível escolhido, pos = posição da linha de comparação
  const priv=levels.find(l=>l[0]===p)[1]
  return (
    <section id="simulador" className="section section--panel"><div className="container">
      <Reveal className="section-head"><h2 className="section-title">Simulador de <em>película</em></h2>
        <p>Arraste a imagem e veja na hora como cada nível de película muda a luz e a privacidade.</p></Reveal>
      <Reveal className="sim">
        <div className="card sim__panel">
          <div>
            <p className="sim__label">Luz visível</p>
            <div className="sim__readout"><b>{p}</b><span>%</span></div>
            <p className="sim__hint">da luz atravessa o vidro com a película aplicada.</p>
          </div>
          <div className="sim__levels" role="group" aria-label="Nível de película">
            {levels.map(([v])=><button key={v} type="button" aria-pressed={p===v} onClick={()=>setP(v)}>{v}%</button>)}
          </div>
          <div className="sim__meters"><Meter label="Luz visível" v={p} txt={p+'%'}/><Meter label="Privacidade" v={100-p} txt={priv}/></div>
          <p className="sim__note">Simulação ilustrativa: o resultado real varia conforme a película e o vidro. Em carros existem limites legais de transparência; indicamos o nível adequado ao seu caso.</p>
        </div>

        <div className="sim__scene">
          <Scene/>
          <div className="sim__tint" style={{background:`rgba(6,8,12,${(100-p)*.0095})`,clipPath:`inset(0 0 0 ${pos}%)`}}/>
          <Frame/>
          <div className="sim__divider" style={{left:`${pos}%`}}><span className="sim__handle">⇆</span></div>
          <input className="sim__range" type="range" min="0" max="100" value={pos} onChange={e=>setPos(+e.target.value)} aria-label="Comparar sem película e com película"/>
          <span className="sim__tag sim__tag--left">Sem película</span>
          <span className="sim__tag sim__tag--right">Com película · {p}%</span>
        </div>
      </Reveal>
    </div></section>
  )
}
