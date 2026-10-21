import Reveal from '../../components/Reveal/Reveal.jsx'
import {steps} from '../../data/content.js'
import './Steps.css'
export default function Steps(){
  return (
    <section id="processo" className="section section--panel"><div className="container">
      <Reveal className="section-head"><h2 className="section-title">Como <em>funciona</em></h2><p>Do pedido à aplicação em 3 passos, sem complicação.</p></Reveal>
      <div className="steps__grid">
        {steps.map(([t,d],i)=><Reveal key={t} delay={i*120} className="card steps__card"><span className="steps__num">{i+1}</span><h3>{t}</h3><p>{d}</p></Reveal>)}
      </div>
    </div></section>
  )
}
