import {useEffect,useState} from 'react'
import Reveal from '../../components/Reveal/Reveal.jsx'
import {site,gallery} from '../../data/content.js'
import './Gallery.css'

const CATS=['todos','automotivo','residencial','comercial']
export default function Gallery(){
  const [cat,setCat]=useState('todos'),[big,setBig]=useState(null)
  const shown=cat==='todos'?gallery:gallery.filter(g=>g.cat===cat)
  useEffect(()=>{const f=e=>e.key==='Escape'&&setBig(null);addEventListener('keydown',f);return()=>removeEventListener('keydown',f)},[])
  return (<>
    <section id="galeria" className="section"><div className="container">
      <Reveal className="gallery__head">
        <div><h2 className="section-title">Trabalhos <em>recentes</em></h2>
          <p>Veja mais no Instagram <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramUser}</a></p></div>
        <div className="gallery__filters">{CATS.map(c=><button key={c} type="button" aria-pressed={cat===c} onClick={()=>setCat(c)} className="chip chip--pill">{c}</button>)}</div>
      </Reveal>
      <div className="gallery__grid">
        {shown.map((g,i)=>(
          <Reveal key={g.legenda} delay={(i%3)*100} className="gallery__tile" role="button" tabIndex={0}
            onClick={()=>setBig(g)} onKeyDown={e=>e.key==='Enter'&&setBig(g)}>
            <img src={g.img} alt={g.legenda} loading="lazy" style={{objectPosition:g.pos}}/>
            <span className="gallery__caption">{g.legenda}</span>
          </Reveal>))}
      </div>
    </div></section>
    {big&&<div className="lightbox" role="dialog" aria-label={big.legenda} onClick={()=>setBig(null)}>
      <button type="button" className="lightbox__close" aria-label="Fechar">✕</button>
      <img src={big.img} alt={big.legenda}/></div>}
  </>)
}
