(function () {
  const data = window.FURIMA_SHIPPING_DATA;
  const el = {
    marketplace: document.getElementById("reverseMarketplace"),
    targetProfit: document.getElementById("targetProfit"),
    costPrice: document.getElementById("reverseCostPrice"),
    feeRate: document.getElementById("reverseFeeRate"),
    shippingMethod: document.getElementById("reverseShippingMethod"),
    shippingCost: document.getElementById("reverseShippingCost"),
    otherCost: document.getElementById("reverseOtherCost"),
    requiredSalePrice: document.getElementById("requiredSalePrice"),
    feeAmount: document.getElementById("reverseFeeAmount"),
    actualProfit: document.getElementById("reverseActualProfit"),
    resetButton: document.getElementById("reverseResetButton")
  };

  const yen = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 });
  const value = (input) => Math.max(0, Number(input.value) || 0);

  function methods() {
    return data.methods.flatMap((method) => Array.isArray(method.sizeOptions)
      ? method.sizeOptions.map((option) => ({ id: option.id, marketplaceId: method.marketplaceId, label: `${method.name} ${option.size}（${option.sizeDescription}・${option.weight}）`, price: option.price }))
      : [{ id: method.id, marketplaceId: method.marketplaceId, label: method.name, price: method.price }]);
  }

  function renderMarketplaces() {
    el.marketplace.innerHTML = data.marketplaces.map((item) => `<option value="${item.id}">${item.name}</option>`).join("");
  }

  function renderShipping() {
    const list = methods().filter((item) => item.marketplaceId === el.marketplace.value);
    el.shippingMethod.innerHTML = [
      '<option value="none">送料なし・購入者負担（0円）</option>',
      ...list.map((item) => `<option value="${item.id}" data-price="${item.price}">${item.label}（${item.price.toLocaleString("ja-JP")}円）</option>`),
      '<option value="custom">宅急便・ゆうパック・その他（手入力）</option>'
    ].join("");
    updateShipping();
  }

  function updateShipping() {
    const selected = el.shippingMethod.selectedOptions[0];
    const custom = el.shippingMethod.value === "custom";
    el.shippingCost.disabled = !custom;
    if (el.shippingMethod.value === "none") el.shippingCost.value = "0";
    else if (!custom) el.shippingCost.value = selected?.dataset.price || "0";
    else if (el.shippingCost.value === "0") el.shippingCost.value = "";
  }

  function calculate() {
    const target = value(el.targetProfit);
    const cost = value(el.costPrice);
    const rate = Math.min(value(el.feeRate), 99.9) / 100;
    const shipping = value(el.shippingCost);
    const other = value(el.otherCost);
    const fixed = target + cost + shipping + other;

    let sale = rate < 1 ? Math.ceil(fixed / (1 - rate)) : 0;
    while (sale > 0 && sale - Math.floor(sale * rate) - cost - shipping - other < target) sale += 1;

    const fee = Math.floor(sale * rate);
    const actual = sale - fee - cost - shipping - other;
    el.requiredSalePrice.textContent = yen.format(sale);
    el.feeAmount.textContent = yen.format(fee);
    el.actualProfit.textContent = yen.format(actual);
  }

  [el.targetProfit, el.costPrice, el.feeRate, el.shippingCost, el.otherCost].forEach((input) => input.addEventListener("input", calculate));
  el.marketplace.addEventListener("change", () => { renderShipping(); calculate(); });
  el.shippingMethod.addEventListener("change", () => { updateShipping(); calculate(); if (el.shippingMethod.value === "custom") el.shippingCost.focus(); });
  el.resetButton.addEventListener("click", () => {
    el.marketplace.value = "mercari";
    el.targetProfit.value = "";
    el.costPrice.value = "";
    el.feeRate.value = "10";
    el.otherCost.value = "0";
    renderShipping();
    calculate();
    el.targetProfit.focus();
  });

  renderMarketplaces();
  el.marketplace.value = "mercari";
  renderShipping();
  calculate();
})();
