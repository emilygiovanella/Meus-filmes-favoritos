/* ============================================================
   DADOS DOS FILMES
   ============================================================ */
const movies = [
  {
    id: 1,
    title: "Descendentes",
    year: "2015",
    genre: "Aventura · Musical",
    rating: "★ 6.7",
    duration: "1h 52min",
    category: ["aventura", "musical"],
    badge: "Destaque",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Descendants_%282015_film%29_poster.jpg/220px-Descendants_%282015_film%29_poster.jpg",
    channel: "Disney Channel",
    channelInitial: "D",
    views: "42M visualizações",
    youtubeId: "vEa4g0prZj0",
    desc: "Os filhos dos maiores vilões da Disney recebem uma chance de redenção quando são convidados para estudar em Auradon — o reino dos heróis. Mas a lealdade ao mal ainda pulsa em seus corações."
  },
  {
    id: 2,
    title: "Descendentes 2",
    year: "2017",
    genre: "Aventura · Musical",
    rating: "★ 6.5",
    duration: "1h 52min",
    category: ["aventura", "musical"],
    badge: "Sequência",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Descendants_2_poster.jpg/220px-Descendants_2_poster.jpg",
    channel: "Disney Channel",
    channelInitial: "D",
    views: "38M visualizações",
    youtubeId: "NBZzV25vJkg",
    desc: "Mal retorna à Ilha dos Perdidos com seus amigos enquanto enfrenta a pressão de ser a namorada do Príncipe Ben. Uma nova vilã, Uma, ameaça tudo que conquistaram."
  },
  {
    id: 3,
    title: "Descendentes 3",
    year: "2019",
    genre: "Aventura · Musical",
    rating: "★ 6.8",
    duration: "1h 47min",
    category: ["aventura", "musical"],
    badge: "Conclusão",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Descendants_3_poster.jpg/220px-Descendants_3_poster.jpg",
    channel: "Disney Channel",
    channelInitial: "D",
    views: "35M visualizações",
    youtubeId: "8jpvcD_LkK4",
    desc: "No terceiro e emocionante capítulo, Mal decide fechar permanentemente a barreira da Ilha dos Perdidos. Mas um novo e poderoso inimigo surge para ameaçar Auradon."
  }
];

/* ============================================================
   ESTADO DA APLICAÇÃO
   ============================================================ */
let currentFilter = "all";
let searchQuery   = "";

/* ============================================================
   RENDERIZAÇÃO DOS CARDS
   ============================================================ */
function createCard(movie, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.06}s`;
  card.dataset.category = movie.category.join(" ");

  const progressHTML = movie.progress > 0
    ? `<div class="card__progress"><div class="card__progress-bar" style="width:${movie.progress}%"></div></div>`
    : "";

  const badgeHTML = movie.badge
    ? `<span class="card__badge">${movie.badge}</span>`
    : "";

  card.innerHTML = `
    <div class="card__thumb">
      <img
        src="${movie.thumb}"
        alt="${movie.title}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/400x225/1a1a1a/666?text=Sem+Imagem'"
      />
      <div class="card__play">
        <div class="card__play-icon">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
      </div>
      ${badgeHTML}
      <span class="card__duration">${movie.duration}</span>
      ${progressHTML}
    </div>
    <button class="card__menu" aria-label="Opções">⋮</button>
    <div class="card__body">
      <div class="card__channel-avatar">${movie.channelInitial}</div>
      <div class="card__info">
        <p class="card__title">${movie.title}</p>
        <div class="card__meta">
          <span>${movie.channel} · ${movie.year}</span>
          <span class="card__rating">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${movie.rating}
          </span>
          <span>${movie.views}</span>
        </div>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest(".card__menu")) return;
    openModal(
      movie.youtubeId,
      movie.title,
      movie.year,
      movie.rating,
      movie.genre,
      movie.desc
    );
  });

  return card;
}

function renderGrid(containerId, movieList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  movieList.forEach((movie, i) => {
    container.appendChild(createCard(movie, i));
  });
}

function getFilteredMovies() {
  return movies.filter((m) => {
    const matchFilter =
      currentFilter === "all" || m.category.includes(currentFilter);
    const matchSearch =
      searchQuery === "" ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });
}

function refreshGrids() {
  const filtered = getFilteredMovies();

  // "Em Destaque" — primeiros 8 filmes filtrados
  const featured = filtered.slice(0, 8);
  renderGrid("movieGrid", featured);

  // "Continuar Assistindo" — filmes com progresso > 0 (ou todos se nenhum tiver)
  const inProgress = movies.filter((m) => m.progress > 0);
  const continueList = inProgress.length > 0 ? inProgress : movies.slice(0, 4);
  renderGrid("continueGrid", continueList);
}

/* ============================================================
   MODAL PLAYER
   ============================================================ */
function openModal(youtubeId, title, year, rating, genre, desc) {
  const overlay = document.getElementById("modalOverlay");
  const iframe  = document.getElementById("modalIframe");

  document.getElementById("modalTitle").textContent  = title;
  document.getElementById("modalYear").textContent   = `📅 ${year}`;
  document.getElementById("modalRating").textContent = `⭐ ${rating}`;
  document.getElementById("modalGenre").textContent  = `🎬 ${genre}`;
  document.getElementById("modalDesc").textContent   = desc;

  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  const iframe  = document.getElementById("modalIframe");

  overlay.classList.remove("active");
  iframe.src = "";
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ============================================================
   FILTROS
   ============================================================ */
document.getElementById("filterBtns").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  refreshGrids();
});

/* ============================================================
   BUSCA
   ============================================================ */
const searchInput = document.getElementById("searchInput");
let searchTimeout;

searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchQuery = searchInput.value.trim();
    refreshGrids();
  }, 300);
});

/* ============================================================
   SIDEBAR TOGGLE (mobile)
   ============================================================ */
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

/* ============================================================
   SIDEBAR LINKS — active state
   ============================================================ */
document.querySelectorAll(".sidebar__item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".sidebar__item").forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
refreshGrids();
