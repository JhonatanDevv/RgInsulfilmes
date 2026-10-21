// Desenho da cena do simulador (entardecer na cidade, visto de dentro do carro). Tudo em SVG, sem imagens.
function rng(s){return()=>(s=(s*16807)%2147483647)/2147483647}
function skyline(seed,base,hMin,hMax,wMin,wMax,lit){
  const r=rng(seed),out=[];let x=-10
  while(x<820){const w=wMin+r()*(wMax-wMin),h=hMin+r()*(hMax-hMin),win=[]
    if(lit)for(let y=base-h+12;y<base-10;y+=12)for(let k=x+6;k<x+w-8;k+=10)if(r()<lit)win.push([k,y])
    out.push({x,w,h,win});x+=w+r()*3}
  return out
}
const FAR=skyline(7,335,70,170,30,64,0), NEAR=skyline(23,352,50,140,34,72,.22)

export function Scene(){
  return (<svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" className="sim__svg" aria-hidden="true">
    <defs>
      <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#15224a"/><stop offset=".38" stopColor="#47598e"/><stop offset=".68" stopColor="#d98d6c"/><stop offset="1" stopColor="#ffc880"/></linearGradient>
      <radialGradient id="sn"><stop offset="0" stopColor="#fff3d6"/><stop offset=".22" stopColor="#ffd28c" stopOpacity=".85"/><stop offset="1" stopColor="#ffb25a" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="800" height="480" fill="url(#sk)"/>
    <circle cx="420" cy="310" r="260" fill="url(#sn)"/>
    {FAR.map((b,i)=><rect key={i} x={b.x} y={335-b.h} width={b.w} height={b.h+20} fill="#2b3858" opacity=".95"/>)}
    {NEAR.map((b,i)=><g key={i}><rect x={b.x} y={352-b.h} width={b.w} height={b.h+20} fill="#0a0f1a"/>
      {b.win.map(([x,y],j)=><rect key={j} x={x} y={y} width="3" height="5" fill="#ffd9a0" opacity={.45+(j%4)*.14}/>)}</g>)}
    <rect y="352" width="800" height="130" fill="#06080f"/>
    <rect y="352" width="800" height="1.5" fill="#f6b56c" opacity=".35"/>
  </svg>)
}
// Moldura interna do carro: coluna, teto, painel e retrovisor
export const Frame=()=>(
  <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" className="sim__svg" aria-hidden="true" style={{pointerEvents:'none'}}>
    <path d="M0 0H800V36H0Z M0 0H105L66 480H0Z M0 424H800V480H0Z" fill="#06080c"/>
    <rect x="708" y="46" width="92" height="58" rx="16" fill="#0a0d13"/>
    <path d="M0 424H800" stroke="#222a38" strokeWidth="2"/>
  </svg>)
