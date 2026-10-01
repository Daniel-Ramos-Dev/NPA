(() => {
  "use strict";
  const D = window.NPA;
  const $ = (s, el = document) => el.querySelector(s);
  const pad = (n) => String(n).padStart(2, "0");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- NAV ---------- */
  const nav = $("#nav"), toggle = $("#navToggle"), links = $("#navLinks");
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 40), { passive: true });
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", false); document.body.style.overflow = ""; }
  });

  /* ---------- CONTAGEM REGRESSIVA ---------- */
  const alvo = new Date(D.eventoInicio).getTime();
  const fim = alvo + 3 * 864e5; // 3 dias
  const cd = $("#countdown");
  function tick() {
    const agora = Date.now();
    if (agora >= alvo) {
      cd.classList.add("is-live");
      cd.innerHTML = agora < fim
        ? "<div><b>Estamos acampando!</b><small>reze por nós 💜</small></div>"
        : "<div><b>Obrigado, Senhor!</b><small>10 anos de NPA</small></div>";
      return;
    }
    let t = Math.floor((alvo - agora) / 1000);
    $("#cd-d").textContent = pad(Math.floor(t / 86400)); t %= 86400;
    $("#cd-h").textContent = pad(Math.floor(t / 3600)); t %= 3600;
    $("#cd-m").textContent = pad(Math.floor(t / 60));
    $("#cd-s").textContent = pad(t % 60);
    setTimeout(tick, 1000);
  }
  tick();

  /* ---------- LINHA DO TEMPO ---------- */
  const tl = $("#timeline");
  tl.innerHTML = D.anos.map((a, i) => {
    const capa = a.capa || a.fotos[0];
    return `
      <div class="tl-item reveal ${a.destaque ? "tl-item--destaque" : ""}">
        <button class="tl-card" data-ano="${a.ano}" aria-label="Ver fotos de ${a.ano}">
          <div class="tl-card__img ${capa ? "" : "tl-card__img--vazio"}" ${capa ? `style="background-image:url('${esc(capa)}')"` : ""}>
            ${capa ? "" : `<span>${a.ano}</span>`}
          </div>
          <div class="tl-card__body">
            <span class="tl-card__ed">${i + 1}ª edição${a.participantes ? ` · ${a.participantes} jovens` : ""}</span>
            <div class="tl-card__ano">${a.ano}</div>
            <h3>${esc(a.titulo)}</h3>
            <p>${esc(a.texto)}</p>
            <span class="tl-card__mais">${a.fotos.length ? `Ver ${a.fotos.length} fotos →` : "Fotos em breve"}</span>
          </div>
        </button>
      </div>`;
  }).join("");
  tl.addEventListener("click", (e) => {
    const card = e.target.closest(".tl-card");
    if (!card) return;
    const temFotos = todas.some((f) => String(f.ano) === card.dataset.ano);
    filtrar(temFotos ? card.dataset.ano : "todos");
    $("#galeria").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------- GALERIA ---------- */
  const todas = D.anos.flatMap((a) => a.fotos.map((src) => ({ src, ano: a.ano })))
    .concat((D.momentos || []).map((src) => ({ src, ano: null })));
  const anosComFotos = D.anos.filter((a) => a.fotos.length).map((a) => a.ano);
  const filtros = $("#filtros"), masonry = $("#masonry"), vazio = $("#galeriaVazio");
  filtros.innerHTML = [`<button role="tab" data-ano="todos" aria-selected="true">Todos</button>`]
    .concat(anosComFotos.map((a) => `<button role="tab" data-ano="${a}" aria-selected="false">${a}</button>`)).join("");
  filtros.hidden = !anosComFotos.length;
  filtros.addEventListener("click", (e) => { if (e.target.dataset.ano) filtrar(e.target.dataset.ano); });

  let visiveis = [];
  function filtrar(ano) {
    filtros.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", b.dataset.ano === String(ano)));
    visiveis = ano === "todos" ? todas : todas.filter((f) => String(f.ano) === String(ano));
    if (!visiveis.length) { masonry.innerHTML = ""; vazio.hidden = false; return; }
    vazio.hidden = true;
    masonry.innerHTML = visiveis.map((f, i) =>
      `<figure data-i="${i}" data-ano="${f.ano || ""}" style="animation-delay:${Math.min(i, 20) * 30}ms"><img src="${esc(f.src)}" alt="NPA${f.ano ? " " + f.ano : ""}" loading="lazy" decoding="async"></figure>`).join("");
  }
  masonry.addEventListener("click", (e) => { const f = e.target.closest("figure[data-i]"); if (f) abrir(+f.dataset.i); });
  filtrar("todos");

  /* ---------- LIGHTBOX ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let atual = 0;
  function abrir(i) { atual = i; mostrar(); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
  function fechar() { lb.hidden = true; document.body.style.overflow = ""; }
  function mostrar() {
    const f = visiveis[atual];
    lbImg.src = f.src; lbImg.alt = `NPA${f.ano ? " " + f.ano : ""}`;
    lbCap.textContent = `NPA${f.ano ? " " + f.ano : ""} · ${atual + 1} / ${visiveis.length}`;
  }
  const passo = (d) => { atual = (atual + d + visiveis.length) % visiveis.length; mostrar(); };
  $("#lbClose").onclick = fechar;
  $("#lbPrev").onclick = () => passo(-1);
  $("#lbNext").onclick = () => passo(1);
  lb.addEventListener("click", (e) => { if (e.target === lb) fechar(); });
  addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") passo(-1);
    if (e.key === "ArrowRight") passo(1);
  });
  let x0 = null;
  lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) passo(dx < 0 ? 1 : -1);
    x0 = null;
  });

  /* ---------- VÍDEOS ---------- */
  const vg = $("#videosGrid");
  if (!D.videos.length) {
    vg.innerHTML = `<div class="videos__vazio">Os vídeos de todas as edições serão adicionados em breve. 🎬</div>`;
  } else {
    vg.innerHTML = D.videos.map((v, i) => {
      const thumb = v.youtube ? `https://i.ytimg.com/vi/${esc(v.youtube)}/hqdefault.jpg` : (v.capa || "");
      return `
        <article class="video reveal ${v.vertical ? "video--vertical" : ""}">
          <div class="video__frame" data-i="${i}" style="${thumb ? `background-image:url('${thumb}')` : "background:var(--roxo-escuro)"}">
            <button class="video__play" aria-label="Assistir ${esc(v.titulo)}"><span></span></button>
          </div>
          <div class="video__info"><b>${esc(v.titulo)}</b><span>${v.ano || ""}</span></div>
        </article>`;
    }).join("");
    vg.addEventListener("click", (e) => {
      const fr = e.target.closest(".video__frame");
      if (!fr || fr.querySelector("iframe")) return;
      const v = D.videos[fr.dataset.i];
      if (v.arquivo) {
        fr.innerHTML = `<video src="${esc(v.arquivo)}" controls autoplay playsinline ${v.capa ? `poster="${esc(v.capa)}"` : ""}></video>`;
        return;
      }
      const src = v.youtube
        ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0`
        : `https://drive.google.com/file/d/${encodeURIComponent(v.drive)}/preview`;
      fr.innerHTML = `<iframe src="${src}" title="${esc(v.titulo)}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    });
  }

  /* ---------- DEPOIMENTOS ---------- */
  const car = $("#carrossel"), dots = $("#carrosselDots");
  car.innerHTML = D.depoimentos.map((d, i) =>
    `<blockquote class="depo ${i ? "" : "is-active"}"><p>${esc(d.texto)}</p><footer>${esc(d.autor)}${d.ano ? ` · participante ${d.ano}` : ""}</footer></blockquote>`).join("");
  dots.innerHTML = D.depoimentos.map((_, i) => `<button aria-label="Testemunho ${i + 1}" class="${i ? "" : "is-active"}"></button>`).join("");
  let di = 0, timer;
  function irPara(i) {
    di = i;
    car.querySelectorAll(".depo").forEach((el, j) => el.classList.toggle("is-active", j === i));
    dots.querySelectorAll("button").forEach((el, j) => el.classList.toggle("is-active", j === i));
    clearInterval(timer); timer = setInterval(() => irPara((di + 1) % D.depoimentos.length), 9000);
  }
  dots.addEventListener("click", (e) => { const b = [...dots.children].indexOf(e.target); if (b >= 0) irPara(b); });
  irPara(0);

  /* ---------- ESTATÍSTICAS ---------- */
  function contar(el) {
    const alvo = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / 1600, 1);
      el.textContent = Math.round(alvo * (1 - Math.pow(1 - p, 3))).toLocaleString("pt-BR") + (p === 1 ? suf : "");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- PROGRAMAÇÃO ---------- */
  $("#progAntes").innerHTML = (D.antes || []).map((a) => `<b>${esc(a.data)}</b> ${esc(a.texto)}`).join(" &nbsp;·&nbsp; ");
  $("#dias").innerHTML = D.programacao.map((d, i) => `
    <article class="dia reveal">
      <header><span class="dia__n">Dia ${i + 1}</span><b>${esc(d.data)}</b><small>${esc(d.dia)}</small></header>
      <h3>${esc(d.nome)}</h3>
      <ul>${d.itens.map((it) => `<li>${esc(it)}</li>`).join("")}</ul>
    </article>`).join("");

  /* ---------- FUNDO DA ABERTURA ---------- */
  const bg = $("#heroBg"), fundos = D.fundoHero || [];
  if (fundos.length) {
    bg.innerHTML = fundos.map((src, i) => `<div style="background-image:url('${esc(src)}')" class="${i ? "" : "is-on"}"></div>`).join("");
    let hi = 0;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches && fundos.length > 1) {
      setInterval(() => {
        const s = bg.children;
        s[hi].classList.remove("is-on");
        hi = (hi + 1) % s.length;
        s[hi].classList.add("is-on");
      }, 6000);
    }
  }

  /* ---------- REVEAL ---------- */
  document.querySelectorAll(".hero .reveal").forEach((el, i) => el.style.setProperty("--i", i));
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-visible");
    en.target.querySelectorAll("[data-count]").forEach(contar);
    io.unobserve(en.target);
  }), { threshold: .15 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- PARTÍCULAS (luzes) ---------- */
  const cv = $("#particulas"), ctx = cv.getContext("2d");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let W, H, pts;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
    const n = Math.min(80, Math.floor(innerWidth / 16));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: (Math.random() * 1.8 + .4) * dpr,
      vy: -(Math.random() * .25 + .05) * dpr, vx: (Math.random() - .5) * .15 * dpr, a: Math.random() * Math.PI * 2
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy; p.a += .02;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      const alpha = .35 + Math.sin(p.a) * .3;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,150,255,${alpha})`;
      ctx.shadowBlur = 12; ctx.shadowColor = "#a855f7";
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  addEventListener("resize", resize);
  resize(); frame();
})();
