// Peças reutilizáveis do formulário: botões de escolha (Chips) e campo com rótulo (Field)
export const Chips=({opts,val,set,multi})=>(
  <div className="chips">{opts.map(o=>{const on=multi?val.includes(o):val===o
    return <button type="button" key={o} aria-pressed={on} className="chip" onClick={()=>set(multi?(on?val.filter(x=>x!==o):[...val,o]):o)}>{o}</button>})}</div>)

export const Field=({id,label,err,group,children})=>(
  <div>{group?<p className="field__label">{label}</p>:<label htmlFor={id} className="field__label">{label}</label>}
    {children}{err&&<p role="alert" className="field__error">{err}</p>}</div>)
