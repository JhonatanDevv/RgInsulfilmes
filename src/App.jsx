// Raiz do site: junta cabeçalho, página (início ou formulário), rodapé e botão de WhatsApp.
import {useEffect} from 'react'
import useHash from './hooks/useHash.js'
import useScrollEffects from './hooks/useScrollEffects.js'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat.jsx'
import Home from './pages/Home/Home.jsx'
import Quote from './pages/Quote/Quote.jsx'

export default function App(){
  const hash=useHash(), scrolled=useScrollEffects(), isQuote=hash==='#orcamento'
  // formulário abre no topo; links internos (#servicos...) rolam até a seção
  useEffect(()=>{ if(isQuote||hash.length<2) scrollTo(0,0); else requestAnimationFrame(()=>document.querySelector(hash)?.scrollIntoView()) },[hash])
  return (<>
    <Header scrolled={scrolled} hash={hash}/>
    {isQuote?<Quote/>:<Home/>}
    {!isQuote&&<WhatsAppFloat/>}
    <Footer/>
  </>)
}
