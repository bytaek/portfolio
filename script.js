const categoryButtons = document.querySelectorAll(".category-button");
const workCards = document.querySelectorAll(".work-card");
const scrollSection = document.querySelector(".scroll-section");
const aboutSection = document.querySelector('[data-section="about"]');
const worksSection = document.querySelector("#works");
const toast = document.querySelector(".toast");

function setFilter(filter) {
  categoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  if (filter === "about") {
    aboutSection.classList.remove("is-hidden");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    workCards.forEach((card) => card.classList.remove("is-hidden"));
    return;
  }

  aboutSection.classList.add("is-hidden");
  workCards.forEach((card) => {
    const categories = card.dataset.category.split(" ");
    card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
  });
  worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

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
