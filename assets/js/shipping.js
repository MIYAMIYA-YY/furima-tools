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
        <span>配送方法を見る ↓</span>
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
          <h4 class="shipping-method-name">${escapeHtml(method.name)}</h4>
          <div class="shipping-price">${new Intl.NumberFormat("ja-JP").format(method.price)}<small>円</small></div>
        </div>
        <div class="shipping-tags">${tags}</div>
        <div class="shipping-specs">${specs}</div>
        <p class="shipping-use">${escapeHtml(method.description)}</p>
        <a class="shipping-action" href="${url}">${yen(method.price)}で利益計算</a>
      </article>
    `;
  }

  function renderCarrierGroup(marketplace, carrier) {
    const methods = data.methods.filter((method) =>
      method.marketplaceId === marketplace.id && method.carrierId === carrier.id
    );

    if (methods.length === 0) return "";

    return `
      <details class="carrier-accordion">
        <summary class="carrier-summary">
          <span class="carrier-title-wrap">
            <span class="carrier-icon" aria-hidden="true">${escapeHtml(carrier.icon)}</span>
            <span>
              <strong>${escapeHtml(carrier.name)}</strong>
              <small>${escapeHtml(carrier.description)}</small>
            </span>
          </span>
          <span class="carrier-count">${methods.length}件</span>
        </summary>
        <div class="carrier-content">
          <div class="shipping-card-list">${methods.map(renderCard).join("")}</div>
        </div>
      </details>
    `;
  }

  function renderSections() {
    sections.innerHTML = data.marketplaces.map((marketplace) => `
      <section id="${marketplace.id}" class="service-section">
        <div class="service-heading">
          <h2>${escapeHtml(marketplace.name)}</h2>
          <span>${escapeHtml(marketplace.subtitle)}</span>
        </div>
        <p class="service-guide">配送会社ごとにまとまっています。見たい項目を押すと一覧が開きます。</p>
        <div class="carrier-accordion-list">
          ${data.carriers.map((carrier) => renderCarrierGroup(marketplace, carrier)).join("")}
        </div>
      </section>
    `).join("");
  }

  function renderComparison() {
    const sortedMethods = [...data.methods].sort((a, b) => {
      const marketplaceDiff = data.marketplaces.findIndex((item) => item.id === a.marketplaceId)
        - data.marketplaces.findIndex((item) => item.id === b.marketplaceId);
      if (marketplaceDiff !== 0) return marketplaceDiff;
      return data.carriers.findIndex((item) => item.id === a.carrierId)
        - data.carriers.findIndex((item) => item.id === b.carrierId);
    });

    comparisonBody.innerHTML = sortedMethods.map((method) => {
      const marketplace = data.marketplaces.find((item) => item.id === method.marketplaceId);
      const carrier = data.carriers.find((item) => item.id === method.carrierId);
      const weight = method.specs.find((spec) => spec.label === "重さ");
      return `
        <tr>
          <td>${escapeHtml(marketplace?.name || "")}</td>
          <td>${escapeHtml(carrier?.name || "")}</td>
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
