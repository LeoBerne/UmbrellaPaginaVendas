# Umbrella — Página de Vendas (Warm & Organic Modern)

Este repositório contém o site institucional e página de vendas da **Umbrella Soluções Digitais**, sediada em Teresina - PI. O site foi projetado com um design moderno escuro acolhedor (Warm Dark), alta performance (Vanilla HTML/CSS) e com foco em acessibilidade e SEO.

## 📁 Estrutura do Projeto

O projeto é mantido de forma estática para garantir velocidade de carregamento máxima:
- `index.html`: Estrutura HTML principal, semântica, meta tags completas para SEO/Redes Sociais, marcações de acessibilidade e script leve de interatividade.
- `style.css`: Folha de estilos contendo o sistema de design baseado em grid de 8px, cores personalizadas (carvão, terracotta, verde floresta), tipografia fluida e animações de entrada física.

---

## 🚀 Como Colocar no Ar (Deploy)

Como o site é totalmente estático, ele pode ser hospedado de forma **100% gratuita** e com performance global. Aqui estão os três métodos recomendados:

### Opção 1: Vercel (Recomendado)
A Vercel é ideal para deploys instantâneos diretamente do GitHub ou através da ferramenta de linha de comando.
1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Clique em **"Add New"** > **"Project"**.
3. Importe este repositório do GitHub.
4. Clique em **"Deploy"**.
5. O site estará no ar em poucos segundos com SSL (HTTPS) automático.

### Opção 2: Netlify
Muito similar à Vercel, focada em sites estáticos e extremamente rápida.
1. Crie uma conta gratuita em [netlify.com](https://www.netlify.com).
2. Clique em **"Add new site"** > **"Import an existing project"**.
3. Conecte com o GitHub e selecione este repositório.
4. Clique em **"Deploy site"**.

### Opção 3: GitHub Pages
Se você preferir manter tudo sob a infraestrutura do próprio GitHub:
1. Vá até as **Settings** (Configurações) deste repositório no GitHub.
2. No menu lateral esquerdo, clique em **"Pages"**.
3. Na seção "Build and deployment", selecione a branch `main` e a pasta `/` (root).
4. Clique em **"Save"**.
5. O GitHub disponibilizará um link público em alguns minutos (ex: `seu-usuario.github.io/UmbrellaPaginaVendas`).

---

## 🎨 Como Atualizar a Imagem da Marca (Logo/Visual)

O elemento da marca visual está estruturado na Hero com o ID `#marca-umbrella-box` e na seção Sobre com o ID `#brand-purpose-box`.
Quando você tiver o arquivo final da imagem da sua marca (como `logo.svg` ou `brand-visual.png`):
1. Salve o arquivo de imagem dentro do projeto (ex: em uma nova pasta `assets/`).
2. No arquivo `index.html` (linha 57), substitua o bloco do ícone pelo elemento de imagem correspondente:
```html
<!-- Exemplo de substituição -->
<div class="brand-shield" id="marca-umbrella-box">
  <img src="assets/logo.svg" alt="Umbrella" style="width: 80%; height: auto;">
</div>
```

---

## 🛠️ Tecnologias Utilizadas
- **HTML5** Semântico para acessibilidade e melhor indexação de SEO.
- **CSS3** Avançado (Custom Variables, CSS Grid, Flexbox, Keyframe Animations).
- **Tabler Icons** para a iconografia leve de carregamento assíncrono.
