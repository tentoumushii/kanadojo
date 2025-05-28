const N5Verbs = [
  {
    word: '浴びる',
    reading: 'abiru あびる',
    displayMeanings: ['to bathe', 'to shower'],
    meanings: ['to bathe', 'to shower']
  },
  {
    word: '上げる',
    reading: 'ageru あげる',
    displayMeanings: ['to raise', 'to elevate', 'to give'],
    meanings: ['to raise', 'to elevate', 'to give']
  },
  {
    word: '開ける',
    reading: 'akeru あける',
    displayMeanings: [
      'to open (a door, etc.)',
      'to unwrap (e.g. parcel, package)',
      'to unlock'
    ],
    meanings: [
      'to open (a door, etc.)',
      'to unwrap (e.g. parcel, package)',
      'to unlock'
    ]
  },
  {
    word: '開く',
    reading: 'aku あく',
    displayMeanings: ['to open (e.g. doors, business, etc)'],
    meanings: ['to open (e.g. doors, business, etc)']
  },
  {
    word: '洗う',
    reading: 'arau あらう',
    displayMeanings: ['to wash'],
    meanings: ['to wash']
  },
  {
    word: 'ある',
    reading: 'aru',
    displayMeanings: ['to be', 'to have'],
    meanings: ['to be', 'to have']
  },
  {
    word: '歩く',
    reading: 'aruku あるく',
    displayMeanings: ['to walk'],
    meanings: ['to walk']
  },
  {
    word: '遊ぶ',
    reading: 'asobu あそぶ',
    displayMeanings: ['to play', 'to enjoy oneself'],
    meanings: ['to play', 'to enjoy oneself']
  },
  {
    word: '会う',
    reading: 'au あう',
    displayMeanings: ['to meet', 'to encounter', 'to see'],
    meanings: ['to meet', 'to encounter', 'to see']
  },
  {
    word: '勉強',
    reading: 'benkyou べんきょう',
    displayMeanings: ['to study'],
    meanings: ['to study']
  },
  {
    word: '違う',
    reading: 'chigau ちがう',
    displayMeanings: ['to differ'],
    meanings: ['to differ']
  },
  {
    word: '出す',
    reading: 'dasu だす',
    displayMeanings: ['to take out', 'to get out', 'to put out', 'to reveal'],
    meanings: ['to take out', 'to get out', 'to put out', 'to reveal']
  },
  {
    word: '出かける',
    reading: 'dekakeru でかける',
    displayMeanings: ['to go out', 'to leave', 'to depart'],
    meanings: ['to go out', 'to leave', 'to depart']
  },
  {
    word: '電話',
    reading: 'denwa でんわ',
    displayMeanings: ['telephone (call / device)l', 'phone call'],
    meanings: ['telephone (call / device)l', 'phone call']
  },
  {
    word: '出る',
    reading: 'deru でる',
    displayMeanings: ['to leave', 'to exit', 'to appear', 'to go out'],
    meanings: ['to leave', 'to exit', 'to appear', 'to go out']
  },
  {
    word: '吹く',
    reading: 'fuku ふく',
    displayMeanings: ['to blow (of the wind)'],
    meanings: ['to blow (of the wind)']
  },
  {
    word: '降る',
    reading: 'furu ふる',
    displayMeanings: ['to fall'],
    meanings: ['to fall']
  },
  {
    word: '入る',
    reading: 'hairu はいる',
    displayMeanings: ['to enter', 'to go into'],
    meanings: ['to enter', 'to go into']
  },
  {
    word: '始まる',
    reading: 'hajimaru はじまる',
    displayMeanings: ['to begin'],
    meanings: ['to begin']
  },
  {
    word: '履く',
    reading: 'haku はく',
    displayMeanings: ['to wear', 'to put on trousers'],
    meanings: ['to wear', 'to put on trousers']
  },
  {
    word: '話す',
    reading: 'hanasu はなす',
    displayMeanings: ['to speak', 'to talk', 'to converse'],
    meanings: ['to speak', 'to talk', 'to converse']
  },
  {
    word: '晴れる',
    reading: 'hareru はれる',
    displayMeanings: ['to be sunny'],
    meanings: ['to be sunny']
  },
  {
    word: '貼る',
    reading: 'haru はる',
    displayMeanings: ['to stick', 'to paste'],
    meanings: ['to stick', 'to paste']
  },
  {
    word: '走る',
    reading: 'hashiru はしる',
    displayMeanings: ['to run'],
    meanings: ['to run']
  },
  {
    word: '働く',
    reading: 'hataraku はたらく',
    displayMeanings: ['to work'],
    meanings: ['to work']
  },
  {
    word: '引く',
    reading: 'hiku ひく',
    displayMeanings: ['to pull'],
    meanings: ['to pull']
  },
  {
    word: '弾く',
    reading: 'hiku ひく',
    displayMeanings: ['to play'],
    meanings: ['to play']
  },
  {
    word: '行く',
    reading: 'iku いく',
    displayMeanings: ['to go', 'to move'],
    meanings: ['to go', 'to move']
  },
  {
    word: '入れる',
    reading: 'ireru いれる',
    displayMeanings: [
      'to put in',
      'to let in',
      'to take in',
      'to bring in',
      'to insert',
      'to install'
    ],
    meanings: [
      'to put in',
      'to let in',
      'to take in',
      'to bring in',
      'to insert',
      'to install'
    ]
  },
  {
    word: '要る',
    reading: 'iru いる',
    displayMeanings: ['to be needed'],
    meanings: ['to be needed']
  },
  {
    word: '居る',
    reading: 'iru いる',
    displayMeanings: ['to be', 'to have'],
    meanings: ['to be', 'to have']
  },
  {
    word: '言う',
    reading: 'iu いう',
    displayMeanings: ['to say', 'to call'],
    meanings: ['to say', 'to call']
  },
  {
    word: '授業',
    reading: 'jugyou じゅぎょう',
    displayMeanings: ['lesson', 'class work'],
    meanings: ['lesson', 'class work']
  },
  {
    word: '帰る',
    reading: 'kaeru かえる',
    displayMeanings: ['to go back'],
    meanings: ['to go back']
  },
  {
    word: '返す',
    reading: 'kaesu かえす',
    displayMeanings: ['to return something'],
    meanings: ['to return something']
  },
  {
    word: '掛かる',
    reading: 'kakaru かかる',
    displayMeanings: ['to take (a resource, e.g. time or money)'],
    meanings: ['to take (a resource, e.g. time or money)']
  },
  {
    word: '掛ける',
    reading: 'kakeru かける',
    displayMeanings: ['to hang up', 'to make (a call)'],
    meanings: ['to hang up', 'to make (a call)']
  },
  {
    word: '書く',
    reading: 'kaku かく',
    displayMeanings: ['to write', 'to compose', 'to pen', 'to draw'],
    meanings: ['to write', 'to compose', 'to pen', 'to draw']
  },
  {
    word: '借りる',
    reading: 'kariru かりる',
    displayMeanings: ['to borrow'],
    meanings: ['to borrow']
  },
  {
    word: '貸す',
    reading: 'kasu かす',
    displayMeanings: ['to lend', 'to loan'],
    meanings: ['to lend', 'to loan']
  },
  {
    word: '買う',
    reading: 'kau かう',
    displayMeanings: ['to buy', 'to purchase'],
    meanings: ['to buy', 'to purchase']
  },
  {
    word: '結婚',
    reading: 'kekkon けっこん',
    displayMeanings: ['marriage'],
    meanings: ['marriage']
  },
  {
    word: '消す',
    reading: 'kesu けす',
    displayMeanings: ['to erase', 'to turn off power'],
    meanings: ['to erase', 'to turn off power']
  },
  {
    word: '消える',
    reading: 'kieru きえる',
    displayMeanings: ['to disappear'],
    meanings: ['to disappear']
  },
  {
    word: '聞く',
    reading: 'kiku きく',
    displayMeanings: [
      'to hear',
      'to listen (to music)',
      'to ask',
      'to learn of'
    ],
    meanings: ['to hear', 'to listen (to music)', 'to ask', 'to learn of']
  },
  {
    word: '切る',
    reading: 'kiru きる',
    displayMeanings: ['to cut'],
    meanings: ['to cut']
  },
  {
    word: '着る',
    reading: 'kiru きる',
    displayMeanings: ['to wear'],
    meanings: ['to wear']
  },
  {
    word: '困る',
    reading: 'komaru こまる',
    displayMeanings: ['to be troubled'],
    meanings: ['to be troubled']
  },
  {
    word: 'コピー',
    reading: 'kopii',
    displayMeanings: ['copy', 'photocopy'],
    meanings: ['copy', 'photocopy']
  },
  {
    word: '答える',
    reading: 'kotaeru こたえる',
    displayMeanings: ['to answer'],
    meanings: ['to answer']
  },
  {
    word: '曇る',
    reading: 'kumoru くもる',
    displayMeanings: ['to become cloudy', 'to become dim'],
    meanings: ['to become cloudy', 'to become dim']
  },
  {
    word: '来る',
    reading: 'kuru くる',
    displayMeanings: ['to come'],
    meanings: ['to come']
  },
  {
    word: '曲がる',
    reading: 'magaru まがる',
    displayMeanings: ['to turn', 'to bend'],
    meanings: ['to turn', 'to bend']
  },
  {
    word: '待つ',
    reading: 'matsu まつ',
    displayMeanings: ['to wait'],
    meanings: ['to wait']
  },
  {
    word: '磨く',
    reading: 'migaku みがく',
    displayMeanings: ['to polish', 'to shine', 'to brush (e.g. teeth)'],
    meanings: ['to polish', 'to shine', 'to brush (e.g. teeth)']
  },
  {
    word: '見る',
    reading: 'miru みる',
    displayMeanings: ['to see', 'to look', 'to watch', 'to view', 'to observe'],
    meanings: ['to see', 'to look', 'to watch', 'to view', 'to observe']
  },
  {
    word: '見せる',
    reading: 'miseru みせる',
    displayMeanings: ['to show', 'to display'],
    meanings: ['to show', 'to display']
  },
  {
    word: '持つ',
    reading: 'motsu もつ',
    displayMeanings: ['to hold'],
    meanings: ['to hold']
  },
  {
    word: '鳴く',
    reading: 'naku なく',
    displayMeanings: ['animal noise. to chirp'],
    meanings: ['animal noise. to chirp']
  },
  {
    word: '無くす',
    reading: 'nakusu なくす',
    displayMeanings: ['to lose (something)'],
    meanings: ['to lose (something)']
  },
  {
    word: '並べる',
    reading: 'naraberu ならべる',
    displayMeanings: ['to line up', 'to set up'],
    meanings: ['to line up', 'to set up']
  },
  {
    word: '並ぶ',
    reading: 'narabu ならぶ',
    displayMeanings: ['to line up', 'to stand in a line'],
    meanings: ['to line up', 'to stand in a line']
  },
  {
    word: '習う',
    reading: 'narau ならう',
    displayMeanings: ['to be taught', 'to learn (from a teacher)'],
    meanings: ['to be taught', 'to learn (from a teacher)']
  },
  {
    word: '寝る',
    reading: 'neru ねる',
    displayMeanings: ['to sleep', 'to go to bed', 'to lie down'],
    meanings: ['to sleep', 'to go to bed', 'to lie down']
  },
  {
    word: '登る',
    reading: 'noboru のぼる',
    displayMeanings: ['to climb'],
    meanings: ['to climb']
  },
  {
    word: '飲む',
    reading: 'nomu のむ',
    displayMeanings: ['to drink'],
    meanings: ['to drink']
  },
  {
    word: '乗る',
    reading: 'noru のる',
    displayMeanings: ['to get on (train, plane, bus, ship, etc.)'],
    meanings: ['to get on (train, plane, bus, ship, etc.)']
  },
  {
    word: '脱ぐ',
    reading: 'nugu ぬぐ',
    displayMeanings: ['to take off clothes'],
    meanings: ['to take off clothes']
  },
  {
    word: '覚える',
    reading: 'oboeru おぼえる',
    displayMeanings: ['to remember'],
    meanings: ['to remember']
  },
  {
    word: '起きる',
    reading: 'okiru おきる',
    displayMeanings: ['to get up', 'to wake up'],
    meanings: ['to get up', 'to wake up']
  },
  {
    word: '置く',
    reading: 'oku おく',
    displayMeanings: ['to put', 'to place'],
    meanings: ['to put', 'to place']
  },
  {
    word: '降りる',
    reading: 'oriru おりる',
    displayMeanings: ['to get off'],
    meanings: ['to get off']
  },
  {
    word: '教える',
    reading: 'oshieru おしえる',
    displayMeanings: ['to teach'],
    meanings: ['to teach']
  },
  {
    word: '押す',
    reading: 'osu おす',
    displayMeanings: ['to push', 'to press'],
    meanings: ['to push', 'to press']
  },
  {
    word: '終わる',
    reading: 'owaru おわる',
    displayMeanings: ['to finish', 'to end'],
    meanings: ['to finish', 'to end']
  },
  {
    word: '泳ぐ',
    reading: 'oyogu およぐ',
    displayMeanings: ['to swim'],
    meanings: ['to swim']
  },
  {
    word: '練習',
    reading: 'renshuu れんしゅう',
    displayMeanings: ['practice', 'practicing'],
    meanings: ['practice', 'practicing']
  },
  {
    word: '旅行',
    reading: 'ryokou りょこう',
    displayMeanings: ['travel', 'trip', 'journey', 'excursion', 'tour'],
    meanings: ['travel', 'trip', 'journey', 'excursion', 'tour']
  },
  {
    word: '料理',
    reading: 'ryouri りょうり',
    displayMeanings: ['cuisine'],
    meanings: ['cuisine']
  },
  {
    word: '咲く',
    reading: 'saku さく',
    displayMeanings: ['to bloom'],
    meanings: ['to bloom']
  },
  {
    word: '散歩',
    reading: 'sanpo さんぽ',
    displayMeanings: ['walk', 'stroll'],
    meanings: ['walk', 'stroll']
  },
  {
    word: '差す',
    reading: 'sasu さす',
    displayMeanings: ['to stretch out hands', 'to raise an umbrella'],
    meanings: ['to stretch out hands', 'to raise an umbrella']
  },
  {
    word: '洗濯',
    reading: 'sentaku せんたく',
    displayMeanings: ['washing', 'laundry'],
    meanings: ['washing', 'laundry']
  },
  {
    word: '仕事',
    reading: 'shigoto しごと',
    displayMeanings: ['work', 'job', 'business'],
    meanings: ['work', 'job', 'business']
  },
  {
    word: '閉まる',
    reading: 'shimaru しまる',
    displayMeanings: ['to close', 'to be closed'],
    meanings: ['to close', 'to be closed']
  },
  {
    word: '閉める',
    reading: 'shimeru しめる',
    displayMeanings: ['to close', 'to shut'],
    meanings: ['to close', 'to shut']
  },
  {
    word: '締める',
    reading: 'shimeru しめる',
    displayMeanings: ['to tie', 'to fasten', 'to tighten'],
    meanings: ['to tie', 'to fasten', 'to tighten']
  },
  {
    word: '死ぬ',
    reading: 'shinu しぬ',
    displayMeanings: ['to die'],
    meanings: ['to die']
  },
  {
    word: '知る',
    reading: 'shiru しる',
    displayMeanings: ['to know'],
    meanings: ['to know']
  },
  {
    word: '質問',
    reading: 'shitsumon しつもん',
    displayMeanings: ['question', 'inquiry'],
    meanings: ['question', 'inquiry']
  },
  {
    word: '掃除',
    reading: 'souji そうじ',
    displayMeanings: ['to clean', 'to sweep'],
    meanings: ['to clean', 'to sweep']
  },
  {
    word: '住む',
    reading: 'sumu すむ',
    displayMeanings: [
      'to live in',
      'to reside',
      'to inhabit',
      'to dwell',
      'to abide'
    ],
    meanings: ['to live in', 'to reside', 'to inhabit', 'to dwell', 'to abide']
  },
  {
    word: '吸う',
    reading: 'suu すう',
    displayMeanings: ['to smoke', 'to suck'],
    meanings: ['to smoke', 'to suck']
  },
  {
    word: '座る',
    reading: 'suwaru すわる',
    displayMeanings: ['to sit'],
    meanings: ['to sit']
  },
  {
    word: '食べる',
    reading: 'taberu たべる',
    displayMeanings: ['to eat'],
    meanings: ['to eat']
  },
  {
    word: '頼む',
    reading: 'tanomu たのむ',
    displayMeanings: ['to ask'],
    meanings: ['to ask']
  },
  {
    word: '立つ',
    reading: 'tatsu たつ',
    displayMeanings: ['to stand', 'to stand up'],
    meanings: ['to stand', 'to stand up']
  },
  {
    word: 'テスト',
    reading: 'tesuto',
    displayMeanings: ['examination', 'quiz', 'test'],
    meanings: ['examination', 'quiz', 'test']
  },
  {
    word: '飛ぶ',
    reading: 'tobu とぶ',
    displayMeanings: ['to fly', 'to hop'],
    meanings: ['to fly', 'to hop']
  },
  {
    word: '止まる',
    reading: 'tomaru とまる',
    displayMeanings: ['to stop', 'to come to a halt'],
    meanings: ['to stop', 'to come to a halt']
  },
  {
    word: '取る',
    reading: 'toru とる',
    displayMeanings: [
      'to take',
      'to pick up',
      'to harvest',
      'to earn',
      'to win',
      'to choose'
    ],
    meanings: [
      'to take',
      'to pick up',
      'to harvest',
      'to earn',
      'to win',
      'to choose'
    ]
  },
  {
    word: '撮る',
    reading: 'toru とる',
    displayMeanings: ['to take a photo or record a film'],
    meanings: ['to take a photo or record a film']
  },
  {
    word: '疲れる',
    reading: 'tsukareru つかれる',
    displayMeanings: ['to get tired'],
    meanings: ['to get tired']
  },
  {
    word: '使う',
    reading: 'tsukau つかう',
    displayMeanings: ['to use'],
    meanings: ['to use']
  },
  {
    word: 'つける',
    reading: 'tsukeru',
    displayMeanings: ['to turn on'],
    meanings: ['to turn on']
  },
  {
    word: '付ける',
    reading: 'tsukeru つける',
    displayMeanings: ['to attach', 'affix', 'add', 'apply'],
    meanings: ['to attach', 'affix', 'add', 'apply']
  },
  {
    word: '着く',
    reading: 'tsuku つく',
    displayMeanings: ['to arrive at'],
    meanings: ['to arrive at']
  },
  {
    word: '作る',
    reading: 'tsukuru つくる',
    displayMeanings: ['to make'],
    meanings: ['to make']
  },
  {
    word: '勤める',
    reading: 'tsutomeru つとめる',
    displayMeanings: ['to work for someone'],
    meanings: ['to work for someone']
  },
  {
    word: '生まれる',
    reading: 'umareru うまれる',
    displayMeanings: ['to be born'],
    meanings: ['to be born']
  },
  {
    word: '売る',
    reading: 'uru うる',
    displayMeanings: ['to sell'],
    meanings: ['to sell']
  },
  {
    word: '歌う',
    reading: 'utau うたう',
    displayMeanings: ['to sing'],
    meanings: ['to sing']
  },
  {
    word: '分かる',
    reading: 'wakaru わかる',
    displayMeanings: [
      'to understand',
      'to comprehend',
      'to grasp',
      'to see',
      'to get',
      'to follow'
    ],
    meanings: [
      'to understand',
      'to comprehend',
      'to grasp',
      'to see',
      'to get',
      'to follow'
    ]
  },
  {
    word: '忘れる',
    reading: 'wasureru わすれる',
    displayMeanings: ['to forget'],
    meanings: ['to forget']
  },
  {
    word: '渡る',
    reading: 'wataru わたる',
    displayMeanings: ['to go across'],
    meanings: ['to go across']
  },
  {
    word: '渡す',
    reading: 'watasu わたす',
    displayMeanings: ['to hand over'],
    meanings: ['to hand over']
  },
  {
    word: 'やる',
    reading: 'yaru',
    displayMeanings: ['to do'],
    meanings: ['to do']
  },
  {
    word: '休む',
    reading: 'yasumu やすむ',
    displayMeanings: ['to be absent', 'to take a day off', 'to rest'],
    meanings: ['to be absent', 'to take a day off', 'to rest']
  },
  {
    word: '呼ぶ',
    reading: 'yobu よぶ',
    displayMeanings: ['to call out', 'to invite'],
    meanings: ['to call out', 'to invite']
  },
  {
    word: '読む',
    reading: 'yomu よむ',
    displayMeanings: [
      'to read',
      'to guess',
      'to predict',
      "to read (someone's thoughts)"
    ],
    meanings: [
      'to read',
      'to guess',
      'to predict',
      "to read (someone's thoughts)"
    ]
  }
];

export default N5Verbs;
