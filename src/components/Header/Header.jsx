import {useState,useEffect} from 'react'
import {site,menu} from '../../data/content.js'
import logo from '../../assets/images/logo.png'
import './Header.css'

export default function Header({scrolled,hash}){
  const [open,setOpen]=useState(false)
  useEffect(()=>setOpen(false),[hash])
  return (<>
    <div className="scroll-progress"/>
    <header className={`header ${scrolled||open?'header--solid':''}`}>
      <div className="container header__bar">
        <a href="#" className="header__logo" aria-label={site.name}><img src={logo} alt=""/><span className="header__name">{site.name}</span></a>
        <nav className="header__nav">
          {menu.map(([id,t])=><a key={id} href={'#'+id}>{t}</a>)}
          <a href="#orcamento" className="btn btn--brand btn--sm">Orçamento online</a>
        </nav>
        <button type="button" className="header__toggle" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button>
      </div>
      {open&&<nav className="header__menu container">
        {menu.map(([id,t])=><a key={id} href={'#'+id}>{t}</a>)}
        <a href="#orcamento" className="btn btn--brand">Orçamento online</a>
      </nav>}
    </header>
  </>)
}
