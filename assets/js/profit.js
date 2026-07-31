(function () {
  const data = window.FURIMA_SHIPPING_DATA;
  const STORAGE_KEY = "fleamarket-profit-calculator-v2";

  const elements = {
    salePrice: document.getElementById("salePrice"),
    costPrice: document.getElementById("costPrice"),
    feeRate: document.getElementById("feeRate"),
    marketplace: document.getElementById("marketplace"),
    shippingMethod: document.getElementById("shippingMethod"),
    shippingCost: document.getElementById("shippingCost"),
    otherCost: document.getElementById("otherCost"),
    profit: document.getElementById("profit"),
    marginText: document.getElementById("marginText"),
    feeAmount: document.getElementById("feeAmount"),
    shippingAmount: document.getElementById("shippingAmount"),
    otherCostAmount: document.getElementById("otherCostAmount"),
    totalCost: document.getElementById("totalCost"),
    resetButton: document.getElementById("resetButton")
  };

  const yen = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  });

  function numberValue(input) {
    const value = Number(input.value);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  }

  function marketplaceExists(id) {
    return data.marketplaces.some((marketplace) => marketplace.id === id);
  }

  function flattenedMethods() {
    return data.methods.flatMap((method) => {
      if (!Array.isArray(method.sizeOptions)) {
        return [{ ...method, displayName: method.name }];
      }

      return method.sizeOptions.map((option) => ({
        id: option.id,
        marketplaceId: method.marketplaceId,
        carrierId: method.carrierId,
        name: method.name,
        displayName: `${method.name} ${option.size}（${option.sizeDescription}・${option.weight}）`,
        price: option.price
      }));
    });
  }

  function methodById(id) {
    return flattenedMethods().find((method) => method.id === id);
  }

  function methodsForMarketplace(marketplaceId) {
    return flattenedMethods().filter((method) => method.marketplaceId === marketplaceId);
  }

  function renderMarketplaceOptions() {
    elements.marketplace.innerHTML = data.marketplaces.map((marketplace) =>
      `<option value="${marketplace.id}">${marketplace.name}</option>`
    ).join("");
  }

  function renderShippingOptions(selectedMethodId = "") {
    const methods = methodsForMarketplace(elements.marketplace.value);
    const options = [
      '<option value="none">送料なし・購入者負担（0円）</option>',
      ...methods.map((method) => `<option value="${method.id}">${method.displayName}（${method.price.toLocaleString("ja-JP")}円）</option>`),
      '<option value="custom">宅急便・ゆうパック・その他（手入力）</option>'
    ];
    elements.shippingMethod.innerHTML = options.join("");

    const validSelection = selectedMethodId === "none" || selectedMethodId === "custom" || methods.some((method) => method.id === selectedMethodId);
    elements.shippingMethod.value = validSelection ? selectedMethodId : "none";
    updateShippingCost();
  }

  function updateShippingCost() {
    const selected = elements.shippingMethod.value;
    const isCustom = selected === "custom";
    elements.shippingCost.disabled = !isCustom;

    if (selected === "none") {
      elements.shippingCost.value = "0";
    } else if (!isCustom) {
      const method = methodById(selected);
      elements.shippingCost.value = method ? String(method.price) : "0";
    } else if (elements.shippingCost.value === "0") {
      elements.shippingCost.value = "";
    }
  }

  function saveInputs() {
    const payload = {
      salePrice: elements.salePrice.value,
      costPrice: elements.costPrice.value,
      feeRate: elements.feeRate.value,
      marketplace: elements.marketplace.value,
      shippingMethod: elements.shippingMethod.value,
      shippingCost: elements.shippingCost.value,
      otherCost: elements.otherCost.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  function calculate() {
    const salePrice = numberValue(elements.salePrice);
    const costPrice = numberValue(elements.costPrice);
    const feeRate = Math.min(numberValue(elements.feeRate), 100);
    const shippingCost = numberValue(elements.shippingCost);
    const otherCost = numberValue(elements.otherCost);

    const feeAmount = Math.floor(salePrice * feeRate / 100);
    const totalCost = costPrice + feeAmount + shippingCost + otherCost;
    const profit = salePrice - totalCost;
    const margin = salePrice > 0 ? profit / salePrice * 100 : 0;

    elements.profit.textContent = yen.format(profit);
    elements.profit.classList.toggle("negative", profit < 0);
    elements.marginText.textContent = `利益率 ${margin.toFixed(1)}%`;
    elements.feeAmount.textContent = yen.format(feeAmount);
    elements.shippingAmount.textContent = yen.format(shippingCost);
    elements.otherCostAmount.textContent = yen.format(otherCost);
    elements.totalCost.textContent = yen.format(totalCost);
    saveInputs();
  }

  function readSavedInputs() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    try {
      return JSON.parse(raw) || {};
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
  }

  function readQuerySelection() {
    const params = new URLSearchParams(window.location.search);
    const marketplaceId = params.get("marketplace") || "";
    const shippingId = params.get("shipping") || "";
    const method = methodById(shippingId);

    if (method) {
      return { marketplace: method.marketplaceId, shippingMethod: method.id };
    }

    if (marketplaceExists(marketplaceId)) {
      return { marketplace: marketplaceId, shippingMethod: "none" };
    }

    return {};
  }

  function initialize() {
    renderMarketplaceOptions();
    const saved = readSavedInputs();
    const query = readQuerySelection();
    const state = { ...saved, ...query };

    elements.salePrice.value = state.salePrice ?? "";
    elements.costPrice.value = state.costPrice ?? "";
    elements.feeRate.value = state.feeRate ?? "10";
    elements.marketplace.value = marketplaceExists(state.marketplace) ? state.marketplace : "mercari";
    elements.otherCost.value = state.otherCost ?? "0";
    elements.shippingCost.value = state.shippingCost ?? "0";

    renderShippingOptions(state.shippingMethod || "none");

    if (elements.shippingMethod.value === "custom" && state.shippingCost !== undefined) {
      elements.shippingCost.value = state.shippingCost;
    }

    calculate();
  }

  function resetInputs() {
    elements.salePrice.value = "";
    elements.costPrice.value = "";
    elements.feeRate.value = "10";
    elements.marketplace.value = "mercari";
    elements.otherCost.value = "0";
    elements.shippingCost.value = "0";
    renderShippingOptions("none");
    localStorage.removeItem(STORAGE_KEY);
    calculate();
    elements.salePrice.focus();
  }

  [elements.salePrice, elements.costPrice, elements.feeRate, elements.shippingCost, elements.otherCost]
    .forEach((input) => input.addEventListener("input", calculate));

  elements.marketplace.addEventListener("change", () => {
    renderShippingOptions("none");
    calculate();
  });

  elements.shippingMethod.addEventListener("change", () => {
    updateShippingCost();
    calculate();
    if (elements.shippingMethod.value === "custom") elements.shippingCost.focus();
  });

  elements.resetButton.addEventListener("click", resetInputs);
  initialize();
})();
