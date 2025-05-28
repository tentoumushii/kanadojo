const N3Adverbs = [
  {
    word: 'あまり',
    reading: 'amari',
    displayMeanings: ['so much… that'],
    meanings: ['so much… that']
  },
  {
    word: 'あまりにも',
    reading: 'amari ni mo',
    displayMeanings: ['too much', 'so much… that', 'excessively ~'],
    meanings: ['too much', 'so much… that', 'excessively ~']
  },
  {
    word: '別に～ない',
    reading: 'betsu ni~nai べつに～ない',
    displayMeanings: ['not really', 'not particularly'],
    meanings: ['not really', 'not particularly']
  },
  {
    word: 'どんなに～ても',
    reading: 'donna ni~temo',
    displayMeanings: ['no matter how (much)'],
    meanings: ['no matter how (much)']
  },
  {
    word: 'どうしても',
    reading: 'doushitemo',
    displayMeanings: ['no matter what', 'at any cost', 'after all ~'],
    meanings: ['no matter what', 'at any cost', 'after all ~']
  },
  {
    word: '再び',
    reading: 'futatabi ふたたび',
    displayMeanings: ['again', 'once more', 'a second time'],
    meanings: ['again', 'once more', 'a second time']
  },
  {
    word: 'ふと',
    reading: 'futo',
    displayMeanings: [
      'suddenly',
      'accidentally',
      'unexpectedly',
      'unintentionally ~'
    ],
    meanings: ['suddenly', 'accidentally', 'unexpectedly', 'unintentionally ~']
  },
  {
    word: '一度に',
    reading: 'ichido ni いちどに',
    displayMeanings: ['all at once'],
    meanings: ['all at once']
  },
  {
    word: '意外',
    reading: 'igai いがい',
    displayMeanings: ['unexpected', 'surprising'],
    meanings: ['unexpected', 'surprising']
  },
  {
    word: 'いくら～ても',
    reading: 'ikura~temo',
    displayMeanings: ['no matter how ~'],
    meanings: ['no matter how ~']
  },
  {
    word: '今に',
    reading: 'imani いまに',
    displayMeanings: ['before long', 'even now'],
    meanings: ['before long', 'even now']
  },
  {
    word: '今にも',
    reading: 'imanimo いまにも',
    displayMeanings: ['at any moment', 'at any minute', 'on the verge of'],
    meanings: ['at any moment', 'at any minute', 'on the verge of']
  },
  {
    word: '一種',
    reading: 'isshu いっしゅ',
    displayMeanings: ['species', 'kind', 'variety'],
    meanings: ['species', 'kind', 'variety']
  },
  {
    word: '一層',
    reading: 'issou いっそう',
    displayMeanings: [
      'much more',
      'still more',
      'all the more',
      'single layer',
      'sooner',
      'preferably'
    ],
    meanings: [
      'much more',
      'still more',
      'all the more',
      'single layer',
      'sooner',
      'preferably'
    ]
  },
  {
    word: '一体',
    reading: 'ittai いったい',
    displayMeanings: ['(what) the heck', '(why) in the world'],
    meanings: ['(what) the heck', '(why) in the world']
  },
  {
    word: '一体', // Duplicate entry from source with different meaning
    reading: 'ittai いったい',
    displayMeanings: ['emphasis', 'what on earth', 'what in the world'],
    meanings: ['emphasis', 'what on earth', 'what in the world']
  },
  {
    word: 'か何か',
    reading: 'ka nani ka かなにか',
    displayMeanings: ['or something ~'],
    meanings: ['or something ~']
  },
  {
    word: '結局',
    reading: 'kekkyoku けっきょく',
    displayMeanings: ['after all', 'eventually', 'in the end ~'],
    meanings: ['after all', 'eventually', 'in the end ~']
  },
  {
    word: '決して～ない',
    reading: 'kesshite~nai けっして～ない',
    displayMeanings: ['never', 'by no means ~'],
    meanings: ['never', 'by no means ~']
  },
  {
    word: '急に',
    reading: 'kyuuni きゅうに', // Note: Source romaji 'kyuuni' vs expected 'kyuu ni'
    displayMeanings: [
      'swiftly',
      'rapidly',
      'quickly',
      'immediately',
      'hastily'
    ],
    meanings: ['swiftly', 'rapidly', 'quickly', 'immediately', 'hastily']
  },
  {
    word: '万一',
    reading: 'manichi まんいち',
    displayMeanings: [
      'emergency',
      'unlikely event',
      'by some chance',
      'by some possibility'
    ],
    meanings: [
      'emergency',
      'unlikely event',
      'by some chance',
      'by some possibility'
    ]
  },
  {
    word: 'まるで',
    reading: 'maru de', // Added space based on common usage
    displayMeanings: ['as if', 'as though', 'just like ~'],
    meanings: ['as if', 'as though', 'just like ~']
  },
  {
    word: 'めったに～ない',
    reading: 'metta ni~nai',
    displayMeanings: ['hardly', 'rarely', 'seldom'],
    meanings: ['hardly', 'rarely', 'seldom']
  },
  {
    word: 'もしかしたら',
    reading: 'moshika shitara',
    displayMeanings: ['perhaps', 'maybe', 'perchance', 'by any chance ~'],
    meanings: ['perhaps', 'maybe', 'perchance', 'by any chance ~']
  },
  {
    word: 'もしも〜たら',
    reading: 'moshimo~tara',
    displayMeanings: ['if', 'in the case', 'supposing ~'],
    meanings: ['if', 'in the case', 'supposing ~']
  },
  {
    word: 'むしろ',
    reading: 'mushiro',
    displayMeanings: ['rather', 'instead', 'better ~'],
    meanings: ['rather', 'instead', 'better ~']
  },
  {
    word: 'なかなか',
    reading: 'nakanaka',
    displayMeanings: ['very', 'quite', 'pretty', 'rather', 'just not ~'],
    meanings: ['very', 'quite', 'pretty', 'rather', 'just not ~']
  },
  {
    word: 'なんか / なんて / など',
    reading: 'nanka / nante / nado',
    displayMeanings: ['give examples', 'show modesty', 'make light of ~'],
    meanings: ['give examples', 'show modesty', 'make light of ~']
  },
  {
    word: 'なるべく',
    reading: 'naru beku', // Added space based on common usage
    displayMeanings: ['as much as possible'],
    meanings: ['as much as possible']
  },
  {
    word: '際に',
    reading: 'sai ni さいに',
    displayMeanings: ['when', 'at the time of', 'in the case of ~'],
    meanings: ['when', 'at the time of', 'in the case of ~']
  },
  {
    word: '最中に',
    reading: 'saichuu ni さいちゅうに',
    displayMeanings: ['while', 'during', 'in the middle of ~'],
    meanings: ['while', 'during', 'in the middle of ~']
  },
  {
    word: 'さらに',
    reading: 'sara ni',
    displayMeanings: ['furthermore', 'again', 'more and more ~'],
    meanings: ['furthermore', 'again', 'more and more ~']
  },
  {
    word: 'せいぜい',
    reading: 'seizei',
    displayMeanings: ['at the most', 'at best', 'to the utmost'],
    meanings: ['at the most', 'at best', 'to the utmost']
  },
  {
    word: 'しばらく',
    reading: 'shibaraku',
    displayMeanings: ['for a moment', 'for a while', 'for the time being'],
    meanings: ['for a moment', 'for a while', 'for the time being']
  },
  {
    word: 'すでに',
    reading: 'sude ni',
    displayMeanings: [
      'something has already been done/taken place',
      'is already the case'
    ],
    meanings: [
      'something has already been done/taken place',
      'is already the case'
    ]
  },
  {
    word: '少しも',
    reading: 'sukoshimo すこしも',
    displayMeanings: ['anything of', 'not one bit (with negative sentence)'],
    meanings: ['anything of', 'not one bit (with negative sentence)']
  },
  {
    word: 'すなわち',
    reading: 'sunawachi',
    displayMeanings: ['in other words', 'namely ~'],
    meanings: ['in other words', 'namely ~']
  },
  {
    word: 'たとたん', // Word is Kana
    reading: 'ta totan', // Romaji reading inferred
    displayMeanings: ['as soon as', 'just as ~'],
    meanings: ['as soon as', 'just as ~']
  },
  {
    word: 'たびに',
    reading: 'tabi ni',
    displayMeanings: ['whenever', 'every time ~'],
    meanings: ['whenever', 'every time ~']
  },
  {
    word: '確かに',
    reading: 'tashika ni たしかに',
    displayMeanings: ['surely', 'certainly ~'],
    meanings: ['surely', 'certainly ~']
  },
  {
    word: '多少',
    reading: 'tashou たしょう',
    displayMeanings: ['more or less', 'somewhat', 'a little', 'a few', 'some'],
    meanings: ['more or less', 'somewhat', 'a little', 'a few', 'some']
  },
  {
    word: 'たとえ～ても',
    reading: 'tatoe~temo',
    displayMeanings: ['even if… is the case'],
    meanings: ['even if… is the case']
  },
  {
    word: '例えば',
    reading: 'tatoeba たとえば',
    displayMeanings: ['for example', 'for instance ~'],
    meanings: ['for example', 'for instance ~']
  },
  {
    word: 'と共に',
    reading: 'to tomo ni とともに',
    displayMeanings: ['together with', 'at the same time as', 'as well as ~'],
    meanings: ['together with', 'at the same time as', 'as well as ~']
  },
  {
    word: '途中で/途中に',
    reading: 'tochuu de / tochuu ni とちゅうで/とちゅうに',
    displayMeanings: ['on the way', 'in the middle of ~'],
    meanings: ['on the way', 'in the middle of ~']
  },
  {
    word: 'とおりに',
    reading: 'toori ni',
    displayMeanings: ['in the same way as', 'in the way', 'as ~'],
    meanings: ['in the same way as', 'in the way', 'as ~']
  },
  {
    word: 'とても～ない',
    reading: 'totemo~nai',
    displayMeanings: ['cannot possibly be', 'hardly ~'],
    meanings: ['cannot possibly be', 'hardly ~']
  },
  {
    word: 'つい',
    reading: 'tsui',
    displayMeanings: ['accidentally', 'unintentionally', 'by mistake'],
    meanings: ['accidentally', 'unintentionally', 'by mistake']
  },
  {
    word: 'ついに',
    reading: 'tsui ni',
    displayMeanings: ['finally', 'at last', 'in the end ~'],
    meanings: ['finally', 'at last', 'in the end ~']
  },
  {
    word: 'ついでに',
    reading: 'tsuide ni',
    displayMeanings: [
      'while',
      'incidentally',
      'at the same time',
      'on the way ~'
    ],
    meanings: ['while', 'incidentally', 'at the same time', 'on the way ~']
  },
  {
    word: 'つまり',
    reading: 'tsumari',
    displayMeanings: ['in other words', 'in summary', 'in short ~'],
    meanings: ['in other words', 'in summary', 'in short ~']
  },
  {
    word: 'はもちろん',
    reading: 'wa mochiron',
    displayMeanings: ['not to mention', 'not only ... but also ~'],
    meanings: ['not to mention', 'not only ... but also ~']
  },
  {
    word: '割に',
    reading: 'wari ni わりに',
    displayMeanings: ['considering ~', 'for ~', 'despite ~'],
    meanings: ['considering ~', 'for ~', 'despite ~']
  },
  {
    word: 'わざと',
    reading: 'wazato',
    displayMeanings: ['on purpose', 'intentionally ~'],
    meanings: ['on purpose', 'intentionally ~']
  },
  {
    word: 'わざわざ',
    reading: 'wazawaza',
    displayMeanings: ['to go to the trouble of', "to go out of one's way to ~"],
    meanings: ['to go to the trouble of', "to go out of one's way to ~"]
  },
  {
    word: '随分',
    reading: 'zuibun ずいぶん',
    displayMeanings: [
      'very',
      'extremely',
      'surprisingly',
      'considerably',
      'awfully'
    ],
    meanings: ['very', 'extremely', 'surprisingly', 'considerably', 'awfully']
  }
];

export default N3Adverbs;
