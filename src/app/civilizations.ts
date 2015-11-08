'use strict';

export class Civilization {
  //public id: string;
  //public name: string;
  //public leader: string;
  //public beginningTech: string;
  //public government: string;

  constructor(public id: string,
              public name: string,
              public leader: string,
              public beginningTech: string,
              public government: string) {
  }

  public static all = [
    new Civilization('Aztec', 'アステカ', 'モンテズマ', '2-2', '専制政治'),
    new Civilization('America', 'アメリカ', 'リンカーン', '通貨', '専制政治'),
    new Civilization('Arabia', 'アラブ', 'サラディン', '数学', '専制政治'),
    new Civilization('England', 'イギリス', 'エリザベス', '海軍', '専制政治'),
    new Civilization('India', 'インド', 'ガンジー', '農業', '専制政治'),
    new Civilization('Egypt', 'エジプト', 'クレオパトラ', '建築学', '専制政治'),
    new Civilization('Greece', 'ギリシャ', 'アレクサンダー', '民主主義', '民主主義'),
    new Civilization('Zulu', 'ズールー', 'シャカ', '畜産', '専制政治'),
    new Civilization('Spain', 'スペイン', 'イザベル', '航海術', '専制政治'),
    new Civilization('China', '中国', '武則天', '筆記', '専制政治'),
    new Civilization('Germany', 'ドイツ', 'ビルマルク', '金属加工術', '専制政治'),
    new Civilization('Japan', '日本', '徳川', '騎士道', '封建制'),
    new Civilization('France', 'フランス', 'ナポレオン', '陶器', '専制政治'),
    new Civilization('Mongol', 'モンゴル', 'チンギス', '騎乗', '専制政治'),
    new Civilization('Rome', 'ローマ', 'カエサル', '法律', '共和制'),
    new Civilization('Russia', 'ロシア', 'エカチェリーナ', '共産主義', '共産主義')
  ];
}

export default [
  {
    id: 'Aztec',
    name: 'アステカ',
    leader: 'モンテズマ',
    beginnigTech: '2-2',
    government: '専制政治'
  },
  {
    id: 'America',
    name: 'アメリカ',
    leader: 'リンカーン',
    beginningTech: '通貨',
    government: '専制政治'
  },
  {
    id: 'Arabia',
    name: 'アラブ',
    leader: 'サラディン',
    beginningTech: '数学',
    government: '専制政治'
  },
  {
    id: 'England',
    name: 'イギリス',
    leader: 'エリザベス',
    beginningTech: '海軍',
    government: '専制政治'
  },
  {
    id: 'India',
    name: 'インド',
    leader: 'ガンジー',
    beginningTech: '農業',
    government: '専制政治'
  },
  {
    id: 'Egypt',
    name: 'エジプト',
    leader: 'クレオパトラ',
    beginningTech: '建築学',
    government: '専制政治'
  },
  {
    id: 'Greece',
    name: 'ギリシャ',
    leader: 'アレクサンダー',
    beginningTech: '民主主義',
    government: '民主主義'
  },
  {
    id: 'Zulu',
    name: 'ズールー',
    leader: 'シャカ',
    beginningTech: '畜産',
    government: '専制政治'
  },
  {
    id: 'Spain',
    name: 'スペイン',
    leader: 'イザベル',
    beginningTech: '航海術',
    government: '専制政治'
  },
  {
    id: 'China',
    name: '中国',
    leader: '武則天',
    beginningTech: '筆記',
    government: '専制政治'
  },
  {
    id: 'Germany',
    name: 'ドイツ',
    leader: 'ビルマルク',
    beginningTech: '金属加工術',
    government: '専制政治'
  },
  {
    id: 'Japan',
    name: '日本',
    leader: '徳川',
    beginningTech: '騎士道',
    government: '封建制'
  },
  {
    id: 'France',
    name: 'フランス',
    leader: 'ナポレオン',
    beginningTech: '陶器',
    government: '専制政治'
  },
  {
    id: 'Mongol',
    name: 'モンゴル',
    leader: 'チンギス',
    beginningTech: '騎乗',
    government: '専制政治'
  },
  {
    id: 'Rome',
    name: 'ローマ',
    leader: 'カエサル',
    beginningTech: '法律',
    government: '共和制'
  },
  {
    id: 'Russia',
    name: 'ロシア',
    leader: 'エカチェリーナ',
    beginningTech: '共産主義',
    government: '共産主義'
  }
];
