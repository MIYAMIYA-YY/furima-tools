(function () {
  const data = window.FURIMA_SHIPPING_DATA;
  const summary = document.getElementById("shippingSummary");
  const sections = document.getElementById("shippingSections");
  const comparisonBody = document.getElementById("comparisonBody");

  function yen(value) {
    return new Intl.NumberFormat("ja-JP").format(value) + "円";
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderSummary() {
    summary.innerHTML = data.marketplaces.map((marketplace) => `
      <a class="summary-chip" href="#${marketplace.id}">
        <strong>${escapeHtml(marketplace.name)}</strong>
        <span>主な配送を見る ↓</span>
      </a>
    `).join("");
  }

  function renderCard(method) {
    const tags = method.tags.map((tag) => `<span class="shipping-tag">${escapeHtml(tag)}</span>`).join("");
    const specs = method.specs.map((spec) => `
      <div class="shipping-spec">
        <span>${escapeHtml(spec.label)}</span>
        <strong>${escapeHtml(spec.value)}</strong>
      </div>
    `).join("");

    const url = `/profit/?marketplace=${encodeURIComponent(method.marketplaceId)}&shipping=${encodeURIComponent(method.id)}`;

    return `
      <article class="shipping-method-card">
        <div class="shipping-method-head">
          <h3 class="shipping-method-name">${escapeHtml(method.name)}</h3>
          <div class="shipping-price">${new Intl.NumberFormat("ja-JP").format(method.price)}<small>円</small></div>
        </div>
        <div class="shipping-tags">${tags}</div>
        <div class="shipping-specs">${specs}</div>
        <p class="shipping-use">${escapeHtml(method.description)}</p>
        <a class="shipping-action" href="${url}">${yen(method.price)}で利益計算</a>
      </article>
    `;
  }

  function renderSections() {
    sections.innerHTML = data.marketplaces.map((marketplace) => {
      const methods = data.methods.filter((method) => method.marketplaceId === marketplace.id);
      return `
        <section id="${marketplace.id}" class="service-section">
          <div class="service-heading">
            <h2>${escapeHtml(marketplace.name)}</h2>
            <span>${escapeHtml(marketplace.subtitle)}</span>
          </div>
          <div class="shipping-card-list">${methods.map(renderCard).join("")}</div>
        </section>
      `;
    }).join("");
  }

  function renderComparison() {
    comparisonBody.innerHTML = data.methods.map((method) => {
      const marketplace = data.marketplaces.find((item) => item.id === method.marketplaceId);
      const weight = method.specs.find((spec) => spec.label === "重さ");
      return `
        <tr>
          <td>${escapeHtml(marketplace?.name || "")}</td>
          <td>${escapeHtml(method.name)}</td>
          <td>${yen(method.price)}</td>
          <td>${escapeHtml(weight?.value || "—")}</td>
          <td>${method.tags.includes("匿名配送") ? "○" : "—"}</td>
        </tr>
      `;
    }).join("");
  }

  renderSummary();
  renderSections();
  renderComparison();
})();
