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

  constructor(def: ITechProperties) {
    this.id = def.id;
    this.name = def.name;
    this.level = def.level;
    this.politics = def.politics;
    this.building = def.building;
    this.arms = def.arms;
    this.moves = def.moves;
    this.stack = def.stack;
    this.coin = def.coin;
    this.culturecard = def.culturecard;
  }

  public static findById(techId: string) {
    return _.find(this.ALL, (tech) => techId === tech.id);
  }

  public static get ALL(): Tech[] {
    return [
      new Tech({
        id: '1-1',
        name: '海軍',
        level: 'one',
        politics: null,
        building: '造船所',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-2',
        name: '騎乗',
        level: 'one',
        politics: null,
        building: null,
        arms: null,
        moves: '3マス',
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-3',
        name: '金属加工術',
        level: 'one',
        politics: null,
        building: '兵舎',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-4',
        name: '航海術',
        level: 'one',
        politics: null,
        building: '港',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-5',
        name: '石工術',
        level: 'one',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: '3個',
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-6',
        name: '畜産',
        level: 'one',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-7',
        name: '通貨',
        level: 'one',
        politics: null,
        building: '市場',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-8',
        name: '哲学',
        level: 'one',
        politics: null,
        building: '神殿',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-9',
        name: '陶器',
        level: 'one',
        politics: null,
        building: '穀物庫 ',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: '上限+1',
      }),
      new Tech({
        id: '1-10',
        name: '農業',
        level: 'one',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-11',
        name: '筆記',
        level: 'one',
        politics: null,
        building: '図書館',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '1-12',
        name: '法律',
        level: 'one',
        politics: '共和制',
        building: '交易所',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-1',
        name: '活版印刷',
        level: 'two',
        politics: null,
        building: '大学',
        arms: null,
        moves: null,
        stack: ' 4個',
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-2',
        name: '灌漑',
        level: 'two',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-3',
        name: '官吏',
        level: 'two',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: 'コイン+1',
        culturecard: '上限+1',
      }),
      new Tech({
        id: '2-4',
        name: '官僚制',
        level: 'two',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: 'コイン+1',
        culturecard: null
      }),
      new Tech({
        id: '2-5',
        name: '騎士道',
        level: 'two',
        politics: '封建制',
        building: null,
        arms: '騎兵2',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-6',
        name: '君主政治',
        level: 'two',
        politics: '君主政治',
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-7',
        name: '建築学',
        level: 'two',
        politics: null,
        building: '工房',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-8',
        name: '工学',
        level: 'two',
        politics: null,
        building: '上水道',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-9',
        name: '神秘主義',
        level: 'two',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-10',
        name: '数学',
        level: 'two',
        politics: null,
        building: null,
        arms: '砲兵2',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-11',
        name: '帆走',
        level: 'two',
        politics: null,
        building: null,
        arms: null,
        moves: '4マス',
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-12',
        name: '兵站学',
        level: 'two',
        politics: null,
        building: null,
        arms: '全兵2',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '2-13',
        name: '民主主義',
        level: 'two',
        politics: '民主主義',
        building: null,
        arms: '歩兵2',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-1',
        name: '火薬',
        level: 'three',
        politics: null,
        building: null,
        arms: '歩兵3',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-2',
        name: '環境保護',
        level: 'three',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-3',
        name: '教育',
        level: 'three',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-4',
        name: '共産主義',
        level: 'three',
        politics: '共産主義',
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-5',
        name: '銀行制度',
        level: 'three',
        politics: null,
        building: '銀行',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-6',
        name: '軍事学',
        level: 'three',
        politics: null,
        building: '士官学校',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-7',
        name: '蒸気機関',
        level: 'three',
        politics: null,
        building: null,
        arms: null,
        moves: '5マス',
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-8',
        name: '神学',
        level: 'three',
        politics: '原理主義',
        building: '大聖堂',
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: '上限+1',
      }),
      new Tech({
        id: '3-9',
        name: '生物学',
        level: 'three',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: '5個',
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-10',
        name: '鋳金',
        level: 'three',
        politics: null,
        building: null,
        arms: '砲兵3',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '3-11',
        name: '鉄道',
        level: 'three',
        politics: null,
        building: '鉄鉱山',
        arms: '騎兵3',
        moves: null,
        stack: null,
        coin: 'コイン+1',
        culturecard: null
      }),
      new Tech({
        id: '4-1',
        name: '共通規格',
        level: 'four',
        politics: null,
        building: null,
        arms: '歩兵4',
        moves: null,
        stack: '6個',
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '4-2',
        name: '原子理論',
        level: 'four',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '4-3',
        name: 'コンピューター',
        level: 'four',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: 'コイン+1',
        culturecard: null
      }),
      new Tech({
        id: '4-4',
        name: '弾道学',
        level: 'four',
        politics: null,
        building: null,
        arms: '砲兵4',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '4-5',
        name: '内燃機関',
        level: 'four',
        politics: null,
        building: null,
        arms: '騎兵4',
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '4-6',
        name: '飛行機',
        level: 'four',
        politics: null,
        building: null,
        arms: '飛行機',
        moves: '6マス',
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '4-7',
        name: 'プラスチック',
        level: 'four',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '4-8',
        name: 'マスメディア',
        level: 'four',
        politics: null,
        building: null,
        arms: null,
        moves: null,
        stack: null,
        coin: null,
        culturecard: null
      }),
      new Tech({
        id: '5-1',
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
}
