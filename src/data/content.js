// ===== EDITE AQUI: textos e dados do site =====
// Fotos da galeria: coloque os arquivos em src/assets/images/gallery/ e use o nome em foto('nome.jpg')
const fotos = import.meta.glob('../assets/images/gallery/*.{jpg,jpeg,png,webp}', {eager: true, query: '?url', import: 'default'})
const foto = n => fotos['../assets/images/gallery/' + n] || ''

export const site = {
  name: 'RG Insulfilmes',
  phone: '(41) 99934-2108',             // como aparece escrito no site
  whatsapp: '41999342108',              // DDD + número (pode escrever com ou sem espaços/traços; o 55 é colocado sozinho)
  instagram: 'https://www.instagram.com/rginsulfilmescwb/',
  instagramUser: '@rginsulfilmescwb',
  city: 'Curitiba e região',
  yearsText: '15 anos de experiência',
}
// Limpa o número (tira espaços, parênteses e traços) e garante o 55 na frente, para o link nunca quebrar
const digits = site.whatsapp.replace(/\D/g, '')
export const waNumber = digits.length <= 11 ? '55' + digits : digits
export const waLink = (t = 'Olá! Vim pelo site da RG Insulfilmes e gostaria de um orçamento.') =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(t)}`

export const menu = [['servicos','Serviços'],['simulador','Simulador'],['galeria','Trabalhos'],['processo','Como funciona']]
export const levels = [[5,'Máxima'],[20,'Alta'],[35,'Média'],[50,'Discreta'],[70,'Sutil']]   // [% de luz que passa, privacidadegi]
export const facts = [['15 anos','de experiência no mercado'],['Controle solar','películas para todos os vidros'],['Atendimento rápido','orçamento direto no WhatsApp'],['3 frentes','automotivo, residencial e comercial']]
export const services = [
  ['🚗','Automotivo','Laterais, traseiro, para-brisa e teto solar, com corte alinhado e sem bolhas.'],
  ['🏠','Residencial','Janelas, varandas e portas de vidro com menos calor, mais privacidade e proteção UV.'],
  ['🏢','Empresas e comércio','Fachadas, divisórias e escritórios: conforto, discrição e identidade visual nos vidros.'],
]
export const steps = [
  ['Envie os dados do projeto','Escolha carro, casa ou empresa e informe os detalhes pelo formulário.'],
  ['Receba o orçamento no WhatsApp','Seu pedido chega pronto para mim e respondo com valor e prazo.'],
  ['Agende a aplicação','Você escolhe o melhor dia e horário e recebe o serviço pronto.'],
]
// cat: automotivo | residencial | comercial.  pos: ajuste do enquadramento da foto (opcional).
export const gallery = [
  {cat:'automotivo', legenda:'Camaro vermelho', img:foto('camaro-vermelho.jpg')},
  {cat:'residencial', legenda:'Portão de vidro', img:foto('portao-vidro.jpg')},
  {cat:'comercial', legenda:'Fachada comercial', img:foto('fachada-comercial.jpg')},
  {cat:'automotivo', legenda:'SUV preta', img:foto('suv-preta.jpg')},
  {cat:'residencial', legenda:'Varanda envidraçada', img:foto('varanda.jpg'), pos:'center 60%'},
  {cat:'comercial', legenda:'Divisória · película jateada', img:foto('divisoria-jateada.jpg')},
  {cat:'automotivo', legenda:'Camaro amarelo', img:foto('camaro-amarelo.jpg')},
  {cat:'residencial', legenda:'Porta de vidro', img:foto('porta-vidro.jpg')},
  {cat:'residencial', legenda:'Portão e guarda-corpo de vidro', img:foto('portao-guarda-corpo.jpg'), pos:'center 35%'},
  {cat:'residencial', legenda:'Banheiro · película jateada', img:foto('banheiro-jateado.jpg')},
]