(function () {
  const page = document.body.dataset.page || "";
  const headerRoot = document.getElementById("siteHeader");
  const footerRoot = document.getElementById("siteFooter");

  const navItems = [
    { id: "home", href: "/", label: "ホーム" },
    { id: "profit", href: "/profit/", label: "利益計算" },
    { id: "shipping", href: "/shipping/", label: "送料一覧" },
    { id: "reverse", href: "/reverse/", label: "利益逆算" }
  ];

  if (headerRoot) {
    const homeBadge = '<span class="brand-badge">無料・登録不要</span>';

    headerRoot.innerHTML = `
      <header class="site-header">
        <div class="header-inner">
          <div class="brand-line">
            <a class="site-brand" href="/">フリマ便利ツール</a>
            ${homeBadge}
          </div>
          <nav class="site-nav" aria-label="主要メニュー">
            ${navItems.map((item) => `
              <a href="${item.href}" ${page === item.id ? 'aria-current="page"' : ''}>${item.label}</a>
            `).join("")}
          </nav>
        </div>
      </header>`;
  }

  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <nav class="footer-nav" aria-label="サイト情報">
            <a href="/about/">このサイトについて</a>
            <a href="/privacy/">プライバシーポリシー</a>
          </nav>
          <div>© <span data-current-year></span> フリマ便利ツール</div>
        </div>
      </footer>`;
  }

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
