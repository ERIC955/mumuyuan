import { defineStore } from 'pinia'

import axios from 'axios'
const url = 'http://localhost:3000'

export default defineStore('menu', {
  state: () => ({
    json: { combo: [] },
    products: [
      {
        productName: '玉米筍',
        category: 6,
        image: '/木木苑食材修圖/01.jpg',
        count: 10,
        price: '52',
        description: '清爽的口感。',
        isLook: false,
        id: 1
      },
      {
        productName: '豬五花蔥捲',
        category: 2,
        image: '/木木苑食材修圖/02.jpg',
        count: '15',
        price: '61',
        description: '美味五花豬與香蔥完美捲合，炭烤後散發香氣，串烤風味，口感豐富。',
        isLook: true,
        id: 2
      },
      {
        productName: '鯛魚下巴',
        category: 4,
        image: '/木木苑食材修圖/03.jpg',
        count: 10,
        price: 45,
        description: '肥美多汁，入口脆嫩香。',
        isLook: false,
        id: 3
      },
      {
        productName: '梅花豬',
        category: 3,
        image: '/木木苑食材修圖/04.jpg',
        count: 10,
        price: '56',
        description: '梅花豬串燒，細膩肉質，香氣撲鼻。',
        isLook: false,
        id: 4
      },
      {
        productName: '豬五花',
        category: 3,
        image: '/木木苑食材修圖/05.jpg',
        count: 10,
        price: 45,
        description: '豬五花串燒，脂肪分佈均勻，香氣宜人。',
        isLook: false,
        id: 5
      },
      {
        productName: '牛五花',
        category: 3,
        image: '/木木苑食材修圖/06.jpg',
        count: 10,
        price: 45,
        description: '頂級牛五花串燒，油花豐富，香氣誘人',
        isLook: false,
        id: 6
      },
      {
        productName: '牛小排',
        category: 3,
        image: '/木木苑食材修圖/07.jpg',
        count: 10,
        price: 45,
        description: '鮮嫩牛小排，厚切串燒。',
        isLook: false,
        id: 7
      },
      {
        productName: '剝皮辣椒豬捲',
        category: 2,
        image: '/木木苑食材修圖/45.jpg',
        count: 10,
        price: 45,
        description: '剝皮辣椒辣甜脆，搭豬五花香醇油脂，串烤完美組合，美味滿溢解膩。',
        isLook: false,
        id: 8
      },
      {
        productName: '番茄牛肉捲',
        category: 2,
        image: '/木木苑食材修圖/09.jpg',
        count: 10,
        price: 45,
        description: '新鮮番茄牛肉捲，口感多汁香甜。',
        isLook: false,
        id: 9
      },
      {
        productName: '鴨肉串',
        category: 3,
        image: '/木木苑食材修圖/10.jpg',
        count: 10,
        price: 39,
        description: '鴨肉串燒，外脆內嫩，帶有獨特鴨香。',
        isLook: false,
        id: 10
      },
      {
        productName: '醬烤雞心',
        category: 5,
        image: '/木木苑食材修圖/11.jpg',
        count: 10,
        price: 35,
        description: '嚴選雞心，搭配獨特醬汁烤製，口感鮮嫩多汁，香氣四溢，美味迷人。',
        isLook: false,
        id: 11
      },
      {
        productName: '醬烤雞胗',
        category: 5,
        image: '/木木苑食材修圖/12.jpg',
        count: 10,
        price: 35,
        description: '嫩滑雞胗搭配特製醬汁烤製，口感鮮美，風味獨特，令人愛不釋手。',
        isLook: false,
        id: 12
      },
      {
        productName: '干貝牛肉捲',
        category: 2,
        image: '/木木苑食材修圖/14.jpg',
        count: 10,
        price: 45,
        description: '鮮嫩干貝與精選牛肉完美卷裹，獨特風味，串烤中的極致美味。',
        isLook: false,
        id: 13
      },
      {
        productName: '鳳梨蝦球',
        category: 4,
        image: '/木木苑食材修圖/15.jpg',
        count: 10,
        price: 49,
        description: '鳳梨香氣搭配鮮嫩蝦球，串烤中的甜蜜風味。',
        isLook: false,
        id: 14
      },
      {
        productName: '櫛瓜',
        category: 6,
        image: '/木木苑食材修圖/16.jpg',
        count: 10,
        price: 35,
        description: '受歡迎的櫛瓜，清新脆爽，口感令人愉悅，美味無比',
        isLook: false,
        id: 15
      },
      {
        productName: '椒鹽肥腸',
        category: 5,
        image: '/木木苑食材修圖/17.jpg',
        count: 10,
        price: 45,
        description: '肥腸酥脆，搭配椒鹽調味，美味中帶有獨特風味，令人回味無窮。',
        isLook: false,
        id: 16
      },
      {
        productName: '鹽烤白蝦',
        category: 4,
        image: '/木木苑食材修圖/43.jpg',
        count: 10,
        price: 79,
        description: '蝦肉鮮嫩，鹽烤風味簡約鮮美。',
        isLook: false,
        id: 17
      },
      {
        productName: '雞肉串',
        category: 3,
        image: '/木木苑食材修圖/20.jpg',
        count: 10,
        price: 39,
        description: '串烤店經典之選，香烤雞肉串，肉質鮮嫩，串燒炭火風味，絕對令人愛不釋手。',
        isLook: false,
        id: 18
      },
      {
        productName: '黃金雞翅',
        category: 5,
        image: '/木木苑食材修圖/21.jpg',
        count: 10,
        price: 35,
        description: '外皮香脆如金，內裡多汁嫩滑，烤製至完美黃金色澤，美味令人難以抗拒。',
        isLook: false,
        id: 19
      },
      {
        productName: '深海章魚足',
        category: 4,
        image: '/木木苑食材修圖/22.jpg',
        count: 10,
        price: 89,
        description: '彈牙的食感，散發深海鮮美。',
        isLook: false,
        id: 20
      },
      {
        productName: '茄子',
        category: 6,
        image: '/木木苑食材修圖/23.jpg',
        count: 10,
        price: 25,
        description: '外酥內嫩，口感豐富，串烤中的濃郁風味。',
        isLook: false,
        id: 21
      },
      {
        productName: '杏鮑菇',
        category: 6,
        image: '/木木苑食材修圖/46.jpg',
        count: 10,
        price: 30,
        description: '口感層次豐富。',
        isLook: false,
        id: 22
      },
      {
        productName: '四季豆',
        category: 6,
        image: '/木木苑食材修圖/25.jpg',
        count: 10,
        price: 30,
        description: '有淡淡甜味，串烤中的清新口感。',
        isLook: false,
        id: 23
      },
      {
        productName: '筊白筍',
        category: 6,
        image: '/木木苑食材修圖/26.jpg',
        count: 10,
        price: 35,
        description: '有淡淡甜味，串烤中的清新口感。',
        isLook: false,
        id: 24
      },
      {
        productName: '洋蔥',
        category: 6,
        image: '/木木苑食材修圖/27.jpg',
        count: 10,
        price: 25,
        description: '外脆內嫩，帶有淡淡甜味，串烤中的清新美味。',
        isLook: false,
        id: 25
      },
      {
        productName: '香菇',
        category: 6,
        image: '/木木苑食材修圖/28.jpg',
        count: 10,
        price: 35,
        description: '帶有香菇獨特的濃郁風味，串烤中的美味享受。',
        isLook: false,
        id: 26
      },
      {
        productName: '明太子山藥',
        category: 6,
        image: '/木木苑食材修圖/30.jpg',
        count: 10,
        price: 35,
        description: '山藥香氣搭配明太子風味，串烤中的獨特美味。',
        isLook: false,
        id: 27
      },
      {
        productName: '香腸',
        category: 7,
        image: '/木木苑食材修圖/31.jpg',
        count: 10,
        price: 35,
        description: '淡淡的煙熏味，有嚼勁，散發出濃鬱的肉香',
        isLook: false,
        id: 28
      },
      {
        productName: '燒烤麻糬',
        category: 7,
        image: '/木木苑食材修圖/32.jpg',
        count: 10,
        price: 35,
        description: '散發濃厚糯米香，米香十足！',
        isLook: false,
        id: 29
      },
      {
        productName: '龍蝦沙拉',
        category: 7,
        image: '/木木苑食材修圖/33.jpg',
        count: 10,
        price: 35,
        description: '口感Q彈的丸子，搭配龍蝦沙拉，清爽美味。',
        isLook: false,
        id: 30
      },
      {
        productName: '香酥雞皮',
        category: 5,
        image: '/木木苑食材修圖/34.jpg',
        count: 10,
        price: 35,
        description: '外層金黃酥脆，咬下即化，宛如餅乾般的香濃口感。',
        isLook: false,
        id: 31
      },
      {
        productName: '七里香',
        category: 5,
        image: '/木木苑食材修圖/35.jpg',
        count: 10,
        price: 35,
        description: '台灣經典小吃，香氣四溢，口感酥脆，讓人愛不釋手的美味。',
        isLook: false,
        id: 32
      },
      {
        productName: '帝王蟹味棒',
        category: 7,
        image: '/木木苑食材修圖/36.jpg',
        count: 10,
        price: 49,
        description: '濃郁帝王蟹風味，肉質鮮嫩，外皮酥脆，如同享受皇室美味一般。',
        isLook: false,
        id: 33
      },
      {
        productName: '花椰菜',
        category: 6,
        image: '/木木苑食材修圖/37.jpg',
        count: 10,
        price: 35,
        description: '有淡淡甜味，串烤中的清新口感。',
        isLook: false,
        id: 34
      },
      {
        productName: '青椒',
        category: 6,
        image: '/木木苑食材修圖/39.jpg',
        count: 10,
        price: 25,
        description: '口感脆嫩、清新。',
        isLook: false,
        id: 35
      },
      {
        productName: '紅龜粿',
        category: 7,
        image: '/木木苑食材修圖/40.jpg',
        count: 10,
        price: 35,
        description: '外皮紅潤糯滑，經烤製後更添焦香脆感，風味獨特，口感豐富。',
        isLook: false,
        id: 36
      },
      {
        productName: '生食級干貝',
        category: 4,
        image: '/木木苑食材修圖/41.jpg',
        count: 10,
        price: 99,
        description: '簡單調味，享受干貝原味。',
        isLook: false,
        id: 37
      },
      {
        productName: '玉米',
        category: 6,
        image: '/木木苑食材修圖/42.jpg',
        count: 10,
        price: 39,
        description: '粒粒飽滿，帶有烤香，串烤中的自然甜美。',
        isLook: false,
        id: 38
      },
      {
        productName: '牛五花蔥捲',
        category: 2,
        image: '/木木苑食材修圖/44.jpg',
        count: 10,
        price: 45,
        description: '牛五花與蔥巧妙交融，肉嫩蔥香，串烤的極致享受。',
        isLook: false,
        id: 39
      }
    ]
  }),
  actions: {    
    getProducts() {
      this.$axios
        .get(`/products`)
        .then((res) => {
          this.products = res.data
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => {
        b.price - a.price
      })
    }
  }
})

// 取資料
function getData(categoryId) {
  axios
    .get(`${url}/products?category=${categoryId}`)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
    })
}
