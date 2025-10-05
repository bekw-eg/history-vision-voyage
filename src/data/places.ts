export interface Place {
  id: number;
  name: string;
  country: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
}

export const places: Place[] = [
  {
    id: 1,
    name: "Байтерек",
    country: "Казахстан",
    shortDescription: "Символ Астаны и независимости",
    description: "Монумент Байтерек — символ столицы Казахстана, представляющий собой 97-метровую башню с золотым шаром. Высота монумента символизирует год переноса столицы в Астану (1997). С смотровой площадки открывается панорамный вид на город.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80",
    category: "monument"
  },
  {
    id: 2,
    name: "Эйфелева башня",
    country: "Франция",
    shortDescription: "Икона Парижа",
    description: "Эйфелева башня — самая узнаваемая достопримечательность Парижа высотой 330 метров. Построена в 1889 году для Всемирной выставки. Ежегодно её посещают более 7 миллионов туристов.",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
    category: "monument"
  },
  {
    id: 3,
    name: "Тадж-Махал",
    country: "Индия",
    shortDescription: "Памятник вечной любви",
    description: "Тадж-Махал — величественный мавзолей из белого мрамора в Агре. Построен императором Шах-Джаханом в память о своей жене. Считается жемчужиной мусульманского искусства и символом вечной любви.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    category: "historical"
  },
  {
    id: 4,
    name: "Колизей",
    country: "Италия",
    shortDescription: "Арена гладиаторов",
    description: "Колизей — крупнейший амфитеатр античного мира, построенный в I веке н.э. Вмещал до 50 000 зрителей. Здесь проходили гладиаторские бои, звериные травли и морские сражения.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    category: "historical"
  },
  {
    id: 5,
    name: "Статуя Свободы",
    country: "США",
    shortDescription: "Символ свободы",
    description: "Статуя Свободы — подарок от Франции США в 1886 году. Высота статуи 93 метра. Символизирует свободу и демократию, встречает прибывающих в Нью-Йорк.",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80",
    category: "monument"
  },
  {
    id: 6,
    name: "Великая Китайская стена",
    country: "Китай",
    shortDescription: "Величайшее оборонительное сооружение",
    description: "Великая Китайская стена — протяженностью более 21 000 км. Строилась с III века до н.э. Видна из космоса. Включена в список Всемирного наследия ЮНЕСКО.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
    category: "historical"
  },
  {
    id: 7,
    name: "Мачу-Пикчу",
    country: "Перу",
    shortDescription: "Затерянный город инков",
    description: "Мачу-Пикчу — древний город инков на высоте 2430 метров. Построен в XV веке. Обнаружен в 1911 году. Один из самых загадочных археологических памятников мира.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    category: "historical"
  },
  {
    id: 8,
    name: "Петра",
    country: "Иордания",
    shortDescription: "Розовый город в скалах",
    description: "Петра — древний город, высеченный в розовых скалах. Столица Набатейского царства. Включает храмы, гробницы и амфитеатр. Один из новых семи чудес света.",
    image: "https://images.unsplash.com/photo-1579055954292-1c56da99431b?w=800&q=80",
    category: "historical"
  },
  {
    id: 9,
    name: "Храм Ангкор-Ват",
    country: "Камбоджа",
    shortDescription: "Крупнейший храмовый комплекс",
    description: "Ангкор-Ват — крупнейшее религиозное сооружение в мире. Построено в XII веке. Изначально индуистский храм, позже стал буддийским. Символ Камбоджи.",
    image: "https://images.unsplash.com/photo-1580547858783-c416514d5b06?w=800&q=80",
    category: "temple"
  },
  {
    id: 10,
    name: "Пирамиды Гизы",
    country: "Египет",
    shortDescription: "Единственное сохранившееся чудо света",
    description: "Пирамиды Гизы — древнейшие из семи чудес света. Построены около 2560 г. до н.э. Крупнейшая — пирамида Хеопса высотой 146 метров. Загадка древней инженерии.",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    category: "historical"
  },
  {
    id: 11,
    name: "Саграда Фамилия",
    country: "Испания",
    shortDescription: "Шедевр Гауди",
    description: "Саграда Фамилия — базилика в Барселоне, спроектированная Антонио Гауди. Строится с 1882 года, до сих пор не завершена. Уникальный стиль модернизма.",
    image: "https://images.unsplash.com/photo-1579782177852-62442bebba97?w=800&q=80",
    category: "temple"
  },
  {
    id: 12,
    name: "Биг-Бен",
    country: "Великобритания",
    shortDescription: "Символ Лондона",
    description: "Биг-Бен — часовая башня Вестминстерского дворца высотой 96 метров. Построена в 1859 году. Название происходит от колокола весом 13,5 тонн.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    category: "monument"
  },
  {
    id: 13,
    name: "Акрополь",
    country: "Греция",
    shortDescription: "Древний город богов",
    description: "Акрополь — древняя цитадель в Афинах с храмами античных богов. Включает Парфенон, Эрехтейон, храм Ники. Построен в V веке до н.э.",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    category: "historical"
  },
  {
    id: 14,
    name: "Мост Золотые Ворота",
    country: "США",
    shortDescription: "Визитная карточка Сан-Франциско",
    description: "Мост Золотые Ворота — висячий мост длиной 2737 метров. Построен в 1937 году. Окрашен в международный оранжевый цвет. Один из самых фотографируемых мостов мира.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    category: "monument"
  },
  {
    id: 15,
    name: "Стоунхендж",
    country: "Великобритания",
    shortDescription: "Загадка древних",
    description: "Стоунхендж — мегалитический памятник возрастом более 5000 лет. Круг из огромных камней. Предположительно обсерватория или храм. До сих пор вызывает споры.",
    image: "https://images.unsplash.com/photo-1599833975787-5d9f47e0e5d6?w=800&q=80",
    category: "historical"
  },
  {
    id: 16,
    name: "Нойшванштайн",
    country: "Германия",
    shortDescription: "Замок Безумного короля",
    description: "Нойшванштайн — романтический замок короля Людвига II. Построен в XIX веке в баварских Альпах. Вдохновил создателей замка Диснея.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    category: "castle"
  },
  {
    id: 17,
    name: "Собор Василия Блаженного",
    country: "Россия",
    shortDescription: "Символ России",
    description: "Собор Василия Блаженного — православный храм на Красной площади в Москве. Построен в 1561 году. Состоит из девяти церквей с разноцветными куполами.",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
    category: "temple"
  },
  {
    id: 18,
    name: "Оперный театр",
    country: "Австралия",
    shortDescription: "Жемчужина Сиднея",
    description: "Сиднейский оперный театр — одно из самых узнаваемых зданий XX века. Открыт в 1973 году. Крыша напоминает паруса или раковины. Объект ЮНЕСКО.",
    image: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&q=80",
    category: "modern"
  },
  {
    id: 19,
    name: "Бурдж-Халифа",
    country: "ОАЭ",
    shortDescription: "Самое высокое здание мира",
    description: "Бурдж-Халифа — небоскреб высотой 828 метров, 163 этажа. Открыт в 2010 году. Символ Дубая и современных технологий.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    category: "modern"
  },
  {
    id: 20,
    name: "Фудзияма",
    country: "Япония",
    shortDescription: "Священная гора",
    description: "Фудзияма — действующий вулкан высотой 3776 метров. Высочайшая точка Японии. Считается священной горой. Объект всемирного наследия.",
    image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&q=80",
    category: "nature"
  },
  {
    id: 21,
    name: "Христос-Искупитель",
    country: "Бразилия",
    shortDescription: "Символ Рио-де-Жанейро",
    description: "Статуя Христа-Искупителя высотой 38 метров на горе Корковаду. Открыта в 1931 году. Символ христианства и гостеприимства Бразилии.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    category: "monument"
  },
  {
    id: 22,
    name: "Мечеть Хазрет Султан",
    country: "Казахстан",
    shortDescription: "Крупнейшая мечеть Центральной Азии",
    description: "Мечеть Хазрет Султан в Астане — одна из крупнейших мечетей Центральной Азии. Открыта в 2012 году. Вмещает до 10 000 молящихся.",
    image: "https://images.unsplash.com/photo-1684267147604-a3e5829dfaed?w=800&q=80",
    category: "temple"
  },
  {
    id: 23,
    name: "Дворец мира",
    country: "Казахстан",
    shortDescription: "Пирамида единства",
    description: "Дворец мира и согласия — пирамида высотой 77 метров в Астане. Символ единства религий и культур. Спроектирован Норманом Фостером.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    category: "modern"
  },
  {
    id: 24,
    name: "Пантеон",
    country: "Италия",
    shortDescription: "Храм всех богов",
    description: "Пантеон — древнеримский храм, построенный во II веке. Имеет самый большой неармированный бетонный купол в мире. Теперь церковь.",
    image: "https://images.unsplash.com/photo-1568106690101-8a8c71a87380?w=800&q=80",
    category: "historical"
  },
  {
    id: 25,
    name: "Нотр-Дам",
    country: "Франция",
    shortDescription: "Готический собор",
    description: "Собор Парижской Богоматери — шедевр готической архитектуры. Строился 182 года (1163-1345). После пожара 2019 года идет реставрация.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    category: "temple"
  },
  {
    id: 26,
    name: "Альгамбра",
    country: "Испания",
    shortDescription: "Мавританский дворец",
    description: "Альгамбра — дворцовый комплекс в Гранаде. Построен в XIII-XIV веках. Сочетает исламскую архитектуру с природой. Объект ЮНЕСКО.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    category: "castle"
  },
  {
    id: 27,
    name: "Запретный город",
    country: "Китай",
    shortDescription: "Резиденция императоров",
    description: "Запретный город — дворцовый комплекс династий Мин и Цин в Пекине. Построен в XV веке. Включает 980 зданий. Был закрыт для простых людей.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    category: "castle"
  },
  {
    id: 28,
    name: "Мост Чарльза",
    country: "Чехия",
    shortDescription: "Символ Праги",
    description: "Карлов мост — средневековый мост через Влтаву в Праге. Построен в 1402 году. Украшен 30 статуями. Пешеходный, популярен у туристов.",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
    category: "monument"
  },
  {
    id: 29,
    name: "Святилище Фусими Инари",
    country: "Япония",
    shortDescription: "Тысячи красных ворот",
    description: "Фусими Инари — синтоистское святилище в Киото. Знаменито тысячами красных ворот тории, образующих туннели. Посвящено богу риса.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    category: "temple"
  },
  {
    id: 30,
    name: "Моаи острова Пасхи",
    country: "Чили",
    shortDescription: "Загадочные каменные истуканы",
    description: "Моаи — гигантские каменные статуи на острове Пасхи. Созданы между 1250 и 1500 годами. Около 900 статуй высотой до 10 метров. Назначение до конца не ясно.",
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&q=80",
    category: "historical"
  }
];
