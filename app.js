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
  },
  {
    id: 4,
    title: "Descendentes: A Ascensão de Red",
    year: "2024",
    genre: "Aventura · Musical",
    rating: "★ 5.9",
    duration: "1h 37min",
    category: ["aventura", "musical"],
    badge: "Novo",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Descendants_The_Rise_of_Red_poster.jpg/220px-Descendants_The_Rise_of_Red_poster.jpg",
    channel: "Disney+",
    channelInitial: "D",
    views: "18M visualizações",
    youtubeId: "3Pk4-lzowDM",
    desc: "Red, filha rebelde da Rainha de Copas, e Chloe, filha da Cinderela, precisam viajar no tempo para salvar Auradon de um destino sombrio."
  },
  {
    id: 5,
    title: "Moana",
    year: "2016",
    genre: "Animação · Aventura",
    rating: "★ 7.6",
    duration: "1h 47min",
    category: ["animacao", "aventura"],
    badge: null,
    progress: 65,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Moana_%282016_film%29_poster.jpg/220px-Moana_%282016_film%29_poster.jpg",
    channel: "Disney",
    channelInitial: "D",
    views: "120M visualizações",
    youtubeId: "LKFuXETZUsI",
    desc: "A filha corajosa de um chefe polinésio parte em uma jornada épica para salvar seu povo, encontrando o semideus Maui pelo caminho."
  },
  {
    id: 6,
    title: "Encanto",
    year: "2021",
    genre: "Animação · Musical",
    rating: "★ 7.2",
    duration: "1h 39min",
    category: ["animacao", "musical"],
    badge: "Oscar",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Encanto_%282021_film%29.jpg/220px-Encanto_%282021_film%29.jpg",
    channel: "Disney",
    channelInitial: "D",
    views: "95M visualizações",
    youtubeId: "CaimKeDcudo",
    desc: "Mirabel, a única criança sem poderes mágicos na família Madrigal, descobre que a magia que protege o Encanto está em perigo."
  },
  {
    id: 7,
    title: "Frozen",
    year: "2013",
    genre: "Animação · Aventura",
    rating: "★ 7.4",
    duration: "1h 42min",
    category: ["animacao", "aventura"],
    badge: null,
    progress: 30,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Frozen_%282013_film%29_poster.jpg/220px-Frozen_%282013_film%29_poster.jpg",
    channel: "Disney",
    channelInitial: "D",
    views: "210M visualizações",
    youtubeId: "TbQm5doF_Uc",
    desc: "Anna parte em uma jornada épica com o montanhês Kristoff para encontrar sua irmã Elsa, cujos poderes de gelo congelaram o reino de Arendelle."
  },
  {
    id: 8,
    title: "Raya e o Último Dragão",
    year: "2021",
    genre: "Animação · Ação",
    rating: "★ 7.3",
    duration: "1h 47min",
    category: ["animacao", "acao"],
    badge: null,
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Raya_and_the_Last_Dragon_poster.jpg/220px-Raya_and_the_Last_Dragon_poster.jpg",
    channel: "Disney",
    channelInitial: "D",
    views: "72M visualizações",
    youtubeId: "1VIZ89FEjYI",
    desc: "Em um mundo fantástico chamado Kumandra, a guerreira Raya parte em busca do último dragão para salvar seu povo de criaturas sombrias."
  },
  {
    id: 9,
    title: "Enrolados",
    year: "2010",
    genre: "Animação · Comédia",
    rating: "★ 7.7",
    duration: "1h 40min",
    category: ["animacao", "comedia"],
    badge: "Clássico",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Tangled_2010_film_poster.jpg/220px-Tangled_2010_film_poster.jpg",
    channel: "Disney",
    channelInitial: "D",
    views: "185M visualizações",
    youtubeId: "7LFk9FMmFQY",
    desc: "Rapunzel, a princesa de cabelos mágicos que nunca saiu de sua torre, parte em uma aventura com o ladrão Flynn Rider para ver as luzes flutuantes."
  },
  {
    id: 10,
    title: "Mulan",
    year: "1998",
    genre: "Animação · Ação",
    rating: "★ 7.6",
    duration: "1h 28min",
    category: ["animacao", "acao"],
    badge: "Clássico",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Mulan_%281998_film%29_poster.jpg/220px-Mulan_%281998_film%29_poster.jpg",
    channel: "Disney",
    channelInitial: "D",
    views: "160M visualizações",
    youtubeId: "7LFk9FMmFQY",
    desc: "Para salvar seu pai idoso, Mulan se disfarça de homem e se alista no exército imperial chinês para lutar contra os invasores hunos."
  },
  {
    id: 11,
    title: "Valente",
    year: "2012",
    genre: "Animação · Aventura",
    rating: "★ 7.1",
    duration: "1h 33min",
    category: ["animacao", "aventura"],
    badge: "Oscar",
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Brave_Poster.jpg/220px-Brave_Poster.jpg",
    channel: "Pixar",
    channelInitial: "P",
    views: "88M visualizações",
    youtubeId: "TEHWDA_6e0M",
    desc: "Mérida, uma princesa escocesa habilidosa com o arco, desafia as tradições de seu reino e acidentalmente lança uma maldição sobre sua família."
  },
  {
    id: 12,
    title: "A Bela e a Fera",
    year: "2017",
    genre: "Musical · Romance",
    rating: "★ 7.1",
    duration: "2h 09min",
    category: ["musical"],
    badge: null,
    progress: 0,
    thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Beauty_and_the_Beast_%282017%29_poster.jpg/220px-Beauty_and_the_Beast_%282017%29_poster.jpg",
    channel: "Disney",
    channelInitial: "D",
    views: "130M visualizações",
    youtubeId: "e3Nl_TCQXuw",
    desc: "Bela, uma jovem inteligente e corajosa, fica presa no castelo de uma Fera que é, na verdade, um príncipe amaldiçoado. Uma história de amor que transcende aparências."
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
