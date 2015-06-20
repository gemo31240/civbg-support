'use strict';

const Tech = [
    {
      id: '1-1',
      name: '海軍',
      level: 'one',
      politics: null,
      building: '造船所',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '都市アクションを使って軍隊を生産するたびに、あなたは「造船所」があるあなたの任意の都市の郊外にそのフィギュアを置くことできる。'
        }
      ]
    },
    {
      id: '1-2',
      name: '騎乗',
      level: 'one',
      politics: null,
      building: null,
      arms: null,
      moves: '3マス',
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '絹1',
      effects: [
        {
          phase: '商業',
          resource: null,
          description: '9商業点を得る。その後あなたが選んだ他プレイヤー1人は6商業点を得る。'
        }
      ]
    },
    {
      id: '1-3',
      name: '金属加工術',
      level: 'one',
      politics: null,
      building: '兵舎',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '鉄1',
      effects: [
        {
          phase: '戦闘',
          resource: null,
          description: '手札から部隊カードを1枚出したとき、その攻撃における兵力値に+3する。'
        }
      ]
    },
    {
      id: '1-4',
      name: '航海術',
      level: 'one',
      politics: null,
      building: '港',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: 'あなたは水域を横断できる。しかし水域で移動を終えることはできない。'
        }
      ]
    },
    {
      id: '1-5',
      name: '石工術',
      level: 'one',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: '3個',
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: 'あなたは7生産点で都市に市壁を建設できる。そうした場合、都市マーカーを裏返し、市壁面を表にして示す。'
        }
      ]
    },
    {
      id: '1-6',
      name: '畜産',
      level: 'one',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1戦闘に1回、自分の部隊から3負傷までを治癒する。'
        },
        {
          phase: '都市運営',
          resource: '小麦1',
          description: 'このターン、あなたの都市1つは追加の3生産点を生み出す。'
        }
      ]
    },
    {
      id: '1-7',
      name: '通貨',
      level: 'one',
      politics: null,
      building: '市場',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '香1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: '3文化点を得る。'
        }
      ]
    },
    {
      id: '1-8',
      name: '哲学',
      level: 'one',
      politics: null,
      building: '神殿',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '任意3',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: '偉人1人をランダムに得る。'
        }
      ]
    },
    {
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
      effect1resources: '任意2',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: 'この技術の上にコイントークンを1枚置く(最大4枚)'
        }
      ]
    },
    {
      id: '1-10',
      name: '農業',
      level: 'one',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: '  ',
          resource: null,
          description: '首都を即座にメトロポリスに成長させる。'
        }
      ]
    },
    {
      id: '1-11',
      name: '筆記',
      level: 'one',
      politics: null,
      building: '図書館',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: 'スパイ1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: '他プレイヤーが実行した都市アクション1つを無効化する(資源能力は無効化できない)。'
        }
      ]
    },
    {
      id: '1-12',
      name: '法律',
      level: 'one',
      politics: '共和制',
      building: '交易所',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1ターンに1回、あなたが戦闘に勝利したあと、この技術の上にコイントークン1枚を置く(最大4枚)。'
        }
      ]
    },
    {
      id: '2-1',
      name: '活版印刷',
      level: 'two',
      politics: null,
      building: '大学',
      arms: null,
      moves: null,
      stack: ' 4個',
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1ターンに1回、あなたは都市運営中に5文化点を支払い、この技術の上にコイントークンを1枚置くことができる(最大4枚)。'
        }
      ]
    },
    {
      id: '2-2',
      name: '灌漑',
      level: 'two',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '最大都市数：3'
        }
      ]
    },
    {
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
      effect1resources: 'スパイ1',
      effects: [
        {
          phase: 'いつでも',
          resource: null,
          description: '文化イベント1つを無効化する。'
        }
      ]
    },
    {
      id: '2-4',
      name: '官僚制',
      level: 'two',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: 'コイン+1',
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1ターンに1回、あなたは「研究」中に自分の社会政策1つを転換できる。'
        }
      ]
    },
    {
      id: '2-5',
      name: '騎士道',
      level: 'two',
      politics: '封建制',
      building: null,
      arms: '騎兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '香1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: '5文化点を得る。'
        }
      ]
    },
    {
      id: '2-6',
      name: '君主政治',
      level: 'two',
      politics: '君主政治',
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '絹1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: '古代の文化遺産1つを陳腐化するか、他プレイヤー1人の常備軍から1部隊をランダムに除去する。'
        }
      ]
    },
    {
      id: '2-7',
      name: '建築学',
      level: 'two',
      politics: null,
      building: '工房',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '小麦1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: 'このターン中、あなたの都市1つは追加の5生産点を生み出す。'
        }
      ]
    },
    {
      id: '2-8',
      name: '工学',
      level: 'two',
      politics: null,
      building: '上水道',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1ターンに1回、あなたは都市1つから生産点を支払う時、生産点を分割して支払い、任意のものを1つではなく2つ生産することができる。'
        }
      ]
    },
    {
      id: '2-9',
      name: '神秘主義',
      level: 'two',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '文化イベントカードを引くとき、同じ山から追加のカードを1枚引き、1枚を保持してもう1枚を捨て札にする。'
        },
        {
          phase: '都市運営',
          resource: 'スパイ1',
          description: '他プレイヤー1人のコイントークン(投資マーカー不可)を1枚選び、ストックに戻す。'
        }
      ]
    },
    {
      id: '2-10',
      name: '数学',
      level: 'two',
      politics: null,
      building: null,
      arms: '砲兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '鉄1',
      effects: [
        {
          phase: '戦闘',
          resource: null,
          description: '戦闘のあいだに3負傷まで、任意の敵部隊に任意の組み合わせで与える。'
        }
      ]
    },
    {
      id: '2-11',
      name: '帆走',
      level: 'two',
      politics: null,
      building: null,
      arms: null,
      moves: '4マス',
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: 'あなたは水域を横断したり、水域で移動を終了したりできる。'
        }
      ]
    },
    {
      id: '2-12',
      name: '兵站学',
      level: 'two',
      politics: null,
      building: null,
      arms: '全兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [

      ]
    },
    {
      id: '2-13',
      name: '民主主義',
      level: 'two',
      politics: '民主主義',
      building: null,
      arms: '歩兵2',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1ターンに1回、あなたは都市運営中に6商業点を支払い、この技術の上にコイントークン1枚を置くことができる。(最大4枚)。'
        }
      ]
    },
    {
      id: '3-1',
      name: '火薬',
      level: 'three',
      politics: null,
      building: null,
      arms: '歩兵3',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '任意2',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: '古代か中世の文化遺産1つを陳腐化するか、任意の建造物1つを破壊する。'
        }
      ]
    },
    {
      id: '3-2',
      name: '環境保護',
      level: 'three',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '持っている3コインごとに、文化レベルマーカーを進めるコストが1商業点減る。'
        },
        {
          phase: 'ターン開始',
          resource: '小麦1',
          description: '空いている山岳以外のマス1つを、以降ずっと森林、草原、砂漠、水域のいずれかに変更する。'
        }
      ]
    },
    {
      id: '3-3',
      name: '教育',
      level: 'three',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1ターンに1回、あなたが文化遺産を建造したとき、この技術の上にコイントークンを1枚置く(最大4枚)。'
        },
        {
          phase: '都市運営',
          resource: '絹1,香1,鉄1,小麦1',
          description: '即座に任意の技術1つを無料で学習する。'
        }
      ]
    },
    {
      id: '3-4',
      name: '共産主義',
      level: 'three',
      politics: '共産主義',
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: 'スパイ1',
      effects: [
        {
          phase: '移動',
          resource: null,
          description: 'マスを1つ選ぶ。このターン中、フィギュアはそのマスから移動できない。この効果はフィギュアの移動中に割り込んで使うことができる。'
        }
      ]
    },
    {
      id: '3-5',
      name: '銀行制度',
      level: 'three',
      politics: null,
      building: '銀行',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '小麦1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: 'このターン中、あなたの都市1つは追加で7生産点を生み出す。'
        }
      ]
    },
    {
      id: '3-6',
      name: '軍事学',
      level: 'three',
      politics: null,
      building: '士官学校',
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: 'あなたが持っている3コインごとに、あなたの各都市は追加で1生産点を生み出す。'
        }
      ]
    },
    {
      id: '3-7',
      name: '蒸気機関',
      level: 'three',
      politics: null,
      building: null,
      arms: null,
      moves: '5マス',
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: 'あなたは水域を横断したり、水域で移動を終了したりできる。'
        },
        {
          phase: '都市運営',
          resource: '絹1',
          description: '1つのマスにある自分の全フィギュアを任意の水域マス1つに移動させる。これらのフィギュアはこのターン中は再び移動できない。'
        }
      ]
    },
    {
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
      effect1resources: null,
      effects: [

      ]
    },
    {
      id: '3-9',
      name: '生物学',
      level: 'three',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: '5個',
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1戦闘に1回、自軍の全部隊の負傷をすべて治癒する。'
        }
      ]
    },
    {
      id: '3-10',
      name: '鋳金',
      level: 'three',
      politics: null,
      building: null,
      arms: '砲兵3',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '香1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: '7文化点を得る。'
        }
      ]
    },
    {
      id: '3-11',
      name: '鉄道',
      level: 'three',
      politics: null,
      building: '鉄鉱山',
      arms: '騎兵3',
      moves: null,
      stack: null,
      coin: 'コイン+1',
      culturecard: null,
      effect1resources: null,
      effects: [

      ]
    },
    {
      id: '4-1',
      name: '共通規格',
      level: 'four',
      politics: null,
      building: null,
      arms: '歩兵4',
      moves: null,
      stack: '6個',
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [

      ]
    },
    {
      id: '4-2',
      name: '原子理論',
      level: 'four',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: 'ウラン1',
      effects: [
        {
          phase: '都市運営',
          resource: null,
          description: 'あなたの各都市ごとに追加の1アクションを行う。'
        },
        {
          phase: '移動',
          resource: 'ウラン1',
          description: '首都以外の都市1つを核攻撃する。その都市は郊外にあるすべての建造物、文化遺産、フィギュア、偉人と共に破壊される。'
        }
      ]
    },
    {
      id: '4-3',
      name: 'コンピューター',
      level: 'four',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: 'コイン+1',
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '所持している5コインごとに、あなたの戦闘/文化手札上限は1枚ずつ増える。'
        }
      ]
    },
    {
      id: '4-4',
      name: '弾道学',
      level: 'four',
      politics: null,
      building: null,
      arms: '砲兵4',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: '鉄1',
      effects: [
        {
          phase: '戦闘',
          resource: null,
          description: '戦闘のあいだに6負傷まで、任意の敵部隊に任意の組み合わせで与える。'
        }
      ]
    },
    {
      id: '4-5',
      name: '内燃機関',
      level: 'four',
      politics: null,
      building: null,
      arms: '騎兵4',
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '1ターンに1回、自分の軍隊が建造物上で移動を終えたとき、その建造物を破壊する。自分の軍隊が市壁のある都市を攻撃したとき、市壁は先頭前に破壊される。'
        }
      ]
    },
    {
      id: '4-6',
      name: '飛行機',
      level: 'four',
      politics: null,
      building: null,
      arms: '飛行機',
      moves: '6マス',
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: 'あなたは水域を横断したり、水域で移動を終了したりできる。また、移動時に敵フィギュアや小屋、村、都市を無視できる。'
        }
      ]
    },
    {
      id: '4-7',
      name: 'プラスチック',
      level: 'four',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: 'ターン開始',
          resource: null,
          description: '1ターンに1回、解禁済みの部隊かフィギュアか建造物1つを無料で生産する。'
        },
        {
          phase: '都市運営',
          resource: '小麦1',
          description: 'このターン、あなたの都市1つは追加の10生産点を生み出す。'
        }
      ]
    },
    {
      id: '4-8',
      name: 'マスメディア',
      level: 'four',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '他のゲーム効果にかかわらず、あなたは文化イベントを無効化されなくなる。'
        },
        {
          phase: 'いつでも',
          resource: 'スパイ1',
          description: '資源能力1つを無効化する。その能力を使うために支払われた資源は失われる。'
        }
      ]
    },
    {
      id: '5-1',
      name: '宇宙飛行',
      level: 'five',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [
        {
          phase: null,
          resource: null,
          description: '技術的勝利をもって、即座にゲームを勝利する。'
        }
      ]
    },
    {
      id: 'newton',
      name: 'アイザック・ニュートン',
      level: 'extra',
      politics: null,
      building: null,
      arms: null,
      moves: null,
      stack: null,
      coin: null,
      culturecard: null,
      effect1resources: null,
      effects: [

      ]
    }
  ];

Tech.findById = (techId) => _.find(Tech, (tech) => techId === tech.id);

export default Tech;
