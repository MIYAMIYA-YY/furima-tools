window.FURIMA_SHIPPING_DATA = {
  "carriers": [
    {
      "id": "japan_post",
      "name": "日本郵便系",
      "icon": "〒",
      "description": "郵便局・ローソン・郵便ポストなどから発送"
    },
    {
      "id": "yamato",
      "name": "ヤマト運輸系",
      "icon": "🚚",
      "description": "ヤマト営業所・コンビニなどから発送"
    }
  ],
  "marketplaces": [
    {
      "id": "mercari",
      "name": "メルカリ",
      "subtitle": "メルカリ便・全国一律"
    },
    {
      "id": "rakuma",
      "name": "ラクマ",
      "subtitle": "かんたんラクマパック"
    },
    {
      "id": "yahoo",
      "name": "Yahoo!フリマ",
      "subtitle": "おてがる配送"
    }
  ],
  "methods": [
    {
      "id": "mercari_yupacket_post_mini",
      "carrierId": "japan_post",
      "marketplaceId": "mercari",
      "name": "ゆうパケットポストmini",
      "price": 160,
      "tags": [
        "匿名配送",
        "ポスト投函",
        "専用封筒"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "専用封筒に入るもの"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "アクセサリー、トレカ、薄い小物などに向いています。専用封筒代は別途必要です。"
    },
    {
      "id": "mercari_yupacket_post",
      "carrierId": "japan_post",
      "marketplaceId": "mercari",
      "name": "ゆうパケットポスト",
      "price": 215,
      "tags": [
        "匿名配送",
        "ポスト投函"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "3辺合計60cm以内"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "本、衣類、コスメなどに使いやすい発送方法です。発送用シールまたは専用箱を使用します。"
    },
    {
      "id": "mercari_yupacket_plus",
      "carrierId": "japan_post",
      "marketplaceId": "mercari",
      "name": "ゆうパケットプラス",
      "price": 455,
      "tags": [
        "匿名配送",
        "専用箱"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "24×17×7cm以内"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "厚さ7cmまでの小物や衣類に向いています。専用箱代は別途必要です。"
    },
    {
      "id": "mercari_nekoposu",
      "carrierId": "yamato",
      "marketplaceId": "mercari",
      "name": "ネコポス",
      "price": 210,
      "tags": [
        "匿名配送",
        "追跡あり"
      ],
      "specs": [
        {
          "label": "厚さ",
          "value": "3cm以内"
        },
        {
          "label": "重さ",
          "value": "1kg以内"
        }
      ],
      "description": "薄手の衣類、本、スマホケースなど、厚さ3cm以内の商品向けです。"
    },
    {
      "id": "mercari_takkyubin_compact",
      "carrierId": "yamato",
      "marketplaceId": "mercari",
      "name": "宅急便コンパクト",
      "price": 450,
      "tags": [
        "匿名配送",
        "専用BOX"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "専用BOX"
        },
        {
          "label": "重さ",
          "value": "制限なし"
        }
      ],
      "description": "厚みのある小物、化粧品、小型家電などに便利です。専用BOX代は別途必要です。"
    },
    {
      "id": "rakuma_yupacket_post_mini",
      "carrierId": "japan_post",
      "marketplaceId": "rakuma",
      "name": "ゆうパケットポストmini",
      "price": 150,
      "tags": [
        "匿名配送",
        "ポスト投函",
        "専用封筒"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "専用封筒"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "小さく薄い商品向け。専用封筒代は別途必要です。"
    },
    {
      "id": "rakuma_yupacket_post",
      "carrierId": "japan_post",
      "marketplaceId": "rakuma",
      "name": "ゆうパケットポスト",
      "price": 175,
      "tags": [
        "匿名配送",
        "ポスト投函"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "3辺合計60cm以内"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "本、薄手の衣類、雑貨などに使いやすい発送方法です。"
    },
    {
      "id": "rakuma_yupacket_plus",
      "carrierId": "japan_post",
      "marketplaceId": "rakuma",
      "name": "ゆうパケットプラス",
      "price": 380,
      "tags": [
        "匿名配送",
        "専用箱"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "24×17×7cm以内"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "厚さ7cmまでの小物や衣類向けです。専用箱代は別途必要です。"
    },
    {
      "id": "rakuma_nekoposu",
      "carrierId": "yamato",
      "marketplaceId": "rakuma",
      "name": "ネコポス",
      "price": 200,
      "tags": [
        "匿名配送",
        "追跡あり"
      ],
      "specs": [
        {
          "label": "厚さ",
          "value": "3cm以内"
        },
        {
          "label": "重さ",
          "value": "1kg以内"
        }
      ],
      "description": "薄手の商品をヤマト運輸系の窓口から発送したいときに便利です。"
    },
    {
      "id": "rakuma_takkyubin_compact",
      "carrierId": "yamato",
      "marketplaceId": "rakuma",
      "name": "宅急便コンパクト",
      "price": 430,
      "tags": [
        "匿名配送",
        "専用BOX"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "専用BOX"
        },
        {
          "label": "重さ",
          "value": "制限なし"
        }
      ],
      "description": "小型でも厚みのある商品向けです。専用資材代が別途必要です。"
    },
    {
      "id": "yahoo_yupacket_post_mini",
      "carrierId": "japan_post",
      "marketplaceId": "yahoo",
      "name": "ゆうパケットポストmini",
      "price": 160,
      "tags": [
        "匿名配送",
        "ポスト投函",
        "専用封筒"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "専用封筒"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "アクセサリーや小物など、専用封筒に入る商品向けです。"
    },
    {
      "id": "yahoo_yupacket_post",
      "carrierId": "japan_post",
      "marketplaceId": "yahoo",
      "name": "ゆうパケットポスト",
      "price": 210,
      "tags": [
        "匿名配送",
        "ポスト投函"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "3辺合計60cm以内"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "本や薄手の衣類などに便利です。発送用シールまたは専用箱を利用します。"
    },
    {
      "id": "yahoo_yupacket",
      "carrierId": "japan_post",
      "marketplaceId": "yahoo",
      "name": "ゆうパケット",
      "price": 215,
      "tags": [
        "匿名配送",
        "郵便局・ローソン"
      ],
      "specs": [
        {
          "label": "厚さ",
          "value": "3cm以内"
        },
        {
          "label": "重さ",
          "value": "1kg以内"
        }
      ],
      "description": "A4程度の薄い商品に向いています。"
    },
    {
      "id": "yahoo_yupacket_plus",
      "carrierId": "japan_post",
      "marketplaceId": "yahoo",
      "name": "ゆうパケットプラス",
      "price": 410,
      "tags": [
        "匿名配送",
        "専用箱"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "24×17×7cm以内"
        },
        {
          "label": "重さ",
          "value": "2kg以内"
        }
      ],
      "description": "厚さ7cm以内の雑貨や衣類向けです。専用箱代は別途必要です。"
    },
    {
      "id": "yahoo_nekoposu",
      "carrierId": "yamato",
      "marketplaceId": "yahoo",
      "name": "ネコポス",
      "price": 210,
      "tags": [
        "匿名配送",
        "追跡あり"
      ],
      "specs": [
        {
          "label": "厚さ",
          "value": "3cm以内"
        },
        {
          "label": "重さ",
          "value": "1kg以内"
        }
      ],
      "description": "本、衣類、スマホケースなど薄い商品向けです。"
    },
    {
      "id": "yahoo_takkyubin_compact",
      "carrierId": "yamato",
      "marketplaceId": "yahoo",
      "name": "宅急便コンパクト（EAZY）",
      "price": 490,
      "tags": [
        "匿名配送",
        "専用BOX"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "専用BOX"
        },
        {
          "label": "重さ",
          "value": "制限なし"
        }
      ],
      "description": "小型でも厚みのある商品向けです。専用BOX代は別途必要です。"
    },
    {
      "id": "mercari_yupack",
      "carrierId": "japan_post",
      "marketplaceId": "mercari",
      "name": "ゆうパック",
      "tags": [
        "匿名配送",
        "全国一律"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "60〜170サイズ"
        },
        {
          "label": "重さ",
          "value": "一律25kg以内"
        }
      ],
      "description": "中型・大型の商品向けです。縦・横・高さの3辺合計に応じてサイズを選びます。",
      "sizeOptions": [
        {
          "id": "mercari_yupack_60",
          "size": "60サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が60cm以内",
          "weight": "25kg以内",
          "price": 750
        },
        {
          "id": "mercari_yupack_80",
          "size": "80サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が80cm以内",
          "weight": "25kg以内",
          "price": 870
        },
        {
          "id": "mercari_yupack_100",
          "size": "100サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が100cm以内",
          "weight": "25kg以内",
          "price": 1070
        },
        {
          "id": "mercari_yupack_120",
          "size": "120サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が120cm以内",
          "weight": "25kg以内",
          "price": 1200
        },
        {
          "id": "mercari_yupack_140",
          "size": "140サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が140cm以内",
          "weight": "25kg以内",
          "price": 1450
        },
        {
          "id": "mercari_yupack_160",
          "size": "160サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が160cm以内",
          "weight": "25kg以内",
          "price": 1700
        },
        {
          "id": "mercari_yupack_170",
          "size": "170サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が170cm以内",
          "weight": "25kg以内",
          "price": 1900
        }
      ]
    },
    {
      "id": "mercari_takkyubin",
      "carrierId": "yamato",
      "marketplaceId": "mercari",
      "name": "宅急便",
      "tags": [
        "匿名配送",
        "全国一律"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "60〜200サイズ"
        },
        {
          "label": "重さ",
          "value": "サイズごとに上限あり"
        }
      ],
      "description": "中型・大型の商品向けです。縦・横・高さの3辺合計と重さの両方を確認して選びます。",
      "sizeOptions": [
        {
          "id": "mercari_takkyubin_60",
          "size": "60サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が60cm以内",
          "weight": "2kg以内",
          "price": 750
        },
        {
          "id": "mercari_takkyubin_80",
          "size": "80サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が80cm以内",
          "weight": "5kg以内",
          "price": 850
        },
        {
          "id": "mercari_takkyubin_100",
          "size": "100サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が100cm以内",
          "weight": "10kg以内",
          "price": 1050
        },
        {
          "id": "mercari_takkyubin_120",
          "size": "120サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が120cm以内",
          "weight": "15kg以内",
          "price": 1200
        },
        {
          "id": "mercari_takkyubin_140",
          "size": "140サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が140cm以内",
          "weight": "20kg以内",
          "price": 1450
        },
        {
          "id": "mercari_takkyubin_160",
          "size": "160サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が160cm以内",
          "weight": "25kg以内",
          "price": 1700
        },
        {
          "id": "mercari_takkyubin_180",
          "size": "180サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が180cm以内",
          "weight": "30kg以内",
          "price": 2100
        },
        {
          "id": "mercari_takkyubin_200",
          "size": "200サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が200cm以内",
          "weight": "30kg以内",
          "price": 2500
        }
      ]
    },
    {
      "id": "rakuma_yupack",
      "carrierId": "japan_post",
      "marketplaceId": "rakuma",
      "name": "ゆうパック",
      "tags": [
        "匿名配送",
        "全国一律"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "60〜170サイズ"
        },
        {
          "label": "重さ",
          "value": "一律25kg以内"
        }
      ],
      "description": "中型・大型の商品向けです。縦・横・高さの3辺合計に応じてサイズを選びます。",
      "sizeOptions": [
        {
          "id": "rakuma_yupack_60",
          "size": "60サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が60cm以内",
          "weight": "25kg以内",
          "price": 700
        },
        {
          "id": "rakuma_yupack_80",
          "size": "80サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が80cm以内",
          "weight": "25kg以内",
          "price": 800
        },
        {
          "id": "rakuma_yupack_100",
          "size": "100サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が100cm以内",
          "weight": "25kg以内",
          "price": 1150
        },
        {
          "id": "rakuma_yupack_120",
          "size": "120サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が120cm以内",
          "weight": "25kg以内",
          "price": 1350
        },
        {
          "id": "rakuma_yupack_140",
          "size": "140サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が140cm以内",
          "weight": "25kg以内",
          "price": 1500
        },
        {
          "id": "rakuma_yupack_160",
          "size": "160サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が160cm以内",
          "weight": "25kg以内",
          "price": 1500
        },
        {
          "id": "rakuma_yupack_170",
          "size": "170サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が170cm以内",
          "weight": "25kg以内",
          "price": 1500
        }
      ]
    },
    {
      "id": "rakuma_takkyubin",
      "carrierId": "yamato",
      "marketplaceId": "rakuma",
      "name": "宅急便",
      "tags": [
        "匿名配送",
        "全国一律"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "60〜200サイズ"
        },
        {
          "label": "重さ",
          "value": "サイズごとに上限あり"
        }
      ],
      "description": "中型・大型の商品向けです。縦・横・高さの3辺合計と重さの両方を確認して選びます。",
      "sizeOptions": [
        {
          "id": "rakuma_takkyubin_60",
          "size": "60サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が60cm以内",
          "weight": "2kg以内",
          "price": 650
        },
        {
          "id": "rakuma_takkyubin_80",
          "size": "80サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が80cm以内",
          "weight": "5kg以内",
          "price": 750
        },
        {
          "id": "rakuma_takkyubin_100",
          "size": "100サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が100cm以内",
          "weight": "10kg以内",
          "price": 1050
        },
        {
          "id": "rakuma_takkyubin_120",
          "size": "120サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が120cm以内",
          "weight": "15kg以内",
          "price": 1200
        },
        {
          "id": "rakuma_takkyubin_140",
          "size": "140サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が140cm以内",
          "weight": "20kg以内",
          "price": 1400
        },
        {
          "id": "rakuma_takkyubin_160",
          "size": "160サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が160cm以内",
          "weight": "25kg以内",
          "price": 1500
        },
        {
          "id": "rakuma_takkyubin_180",
          "size": "180サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が180cm以内",
          "weight": "30kg以内",
          "price": 2800
        },
        {
          "id": "rakuma_takkyubin_200",
          "size": "200サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が200cm以内",
          "weight": "30kg以内",
          "price": 3350
        }
      ]
    },
    {
      "id": "yahoo_yupack",
      "carrierId": "japan_post",
      "marketplaceId": "yahoo",
      "name": "ゆうパック",
      "tags": [
        "匿名配送",
        "全国一律"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "60〜170サイズ"
        },
        {
          "label": "重さ",
          "value": "一律25kg以内"
        }
      ],
      "description": "中型・大型の商品向けです。縦・横・高さの3辺合計に応じてサイズを選びます。",
      "sizeOptions": [
        {
          "id": "yahoo_yupack_60",
          "size": "60サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が60cm以内",
          "weight": "25kg以内",
          "price": 750
        },
        {
          "id": "yahoo_yupack_80",
          "size": "80サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が80cm以内",
          "weight": "25kg以内",
          "price": 850
        },
        {
          "id": "yahoo_yupack_100",
          "size": "100サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が100cm以内",
          "weight": "25kg以内",
          "price": 1050
        },
        {
          "id": "yahoo_yupack_120",
          "size": "120サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が120cm以内",
          "weight": "25kg以内",
          "price": 1200
        },
        {
          "id": "yahoo_yupack_140",
          "size": "140サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が140cm以内",
          "weight": "25kg以内",
          "price": 1400
        },
        {
          "id": "yahoo_yupack_160",
          "size": "160サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が160cm以内",
          "weight": "25kg以内",
          "price": 1700
        },
        {
          "id": "yahoo_yupack_170",
          "size": "170サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が170cm以内",
          "weight": "25kg以内",
          "price": 1900
        }
      ]
    },
    {
      "id": "yahoo_takkyubin",
      "carrierId": "yamato",
      "marketplaceId": "yahoo",
      "name": "宅急便（EAZY）",
      "tags": [
        "匿名配送",
        "全国一律"
      ],
      "specs": [
        {
          "label": "サイズ",
          "value": "60〜200サイズ"
        },
        {
          "label": "重さ",
          "value": "サイズごとに上限あり"
        }
      ],
      "description": "中型・大型の商品向けです。縦・横・高さの3辺合計と重さの両方を確認して選びます。",
      "sizeOptions": [
        {
          "id": "yahoo_takkyubin_60",
          "size": "60サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が60cm以内",
          "weight": "2kg以内",
          "price": 750
        },
        {
          "id": "yahoo_takkyubin_80",
          "size": "80サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が80cm以内",
          "weight": "5kg以内",
          "price": 850
        },
        {
          "id": "yahoo_takkyubin_100",
          "size": "100サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が100cm以内",
          "weight": "10kg以内",
          "price": 1050
        },
        {
          "id": "yahoo_takkyubin_120",
          "size": "120サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が120cm以内",
          "weight": "15kg以内",
          "price": 1200
        },
        {
          "id": "yahoo_takkyubin_140",
          "size": "140サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が140cm以内",
          "weight": "20kg以内",
          "price": 1400
        },
        {
          "id": "yahoo_takkyubin_160",
          "size": "160サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が160cm以内",
          "weight": "25kg以内",
          "price": 1700
        },
        {
          "id": "yahoo_takkyubin_180",
          "size": "180サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が180cm以内",
          "weight": "30kg以内",
          "price": 2100
        },
        {
          "id": "yahoo_takkyubin_200",
          "size": "200サイズ",
          "sizeDescription": "縦・横・高さの3辺合計が200cm以内",
          "weight": "30kg以内",
          "price": 2500
        }
      ]
    }
  ],
  "lastVerified": "2026-07-31"
};
