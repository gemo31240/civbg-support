'use strict';

import * as _ from 'lodash';

interface ICivilizationProperties {
  id: string;
  name: string;
  leader: string;
  beginningTechId: string;
  government: string;
}

export default class Civilization {
  public id: string;
  public name: string;
  public leader: string;
  public beginningTechId: string;
  public government: string;

  constructor(properties: ICivilizationProperties) {
    this.id = properties.id;
    this.name = properties.name;
    this.leader = properties.leader;
    this.beginningTechId = properties.beginningTechId;
    this.government = properties.government;
  }

  public static find(id: string) {
    return _.find(this.all, (civ) => civ.id === id);
  }

  public static all = [
    new Civilization({
      id: 'Aztec',
      name: 'アステカ',
      leader: 'モンテズマ',
      beginningTechId: '2-2',
      government: '専制政治'
    }),
    new Civilization({
      id: 'America',
      name: 'アメリカ',
      leader: 'リンカーン',
      beginningTechId: '通貨',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Arabia',
      name: 'アラブ',
      leader: 'サラディン',
      beginningTechId: '数学',
      government: '専制政治'
    }),
    new Civilization({
      id: 'England',
      name: 'イギリス',
      leader: 'エリザベス',
      beginningTechId: '海軍',
      government: '専制政治'
    }),
    new Civilization({
      id: 'India',
      name: 'インド',
      leader: 'ガンジー',
      beginningTechId: '農業',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Egypt',
      name: 'エジプト',
      leader: 'クレオパトラ',
      beginningTechId: '建築学',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Greece',
      name: 'ギリシャ',
      leader: 'アレクサンダー',
      beginningTechId: '民主主義',
      government: '民主主義'
    }),
    new Civilization({
      id: 'Zulu',
      name: 'ズールー',
      leader: 'シャカ',
      beginningTechId: '畜産',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Spain',
      name: 'スペイン',
      leader: 'イザベル',
      beginningTechId: '航海術',
      government: '専制政治'
    }),
    new Civilization({
      id: 'China',
      name: '中国',
      leader: '武則天',
      beginningTechId: '筆記',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Germany',
      name: 'ドイツ',
      leader: 'ビルマルク',
      beginningTechId: '金属加工術',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Japan',
      name: '日本',
      leader: '徳川',
      beginningTechId: '騎士道',
      government: '封建制'
    }),
    new Civilization({
      id: 'France',
      name: 'フランス',
      leader: 'ナポレオン',
      beginningTechId: '陶器',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Mongol',
      name: 'モンゴル',
      leader: 'チンギス',
      beginningTechId: '騎乗',
      government: '専制政治'
    }),
    new Civilization({
      id: 'Rome',
      name: 'ローマ',
      leader: 'カエサル',
      beginningTechId: '法律',
      government: '共和制'
    }),
    new Civilization({
      id: 'Russia',
      name: 'ロシア',
      leader: 'エカチェリーナ',
      beginningTechId: '共産主義',
      government: '共産主義'
    })
  ];
}

//export default [
//  new Civilization({/    id: 'Aztec',
//    name: 'アステカ',
//    leader: 'モンテズマ',
//    beginnigTech: '2-2',
//    government: '専制政治'
//  },
//  {
//    id: 'America',
//    name: 'アメリカ',
//    leader: 'リンカーン',
//    beginningTechId: '通貨',
//    government: '専制政治'
//  },
//  {
//    id: 'Arabia',
//    name: 'アラブ',
//    leader: 'サラディン',
//    beginningTechId: '数学',
//    government: '専制政治'
//  },
//  {
//    id: 'England',
//    name: 'イギリス',
//    leader: 'エリザベス',
//    beginningTechId: '海軍',
//    government: '専制政治'
//  },
//  {
//    id: 'India',
//    name: 'インド',
//    leader: 'ガンジー',
//    beginningTechId: '農業',
//    government: '専制政治'
//  },
//  {
//    id: 'Egypt',
//    name: 'エジプト',
//    leader: 'クレオパトラ',
//    beginningTechId: '建築学',
//    government: '専制政治'
//  },
//  {
//    id: 'Greece',
//    name: 'ギリシャ',
//    leader: 'アレクサンダー',
//    beginningTechId: '民主主義',
//    government: '民主主義'
//  },
//  {
//    id: 'Zulu',
//    name: 'ズールー',
//    leader: 'シャカ',
//    beginningTechId: '畜産',
//    government: '専制政治'
//  },
//  {
//    id: 'Spain',
//    name: 'スペイン',
//    leader: 'イザベル',
//    beginningTechId: '航海術',
//    government: '専制政治'
//  },
//  {
//    id: 'China',
//    name: '中国',
//    leader: '武則天',
//    beginningTechId: '筆記',
//    government: '専制政治'
//  },
//  {
//    id: 'Germany',
//    name: 'ドイツ',
//    leader: 'ビルマルク',
//    beginningTechId: '金属加工術',
//    government: '専制政治'
//  },
//  {
//    id: 'Japan',
//    name: '日本',
//    leader: '徳川',
//    beginningTechId: '騎士道',
//    government: '封建制'
//  },
//  {
//    id: 'France',
//    name: 'フランス',
//    leader: 'ナポレオン',
//    beginningTechId: '陶器',
//    government: '専制政治'
//  },
//  {
//    id: 'Mongol',
//    name: 'モンゴル',
//    leader: 'チンギス',
//    beginningTechId: '騎乗',
//    government: '専制政治'
//  },
//  {
//    id: 'Rome',
//    name: 'ローマ',
//    leader: 'カエサル',
//    beginningTechId: '法律',
//    government: '共和制'
//  },
//  {
//    id: 'Russia',
//    name: 'ロシア',
//    leader: 'エカチェリーナ',
//    beginningTechId: '共産主義',
//    government: '共産主義'
//  }
//];
