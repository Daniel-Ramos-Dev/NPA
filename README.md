# NPA · Nasci Pra Te Amar · 10 anos

Site memorial dos 10 anos do **Acampamento Jovem Nasci Pra Te Amar**, da Paróquia Santo Amaro de Ipitanga, de 10 a 12 de outubro de 2026.

É um site estático (HTML, CSS e JS puros, sem build), feito para o GitHub Pages.

## Publicar no GitHub Pages
1. No repositório, abra **Settings → Pages**.
2. Em *Source*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O site fica em `https://daniel-ramos-dev.github.io/NPA/`.

## Editar conteúdo
Todo o conteúdo fica em [`assets/js/data.js`](assets/js/data.js):
- `anos`: título, texto, número de jovens, capa e fotos de cada edição.
- `momentos`: fotos sem ano definido (aparecem na galeria em "Todos").
- `videos`: arquivos locais, YouTube (`youtube: "ID"`) ou Google Drive (`drive: "ID"`).
- `programacao`: os três dias do NPA 2026.
- `depoimentos`: os testemunhos do carrossel.

### Fotos
Coloque as fotos em `assets/img/fotos/` (ou em uma subpasta por ano) e liste-as em `fotos` do ano.
Use fotos otimizadas (cerca de 1600px no lado maior, `.webp` ou `.jpg`): o GitHub recomenda repositórios abaixo de 1 GB.
Quando um ano tem fotos, aparece um botão com esse ano no filtro da galeria.

### Vídeos
Vídeos curtos (poucos MB) podem ir em `assets/video/`. Vídeos grandes não: o GitHub recusa arquivos acima de 100 MB.
Publique-os no YouTube (pode ser "não listado") ou deixe-os no Drive com "qualquer pessoa com o link", e informe só o ID.
