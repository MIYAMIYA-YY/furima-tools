window.FURIMA_SHIPPING_DATA = {
  marketplaces: [
    { id: "mercari", name: "メルカリ", subtitle: "メルカリ便・全国一律" },
    { id: "rakuma", name: "ラクマ", subtitle: "かんたんラクマパック" },
    { id: "yahoo", name: "Yahoo!フリマ", subtitle: "おてがる配送" }
  ],
  methods: [
    {
      id: "mercari_yupacket_post_mini", marketplaceId: "mercari", name: "ゆうパケットポストmini", price: 160,
      tags: ["匿名配送", "ポスト投函", "専用封筒"],
      specs: [{ label: "サイズ", value: "専用封筒に入るもの" }, { label: "重さ", value: "2kg以内" }],
      description: "アクセサリー、トレカ、薄い小物などに向いています。専用封筒代は別途必要です。"
    },
    {
      id: "mercari_yupacket_post", marketplaceId: "mercari", name: "ゆうパケットポスト", price: 215,
      tags: ["匿名配送", "ポスト投函"],
      specs: [{ label: "サイズ", value: "3辺合計60cm以内" }, { label: "重さ", value: "2kg以内" }],
      description: "本、衣類、コスメなどに使いやすい発送方法です。発送用シールまたは専用箱を使用します。"
    },
    {
      id: "mercari_nekoposu", marketplaceId: "mercari", name: "ネコポス", price: 210,
      tags: ["匿名配送", "追跡あり"],
      specs: [{ label: "厚さ", value: "3cm以内" }, { label: "重さ", value: "1kg以内" }],
      description: "薄手の衣類、本、スマホケースなど、厚さ3cm以内の商品向けです。"
    },
    {
      id: "mercari_takkyubin_compact", marketplaceId: "mercari", name: "宅急便コンパクト", price: 450,
      tags: ["匿名配送", "専用BOX"],
      specs: [{ label: "サイズ", value: "専用BOX" }, { label: "重さ", value: "制限なし" }],
      description: "厚みのある小物、化粧品、小型家電などに便利です。専用BOX代は別途必要です。"
    },
    {
      id: "mercari_yupacket_plus", marketplaceId: "mercari", name: "ゆうパケットプラス", price: 455,
      tags: ["匿名配送", "専用箱"],
      specs: [{ label: "サイズ", value: "24×17×7cm以内" }, { label: "重さ", value: "2kg以内" }],
      description: "厚さ7cmまでの小物や衣類に向いています。専用箱代は別途必要です。"
    },
    {
      id: "rakuma_yupacket_post_mini", marketplaceId: "rakuma", name: "ゆうパケットポストmini", price: 150,
      tags: ["匿名配送", "ポスト投函", "専用封筒"],
      specs: [{ label: "サイズ", value: "専用封筒" }, { label: "重さ", value: "2kg以内" }],
      description: "小さく薄い商品向け。専用封筒代は別途必要です。"
    },
    {
      id: "rakuma_yupacket_post", marketplaceId: "rakuma", name: "ゆうパケットポスト", price: 175,
      tags: ["匿名配送", "ポスト投函"],
      specs: [{ label: "サイズ", value: "3辺合計60cm以内" }, { label: "重さ", value: "2kg以内" }],
      description: "本、薄手の衣類、雑貨などに使いやすい発送方法です。"
    },
    {
      id: "rakuma_nekoposu", marketplaceId: "rakuma", name: "ネコポス", price: 200,
      tags: ["匿名配送", "追跡あり"],
      specs: [{ label: "厚さ", value: "3cm以内" }, { label: "重さ", value: "1kg以内" }],
      description: "薄手の商品をヤマト運輸系の窓口から発送したいときに便利です。"
    },
    {
      id: "rakuma_takkyubin_compact", marketplaceId: "rakuma", name: "宅急便コンパクト", price: 430,
      tags: ["匿名配送", "専用BOX"],
      specs: [{ label: "サイズ", value: "専用BOX" }, { label: "重さ", value: "制限なし" }],
      description: "小型でも厚みのある商品向けです。専用資材代が別途必要です。"
    },
    {
      id: "yahoo_yupacket_post_mini", marketplaceId: "yahoo", name: "ゆうパケットポストmini", price: 160,
      tags: ["匿名配送", "ポスト投函", "専用封筒"],
      specs: [{ label: "サイズ", value: "専用封筒" }, { label: "重さ", value: "2kg以内" }],
      description: "アクセサリーや小物など、専用封筒に入る商品向けです。"
    },
    {
      id: "yahoo_yupacket_post", marketplaceId: "yahoo", name: "ゆうパケットポスト", price: 210,
      tags: ["匿名配送", "ポスト投函"],
      specs: [{ label: "サイズ", value: "3辺合計60cm以内" }, { label: "重さ", value: "2kg以内" }],
      description: "本や薄手の衣類などに便利です。発送用シールまたは専用箱を利用します。"
    },
    {
      id: "yahoo_yupacket", marketplaceId: "yahoo", name: "ゆうパケット", price: 215,
      tags: ["匿名配送", "郵便局・ローソン"],
      specs: [{ label: "厚さ", value: "3cm以内" }, { label: "重さ", value: "1kg以内" }],
      description: "A4程度の薄い商品に向いています。"
    },
    {
      id: "yahoo_nekoposu", marketplaceId: "yahoo", name: "ネコポス", price: 210,
      tags: ["匿名配送", "追跡あり"],
      specs: [{ label: "厚さ", value: "3cm以内" }, { label: "重さ", value: "1kg以内" }],
      description: "本、衣類、スマホケースなど薄い商品向けです。"
    },
    {
      id: "yahoo_yupacket_plus", marketplaceId: "yahoo", name: "ゆうパケットプラス", price: 410,
      tags: ["匿名配送", "専用箱"],
      specs: [{ label: "サイズ", value: "24×17×7cm以内" }, { label: "重さ", value: "2kg以内" }],
      description: "厚さ7cm以内の雑貨や衣類向けです。専用箱代は別途必要です。"
    },
    {
      id: "yahoo_takkyubin_compact", marketplaceId: "yahoo", name: "宅急便コンパクト（EAZY）", price: 490,
      tags: ["匿名配送", "専用BOX"],
      specs: [{ label: "サイズ", value: "専用BOX" }, { label: "重さ", value: "制限なし" }],
      description: "小型でも厚みのある商品向けです。専用BOX代は別途必要です。"
    }
  ]
};
