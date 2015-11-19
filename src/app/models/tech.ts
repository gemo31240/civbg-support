'use strict';

import * as _ from 'lodash';

interface ITechProperties {
  id: string;
  name: string;
  level: string;
  politics: string;
  building: string;
  arms: string;
  moves: string;
  stack: string;
  coin: string;
  culturecard: string;
}

export const LEVELS = ['first', 'second', 'third', 'fourth'];

export default class Tech {
  public id: string;
  public name: string;
  public level: string;
  public politics: string;
  public building: string;
  public arms: string;
  public moves: string;
  public stack: string;
  public coin: string;
  public culturecard: string;

  constructor(properties: ITechProperties) {
    this.id = properties.id;
    this.name = properties.name;
    this.level = properties.level;
    this.politics = properties.politics;
    this.building = properties.building;
    this.arms = properties.arms;
    this.moves = properties.moves;
    this.stack = properties.stack;
    this.coin = properties.coin;
    this.culturecard = properties.culturecard;
  }

  public static find(id: string) {
    return _.find(this.all, (tech) => tech.id === id);
  }

  public static all = [
    new Tech({
      id: '海軍',
      name: '海軍',
      level: 'first',
      politics: null,
      building: '造船所',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '騎乗',
      name: '騎乗',
      level: 'first',
      politics: null,
      building: null,
      arms: null,
      moves: '3マス',
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '金属加工術',
      name: '金属加工術',
      level: 'first',
      politics: null,
      building: '兵舎',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '航海術',
      name: '航海術',
      level: 'first',
      politics: null,
      building: '港',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '石工術',
      name: '石工術',
      level: 'first',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: '3個',
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '畜産',
      name: '畜産',
      level: 'first',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '通貨',
      name: '通貨',
      level: 'first',
      politics: null,
      building: '市場',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '哲学',
      name: '哲学',
      level: 'first',
      politics: null,
      building: '神殿',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '陶器',
      name: '陶器',
      level: 'first',
      politics: null,
      building: '穀物庫 ',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: '上限+1',
    }),
    new Tech({
      id: '農業',
      name: '農業',
      level: 'first',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '筆記',
      name: '筆記',
      level: 'first',
      politics: null,
      building: '図書館',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '法律',
      name: '法律',
      level: 'first',
      politics: '共和制',
      building: '交易所',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '活版印刷',
      name: '活版印刷',
      level: 'second',
      politics: null,
      building: '大学',
      arms: null,
      moves: null,
      stack: ' 4個',
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '灌漑',
      name: '灌漑',
      level: 'second',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '官吏',
      name: '官吏',
      level: 'second',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: 'コイン+1',
      culturecard: '上限+1',
    }),
    new Tech({
      id: '官僚制',
      name: '官僚制',
      level: 'second',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: 'コイン+1',
      culturecard: null
    }),
    new Tech({
      id: '騎士道',
      name: '騎士道',
      level: 'second',
      politics: '封建制',
      building: null,
      arms: '騎兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '君主政治',
      name: '君主政治',
      level: 'second',
      politics: '君主政治',
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '建築学',
      name: '建築学',
      level: 'second',
      politics: null,
      building: '工房',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '工学',
      name: '工学',
      level: 'second',
      politics: null,
      building: '上水道',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '神秘主義',
      name: '神秘主義',
      level: 'second',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '数学',
      name: '数学',
      level: 'second',
      politics: null,
      building: null,
      arms: '砲兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '帆走',
      name: '帆走',
      level: 'second',
      politics: null,
      building: null,
      arms: null,
      moves: '4マス',
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '兵站学',
      name: '兵站学',
      level: 'second',
      politics: null,
      building: null,
      arms: '全兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '民主主義',
      name: '民主主義',
      level: 'second',
      politics: '民主主義',
      building: null,
      arms: '歩兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '火薬',
      name: '火薬',
      level: 'third',
      politics: null,
      building: null,
      arms: '歩兵3',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '環境保護',
      name: '環境保護',
      level: 'third',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '教育',
      name: '教育',
      level: 'third',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '共産主義',
      name: '共産主義',
      level: 'third',
      politics: '共産主義',
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '銀行制度',
      name: '銀行制度',
      level: 'third',
      politics: null,
      building: '銀行',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '軍事学',
      name: '軍事学',
      level: 'third',
      politics: null,
      building: '士官学校',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '蒸気機関',
      name: '蒸気機関',
      level: 'third',
      politics: null,
      building: null,
      arms: null,
      moves: '5マス',
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '神学',
      name: '神学',
      level: 'third',
      politics: '原理主義',
      building: '大聖堂',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: '上限+1',
    }),
    new Tech({
      id: '生物学',
      name: '生物学',
      level: 'third',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: '5個',
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '鋳金',
      name: '鋳金',
      level: 'third',
      politics: null,
      building: null,
      arms: '砲兵3',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '鉄道',
      name: '鉄道',
      level: 'third',
      politics: null,
      building: '鉄鉱山',
      arms: '騎兵3',
      moves: null,
      stack: null,
      coin: 'コイン+1',
      culturecard: null
    }),
    new Tech({
      id: '共通規格',
      name: '共通規格',
      level: 'fourth',
      politics: null,
      building: null,
      arms: '歩兵4',
      moves: null,
      stack: '6個',
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '原子理論',
      name: '原子理論',
      level: 'fourth',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: 'コンピューター',
      name: 'コンピューター',
      level: 'fourth',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: 'コイン+1',
      culturecard: null
    }),
    new Tech({
      id: '弾道学',
      name: '弾道学',
      level: 'fourth',
      politics: null,
      building: null,
      arms: '砲兵4',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '内燃機関',
      name: '内燃機関',
      level: 'fourth',
      politics: null,
      building: null,
      arms: '騎兵4',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '飛行機',
      name: '飛行機',
      level: 'fourth',
      politics: null,
      building: null,
      arms: '飛行機',
      moves: '6マス',
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: 'プラスチック',
      name: 'プラスチック',
      level: 'fourth',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: 'マスメディア',
      name: 'マスメディア',
      level: 'fourth',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: '宇宙飛行',
      name: '宇宙飛行',
      level: 'five',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    }),
    new Tech({
      id: 'newton',
      name: 'アイザック・ニュートン',
      level: 'extra',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null
    })
  ];
}
