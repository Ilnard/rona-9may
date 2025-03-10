// Заполнение каталога
const catalog = document.querySelector('.catalog__products')
const catalogData = [
    {
        id: null,
        title: 'Российский флаг',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-rossii-trikolor-paf-101/flagi_8-optimized.png',
        price: 3500,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Флаг России с гербом',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-rossii-s-gerbom-paf-102/flagi_1-optimized.png',
        price: 3500,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Флаг «Знамя Победы»',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-znamya-pobedy-paf-103/flagi_3-1000x843-optimized.png',
        price: 3200,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Флаг «Георгиевская лента»',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-georgievskaya-lenta-paf-104/flagi_4-1000x843-optimized.png',
        price: 3000,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Флаг «9 мая»',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-9-maya-paf-105/flagi_5-1000x843-optimized.png',
        price: 3000,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Флаг «1941-1945»',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-1941-1945-paf-106/flagi_6-1000x843-optimized.png',
        price: 3000,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Флаг «За Победу георгиевский»',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-za-pobedu-georgievskij-paf-107/flagi_7-1000x843-optimized.png',
        price: 3000,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Флаг «CCCP»',
        category: 'Флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flag-cccp-paf-108/flagi_2-1000x843-optimized.png',
        price: 3000,
        materials: ['Полиэфирный шелк', 'Карман под древко'],
        size: [
            {
                title: 'Высота',
                value: '0,9 м'
            },
            {
                title: 'Ширина',
                value: '1,35 м'
            }
        ],
    },
    {
        id: null,
        title: 'Древко металлическое 1,5 м',
        category: 'Древко под флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/drevko-metallicheskoe-paf-115/drevko_metal-optimized.jpg',
        price: 1000,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Длина',
                value: '1,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Древко металлическое 2 м',
        category: 'Древко под флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/drevko-metallicheskoe-paf-115/drevko_metal-optimized.jpg',
        price: 1800,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Длина',
                value: '2 м'
            },
        ],
    },
    {
        id: null,
        title: 'Древко металлическое 3 м',
        category: 'Древко под флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/drevko-metallicheskoe-paf-115/drevko_metal-optimized.jpg',
        price: 2700,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Длина',
                value: '3 м'
            },
        ],
    },
    {
        id: null,
        title: 'Древко пластик',
        category: 'Древко под флаг',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/drevko-plastik-paf-118/drevko_plast-439x293-optimized.jpg',
        price: 600,
        materials: ['Прочный пластик'],
        size: [
            {
                title: 'Длина',
                value: '3 м'
            },
        ],
    },
    {
        id: null,
        title: 'Кронштейн вариант 1 тройной',
        category: 'Кронштейн',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/paf-114/4_3-439x439-optimized.png',
        price: 3500,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Высота',
                value: '0,2 м'
            },
            {
                title: 'Ширина',
                value: '0,2 м'
            },
            {
                title: 'Диаметр',
                value: '32 мм'
            },
        ],
    },
    {
        id: null,
        title: 'Кронштейн вариант 1 двойной',
        category: 'Кронштейн',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/paf-113/4_2-439x439-optimized.png',
        price: 3000,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Высота',
                value: '0,2 м'
            },
            {
                title: 'Ширина',
                value: '0,2 м'
            },
            {
                title: 'Диаметр',
                value: '32 мм'
            },
        ],
    },
    {
        id: null,
        title: 'Кронштейн вариант 1',
        category: 'Кронштейн',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/paf-112/4_1-439x439-optimized.png',
        price: 1500,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Высота',
                value: '0,2 м'
            },
            {
                title: 'Ширина',
                value: '0,2 м'
            },
            {
                title: 'Диаметр',
                value: '32 мм'
            },
        ],
    },
    {
        id: null,
        title: 'Кронштейн вариант 2 тройной',
        category: 'Кронштейн',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/paf-111/3_1-439x439-optimized.png',
        price: 2500,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Высота',
                value: '0,2 м'
            },
            {
                title: 'Ширина',
                value: '0,2 м'
            },
            {
                title: 'Диаметр',
                value: '32 мм'
            },
        ],
    },
    {
        id: null,
        title: 'Кронштейн вариант 2 двойной',
        category: 'Кронштейн',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/paf-110/2_1-439x439-optimized.png',
        price: 2000,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Высота',
                value: '0,2 м'
            },
            {
                title: 'Ширина',
                value: '0,2 м'
            },
            {
                title: 'Диаметр',
                value: '32 мм'
            },
        ],
    },
    {
        id: null,
        title: 'Кронштейн вариант 2',
        category: 'Кронштейн',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/paf-109/1_1-1-439x439-optimized.png',
        price: 1200,
        materials: ['Металл с покраской'],
        size: [
            {
                title: 'Высота',
                value: '0,2 м'
            },
            {
                title: 'Ширина',
                value: '0,2 м'
            },
            {
                title: 'Диаметр',
                value: '32 мм'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-120/konsol_banernaya_1-615x1000-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/konsol-paf-121/konsol_banernaya_2-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-121-1/paf121-1-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-121-2-2/121-2-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-121-3/konsol_banernaya_3-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-121-4/konsol_banernaya_4-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-121-5/konsol_banernaya_5-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-121-6/konsoli_novye_1-615x1000-optimized.jpg',
        price: 34500,
        materials: ['Металл. каркас, банер с печатью', 'Композит'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-122/konsol_banernaya_3-439x714-optimized.jpg',
        price: 14800,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-123/konsol_banernaya_4-439x714-optimized.jpg',
        price: 14500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-124/konsol_banernaya_5-439x714-optimized.jpg',
        price: 14500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-125/konsol_banernaya_6-439x714-optimized.jpg',
        price: 14500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-126/konsol_banernaya_9-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-126-1/konsol_banernaya_svo_1-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-126-1/konsol_banernaya_svo_2-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-128/konsol_banernaya_7-439x714-optimized.jpg',
        price: 15500,
        materials: ['Металл. каркас, банер с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_1-439x714-optimized.jpg',
        price: 26500,
        materials: ['Металл. каркас', 'ПВХ с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_2-439x714-optimized.jpg',
        price: 32500,
        materials: ['Металл. каркас', 'Композит с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_3-439x714-optimized.jpg',
        price: 24500,
        materials: ['Металл. каркас', 'Композит с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_4-439x714-optimized.jpg',
        price: 32500,
        materials: ['Металл. каркас', 'Композит с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '1 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_5-439x714-optimized.jpg',
        price: 38350,
        materials: ['Металл. каркас', 'Композит с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '1 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_6-439x714-optimized.jpg',
        price: 26500,
        materials: ['Металл. каркас', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_7-439x714-optimized.jpg',
        price: 32000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_8-439x714-optimized.jpg',
        price: 28000,
        materials: ['Металл. каркас', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-129/konsol_9-439x714-optimized.jpg',
        price: 38500,
        materials: ['Металл. каркас', 'Композит с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-137-1/konsol_svetovaya_1-439x714-optimized.jpg',
        price: 42000,
        materials: ['Металл. каркас', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-137-2/konsol_svetovaya_2-439x714-optimized.jpg',
        price: 37500,
        materials: ['Металл. каркас', 'Композит с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '1 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-137-3/konsol_svetovaya_3-439x714-optimized.jpg',
        price: 26000,
        materials: ['Металл. каркас', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Консоль',
        category: 'Консоль',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/konsol-paf-137-4/konsol_svetovaya_4-439x714-optimized.jpg',
        price: 27000,
        materials: ['Металл. каркас', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '0,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_1-439x270-optimized.jpg',
        price: 38000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_2-439x270-optimized.jpg',
        price: 38000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_3-439x270-optimized.jpg',
        price: 38000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-141/peretyazhki_banernye_1-439x270-optimized.jpg',
        price: 48000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-141/peretyazhki_banernye_2-439x270-optimized.jpg',
        price: 48000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-141/peretyazhki_banernye_3-439x270-optimized.jpg',
        price: 48000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-141/peretyazhki_banernye_4-439x270-optimized.jpg',
        price: 48000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-141/peretyazhki_banernye_5-439x270-optimized.jpg',
        price: 48000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_4-439x270-optimized.jpg',
        price: 135000,
        materials: ['Металл. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_5-439x270-optimized.jpg',
        price: 142000,
        materials: ['Металл. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_6-439x270-optimized.jpg',
        price: 38000,
        materials: ['Металл. каркас', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_7-439x270-optimized.jpg',
        price: 125000,
        materials: ['Металл. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-139/peretyazhki_banernye_9-439x270-optimized.jpg',
        price: 135000,
        materials: ['Металл. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-149/peretyazhki_svetovye_1-439x270-optimized.jpg',
        price: 180000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-150/peretyazhki_svetovye_2-439x270-optimized.jpg',
        price: 235000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-150/peretyazhki_svetovye_3-439x270-optimized.jpg',
        price: 210500,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-153/peretyazhki_svetovye_5-439x270-optimized.jpg',
        price: 65000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-152/peretyazhki_svetovye_4-439x270-optimized.jpg',
        price: 225000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/peretyazhka-sp-323/peretyazhki_svetovye_6-439x270-optimized.jpg',
        price: 65000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/peretyazhka-sp-321/peretyazhki_svetovye_7-439x270-optimized.jpg',
        price: 170900,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/peretyazhka-sp-322/peretyazhki_svetovye_8-439x270-optimized.jpg',
        price: 145000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-147/peretyazhki_svetovye_1-439x270-optimized.jpg',
        price: 235000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-147/peretyazhki_svetovye_2-439x270-optimized.jpg',
        price: 145000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-147/peretyazhki_svetovye_3-439x270-optimized.jpg',
        price: 245000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/peretyazhka-paf-149/peretyazhki_svetovye_4-439x270-optimized.jpg',
        price: 165000,
        materials: ['Металл. каркас', 'ПВХ', 'Пленка с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '1 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/peretyazhka-paf-155/peretyazhki_flagovye_1-439x270-optimized.jpg',
        price: 38000,
        materials: ['Трос', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '0,8 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/peretyazhka-paf-156/peretyazhki_flagovye_2-439x270-optimized.jpg',
        price: 38000,
        materials: ['Трос', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '0,8 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Перетяжка',
        category: 'Перетяжка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/peretyazhka-paf-157/peretyazhki_flagovye_3-439x270-optimized.jpg',
        price: 38000,
        materials: ['Трос', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '0,8 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/arka-paf-158/arki_zvezdy_1-439x270-optimized.jpg',
        price: 420000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/arka-paf-158-1/Arki_novye_1-439x270-optimized.jpg',
        price: 658000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/arka-paf-158-2/Arki_novye_2-439x270-optimized.jpg',
        price: 598000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/arka-paf-158-3/Arki_novye_4-439x270-optimized.jpg',
        price: 520000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/arka-paf-158-4/Arki_novye_5-439x270-optimized.jpg',
        price: 1230000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/arka-paf-158-5/Arki_novye_3-439x270-optimized.jpg',
        price: 685000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/chernovik/arki_zvezdy_2-439x270-optimized.jpg',
        price: 458000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/5434/arki_zvezdy_3-439x270-optimized.jpg',
        price: 585000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/arka-paf-161/arki_zvezdy_4-439x270-optimized.jpg',
        price: 625000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды', 'В комплекте 3 арки'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/arka-paf-162/arki_zvezdy_5-439x270-optimized.jpg',
        price: 720000,
        materials: ['Метал. каркас', 'Композит'],
        size: [
            {
                title: 'Высота',
                value: '3,5 м'
            },
            {
                title: 'Ширина',
                value: '7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/arka-paf-163/arki_kr_1-439x270-optimized.jpg',
        price: 520000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/arka-paf-164/arki_kr_2-439x270-optimized.jpg',
        price: 495000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/arka-paf-164/arki_kr_3-439x270-optimized.jpg',
        price: 595000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/arka-paf-166/arki_kr_5-439x270-optimized.jpg',
        price: 570000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/arki_6-439x270-optimized.jpg',
        price: 725000,
        materials: ['Метал. каркас', 'Композит'],
        size: [
            {
                title: 'Высота',
                value: '3,5 м'
            },
            {
                title: 'Ширина',
                value: '7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/arki_5-439x270-optimized.jpg',
        price: 445000,
        materials: ['Метал. каркас', 'Композит'],
        size: [
            {
                title: 'Высота',
                value: '3,5 м'
            },
            {
                title: 'Ширина',
                value: '3,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/arka-maf-326/arki_kr_6-439x270-optimized.jpg',
        price: 580000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/arka-maf-327/arki_zvezdy_7-439x270-optimized.jpg',
        price: 586000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/arka-maf-328/arki_zvezdy_6-439x270-optimized.jpg',
        price: 545000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/arka-maf-329/arki_kr_7-439x270-optimized.jpg',
        price: 320000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арка',
        category: 'Арка',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/chernovik/arki_kr_4-1-439x270-optimized.jpg',
        price: 550000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/chernovik/arki_kr_4-1-439x270-optimized.jpg',
        price: 280000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/fotozony2-439x270-optimized.jpg',
        price: 670800,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/fotozony3-439x270-optimized.jpg',
        price: 720000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '3 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-176-1/fotozony_1-439x270-optimized.jpg',
        price: 695000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-176-1/fotozony_2-439x270-optimized.jpg',
        price: 575000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '3 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-176-1/fotozony_4-439x270-optimized.jpg',
        price: 385000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '1 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-176-1/fotozony_5-439x270-optimized.jpg',
        price: 1485000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '4 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-176-1/fotozony_3-439x270-optimized.jpg',
        price: 1265000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-fotozona-paf-177/fotozony_10-439x270-optimized.jpg',
        price: 615000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-fotozona-paf-177/fotozony_10-439x270-optimized.jpg',
        price: 326000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-fotozona-paf-179/fotozony_6-439x270-optimized.jpg',
        price: 260000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '2 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-fotozona-paf-180/fotozony_5-439x270-optimized.jpg',
        price: 560000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/pamyatnaya-fotozona-maf-333/fotozony_1-439x270-optimized.jpg',
        price: 468000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-fotozona-paf-182/fotozony_2-439x270-optimized.jpg',
        price: 610000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-fotozona-paf-183/fotozony_3-439x270-optimized.jpg',
        price: 620000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-183-1/art_obekty_2-439x270-optimized.jpg',
        price: 1350000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '1,5 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-183-1/art_obekty_1-439x270-optimized.jpg',
        price: 1450000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-183-1/art_obekty_4-439x270-optimized.jpg',
        price: 450000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '1,2 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-183-1/art_obekty_5-439x270-optimized.jpg',
        price: 650000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-183-1/art_obekty_3-439x270-optimized.jpg',
        price: 495000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '2 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная фотозона',
        category: 'Фотозона',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-fotozona-paf-184/fotozony_4-439x270-optimized.jpg',
        price: 795000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/art-obekt-maf-335/art_obekty_2-439x270-optimized.jpg',
        price: 350000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/pamyatnaya-fotozona-paf-183-1/1945_nadpis2_2-439x270-optimized.jpg',
        price: 680000,
        materials: ['Метал. каркас', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/art-obekt-maf-337/art_obekty_4-439x270-optimized.jpg',
        price: 480000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/art-obekt-maf-338/art_obekty_3-439x270-optimized.jpg',
        price: 495000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/art_obekty_5-439x270-optimized.jpg',
        price: 360000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/catalog/art-obekt-maf-340/art_obekty_6-439x270-optimized.jpg',
        price: 1320000,
        materials: ['Метал. каркас', 'Композит', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '6 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/art-obekt-paf-191/art_obekty_7-439x270-optimized.jpg',
        price: 320000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/art-obekt-paf-192/art_obekty_8-439x270-optimized.jpg',
        price: 390000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/art-obekt-paf-193/art_obekty_9-439x270-optimized.jpg',
        price: 320000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/art-obekt-paf-194/art_obekty_10-439x270-optimized.jpg',
        price: 360000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/art-obekt-paf-194/art_obekty_11-439x270-optimized.jpg',
        price: 425000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Арт-объект',
        category: 'Арт-объект',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/art-obekt-paf-194/art_obekty_1-439x270-optimized.jpg',
        price: 432000,
        materials: ['Метал. каркас', 'Композит с печатью', 'Светодиоды'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная стела',
        category: 'Памятная стела',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-stela-paf-197/pamyatnye_stelly_2-439x270-optimized.jpg',
        price: 215000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '3 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная стела',
        category: 'Памятная стела',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-stela-paf-197/pamyatnye_stelly_1-439x270-optimized.jpg',
        price: 145000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '1 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная стела',
        category: 'Памятная стела',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-stela-paf-197/pamyatnye_stelly_3-439x270-optimized.jpg',
        price: 270000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '1,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная стела',
        category: 'Памятная стела',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-stela-paf-197/pamyatnye_stelly_4-439x270-optimized.jpg',
        price: 145000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '1 м'
            },
        ],
    },
    {
        id: null,
        title: 'Памятная стела',
        category: 'Памятная стела',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/pamyatnaya-stela-paf-197/pamyatnye_stelly_5-439x270-optimized.jpg',
        price: 150000,
        materials: ['Метал. каркас', 'Композит с печатью'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '1 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/flagovye_konstrukcii_1-439x270-optimized.jpg',
        price: 455600,
        materials: ['Метал. каркас', 'Композит с печатью', 'Банер', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flagovaya-konstrukciya-paf-202-1/Flagovye_konstrukcii_1-439x270-optimized.jpg',
        price: 470500,
        materials: ['Метал. каркас', 'Композит с печатью', 'Банер', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flagovaya-konstrukciya-paf-202-1/Flagovye_konstrukcii_4-439x270-optimized.jpg',
        price: 180000,
        materials: ['Метал. каркас', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '2,5 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flagovaya-konstrukciya-paf-202-1/Flagovye_konstrukcii_2-439x270-optimized.jpg',
        price: 525000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '5 м'
            },
            {
                title: 'Ширина',
                value: '1,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flagovaya-konstrukciya-paf-202-1/Flagovye_konstrukcii_3-439x270-optimized.jpg',
        price: 975000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '6 м'
            },
            {
                title: 'Ширина',
                value: '2,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2025/catalog/flagovaya-konstrukciya-paf-202-1/Flagovye_konstrukcii_5-439x270-optimized.jpg',
        price: 522000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '1,8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/chernovik/flagovye_konstrukcii_13-439x270-optimized.jpg',
        price: 210000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/flagovye_konstrukcii_4-439x270-optimized.jpg',
        price: 265000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/flagovye_konstrukcii_7-439x270-optimized.jpg',
        price: 230000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-206/flagovye_konstrukcii_11-439x270-optimized.jpg',
        price: 220000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '1,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2022/flagovye_konstrukcii_2-439x270-optimized.jpg',
        price: 135000,
        materials: ['Метал. каркас', 'Пластик', 'Цветная наклейка'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '1,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-208/Flagovye_konstrukcii_7-439x270-optimized.jpg',
        price: 795500,
        materials: ['Метал. каркас', 'Композит с печатью', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '6 м'
            },
            {
                title: 'Ширина',
                value: '10 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-208/Flagovye_konstrukcii_2-439x270-optimized.jpg',
        price: 520000,
        materials: ['Метал. каркас', 'Композит с печатью', 'Флаговая ткань', 'Банер'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-208/Flagovye_konstrukcii_3-439x270-optimized.jpg',
        price: 98000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '1,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-208/Flagovye_konstrukcii_4-439x270-optimized.jpg',
        price: 167000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '1,5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-208/Flagovye_konstrukcii_5-439x270-optimized.jpg',
        price: 385000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '6 м'
            },
            {
                title: 'Ширина',
                value: '5 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-208/Flagovye_konstrukcii_6-439x270-optimized.jpg',
        price: 270000,
        materials: ['Метал. каркас', 'Композит', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '8 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-214/Flagovye_konstrukcii_8_1-439x670-optimized.jpg',
        price: 155000,
        materials: ['Метал. каркас', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '6 м'
            },
            {
                title: 'Ширина',
                value: '1,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-214/Flagovye_konstrukcii_8_2-439x683-optimized.jpg',
        price: 155000,
        materials: ['Метал. каркас', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '6 м'
            },
            {
                title: 'Ширина',
                value: '1,7 м'
            },
        ],
    },
    {
        id: null,
        title: 'Флаговая конструкция',
        category: 'Флаговая конструкция',
        imageUrl: 'https://decois.ru/wp-content/uploads/2023/catalog/flagovaya-konstrukciya-paf-208/flagovye_konstrukcii_14-439x270-optimized.jpg',
        price: 110000,
        materials: ['Метал. каркас', 'Флаговая ткань'],
        size: [
            {
                title: 'Высота',
                value: '3 м'
            },
            {
                title: 'Ширина',
                value: '4 м'
            },
        ],
    }
]
for (let i = 0; i < catalogData.length; i++) {
    console.log(catalogData[i])
    catalogData[i].id = i + 1
}
function catalogItemDataMaterials(materials) {
    let response = ''
    materials.forEach(material => {
        response += `<li class="catalog-product-properties-block__property">${material}</li>`
    })
    return response
}
function catalogItemDataSize(size) {
    let response = ''
    size.forEach(sizeItem => {
        response += `<li class="catalog-product-properties-block__property">${sizeItem.title}: ${sizeItem.value}</li>`
    })
    return response
}
catalog.innerHTML = '',
catalogData.forEach(catalogItemData => {
    catalog.innerHTML += `
    <div class="catalog-product">
        <div class="catalog-product__cover"><img src="${catalogItemData.imageUrl}" alt="" class="catalog-product__image"/></div>
        <p class="catalog-product__category">${catalogItemData.category}</p>
        <h2 class="catalog-product__name">${catalogItemData.title}</h2>
        <div class="catalog-product__properties">
            <div class="catalog-product__properties-block">
                <p class="catalog-product-properties-block__title">Материалы:</p>
                <ul class="catalog-product-properties-block__properties">${catalogItemDataMaterials(catalogItemData.materials)}</ul>
            </div>
            <div class="catalog-product__properties-block">
                <p class="catalog-product-properties-block__title">Размеры:</p>
                <ul class="catalog-product-properties-block__properties">${catalogItemDataSize(catalogItemData.size)}</ul>
            </div>
            <p class="catalog-product__price">${catalogItemData.price} руб</p>
        </div>
        <form class="catalog-product-actions" action="">
            <input
                type="hidden"
                id="product-id"
                value="${catalogItemData.id}"
            />
            <input
                type="hidden"
                id="product-title"
                value="${catalogItemData.title}"
            />
            <input
                type="hidden"
                id="product-category"
                value="${catalogItemData.category}"
            />
            <input
                type="hidden"
                id="product-price"
                value="${catalogItemData.price}"
            />
            <input
                type="hidden"
                id="product-img"
                value="${catalogItemData.imageUrl}"
            />
            <input
                type="hidden"
                id="product-size"
                value="${catalogItemData.size.forEach(sizeItem => sizeItem.title + ': ' + sizeItem.value + ', ')}"
            />
            <button
                class="btn to-cart-btn"
                type="button"
            >
                В корзину
            </button>
            <div
                class="cart-count catalog-product-actions__cart-count cart-count_removed"
            >
                <button class="btn cart-count__minus">
                    -
                </button>
                <div class="cart-count__counter">1</div>
                <button class="btn cart-count__plus">
                    +
                </button>
            </div>
        </form>
    </div>
    `
})
// Кнопки действия с корзиной
const catalogProductActions = document.querySelectorAll('.catalog-product-actions')
catalogProductActions.forEach(catalogProductInfo => {
    const productId = catalogProductInfo.querySelector('#product-id').value
    const productTitle = catalogProductInfo.querySelector('#product-title').value
    const productPrice = catalogProductInfo.querySelector('#product-price').value
    const productImg = catalogProductInfo.querySelector('#product-img').value
    const toCartBtn = catalogProductInfo.querySelector('.to-cart-btn')
    const cartActions = catalogProductInfo.querySelector('.catalog-product-actions__cart-count')
    const plusBtn = cartActions.querySelector('.cart-count__plus')
    const minusBtn = cartActions.querySelector('.cart-count__minus')
    const counter = cartActions.querySelector('.cart-count__counter')

    // Если товар в корзине, то меняются кнопки действия
    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    let productIndex = cart.findIndex(product => product.id == productId)
    if (productIndex != -1) {
        if (!toCartBtn.classList.contains('to-cart-btn_removed')) {
            toCartBtn.classList.add('to-cart-btn_removed')
            cartActions.classList.remove('cart-count_removed')
            counter.innerHTML = cart[productIndex].count
        }
    }
    // Выставление индикатора
    cartIndicatorProcess()

    toCartBtn.addEventListener('click', e => {
        e.preventDefault()
        console.log(productTitle)
        const productData = {
            id: productId,
            title: productTitle,
            count: 1,
            price: productPrice,
            img: productImg
        }
        cart = JSON.parse(localStorage.getItem('cart'))
        productIndex = cart.findIndex(product => product.id == productId)
        if (toCartBtn.classList.contains('to-cart-btn_removed')) return
        cart.push(productData)
        localStorage.setItem('cart', JSON.stringify(cart))
        toCartBtn.classList.add('to-cart-btn_removed')
        cartActions.classList.remove('cart-count_removed')
        counter.innerHTML = 1
        cartIndicatorProcess()
    })
    plusBtn.addEventListener('click', e => {
        e.preventDefault()
        cartActionsProcess(catalogProductInfo, 'plus')
        cartIndicatorProcess()
    })
    minusBtn.addEventListener('click', e => {
        e.preventDefault()
        cartActionsProcess(catalogProductInfo, 'minus')
        cartIndicatorProcess()
    })
})
// Сортировка по категориям
const categoryItems = document.querySelectorAll('.catalog-categories__category')
const catalogProducts = document.querySelectorAll('.catalog-product')
categoryItems.forEach(categoryItem => {
    categoryItem.addEventListener('click', () => {
        categoryItems.forEach(categoryItem => {
            categoryItem.classList.remove('catalog-categories__category_active')
        })
        categoryItem.classList.add('catalog-categories__category_active')
        const categoryValue = categoryItem.getAttribute('data-category')
        if (categoryValue == 'Все') {
            catalogProducts.forEach(catalogProduct => {
                catalogProduct.style.display = 'block'
            })
        }
        else {
            catalogProducts.forEach(catalogProduct => {
                const catalogProductCategory = catalogProduct.querySelector('#product-category').value
                if (categoryValue == catalogProductCategory) catalogProduct.style.display = 'block'
                else catalogProduct.style.display = 'none'
            })
        }
    })
})
// Кнопка сортировки
const filtersBtn = document.querySelector('.catalog-categories__filter')
const categoryBlock = document.querySelector('.catalog__categories')

filtersBtn.addEventListener('click', () => {
    categoryBlock.classList.toggle('catalog__categories_active')
})