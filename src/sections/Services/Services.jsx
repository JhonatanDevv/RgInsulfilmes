import Reveal from '../../components/Reveal/Reveal.jsx'
import {services} from '../../data/content.js'
import './Services.css'
export default function Services(){
  return (
    <section id="servicos" className="section"><div className="container">
      <Reveal className="section-head"><h2 className="section-title">O que <em>fazemos</em></h2>
        <p>Cada vidro recebe a película indicada, de acordo com o uso e as normas aplicáveis.</p></Reveal>
      <div className="services__grid">
        {services.map(([icon,t,d],i)=><Reveal key={t} delay={i*120} className="card services__card">
          <span className="services__icon">{icon}</span><h3>{t}</h3><p>{d}</p></Reveal>)}
      </div>
    </div></section>
  )
}
