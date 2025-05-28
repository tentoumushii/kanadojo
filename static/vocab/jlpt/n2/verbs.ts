const N2Verbs = [
  {
    word: '売買',
    reading: 'baibai ばいばい',
    displayMeanings: ['trade', 'buying and selling'],
    meanings: ['trade', 'buying and selling']
  },
  {
    word: '募集',
    reading: 'boshuu ぼしゅう',
    displayMeanings: [
      'recruitment',
      'invitation',
      'taking applications',
      'solicitation'
    ],
    meanings: [
      'recruitment',
      'invitation',
      'taking applications',
      'solicitation'
    ]
  },
  {
    word: '遠足',
    reading: 'ensoku えんそく',
    displayMeanings: ['excursion', 'outing', 'trip'],
    meanings: ['excursion', 'outing', 'trip']
  },
  {
    word: '発売',
    reading: 'hatsubai はつばい',
    displayMeanings: ['sale', 'release (for sale)', 'launch (product)'],
    meanings: ['sale', 'release (for sale)', 'launch (product)']
  },
  {
    word: '外れる',
    reading: 'hazureru はずれる',
    displayMeanings: ['to be disconnected', 'to be off', 'to miss the mark'],
    meanings: ['to be disconnected', 'to be off', 'to miss the mark']
  },
  {
    word: '閉会',
    reading: 'heikai へいかい',
    displayMeanings: ['closure (of a ceremony, event, meeting, etc.)'],
    meanings: ['closure (of a ceremony, event, meeting, etc.)']
  },
  {
    word: '昼寝',
    reading: 'hirune ひるね',
    displayMeanings: ['nap, siesta'],
    meanings: ['nap', 'siesta']
  },
  {
    word: '意地悪',
    reading: 'ijiwaru いじわる',
    displayMeanings: ['malicious', 'ill-tempered', 'unkind'],
    meanings: ['malicious', 'ill-tempered', 'unkind']
  },
  {
    word: '移転',
    reading: 'iten いてん',
    displayMeanings: ['moving', 'relocation', 'change of address'],
    meanings: ['moving', 'relocation', 'change of address']
  },
  {
    word: '自習',
    reading: 'jishuu じしゅう',
    displayMeanings: ['self-study', 'teaching oneself'],
    meanings: ['self-study', 'teaching oneself']
  },
  {
    word: '実習',
    reading: 'jisshuu じっしゅう',
    displayMeanings: ['practice', 'training', 'practical exercise', 'drill'],
    meanings: ['practice', 'training', 'practical exercise', 'drill']
  },
  {
    word: '開会',
    reading: 'kaikai かいかい',
    displayMeanings: ['opening of a meeting', 'starting (an event, etc)'],
    meanings: ['opening of a meeting', 'starting (an event, etc)']
  },
  {
    word: '回転',
    reading: 'kaiten かいてん',
    displayMeanings: ['rotation', 'revolution', 'turning'],
    meanings: ['rotation', 'revolution', 'turning']
  },
  {
    word: '加速',
    reading: 'kasoku かそく',
    displayMeanings: ['acceleration', 'speeding up'],
    meanings: ['acceleration', 'speeding up']
  },
  {
    word: '見学',
    reading: 'kengaku けんがく',
    displayMeanings: [
      'study by observation',
      'field trip',
      'tour',
      'review',
      'inspection'
    ],
    meanings: [
      'study by observation',
      'field trip',
      'tour',
      'review',
      'inspection'
    ]
  },
  {
    word: '転がる',
    reading: 'korogaru ころがる',
    displayMeanings: ['to roll', 'to fall over', 'to lie down'],
    meanings: ['to roll', 'to fall over', 'to lie down']
  },
  {
    word: '転がす',
    reading: 'korogasu ころがす',
    displayMeanings: ['to roll', 'to turn over'],
    meanings: ['to roll', 'to turn over']
  },
  {
    word: '待ち合わせる',
    reading: 'machiawaseru まちあわせる',
    displayMeanings: [
      'to rendezvous',
      'to meet at a prearranged place and time',
      'to arrange to meet'
    ],
    meanings: [
      'to rendezvous',
      'to meet at a prearranged place and time',
      'to arrange to meet'
    ]
  },
  {
    word: '入社',
    reading: 'nyuusha にゅうしゃ',
    displayMeanings: ['joining a company'],
    meanings: ['joining a company']
  },
  {
    word: '押さえる',
    reading: 'osaeru おさえる',
    displayMeanings: ['to pin down', 'to hold down', 'to press down'],
    meanings: ['to pin down', 'to hold down', 'to press down']
  },
  {
    word: '領収',
    reading: 'ryoushuu りょうしゅう',
    displayMeanings: ['receipt (of money)', 'receiving'],
    meanings: ['receipt (of money)', 'receiving']
  },
  {
    word: '刺さる',
    reading: 'sasaru ささる',
    displayMeanings: [
      'to stick into (with a sharp point)',
      'to prick',
      'to get stuck (in)'
    ],
    meanings: [
      'to stick into (with a sharp point)',
      'to prick',
      'to get stuck (in)'
    ]
  },
  {
    word: '刺す',
    reading: 'sasu さす',
    displayMeanings: [
      'to pierce',
      'to stab',
      'to prick',
      'to stick',
      'to thrust',
      'to sting'
    ],
    meanings: [
      'to pierce',
      'to stab',
      'to prick',
      'to stick',
      'to thrust',
      'to sting'
    ]
  },
  {
    word: '司会',
    reading: 'shikai しかい',
    displayMeanings: [
      'master of ceremonies',
      'leading a meeting',
      'presenter',
      'host'
    ],
    meanings: ['master of ceremonies', 'leading a meeting', 'presenter', 'host']
  },
  {
    word: '集合',
    reading: 'shuugou しゅうごう',
    displayMeanings: ['gathering', 'assembly', 'meeting'],
    meanings: ['gathering', 'assembly', 'meeting']
  },
  {
    word: '集会',
    reading: 'shuukai しゅうかい',
    displayMeanings: [
      'meeting',
      'assembly',
      'gathering',
      'convention',
      'rally'
    ],
    meanings: ['meeting', 'assembly', 'gathering', 'convention', 'rally']
  },
  {
    word: '速達',
    reading: 'sokutatsu そくたつ',
    displayMeanings: ['express', 'special delivery'],
    meanings: ['express', 'special delivery']
  },
  {
    word: '足る',
    reading: 'taru たる',
    displayMeanings: [
      'to be sufficient',
      'to be enough',
      'to be worth doing',
      'to be worthy of',
      'to deserve'
    ],
    meanings: [
      'to be sufficient',
      'to be enough',
      'to be worth doing',
      'to be worthy of',
      'to deserve'
    ]
  },
  {
    word: '特売',
    reading: 'tokubai とくばい',
    displayMeanings: ['special sale'],
    meanings: ['special sale']
  },
  {
    word: '売り切れる',
    reading: 'urikireru うりきれる',
    displayMeanings: ['to be sold out'],
    meanings: ['to be sold out']
  },
  {
    word: '輸血',
    reading: 'yuketsu ゆけつ',
    displayMeanings: ['blood transfusion'],
    meanings: ['blood transfusion']
  },
  {
    word: '輸送',
    reading: 'yusou ゆそう',
    displayMeanings: ['transport', 'transportation'],
    meanings: ['transport', 'transportation']
  }
];

export default N2Verbs;
