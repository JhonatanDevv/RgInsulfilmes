import Reveal from '../../components/Reveal/Reveal.jsx'
import './CallToAction.css'
export default function CallToAction(){
  return (
    <section className="cta section"><Reveal className="container cta__box">
      <h2>Vamos cuidar dos seus <em>vidros</em>?</h2>
      <p>Leva menos de 2 minutos e o orçamento chega direto no meu WhatsApp.</p>
      <a href="#orcamento" className="btn btn--brand btn--lg">Solicitar orçamento</a>
    </Reveal></section>
  )
}
