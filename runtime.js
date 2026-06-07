"use strict";

/* ─── Copy buttons ───────────────────────────────────────────────────────── */
function initCopyButtons() {
  document.querySelectorAll(".btn-copy").forEach((btn) => {
    btn.addEventListener("click", () => {
      const root = btn.closest(".code-wrap, .example");
      const pre  = root?.querySelector("pre");
      if (!pre) return;
      navigator.clipboard
        .writeText(pre.innerText)
        .then(() => {
          const orig = btn.textContent;
          btn.textContent = "✓ Copied";
          setTimeout(() => (btn.textContent = orig), 1500);
        })
        .catch(() => {});
    });
  });
}

/* ─── Boot ──────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initCopyButtons();
});
