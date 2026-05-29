const categoryButtons = document.querySelectorAll(".category-button");
const workCards = document.querySelectorAll(".work-card");
const scrollSection = document.querySelector(".scroll-section");
const aboutSection = document.querySelector('[data-section="about"]');
const worksSection = document.querySelector("#works");
const worksNumber = worksSection.querySelector(".section-title span");
const worksTitle = worksSection.querySelector(".section-title h2");
const toast = document.querySelector(".toast");

const projectImages = {
  "[Webzen] Project N": [
    "https://static.wixstatic.com/media/206c9c_7e918dc87e5546a8badbe759294770da~mv2.jpg/v1/fill/w_980,h_905,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/project_n.jpg",
  ],
  "[Rootnstudio] WHITEDAY2": [
    "https://static.wixstatic.com/media/206c9c_f7a6d48e02544975b3fd63f5d2867dd1~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ug_03_06.png",
    "https://static.wixstatic.com/media/206c9c_aa63a31902aa4fc98c90b708e7e19536~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ug_03_04.png",
  ],
  Zbrush: [
    "https://static.wixstatic.com/media/206c9c_190ea28027b546ccbf5dba0033e38bce~mv2.jpg/v1/fill/w_1482,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rock_C.jpg",
    "https://static.wixstatic.com/media/206c9c_451c5680121742d1b602d1291480b754~mv2.jpg/v1/fill/w_1482,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rock_C_2.jpg",
  ],
  Cannon: [
    "https://static.wixstatic.com/media/206c9c_c256a1021b7942a6be754879e7dd533f~mv2.jpg/v1/fill/w_1483,h_833,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2_edited.jpg",
    "https://static.wixstatic.com/media/206c9c_66229ef34a8e45e1b5ef04fa7e475aed~mv2.jpg/v1/fill/w_1483,h_833,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3_edited.jpg",
  ],
  Altar: [
    "https://static.wixstatic.com/media/206c9c_7f351bd528cb47ae948e63c67380728f~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sequence_01_0004_Ultra.png",
    "https://static.wixstatic.com/media/206c9c_c6c34dae416d4425939a3da3c6200756~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sequence_01_0002_Ultra.png",
  ],
  Carriage: [
    "https://static.wixstatic.com/media/206c9c_8e652b35af974d5383cf7f2cf9dfef0c~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Carriage_Day_01.png",
    "https://static.wixstatic.com/media/206c9c_e7d52b0224b343baa637cbbc63738924~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Carriage_Day_02.png",
  ],
  Fireplace: [
    "https://static.wixstatic.com/media/206c9c_15573739d66741698f3ae38c1cb0efbf~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9_Camera%201.png",
    "https://static.wixstatic.com/media/206c9c_13781c3b74ab498eba2a2b967a10530c~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9_Camera%202.png",
  ],
  "Public phone": [
    "https://static.wixstatic.com/media/206c9c_a4dc7961fc1f40b2a9263d93ca205d76~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png",
    "https://static.wixstatic.com/media/206c9c_11767a56c33949ec80fe9980f51fb1ab~mv2.png/v1/fill/w_1483,h_833,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
  ],
  "Sci-fi corridor": [
    "https://static.wixstatic.com/media/206c9c_f6613af6d0fb4f2fbb538728c8a43856~mv2.png/v1/fill/w_1478,h_835,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/18_Camera%201.png",
    "https://static.wixstatic.com/media/206c9c_5f35703b7e96411980d43053f8ef3c6e~mv2.png/v1/fill/w_1478,h_835,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/18_Camera%202.png",
  ],
  "General Store": [
    "https://static.wixstatic.com/media/206c9c_3046252475ec4f48b53952723322212e~mv2.png/v1/fill/w_1492,h_838,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/206c9c_3046252475ec4f48b53952723322212e~mv2.png",
    "https://static.wixstatic.com/media/206c9c_39ff0103f0614df9a8a1bc7f5a04f3aa~mv2.png/v1/fill/w_1492,h_838,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
  ],
};

function getCardTitle(card) {
  return card.querySelector("strong").textContent.trim();
}

function getImagesForCard(card) {
  const title = getCardTitle(card);
  return projectImages[title] || (card.dataset.images || card.querySelector("img").src).split("|").filter(Boolean);
}

function getProjectImages() {
  return [...workCards].flatMap((card) => {
    const title = getCardTitle(card);
    const type = card.querySelector("small").textContent.trim();
    const images = getImagesForCard(card);

    return images.map((src) => ({ src, title, type }));
  });
}

function updateImageCounts() {
  workCards.forEach((card) => {
    const count = getImagesForCard(card).length;
    const badge = card.querySelector(".image-count");
    if (!badge) return;

    badge.textContent = `${count} IMAGE${count === 1 ? "" : "S"}`;
    badge.setAttribute("aria-label", `${count} image${count === 1 ? "" : "s"}`);
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function clearGalleryCards() {
  document.querySelectorAll(".gallery-card").forEach((card) => card.remove());
  worksSection.classList.remove("is-gallery-mode");
}

function renderGalleryCards() {
  clearGalleryCards();
  worksSection.classList.add("is-gallery-mode");

  shuffle(getProjectImages()).forEach((item) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}" />
      <div><small>${item.type}</small><strong>${item.title}</strong></div>
    `;
    worksSection.querySelector(".works-grid").append(card);
  });
}

function setFilter(filter) {
  const pageMeta = {
    all: { number: "01", title: "All portfolio" },
    professional: { number: "03", title: "Professional" },
    personal: { number: "04", title: "Personal" },
  };

  categoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  if (filter === "about") {
    clearGalleryCards();
    aboutSection.classList.remove("is-hidden");
    worksSection.classList.add("is-hidden");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    workCards.forEach((card) => card.classList.remove("is-hidden"));
    return;
  }

  aboutSection.classList.add("is-hidden");
  worksSection.classList.remove("is-hidden");
  clearGalleryCards();
  worksNumber.textContent = pageMeta[filter]?.number || "01";
  worksTitle.textContent = pageMeta[filter]?.title || "All portfolio";

  if (filter === "all") {
    workCards.forEach((card) => card.classList.add("is-hidden"));
    renderGalleryCards();
  } else {
    workCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", !categories.includes(filter));
    });
  }

  worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

updateImageCounts();

document.querySelector(".email-button").addEventListener("click", async (event) => {
  const email = event.currentTarget.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    window.location.href = `mailto:${email}`;
    return;
  }

  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
});

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
