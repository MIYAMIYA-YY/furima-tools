(() => {
  const section = new URLSearchParams(window.location.search).get("section");
  if (!section) return;

  const target = document.getElementById(`${section}-guide`);
  if (!target) return;

  target.open = true;

  requestAnimationFrame(() => {
    const headerHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--site-header-height"),
      10
    ) || 70;

    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  });
})();
