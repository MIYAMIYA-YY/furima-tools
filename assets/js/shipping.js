(function () {
  const data = window.FURIMA_SHIPPING_DATA;
  const summary = document.getElementById("shippingSummary");
  const sections = document.getElementById("shippingSections");
  const comparisonSections = document.getElementById("comparisonSections");

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

  function profitUrl(marketplaceId, shippingId) {
    return `/profit/?marketplace=${encodeURIComponent(marketplaceId)}&shipping=${encodeURIComponent(shippingId)}`;
  }

  function renderSummary() {
    summary.innerHTML = data.marketplaces.map((marketplace) => `
      <a class="summary-chip" href="#${marketplace.id}">
        <strong>${escapeHtml(marketplace.name)}</strong>
        <span>配送方法を見る ↓</span>
      </a>
    `).join("");
  }

  function renderSizeOptions(method) {
    return `
      <div class="size-option-heading">サイズを選んで利益計算</div>
      <div class="size-option-grid">
        ${method.sizeOptions.map((option) => `
          <a class="size-option-button" href="${profitUrl(method.marketplaceId, option.id)}">
            <strong>${escapeHtml(option.size)}</strong>
            <span>${escapeHtml(option.sizeDescription)}</span>
            <small>${escapeHtml(option.weight)}</small>
            <b>${yen(option.price)}</b>
          </a>
        `).join("")}
      </div>
    `;
  }

  function renderCard(method) {
    const tags = method.tags.map((tag) => `<span class="shipping-tag">${escapeHtml(tag)}</span>`).join("");
    const specs = method.specs.map((spec) => `
      <div class="shipping-spec">
        <span>${escapeHtml(spec.label)}</span>
        <strong>${escapeHtml(spec.value)}</strong>
      </div>
    `).join("");

    const hasSizeOptions = Array.isArray(method.sizeOptions) && method.sizeOptions.length > 0;
    const priceArea = hasSizeOptions
      ? '<div class="shipping-price shipping-price-range">サイズ別</div>'
      : `<div class="shipping-price">${new Intl.NumberFormat("ja-JP").format(method.price)}<small>円</small></div>`;

    return `
      <article class="shipping-method-card${hasSizeOptions ? ' shipping-method-card-large' : ''}">
        <div class="shipping-method-head">
          <h4 class="shipping-method-name">${escapeHtml(method.name)}</h4>
          ${priceArea}
        </div>
        <div class="shipping-tags">${tags}</div>
        <div class="shipping-specs">${specs}</div>
        <p class="shipping-use">${escapeHtml(method.description)}</p>
        ${hasSizeOptions
          ? renderSizeOptions(method)
          : `<a class="shipping-action" href="${profitUrl(method.marketplaceId, method.id)}">${yen(method.price)}で利益計算</a>`}
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
          <span class="carrier-count">${methods.length}種類</span>
        </summary>
        <div class="carrier-content">
          <div class="shipping-card-list">${methods.map(renderCard).join("")}</div>
        </div>
      </details>
    `;
  }

  function renderOfficialLinks(marketplace) {
    const links = data.carriers.map((carrier) => {
      const url = marketplace.officialLinks?.[carrier.id];
      if (!url) return "";

      return `
        <a class="service-official-button"
           href="${escapeHtml(url)}"
           target="_blank"
           rel="noopener noreferrer">
          <span>${escapeHtml(carrier.icon)}</span>
          <strong>${escapeHtml(carrier.name)}</strong>
          <small>公式サイトへ ↗</small>
        </a>
      `;
    }).join("");

    return links ? `<div class="service-official-links">${links}</div>` : "";
  }

  function renderSections() {
    sections.innerHTML = data.marketplaces.map((marketplace) => `
      <section id="${marketplace.id}" class="service-section">
        <div class="service-sticky-card">
          <div class="service-heading">
            <h2>${escapeHtml(marketplace.name)}</h2>
            <span>${escapeHtml(marketplace.subtitle)}</span>
          </div>
          ${renderOfficialLinks(marketplace)}
        </div>

        <div class="carrier-accordion-list">
          ${data.carriers.map((carrier) => renderCarrierGroup(marketplace, carrier)).join("")}
        </div>
      </section>
    `).join("");
  }

  function flattenMethods() {
    return data.methods.flatMap((method) => {
      if (!Array.isArray(method.sizeOptions)) return [{ ...method, displayName: method.name }];
      return method.sizeOptions.map((option) => ({
        ...method,
        id: option.id,
        displayName: `${method.name} ${option.size}`,
        price: option.price,
        optionWeight: option.weight,
        optionSizeDescription: option.sizeDescription,
        sizeOptions: undefined
      }));
    });
  }

  function renderComparison() {
    const methods = flattenMethods();

    comparisonSections.innerHTML = data.marketplaces.map((marketplace) => {
      const marketplaceMethods = methods.filter((method) => method.marketplaceId === marketplace.id);

      const carrierGroups = data.carriers.map((carrier) => {
        const carrierMethods = marketplaceMethods.filter((method) => method.carrierId === carrier.id);
        if (carrierMethods.length === 0) return "";

        const rows = carrierMethods.map((method) => {
          const weight = method.optionWeight || method.specs.find((spec) => spec.label === "重さ")?.value || "—";
          return `
            <tr>
              <td>${escapeHtml(method.displayName)}</td>
              <td>${yen(method.price)}</td>
              <td>${escapeHtml(weight)}</td>
              <td>${method.tags.includes("匿名配送") ? "○" : "—"}</td>
            </tr>
          `;
        }).join("");

        return `
          <details class="comparison-carrier-accordion">
            <summary>
              <span>${escapeHtml(carrier.icon)} ${escapeHtml(carrier.name)}</span>
              <small>${carrierMethods.length}件</small>
            </summary>
            <div class="comparison-wrap">
              <table class="comparison-table">
                <thead><tr><th>発送方法</th><th>送料</th><th>重さ</th><th>匿名</th></tr></thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </details>
        `;
      }).join("");

      return `
        <details class="comparison-service-accordion">
          <summary>
            <strong>${escapeHtml(marketplace.name)}</strong>
            <span>${marketplaceMethods.length}件</span>
          </summary>
          <div class="comparison-service-content">${carrierGroups}</div>
        </details>
      `;
    }).join("");
  }

  renderSummary();
  renderSections();
  renderComparison();
})();
