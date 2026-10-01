# NPA · Nasci Pra Te Amar · 10 anos

Site memorial dos 10 anos do Acampamento Católico **NPA**, de 10 a 12 de outubro de 2026.

É um site estático (HTML, CSS e JS puros, sem build), feito para o GitHub Pages.

## Publicar no GitHub Pages
1. No repositório, abra **Settings → Pages**.
2. Em *Source*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O site fica em `https://daniel-ramos-dev.github.io/NPA/`.

## Editar conteúdo
Todo o conteúdo fica em [`assets/js/data.js`](assets/js/data.js):
- `anos`: título, texto, foto de capa e lista de fotos de cada edição.
- `videos`: vídeos do YouTube (`youtube: "ID"`) ou do Google Drive (`drive: "ID"`).
- `depoimentos`: os testemunhos que aparecem no carrossel.

### Fotos
Coloque as fotos em `assets/img/anos/<ano>/` (ex.: `assets/img/anos/2019/01.webp`) e liste-as em `fotos`.
Use fotos otimizadas (cerca de 1600px no lado maior, `.webp` ou `.jpg`): o GitHub recomenda repositórios abaixo de 1 GB.

### Vídeos
Não suba vídeos para o repositório: o GitHub recusa arquivos acima de 100 MB.
Publique os vídeos no YouTube (pode ser "não listado") ou deixe-os no Drive com "qualquer pessoa com o link", e informe só o ID.
