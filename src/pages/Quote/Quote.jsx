// Página do formulário de orçamento (#orcamento). Monta a mensagem e abre o WhatsApp.
import {useState} from 'react'
import {site} from '../../data/content.js'
import {Chips,Field} from './FormParts.jsx'
import './Quote.css'

const mask=v=>{const d=v.replace(/\D/g,'').slice(0,11),c=d.length>10?7:6
  return d.length>6?`(${d.slice(0,2)}) ${d.slice(2,c)}-${d.slice(c)}`:d.length>2?`(${d.slice(0,2)}) ${d.slice(2)}`:d}

export default function Quote(){
  const [d,setD]=useState({tipo:'Carro',nome:'',tel:'',cidade:'',marca:'',modelo:'',ano:'',carroceria:'Sedan',vidros:['Laterais','Traseiro'],
    nivel:'Quero indicação',locais:[],area:'',objetivo:[],remover:'Não, vidros limpos',obs:''})
  const [er,setEr]=useState({}),[msg,setMsg]=useState('')
  const set=k=>v=>setD(p=>({...p,[k]:v}))
  const inp=(k,x={})=>({id:k,className:'field__input',value:d[k],onChange:e=>set(k)(e.target.value),...x})
  const car=d.tipo==='Carro'

  const submit=e=>{
    e.preventDefault()
    const x={}
    if(d.nome.trim().length<2)x.nome='Informe seu nome.'
    if(d.tel.replace(/\D/g,'').length<10)x.tel='Informe DDD + número.'
    if(car){
      if(!d.marca.trim())x.marca='Informe a marca.'
      if(!d.modelo.trim())x.modelo='Informe o modelo.'
      if(!/^(19|20)\d{2}$/.test(d.ano))x.ano='Use 4 dígitos, ex.: 2023.'
      if(!d.vidros.length)x.vidros='Escolha pelo menos um vidro.'
    }else if(!d.locais.length)x.locais='Escolha pelo menos um local.'
    setEr(x);if(Object.keys(x).length)return
    // ---- texto que chega no seu WhatsApp ----
    const L=[`*NOVO PEDIDO DE ORÇAMENTO - ${site.name.toUpperCase()}*`,'',`Serviço: ${d.tipo}`,`Cliente: ${d.nome}`,`WhatsApp: ${d.tel}`]
    if(d.cidade)L.push(`Local: ${d.cidade}`)
    L.push('')
    if(car)L.push(`Carro: ${d.marca} ${d.modelo} (${d.ano})`,`Tipo: ${d.carroceria}`,`Vidros: ${d.vidros.join(', ')}`,`Película: ${d.nivel}`)
    else{L.push(`Aplicar em: ${d.locais.join(', ')}`);if(d.area)L.push(`Área aprox.: ${d.area} m²`);L.push(`Objetivo: ${d.objetivo.length?d.objetivo.join(', '):'Quero indicação'}`)}
    L.push(`Película antiga: ${d.remover}`);if(d.obs)L.push(`Obs: ${d.obs}`)
    L.push('',`Enviado em ${new Date().toLocaleString('pt-BR')}`)
    setMsg(L.join('\n'));scrollTo(0,0)
  }

  return (
    <div className="quote">
      <a href="#" className="quote__back">← Voltar para o site</a>
      <div className="card quote__card">
        <h1 className="quote__title">Solicitar orçamento</h1>
        {!msg&&<p className="quote__sub">Escolha o tipo de serviço e preencha os dados. Você confere tudo antes de enviar.</p>}

        {msg?(
          <div className="report">
            <span className="report__check">✓</span>
            <h2>Orçamento pronto!</h2>
            <pre className="report__preview">{msg}</pre>
            <a className="btn btn--whatsapp btn--block btn--lg" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`}>Enviar no WhatsApp ➔</a>
            <button type="button" className="report__edit" onClick={()=>setMsg('')}>← Corrigir dados</button>
          </div>
        ):(
          <form className="form" onSubmit={submit} noValidate>
            <Field group label="O que você quer filmar?">
              <div className="type-picker">{['Carro','Residência','Empresa'].map(t=>
                <button type="button" key={t} aria-pressed={d.tipo===t} onClick={()=>set('tipo')(t)} className="chip">{t}</button>)}</div></Field>
            <div className="form__grid">
              <Field id="nome" label="Seu nome *" err={er.nome}><input {...inp('nome',{autoComplete:'name',placeholder:'Como podemos te chamar?'})}/></Field>
              <Field id="tel" label="Seu WhatsApp *" err={er.tel}><input {...inp('tel',{type:'tel',inputMode:'tel',autoComplete:'tel',placeholder:'(41) 99999-9999',onChange:e=>set('tel')(mask(e.target.value))})}/></Field>
            </div>
            <Field id="cidade" label="Cidade / bairro"><input {...inp('cidade',{placeholder:'Ex.: Curitiba, Batel'})}/></Field>

            {car?(
              <div className="form__block">
                <div className="form__grid">
                  <Field id="marca" label="Marca *" err={er.marca}><input {...inp('marca',{placeholder:'Ex.: Honda'})}/></Field>
                  <Field id="modelo" label="Modelo *" err={er.modelo}><input {...inp('modelo',{placeholder:'Ex.: Civic'})}/></Field>
                  <Field id="ano" label="Ano *" err={er.ano}><input {...inp('ano',{inputMode:'numeric',maxLength:4,placeholder:'2023'})}/></Field>
                  <Field id="carroceria" label="Tipo do carro"><select {...inp('carroceria')}>{['Hatch','Sedan','SUV','Picape','Van / utilitário','Outro'].map(o=><option key={o}>{o}</option>)}</select></Field>
                </div>
                <Field group label="Vidros que deseja filmar" err={er.vidros}><Chips multi opts={['Laterais','Traseiro','Para-brisa','Teto solar']} val={d.vidros} set={set('vidros')}/></Field>
                <Field group label="Nível de película"><Chips opts={['5%','20%','35%','50%','70%','Quero indicação']} val={d.nivel} set={set('nivel')}/></Field>
              </div>
            ):(
              <div className="form__block">
                <Field group label="Onde será aplicada?" err={er.locais}><Chips multi opts={['Janelas','Varanda','Portas de vidro','Divisórias','Fachada','Outro']} val={d.locais} set={set('locais')}/></Field>
                <Field id="area" label="Área aproximada de vidro (m²), se souber"><input {...inp('area',{inputMode:'decimal',placeholder:'Ex.: 12'})}/></Field>
                <Field group label="O que você quer resolver?"><Chips multi opts={['Reduzir calor','Privacidade','Proteção UV','Segurança (anti-estilhaço)','Decorativo / jateado']} val={d.objetivo} set={set('objetivo')}/></Field>
              </div>
            )}
            <div className="form__block"><Field group label="Já tem película instalada no vidro?"><Chips opts={['Não, vidros limpos','Sim, precisa remover a antiga']} val={d.remover} set={set('remover')}/></Field></div>
            <Field id="obs" label="Observações (opcional)"><textarea {...inp('obs',{placeholder:'Horário preferido, dúvidas, etc.'})}/></Field>
            <button type="submit" className="btn btn--brand btn--block">Gerar meu orçamento</button>
          </form>
        )}
      </div>
    </div>)
}
