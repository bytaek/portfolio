const categoryButtons = document.querySelectorAll(".category-button");
const scrollSection = document.querySelector(".scroll-section");
const aboutSection = document.querySelector('[data-section="about"]');
const worksSection = document.querySelector("#works");
const worksGrid = worksSection.querySelector(".works-grid");
const worksNumber = worksSection.querySelector(".section-title span");
const worksTitle = worksSection.querySelector(".section-title h2");
const worksDescription = worksSection.querySelector(".works-description");
const toast = document.querySelector(".toast");
const siteFooter = document.querySelector(".site-footer");
const featureCards = document.querySelectorAll("[data-feature-project]");
const pageMeta = {
  all: {
    number: "01",
    title: "All portfolio",
    description: [
      "모든 포트폴리오의 작업이 랜덤하게 배치되며, 새로고침 시 순서가 변경됩니다.",
      "Projects are displayed in a randomized order and will reshuffle upon refresh.",
    ],
  },
  professional: {
    number: "03",
    title: "Professional",
    description: [
      "공개 되지 않은 프로젝트는 기밀 유지를 위하여 블러 처리하였습니다.",
      "Selected projects have been blurred due to confidentiality agreements.",
    ],
  },
  personal: {
    number: "04",
    title: "Personal",
    description: [
      "프롭 제작 작업을 중심으로 구성한 개인 프로젝트입니다.",
      "This portfolio primarily features personal prop art projects.",
    ],
  },
};

const portfolioProjects = [
  {
    category: "professional",
    title: "Webzen - Project N",
    date: "2024",
    specs: ["Mobile", "UE", "RPG", "Level"],
    folder: "images/Professional/2024_Webzen - Project N",
    thumbnail: "images/Professional/2024_Webzen - Project N/project_n.jpg",
    images: ["project_n.jpg"],
  },
  {
    category: "professional",
    title: "Rootnstudio - Whiteday 2 : The flower that tells lies",
    date: "2023",
    specs: ["PC", "UE", "Prop"],
    folder: "images/Professional/2023_RootNstudio - Whiteday 2 The flower that tells lies",
    thumbnail: "images/Professional/2023_RootNstudio - Whiteday 2 The flower that tells lies/thumbnail.png",
    images: [
      "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png",
      "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
      "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png",
      "31.png", "32.png", "33.png", "34.png", "35.png", "36.png", "37.png",
    ],
  },
  {
    category: "personal",
    title: "Zbrush",
    date: "2026.02",
    folder: "images/Personal/20260207_Zbrush",
    thumbnail: "images/Personal/20260207_Zbrush/thumbnail.jpg",
    images: [
      "1.Rock_C.jpg", "2.Rock_C_2.jpg", "3.Rock_B.jpg", "4.Rock_A.jpg",
      "5.Pillar_1.png", "6.Pillar_broken.png", "7.Tile_1.jpg", "8.Tile_2.png", "9.Stonewall.jpg",
    ],
  },
  {
    category: "personal",
    title: "Cannon",
    date: "2025.11",
    folder: "images/Personal/20251124_Cannon",
    thumbnail: "images/Personal/20251124_Cannon/thumbnail.jpg",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
  },
  {
    category: "personal",
    title: "Altar",
    date: "2026.05",
    folder: "images/Personal/20260515_Altar",
    thumbnail: "images/Personal/20260515_Altar/thumbnail.jpg",
    images: [
      "Sequence_01_0000_Ultra.png", "Sequence_01_0001_Ultra.png", "Sequence_01_0002_Ultra.png",
      "Sequence_01_0003_Ultra.png", "Sequence_01_0004_Ultra.png",
    ],
  },
  {
    category: "personal",
    title: "Carriage",
    date: "2023.06",
    folder: "images/Personal/20230630_Carriage",
    thumbnail: "images/Personal/20230630_Carriage/thumbnail.jpg",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
  },
  {
    category: "personal",
    title: "Fireplace",
    date: "2022.07",
    folder: "images/Personal/20220715_Fireplace",
    thumbnail: "images/Personal/20220715_Fireplace/thumbnail.png",
    images: ["1.png", "2.png", "3.png"],
  },
  {
    category: "personal",
    title: "Public phone",
    date: "2022.05",
    folder: "images/Personal/20220531_Public phone",
    thumbnail: "images/Personal/20220531_Public phone/thumbnail.jpg",
    images: ["1.png", "2.png", "4.png", "5.png", "6.png", "7.png", "11.png", "13_day_Camera 3.png"],
  },
  {
    category: "personal",
    title: "Sci-fi corridor",
    date: "2022.03",
    folder: "images/Personal/20220329_Sci-fi corridor",
    thumbnail: "images/Personal/20220329_Sci-fi corridor/thumbnail.jpg",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
  },
  {
    category: "personal",
    title: "General Store",
    date: "2021.11",
    folder: "images/Personal/20211123_General Store",
    thumbnail: "images/Personal/20211123_General Store/thumbnail.jpg",
    images: [
      "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png",
      "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png",
    ],
  },
];

let currentFilter = "about";
let galleryPool = [];
let galleryCursor = 0;
let galleryScrollHandler = null;
let modalProject = null;
let modalProjectIndex = 0;
let modalImageIndex = 0;
let modalContext = [];

const modal = document.createElement("div");
modal.className = "project-modal";
modal.setAttribute("aria-hidden", "true");
modal.innerHTML = `
  <div class="project-modal__panel" role="dialog" aria-modal="true" aria-label="Project viewer">
    <button class="project-modal__close" type="button" aria-label="Close">X</button>
    <div class="project-modal__image-wrap">
      <img class="project-modal__image" alt="" />
      <div class="project-modal__dots" aria-label="Image position"></div>
    </div>
    <aside class="project-modal__info">
      <p class="project-modal__category"></p>
      <h3></h3>
      <p class="project-modal__date"></p>
      <p class="project-modal__description">작품설명</p>
      <div class="project-modal__specs"></div>
      <div class="project-modal__thumbs" aria-label="Project thumbnails"></div>
      <div class="project-modal__hint">
        <div class="project-modal__hint-line"><span>Scroll</span> / <span>↑</span><span>↓</span> Images</div>
        <div class="project-modal__hint-line"><span>←</span><span>→</span> Projects</div>
        <div class="project-modal__hint-line"><span>ESC</span> Close</div>
      </div>
      <div class="project-modal__project-nav">
        <button class="project-modal__project-prev" type="button">← Previous project</button>
        <button class="project-modal__project-next" type="button">Next project →</button>
      </div>
    </aside>
  </div>
`;
document.body.append(modal);

const modalImage = modal.querySelector(".project-modal__image");
const modalTitle = modal.querySelector(".project-modal__info h3");
const modalDate = modal.querySelector(".project-modal__date");
const modalCategory = modal.querySelector(".project-modal__category");
const modalSpecs = modal.querySelector(".project-modal__specs");
const modalThumbs = modal.querySelector(".project-modal__thumbs");
const modalDots = modal.querySelector(".project-modal__dots");
const modalClose = modal.querySelector(".project-modal__close");
const modalPrevProject = modal.querySelector(".project-modal__project-prev");
const modalNextProject = modal.querySelector(".project-modal__project-next");

function imagePath(project, filename) {
  return `${project.folder}/${filename}`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getAllImages() {
  return portfolioProjects.flatMap((project) =>
    project.images.map((filename, index) => ({
      src: imagePath(project, filename),
      imageIndex: index,
      title: project.title,
      type: project.category === "professional" ? "Professional" : "Personal",
      project,
    })),
  );
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "work-card";
  card.dataset.category = project.category;
  card.dataset.title = project.title;
  card.innerHTML = `
    <img src="${project.thumbnail}" alt="${project.title}" />
    <span class="image-count" aria-label="${project.images.length} images">${project.images.length} IMAGES</span>
    <div>
      <small>${project.category}</small>
      <strong>${project.title}</strong>
      ${project.specs ? `<span class="project-specs">${project.specs.map((spec) => `<b>${spec}</b>`).join("")}</span>` : ""}
    </div>
  `;
  card.addEventListener("click", () => openProjectModal(project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectModal(project);
    }
  });
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  return card;
}

function renderProjectCards(filter) {
  worksGrid.innerHTML = "";
  worksSection.classList.remove("is-gallery-mode", "is-detail-mode");
  portfolioProjects
    .filter((project) => project.category === filter)
    .forEach((project) => worksGrid.append(createProjectCard(project)));
}

function createGalleryCard(item) {
  const card = document.createElement("article");
  card.className = "gallery-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${item.title} portfolio open`);
  card.innerHTML = `
    <img src="${item.src}" alt="${item.title}" />
    <span class="view-label">VIEW</span>
  `;

  const openProject = () => openProjectModal(item.project, item.imageIndex);

  card.addEventListener("click", openProject);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  });

  return card;
}

function appendGalleryBatch(count = 18) {
  if (galleryCursor + count >= galleryPool.length) {
    galleryPool = [...galleryPool, ...shuffle(getAllImages())];
  }

  galleryPool.slice(galleryCursor, galleryCursor + count).forEach((item) => {
    worksGrid.append(createGalleryCard(item));
  });
  galleryCursor += count;
}

function removeGalleryScroll() {
  if (!galleryScrollHandler) return;
  scrollSection.removeEventListener("scroll", galleryScrollHandler);
  galleryScrollHandler = null;
}

function renderGallery() {
  removeGalleryScroll();
  worksGrid.innerHTML = "";
  worksSection.classList.add("is-gallery-mode");
  worksSection.classList.remove("is-detail-mode");
  galleryPool = shuffle(getAllImages());
  galleryCursor = 0;
  appendGalleryBatch(24);

  galleryScrollHandler = () => {
    const nearBottom = scrollSection.scrollTop + scrollSection.clientHeight > scrollSection.scrollHeight - 600;
    if (nearBottom && currentFilter === "all") appendGalleryBatch(12);
  };
  scrollSection.addEventListener("scroll", galleryScrollHandler);
}

function setActiveNav(filter) {
  categoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
}

function getContextProjects(project) {
  return portfolioProjects.filter((item) => item.category === project.category);
}

function renderModal() {
  const image = modalProject.images[modalImageIndex];
  modalImage.src = imagePath(modalProject, image);
  modalImage.alt = modalProject.title;
  modalCategory.textContent = modalProject.category;
  modalTitle.textContent = modalProject.title;
  modalDate.textContent = modalProject.date || "";
  modalSpecs.innerHTML = (modalProject.specs || []).map((spec) => `<b>${spec}</b>`).join("");
  modalThumbs.innerHTML = modalProject.images
    .map(
      (filename, index) => `
        <button type="button" class="${index === modalImageIndex ? "is-active" : ""}" aria-label="Open image ${index + 1}">
          <img src="${imagePath(modalProject, filename)}" alt="" />
        </button>
      `,
    )
    .join("");
  modalThumbs.querySelectorAll("button").forEach((button, index) => {
    button.addEventListener("click", () => {
      modalImageIndex = index;
      renderModal();
    });
  });
  modalDots.innerHTML = modalProject.images
    .map((_, index) => `<button type="button" class="${index === modalImageIndex ? "is-active" : ""}" aria-label="Image ${index + 1}"></button>`)
    .join("");
  modalDots.querySelectorAll("button").forEach((button, index) => {
    button.addEventListener("click", () => {
      modalImageIndex = index;
      renderModal();
    });
  });
  modalPrevProject.hidden = modalProjectIndex <= 0;
  modalNextProject.hidden = modalProjectIndex >= modalContext.length - 1;
  modal.querySelector(".project-modal__project-nav").classList.toggle("has-prev", !modalPrevProject.hidden);
  modal.querySelector(".project-modal__project-nav").classList.toggle("has-next", !modalNextProject.hidden);
}

function openProjectModal(project, imageIndex = 0) {
  modalProject = project;
  modalContext = getContextProjects(project);
  modalProjectIndex = modalContext.findIndex((item) => item.title === project.title);
  modalImageIndex = Math.max(0, Math.min(imageIndex, project.images.length - 1));
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  renderModal();
}

function closeProjectModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function stepImage(delta) {
  if (!modalProject) return;
  const nextIndex = modalImageIndex + delta;
  if (nextIndex < 0 || nextIndex >= modalProject.images.length) return;
  modalImageIndex = nextIndex;
  renderModal();
}

function stepProject(delta) {
  if (!modalContext.length) return;
  const nextProjectIndex = modalProjectIndex + delta;
  if (nextProjectIndex < 0 || nextProjectIndex >= modalContext.length) return;
  modalProjectIndex = nextProjectIndex;
  modalProject = modalContext[modalProjectIndex];
  modalImageIndex = 0;
  renderModal();
}

function setFilter(filter) {
  currentFilter = filter;
  setActiveNav(filter);

  if (filter === "about") {
    removeGalleryScroll();
    worksGrid.innerHTML = "";
    aboutSection.classList.remove("is-hidden");
    worksSection.classList.add("is-hidden");
    siteFooter.classList.add("is-hidden");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  aboutSection.classList.add("is-hidden");
  worksSection.classList.remove("is-hidden");
  siteFooter.classList.remove("is-hidden");
  worksNumber.textContent = pageMeta[filter].number;
  worksTitle.textContent = pageMeta[filter].title;
  worksDescription.innerHTML = pageMeta[filter].description.join("<br>");

  if (filter === "all") {
    renderGallery();
  } else {
    removeGalleryScroll();
    renderProjectCards(filter);
  }

  worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

featureCards.forEach((card) => {
  const openFeature = () => {
    const project = portfolioProjects.find((item) => item.title === card.dataset.featureProject);
    if (project) openProjectModal(project);
  };
  card.addEventListener("click", openFeature);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFeature();
    }
  });
});

modalClose.addEventListener("click", closeProjectModal);
modalPrevProject.addEventListener("click", () => stepProject(-1));
modalNextProject.addEventListener("click", () => stepProject(1));
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeProjectModal();
});
modal.addEventListener("wheel", (event) => {
  if (!modal.classList.contains("is-open")) return;
  event.preventDefault();
  stepImage(event.deltaY > 0 ? 1 : -1);
}, { passive: false });

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("is-open")) return;
  if (event.key === "Escape") closeProjectModal();
  if (event.key === "ArrowUp") {
    event.preventDefault();
    stepImage(-1);
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    stepImage(1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    stepProject(-1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    stepProject(1);
  }
});

document.querySelectorAll("[data-filter-shortcut]").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filterShortcut));
});

document.querySelectorAll(".email-button").forEach((button) => button.addEventListener("click", async (event) => {
  const email = event.currentTarget.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    window.location.href = `mailto:${email}`;
    return;
  }

  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    if (scrollSection && getComputedStyle(scrollSection).overflowY === "auto") {
      scrollSection.scrollTo({ top: target.offsetTop - scrollSection.offsetTop, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
