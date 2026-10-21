import {site,menu,waLink} from '../../data/content.js'
import logo from '../../assets/images/logo.png'
import './Footer.css'
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div><img className="footer__logo" src={logo} alt={site.name}/>
          <p className="footer__about">Películas de controle solar para carros, casas e empresas. {site.yearsText} em {site.city}.</p></div>
        <div><h4>Fale conosco</h4>
          <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram {site.instagramUser}</a></div>
        <div><h4>Navegação</h4>
          {menu.map(([id,t])=><a key={id} href={'#'+id}>{t}</a>)}
          <a href="#orcamento">Solicitar orçamento</a></div>
      </div>
      <p className="container footer__copy">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
    </footer>
  )
}
