// Página inicial: a ordem das seções aqui é a ordem em que aparecem no site. Para tirar uma seção, apague a linha.
import Hero from '../../sections/Hero/Hero.jsx'
import Facts from '../../sections/Facts/Facts.jsx'
import Services from '../../sections/Services/Services.jsx'
import Simulator from '../../sections/Simulator/Simulator.jsx'
import Gallery from '../../sections/Gallery/Gallery.jsx'
import Steps from '../../sections/Steps/Steps.jsx'
import CallToAction from '../../sections/CallToAction/CallToAction.jsx'

export default function Home(){
  return (<main>
    <Hero/><Facts/><Services/><Simulator/><Gallery/><Steps/><CallToAction/>
  </main>)
}
