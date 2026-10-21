# RG Insulfilmes — site (React + Vite)

Site de uma página (landing) + formulário de orçamento que gera o pedido pronto para o WhatsApp.
Feito com **HTML + CSS (arquivos separados) + React**. Não usa Tailwind nem biblioteca de estilo: cada parte do site tem o seu `.css`.

---

## 1. Mapa do projeto (o que é cada arquivo)

```
rg-insulfilmes/
├── index.html                  ← HTML base: título da aba, descrição para o Google, fonte (Jost), ícone
├── package.json                ← lista de programas usados e comandos (npm run dev / build)
├── vite.config.js              ← configuração do Vite (normalmente não precisa mexer)
├── public/
│   └── logo.png                ← ícone da aba do navegador (favicon)
└── src/
    ├── main.jsx                ← ponto de entrada: carrega os estilos globais e liga o site na página
    ├── App.jsx                 ← "esqueleto": Cabeçalho + (Início ou Formulário) + Rodapé + botão WhatsApp
    │
    ├── data/
    │   └── content.js          ★ TEXTOS E DADOS: telefone, WhatsApp, Instagram, serviços, passos, fotos da galeria
    │
    ├── styles/                 ← estilos que valem para o site inteiro
    │   ├── variables.css       ★ CORES, fonte e arredondamento (mude o laranja aqui e muda em tudo)
    │   └── base.css            ← reset, botões (.btn), cartões (.card), títulos de seção, animações de rolagem
    │
    ├── assets/images/          ← imagens do site
    │   ├── logo.png            ★ logo da empresa (cabeçalho e rodapé)
    │   ├── hero.jpg            ★ FOTO DO TOPO (para trocar, substitua este arquivo mantendo o nome)
    │   └── gallery/            ★ fotos da galeria "Trabalhos recentes"
    │
    ├── pages/                  ← as duas "telas" do site
    │   ├── Home/Home.jsx       ← tela inicial: a ORDEM das seções (apague uma linha para tirar uma seção)
    │   └── Quote/              ← tela do formulário de orçamento (#orcamento)
    │       ├── Quote.jsx       ★ campos do formulário e o TEXTO da mensagem enviada ao WhatsApp
    │       ├── FormParts.jsx   ← peças do formulário (campo com rótulo, botões de escolha)
    │       └── Quote.css       ← visual do formulário
    │
    ├── sections/               ← cada bloco da tela inicial (cada pasta tem .jsx = conteúdo e .css = visual)
    │   ├── Hero/               ← topo: título, texto, botões e foto
    │   ├── Facts/              ← 4 cartões de destaques (15 anos, controle solar...)
    │   ├── Services/           ← "O que fazemos" (Automotivo, Residencial, Empresas)
    │   ├── Simulator/          ← simulador de película
    │   │   ├── Simulator.jsx       ← controles e lógica
    │   │   ├── SimulatorScene.jsx  ← desenho da cena (cidade ao entardecer / moldura do carro)
    │   │   └── Simulator.css
    │   ├── Gallery/            ← galeria com filtro e ampliação ao clicar
    │   ├── Steps/              ← "Como funciona" (3 passos)
    │   └── CallToAction/       ← chamada final "Vamos cuidar dos seus vidros?"
    │
    ├── components/             ← peças que aparecem em todas as telas
    │   ├── Header/             ← menu do topo (com menu para celular) e barra de progresso
    │   ├── Footer/             ← rodapé (logo, contatos, navegação)
    │   ├── WhatsAppFloat/      ← botão flutuante do WhatsApp
    │   └── Reveal/Reveal.jsx   ← faz os elementos aparecerem suavemente ao rolar a página
    │
    └── hooks/                  ← pequenas funções de apoio
        ├── useHash.js          ← sabe se a pessoa está no site ou no formulário (#orcamento)
        └── useScrollEffects.js ← barra de progresso, efeito de profundidade e menu que escurece ao rolar
```
★ = arquivos que você mais vai editar.

---

## 2. "Quero mudar… → edite onde?"

| Quero mudar | Arquivo |
|---|---|
| Telefone, WhatsApp, Instagram, cidade | `src/data/content.js` (bloco `site`) |
| Textos dos serviços, destaques e passos | `src/data/content.js` |
| Fotos da galeria (trocar, legenda, categoria) | `src/data/content.js` (lista `gallery`) + pasta `src/assets/images/gallery/` |
| Foto do topo | substituir `src/assets/images/hero.jpg` |
| Logo | substituir `src/assets/images/logo.png` (e `public/logo.png`) |
| Cores, fonte, arredondamento | `src/styles/variables.css` |
| Título e texto do topo | `src/sections/Hero/Hero.jsx` |
| Visual de uma seção específica | o `.css` da pasta da seção (ex.: `src/sections/Services/Services.css`) |
| Mensagem que chega no WhatsApp / campos do formulário | `src/pages/Quote/Quote.jsx` |
| Ordem ou remoção de seções | `src/pages/Home/Home.jsx` |
| Título da aba e descrição para o Google | `index.html` |

### Como trocar ou acrescentar uma foto da galeria
1. Reduza a foto para cerca de **1100 px** de largura (para o site abrir rápido no celular).
2. Coloque o arquivo em `src/assets/images/gallery/` (ex.: `suv-branca.jpg`).
3. Em `src/data/content.js`, na lista `gallery`, acrescente uma linha:
   `{cat:'automotivo', legenda:'SUV branca', img:foto('suv-branca.jpg')},`
   (`cat` pode ser `automotivo`, `residencial` ou `comercial`.)

---

## 3. Rodar e publicar

Precisa do [Node.js](https://nodejs.org) instalado.

    npm install        # só na primeira vez
    npm run dev        # abre o site para testar em localhost:5173
    npm run build      # gera a pasta "dist" (site final)

**Publicar na Vercel:** envie esta pasta para um repositório no GitHub, entre em vercel.com,
clique em *Add New → Project*, escolha o repositório e clique em *Deploy*.
A Vercel reconhece o Vite sozinha. Cada alteração enviada ao GitHub atualiza o site.

---

## 4. Observações
- **Foto do topo:** a imagem atual é uma foto de banco de imagens (Unsplash), usada como ambientação. Não é um trabalho da RG; quando tiver uma foto sua que goste, é só substituir `hero.jpg`.
- O formulário **não envia sozinho**: ele abre o WhatsApp com a mensagem pronta e o cliente toca em enviar.
- `npm run build:single` gera um único arquivo HTML (`dist-single/index.html`) só para pré-visualizar.
