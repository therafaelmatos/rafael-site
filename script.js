// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for anchor links (don’t interfere with form submits)
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;

  const id = a.getAttribute("href");
  if (!id || id.length < 2) return;

  const el = document.querySelector(id);
  if (!el) return;

  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Gallery modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.getElementById("modalClose");

function openModal(title, src) {
  modalTitle.textContent = title || "Preview";
  modalImg.src = src;
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
  modalImg.src = "";
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

document.querySelectorAll(".thumb").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.title, btn.dataset.src));
});

// ✅ No JS submit handler needed for Formspree.
// Your form will POST to Formspree normally.
