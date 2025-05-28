const N3Verbs = [
  {
    word: '明ける',
    reading: 'akeru あける',
    displayMeanings: ['to dawn', 'to become daylight'],
    meanings: ['to dawn', 'to become daylight']
  },
  {
    word: '暗記',
    reading: 'anki あんき',
    displayMeanings: ['memorization', 'learning by heart'],
    meanings: ['memorization', 'learning by heart']
  },
  {
    word: '分析',
    reading: 'bunseki ぶんせき',
    displayMeanings: ['analysis'],
    meanings: ['analysis']
  },
  {
    word: '出会う',
    reading: 'deau であう',
    displayMeanings: [
      'to meet (by chance)',
      'to come across',
      'to run across',
      'to encounter'
    ],
    meanings: [
      'to meet (by chance)',
      'to come across',
      'to run across',
      'to encounter'
    ]
  },
  {
    word: '読書',
    reading: 'dokusho どくしょ',
    displayMeanings: ['reading'],
    meanings: ['reading']
  },
  {
    word: '努力',
    reading: 'doryoku どりょく',
    displayMeanings: [
      'effort',
      'exertion',
      'endeavor',
      'hard work',
      'striving'
    ],
    meanings: ['effort', 'exertion', 'endeavor', 'hard work', 'striving']
  },
  {
    word: '不足',
    reading: 'fusoku ふそく',
    displayMeanings: [
      'insufficiency',
      'shortage',
      'deficiency',
      'lack',
      'dearth'
    ],
    meanings: ['insufficiency', 'shortage', 'deficiency', 'lack', 'dearth']
  },
  {
    word: '外出',
    reading: 'gaishutsu がいしゅつ',
    displayMeanings: [
      'going out',
      'outing',
      "leaving (one's home, office, etc.)"
    ],
    meanings: ['going out', 'outing', "leaving (one's home, office, etc.)"]
  },
  {
    word: '学問',
    reading: 'gakumon がくもん',
    displayMeanings: ['scholarship', 'study', 'learning'],
    meanings: ['scholarship', 'study', 'learning']
  },
  {
    word: '学習',
    reading: 'gakushuu がくしゅう',
    displayMeanings: ['study', 'learning', 'tutorial'],
    meanings: ['study', 'learning', 'tutorial']
  },
  {
    word: '販売',
    reading: 'hanbai はんばい',
    displayMeanings: ['sales', 'selling', 'marketing'],
    meanings: ['sales', 'selling', 'marketing']
  },
  {
    word: '発明',
    reading: 'hatsumei はつめい',
    displayMeanings: ['invention'],
    meanings: ['invention']
  },
  {
    word: '外す',
    reading: 'hazusu はずす',
    displayMeanings: ['to remove', 'to undo', 'to drop', 'to miss'],
    meanings: ['to remove', 'to undo', 'to drop', 'to miss']
  },
  {
    word: '一言',
    reading: 'hitokoto ひとこと',
    displayMeanings: ['single word', 'a few words', 'brief comment'],
    meanings: ['single word', 'a few words', 'brief comment']
  },
  {
    word: '一致',
    reading: 'icchi いっち',
    displayMeanings: ['agreement', 'union', 'match', 'coincidence'],
    meanings: ['agreement', 'union', 'match', 'coincidence']
  },
  {
    word: '邪魔',
    reading: 'jama じゃま',
    displayMeanings: ['hindrance'],
    meanings: ['hindrance']
  },
  {
    word: '会合',
    reading: 'kaigou かいごう',
    displayMeanings: ['meeting', 'assembly', 'gathering', 'association'],
    meanings: ['meeting', 'assembly', 'gathering', 'association']
  },
  {
    word: '開始',
    reading: 'kaishi かいし',
    displayMeanings: ['start', 'commencement', 'beginning', 'initiation'],
    meanings: ['start', 'commencement', 'beginning', 'initiation']
  },
  {
    word: '記念',
    reading: 'kinen きねん',
    displayMeanings: [
      'commemoration',
      'celebration',
      'honoring the memory of something'
    ],
    meanings: [
      'commemoration',
      'celebration',
      'honoring the memory of something'
    ]
  },
  {
    word: '気に入る',
    reading: 'kiniiru きにいる',
    displayMeanings: ['to like', 'to take a liking to'],
    meanings: ['to like', 'to take a liking to']
  },
  {
    word: '記入',
    reading: 'kinyuu きにゅう',
    displayMeanings: ['entry', 'filling in', 'filling out'],
    meanings: ['entry', 'filling in', 'filling out']
  },
  {
    word: '記憶',
    reading: 'kioku きおく',
    displayMeanings: ['memory', 'recollection', 'remembrance'],
    meanings: ['memory', 'recollection', 'remembrance']
  },
  {
    word: '期待',
    reading: 'kitai きたい',
    displayMeanings: ['expectation', 'anticipation', 'hope'],
    meanings: ['expectation', 'anticipation', 'hope']
  },
  {
    word: '転ぶ',
    reading: 'korobu ころぶ',
    displayMeanings: ['to fall down', 'to fall over'],
    meanings: ['to fall down', 'to fall over']
  },
  {
    word: '訓練',
    reading: 'kunren くんれん',
    displayMeanings: ['training', 'drill', 'practice', 'discipline'],
    meanings: ['training', 'drill', 'practice', 'discipline']
  },
  {
    word: '協力',
    reading: 'kyouryoku きょうりょく',
    displayMeanings: ['cooperation', 'collaboration'],
    meanings: ['cooperation', 'collaboration']
  },
  {
    word: '吸収',
    reading: 'kyuushuu きゅうしゅう',
    displayMeanings: ['absorption', 'suction', 'attraction'],
    meanings: ['absorption', 'suction', 'attraction']
  },
  {
    word: '学ぶ',
    reading: 'manabu まなぶ',
    displayMeanings: ['to study (in depth)', 'to learn', 'to take lessons in'],
    meanings: ['to study (in depth)', 'to learn', 'to take lessons in']
  },
  {
    word: '満足',
    reading: 'manzoku まんぞく',
    displayMeanings: ['satisfaction', 'contentment', 'sufficient', 'enough'],
    meanings: ['satisfaction', 'contentment', 'sufficient', 'enough']
  },
  {
    word: '味方',
    reading: 'mikata みかた',
    displayMeanings: [
      'friend',
      'ally',
      'supporter',
      'taking sides with',
      'supporting'
    ],
    meanings: ['friend', 'ally', 'supporter', 'taking sides with', 'supporting']
  },
  {
    word: '入場',
    reading: 'nyuujou にゅうじょう',
    displayMeanings: ['entrance', 'admission', 'entering'],
    meanings: ['entrance', 'admission', 'entering']
  },
  {
    word: '収める',
    reading: 'osameru おさめる',
    displayMeanings: [
      'to supply',
      'to dedicate',
      'to make an offering',
      'to pay'
    ],
    meanings: ['to supply', 'to dedicate', 'to make an offering', 'to pay']
  },
  {
    word: '連続',
    reading: 'renzoku れんぞく',
    displayMeanings: ['continuation', 'succession', 'series'],
    meanings: ['continuation', 'succession', 'series']
  },
  {
    word: '利益',
    reading: 'rieki りえき',
    displayMeanings: ['profit', 'gains', 'benefit'],
    meanings: ['profit', 'gains', 'benefit']
  },
  {
    word: '留学',
    reading: 'ryuugaku りゅうがく',
    displayMeanings: ['studying abroad'],
    meanings: ['studying abroad']
  },
  {
    word: '左右',
    reading: 'sayuu さゆう',
    displayMeanings: ['left and right'],
    meanings: ['left and right']
  },
  {
    word: '成長',
    reading: 'seichou せいちょう',
    displayMeanings: [
      'growth',
      'development',
      'growing up',
      'becoming an adult'
    ],
    meanings: ['growth', 'development', 'growing up', 'becoming an adult']
  },
  {
    word: '刺激',
    reading: 'shigeki しげき',
    displayMeanings: [
      'stimulus',
      'impetus',
      'incentive',
      'encouragement',
      'motivation',
      'provocation',
      'excitement',
      'thrill'
    ],
    meanings: [
      'stimulus',
      'impetus',
      'incentive',
      'encouragement',
      'motivation',
      'provocation',
      'excitement',
      'thrill'
    ]
  },
  {
    word: '進学',
    reading: 'shingaku しんがく',
    displayMeanings: ['entering a higher-level school (often university)'],
    meanings: ['entering a higher-level school (often university)']
  },
  {
    word: '使用',
    reading: 'shiyou しよう',
    displayMeanings: ['use', 'application', 'employment', 'utilization.'],
    meanings: ['use', 'application', 'employment', 'utilization.']
  },
  {
    word: '証明',
    reading: 'shoumei しょうめい',
    displayMeanings: ['proof', 'verification', 'certification'],
    meanings: ['proof', 'verification', 'certification']
  },
  {
    word: '招待',
    reading: 'shoutai しょうたい',
    displayMeanings: ['invitation'],
    meanings: ['invitation']
  },
  {
    word: '集中',
    reading: 'shuuchuu しゅうちゅう',
    displayMeanings: [
      'concentration',
      'focusing',
      'centralization',
      'integration'
    ],
    meanings: ['concentration', 'focusing', 'centralization', 'integration']
  },
  {
    word: '収穫',
    reading: 'shuukaku しゅうかく',
    displayMeanings: ['harvest', 'crop', "fruits (of one's labors)"],
    meanings: ['harvest', 'crop', "fruits (of one's labors)"]
  },
  {
    word: '徹夜',
    reading: 'tetsuya てつや',
    displayMeanings: ['staying up all night'],
    meanings: ['staying up all night']
  },
  {
    word: '取れる',
    reading: 'toreru とれる',
    displayMeanings: ['to come off', 'to be removed', 'to be obtainable'],
    meanings: ['to come off', 'to be removed', 'to be obtainable']
  },
  {
    word: '取り上げる',
    reading: 'toriageru とりあげる',
    displayMeanings: ['to pick up'],
    meanings: ['to pick up']
  },
  {
    word: '通学',
    reading: 'tsuugaku つうがく',
    displayMeanings: ['commuting to school', 'school commute'],
    meanings: ['commuting to school', 'school commute']
  },
  {
    word: '受け取る',
    reading: 'uketoru うけとる',
    displayMeanings: ['to receive', 'to understand'],
    meanings: ['to receive', 'to understand']
  },
  {
    word: '運転',
    reading: 'unten うんてん',
    displayMeanings: ['operation', 'driving'],
    meanings: ['operation', 'driving']
  },
  {
    word: '売れる',
    reading: 'ureru うれる',
    displayMeanings: ['to sell (well)'],
    meanings: ['to sell (well)']
  },
  {
    word: '分ける',
    reading: 'wakeru わける',
    displayMeanings: ['to divide', 'to split', 'to part', 'to separate'],
    meanings: ['to divide', 'to split', 'to part', 'to separate']
  },
  {
    word: '悪口',
    reading: 'waruguchi わるぐち',
    displayMeanings: [
      'slander',
      'bad-mouthing',
      'abuse',
      'insult',
      'speaking ill (of)'
    ],
    meanings: [
      'slander',
      'bad-mouthing',
      'abuse',
      'insult',
      'speaking ill (of)'
    ]
  },
  {
    word: '輸入',
    reading: 'yunyuu ゆにゅう',
    displayMeanings: ['import', 'importation', 'introduction'],
    meanings: ['import', 'importation', 'introduction']
  },
  {
    word: '輸出',
    reading: 'yushutsu ゆしゅつ',
    displayMeanings: ['export', 'exportation'],
    meanings: ['export', 'exportation']
  }
];

export default N3Verbs;
