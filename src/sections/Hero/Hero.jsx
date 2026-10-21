import {site,waLink} from '../../data/content.js'
import heroImg from '../../assets/images/hero.jpg'   // <- para trocar a foto do topo, substitua este arquivo
import './Hero.css'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge fade-up">{site.city}</span>
          <h1 className="hero__title fade-up" style={{'--d':'80ms'}}>Película certa para <em>cada vidro</em>.</h1>
          <p className="hero__text fade-up" style={{'--d':'160ms'}}>Aplicação profissional de películas de controle solar para carros, residências e empresas. São 15 anos de experiência cuidando de conforto térmico, privacidade e acabamento.</p>
          <div className="hero__actions fade-up" style={{'--d':'240ms'}}>
            <a href="#orcamento" className="btn btn--brand">Solicitar orçamento</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">Chamar no WhatsApp</a>
          </div>
        </div>
        <div className="hero__media fade-up" style={{'--d':'200ms'}}>
          <div className="hero__photo"><img src={heroImg} alt="Casa moderna com grandes vidros"/></div>
        </div>
      </div>
    </section>
  )
}
