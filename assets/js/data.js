/* =========================================================
   NPA — Nasci Pra Te Amar · Dados do memorial
   Edite este arquivo para atualizar textos, anos, fotos e vídeos.
   Fontes: Projeto Oficial de Evangelização 2026 e a revista
   "Paróquia Santo Amaro de Ipitanga" (10 anos).
   ========================================================= */

const F = "assets/img/fotos/";

window.NPA = {
  // Início do acampamento (horário de Brasília). A contagem regressiva usa esta data.
  eventoInicio: "2026-10-10T06:00:00-03:00",
  eventoFim: "2026-10-12T23:59:59-03:00",
  // Mensagem da abertura depois que o acampamento terminar (pós-NPA)
  posEvento: { titulo: "Em breve, novidades!", texto: "Vem aí o pós-NPA. Fiquem atentos às nossas redes sociais 💜" },
  instagram: "", // ex.: "npa.ipitanga" (sem @). Se preenchido, aparece um botão para o perfil.
  // Anos cujas fotos aparecem com o ano marcado e ganham botão no filtro da galeria.
  // As fotos dos outros anos aparecem em "Todos", sem ano.
  anosComRotulo: [2017, 2025],
  paroquia: "Paróquia Santo Amaro de Ipitanga",
  totalJovens: 792,

  // Fotos que aparecem, em sequência, no fundo da abertura
  fundoHero: [F + "p022-039.webp", F + "p027-063.webp", F + "p019-027.webp", F + "p024-049.webp", F + "p021-034.webp", F + "p026-059.webp"],

  // Uma entrada por edição. "fotos": caminhos das imagens daquele ano.
  // "capa": foto do card na linha do tempo (se vazio, usa a 1ª foto).
  anos: [
    { ano: 2017, participantes: 75,  titulo: "O começo de tudo", texto: "Cinco jovens disseram “sim”. Nasce o primeiro Nasci Pra Te Amar, inspirado num acampamento da Comunidade Shalom.", capa: "", fotos: [] },
    { ano: 2018, participantes: 84,  titulo: "A semente cresce", texto: "O sonho criou raízes e novos jovens chegaram para viver o encontro com o amor de Deus.", capa: "", fotos: [] },
    { ano: 2019, participantes: 88,  titulo: "Família", texto: "Amizades que viraram família e corações que descobriram que são amados.", capa: "", fotos: [] },
    { ano: 2020, participantes: 66,  titulo: "Fé que não para", texto: "Mesmo num ano difícil para o mundo, o amor de Deus reuniu a juventude.", capa: "", fotos: [] },
    { ano: 2021, participantes: 124, titulo: "A maior edição", texto: "124 jovens: o recorde de participantes e muitos testemunhos de vidas transformadas.", capa: "", fotos: [] },
    { ano: 2022, participantes: 77,  titulo: "Um novo começo", texto: "Para muitos, o primeiro acampamento e o início de uma caminhada de fé.", capa: "", fotos: [] },
    { ano: 2023, participantes: 79,  titulo: "Divisor de águas", texto: "Encontros com a misericórdia de Deus que mudaram o rumo de muitas vidas.", capa: "", fotos: [] },
    { ano: 2024, participantes: 96,  titulo: "Enviados", texto: "Jovens que um dia foram campistas, agora servos, levando adiante o mesmo amor.", capa: "", fotos: [] },
    { ano: 2025, participantes: 103, titulo: "Rumo aos 10", texto: "Mais de cem jovens preparando o caminho para a grande celebração da década.", capa: "", fotos: [] },
    { ano: 2026, participantes: null, titulo: "10 anos · Memorial", texto: "10, 11 e 12 de outubro: celebramos uma década de graça, amor e transformação.", capa: "", fotos: [], destaque: true }
  ],

  // Fotos sem ano definido (vindas da revista dos 10 anos).
  // Para mover uma foto para um ano, tire daqui e coloque em "fotos" do ano certo.
  // Grupos da seção "Registros" da revista, pela cor da camisa:
  //   p019 verde · p020 amarela/preta · p021 branca · p022 azul e rosa
  //   p023 máscaras · p024 rosa · p025 amarela · p026 verde-água
  momentos: [
    "p022-039", "p019-027", "p006-003", "p009-008", "p020-032", "p003-001",
    "p027-063", "p021-034", "p008-007", "p006-005", "p024-049", "p019-024",
    "p010-009", "p023-044", "p020-028", "p007-006", "p026-059", "p021-033",
    "p004-002", "p019-026", "p025-054", "p020-029", "p014-015", "p021-036",
    "p019-023", "p020-030", "p026-060", "p021-035", "p019-025", "p020-031",
    "p026-061", "p021-037", "p018-022", "p026-062"
  ].map((n) => F + n + ".webp"),

  // Vídeos. Tipos aceitos:
  //   { titulo, ano, arquivo: "assets/video/x.mp4", capa: "...jpg" }
  //   { titulo, ano, youtube: "ID_DO_VIDEO" }
  //   { titulo, ano, drive: "ID_DO_ARQUIVO" }   (arquivo do Drive aberto para "qualquer pessoa com o link")
  videos: [
    { titulo: "A alegria do NPA na igreja", ano: null, arquivo: "assets/video/npa-igreja.mp4", capa: "assets/video/npa-igreja.jpg" }
  ],

  // Programação 2026 (Projeto NPA)
  programacao: [
    { dia: "Sábado", data: "10/10", nome: "Acolhida e despertar", itens: ["Laudes e saída da igreja", "Dinâmicas de integração", "Pregações e gincana", "Oficinas: feridas e relacionamentos, ansiedade e depressão, identidade e propósito, distrações e vícios", "Momento mariano", "Geração Flashback"] },
    { dia: "Domingo", data: "11/10", nome: "Cura e encontro", itens: ["Santa Missa", "Pregações e deserto", "Adoração ao Santíssimo", "Gincana e lazer", "Luau e ceia"] },
    { dia: "Segunda", data: "12/10", nome: "Envio e missão", itens: ["Laudes solenes", "Pregação e deserto", "Santo Terço", "Efusão do Espírito: “Onde está o teu coração?”", "Partilha", "Missa de encerramento na igreja"] }
  ],
  antes: [
    { data: "07/10", texto: "Missa e reunião com os pais" },
    { data: "08/10", texto: "Missa de Envio e reunião com os servos" }
  ],

  depoimentos: [
    { autor: "Yasmin Gisele", ano: 2017, texto: "Tinha apenas 14 anos e um sonho: não deixar a chama se apagar. Com a permissão do padre e o auxílio de Márcio, demos início ao acampamento Nasci Pra Te Amar. Foram anos de muitos desafios, mas muitos frutos. Bendito louvado seja pela semente plantada no coração dos cinco jovens que disseram sim há 10 anos." },
    { autor: "Franciele", ano: 2017, texto: "Participei do primeiro NPA, em 2017, e voltei para casa totalmente diferente. Minha vida de repente se tornou mais colorida, mais feliz. Aquela experiência me fortalece e me sustenta em momentos difíceis." },
    { autor: "Livia Chaves", ano: 2017, texto: "Já fui participante, já fui serva, e também já fui apenas uma jovem senhora saudosa que apareceu por algumas horinhas só para matar a saudade. O NPA representa para mim a presença de Deus em cada pessoa, em cada detalhe e em cada gesto de amor vivido ali." },
    { autor: "Maria Julia Cedraz", ano: 2018, texto: "Foi justamente através desse acampamento que Deus abriu uma porta na minha vida. Saí de lá transformada, com mais sede de Deus. Foi lá que construí amizades muito especiais e conheci aquele que hoje é meu esposo. O NPA marcou minha vida para sempre!" },
    { autor: "Bianca Estrela", ano: 2019, texto: "Em um momento de oração perguntei a Deus se Ele me amava mesmo. E Ele me respondeu: “Filha, eu te amo. Pare de procurar esse amor em amizades, em bens materiais, em pessoas. Eu estou aqui, eu sempre estive aqui.” O NPA é o meu lugar e sempre será." },
    { autor: "Helen", ano: 2021, texto: "O NPA, para mim, não é apenas um evento. O NPA é um sentimento. Ver os jovens vivendo tudo aquilo que um dia eu vivi toca profundamente o coração. Cada experiência vivida ficará guardada para sempre no meu coração." },
    { autor: "Clara", ano: 2021, texto: "Aqui tive meu primeiro contato com o Espírito Santo. Aqui comecei minha caminhada com Deus. Aqui a semente foi plantada e hoje ela dá frutos na minha vida. Não parem nunca. Muitos jovens ainda precisam desse amor. Porque, afinal: nasci para te amar." },
    { autor: "Julia Vilela", ano: 2021, texto: "Desde muito nova sempre quis participar, pois via meu irmão mais velho indo todos os anos. Quando completei 15 anos, finalmente fui, e não me decepcionei! O NPA é mágico, e espero que todos os jovens do mundo possam viver um momento tão lindo quanto esse." },
    { autor: "Vitoria Maria", ano: 2021, texto: "Foi um lugar onde encontrei paz, aprendizado e pessoas incríveis. Mais do que um simples acampamento, o NPA se tornou uma experiência transformadora, marcada por união, alegria e crescimento espiritual." },
    { autor: "Maria Emanuelle", ano: 2022, texto: "Aos 14 anos decidi ir sozinha. Mesmo com medo, algo dentro de mim dizia que eu precisava viver aquela experiência. O amor de Deus me explicou tudo aquilo que eu ainda não conseguia compreender. O NPA marcou o início da minha caminhada de fé." },
    { autor: "Mateus Brito", ano: 2023, texto: "Foi, sem sombra de dúvida, a melhor experiência que tive na minha vida, um divisor de águas. Tive uma experiência linda com a misericórdia de Deus e pude reaprender o significado de família. Hoje eu não imagino meu ano sem ele." }
  ]
};
