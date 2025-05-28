const N4Adverbs = [
  {
    word: 'ああ',
    reading: 'aa', // Romaji reading from context
    displayMeanings: ['ah', 'yes'],
    meanings: ['ah', 'yes']
  },
  {
    word: '間に',
    reading: 'aida ni あいだに', // Combined Romaji + Kana reading
    displayMeanings: ['while', 'during~ something happened'],
    meanings: ['while', 'during~ something happened']
  },
  {
    word: 'あまり～ない',
    reading: 'amari~nai', // Romaji reading from context
    displayMeanings: ['not very', 'not much ~'],
    meanings: ['not very', 'not much ~']
  },
  {
    word: '後で',
    reading: 'ato de あとで', // Combined Romaji + Kana reading
    displayMeanings: ['after~', 'later'],
    meanings: ['after~', 'later']
  },
  {
    word: 'びっくり',
    reading: 'bikkuri', // Romaji reading from context
    displayMeanings: ['to be surprised'],
    meanings: ['to be surprised']
  },
  {
    word: '大分',
    reading: 'daibu だいぶ', // Combined Romaji + Kana reading
    displayMeanings: ['considerably', 'greatly', 'a lot'],
    meanings: ['considerably', 'greatly', 'a lot']
  },
  {
    word: 'できるだけ', // Word is Kana
    reading: 'dekiru dake', // Romaji reading inferred
    displayMeanings: ['as much as possible'],
    meanings: ['as much as possible']
  },
  {
    word: 'どんどん', // Word is Kana
    reading: 'dondon', // Romaji reading inferred
    displayMeanings: ['rapidly', 'more and more'],
    meanings: ['rapidly', 'more and more']
  },
  {
    word: '普通',
    reading: 'futsuu ふつう', // Combined Romaji + Kana reading
    displayMeanings: ['usually'],
    meanings: ['usually']
  },
  {
    word: 'はっきり', // Word is Kana
    reading: 'hakkiri', // Romaji reading inferred
    displayMeanings: ['clearly'],
    meanings: ['clearly']
  },
  {
    word: '非常に',
    reading: 'hijou ni ひじょうに', // Combined Romaji + Kana reading
    displayMeanings: ['extremely'],
    meanings: ['extremely']
  },
  {
    word: 'いっぱい', // Word is Kana
    reading: 'ippai', // Romaji reading inferred
    displayMeanings: ['full'],
    meanings: ['full']
  },
  {
    word: '十分',
    reading: 'juubun じゅうぶん', // Combined Romaji + Kana reading
    displayMeanings: [
      'enough',
      'sufficient',
      'plenty',
      'adequate',
      'satisfactory'
    ],
    meanings: ['enough', 'sufficient', 'plenty', 'adequate', 'satisfactory']
  },
  {
    word: 'かどうか', // Word is Kana
    reading: 'ka dou ka', // Romaji reading inferred
    displayMeanings: ['whether or not ~'],
    meanings: ['whether or not ~']
  },
  {
    word: '必ず',
    reading: 'kanarazu かならず', // Combined Romaji + Kana reading
    displayMeanings: ['always', 'certainly'],
    meanings: ['always', 'certainly']
  },
  {
    word: 'きっと', // Word is Kana
    reading: 'kitto', // Romaji reading inferred
    displayMeanings: [
      'surely',
      'undoubtedly',
      'almost certainly',
      'most likely'
    ],
    meanings: ['surely', 'undoubtedly', 'almost certainly', 'most likely']
  },
  {
    word: 'こう', // Word is Kana
    reading: 'kou', // Romaji reading inferred
    displayMeanings: ['this way'],
    meanings: ['this way']
  },
  {
    word: 'くする', // Word is Kana
    reading: 'ku suru', // Romaji reading from context
    displayMeanings: ['to make something ~'],
    meanings: ['to make something ~']
  },
  {
    word: '急に',
    reading: 'kyuu ni きゅうに', // Combined Romaji + Kana reading
    displayMeanings: [
      'quickly',
      'immediately',
      'hastily',
      'suddenly',
      'abruptly',
      'unexpectedly ~'
    ],
    meanings: [
      'quickly',
      'immediately',
      'hastily',
      'suddenly',
      'abruptly',
      'unexpectedly ~'
    ]
  },
  {
    word: 'までに', // Word is Kana
    reading: 'made ni', // Romaji reading inferred
    displayMeanings: ['by', 'by the time', 'indicates time limit'],
    meanings: ['by', 'by the time', 'indicates time limit']
  },
  {
    word: 'まず', // Word is Kana
    reading: 'mazu', // Romaji reading inferred
    displayMeanings: ['first of all'],
    meanings: ['first of all']
  },
  {
    word: 'みたいに', // Word is Kana
    reading: 'mitai ni', // Romaji reading inferred
    displayMeanings: ['like', 'similar to ~'],
    meanings: ['like', 'similar to ~']
  },
  {
    word: 'もし', // Word is Kana
    reading: 'moshi', // Romaji reading inferred
    displayMeanings: ['if', 'in case', 'supposing'],
    meanings: ['if', 'in case', 'supposing']
  },
  {
    word: 'もうすぐ', // Word is Kana
    reading: 'mousugu', // Romaji reading inferred
    displayMeanings: ['soon'],
    meanings: ['soon']
  },
  {
    word: 'なかなか～ない', // Word is Kana
    reading: 'nakanaka~nai', // Romaji reading from context
    displayMeanings: ['not easy to', 'struggling to', 'not able to ~'],
    meanings: ['not easy to', 'struggling to', 'not able to ~']
  },
  {
    word: 'なるほど', // Word is Kana
    reading: 'naruhodo', // Romaji reading inferred
    displayMeanings: ['now I understand'],
    meanings: ['now I understand']
  },
  {
    word: 'の中で',
    reading: 'no naka de のなかで', // Combined Romaji + Kana reading
    displayMeanings: ['in', 'among ~'],
    meanings: ['in', 'among ~']
  },
  {
    word: 'さすが', // Word is Kana
    reading: 'sasuga', // Romaji reading inferred
    displayMeanings: ['as one would expect', 'as is to be expected', 'even ~'],
    meanings: ['as one would expect', 'as is to be expected', 'even ~']
  },
  {
    word: 'しっかり', // Word is Kana
    reading: 'shikkari', // Romaji reading inferred
    displayMeanings: ['firmly', 'steadily'],
    meanings: ['firmly', 'steadily']
  },
  {
    word: 'そんなに', // Word is Kana
    reading: 'sonna ni', // Romaji reading inferred
    displayMeanings: ['so much', 'so', 'like that'],
    meanings: ['so much', 'so', 'like that']
  },
  {
    word: 'それほど', // Word is Kana
    reading: 'sore hodo', // Romaji reading inferred
    displayMeanings: ['to that extent'],
    meanings: ['to that extent']
  },
  {
    word: 'そろそろ', // Word is Kana
    reading: 'sorosoro', // Romaji reading inferred
    displayMeanings: ['gradually', 'soon'],
    meanings: ['gradually', 'soon']
  },
  {
    word: 'そうだ', // Word is Kana
    reading: 'sou da [2]', // Romaji reading from context
    displayMeanings: ['looks like', 'appears like', 'seeming ~'],
    meanings: ['looks like', 'appears like', 'seeming ~']
  },
  {
    word: 'すっかり', // Word is Kana
    reading: 'sukkari', // Romaji reading inferred
    displayMeanings: ['completely'],
    meanings: ['completely']
  },
  {
    word: 'たいてい', // Word is Kana
    reading: 'taitei', // Romaji reading inferred
    displayMeanings: ['usually'],
    meanings: ['usually']
  },
  {
    word: 'たまに', // Word is Kana
    reading: 'tamani', // Romaji reading inferred
    displayMeanings: ['occasionally'],
    meanings: ['occasionally']
  },
  {
    word: '特に',
    reading: 'tokuni とくに', // Combined Romaji + Kana reading
    displayMeanings: [
      'particularly',
      'especially',
      'in particular',
      'expressly'
    ],
    meanings: ['particularly', 'especially', 'in particular', 'expressly']
  },
  {
    word: '到頭',
    reading: 'toutou とうとう', // Combined Romaji + Kana reading
    displayMeanings: ['finally', 'after all'],
    meanings: ['finally', 'after all']
  },
  {
    word: '都合',
    reading: 'tsugou つごう', // Combined Romaji + Kana reading
    displayMeanings: ['convenience'],
    meanings: ['convenience']
  },
  {
    word: 'やっぱり', // Word is Kana
    reading: 'yappari', // Romaji reading inferred
    displayMeanings: ['as I thought'],
    meanings: ['as I thought']
  },
  {
    word: 'やっと', // Word is Kana
    reading: 'yatto', // Romaji reading inferred
    displayMeanings: ['at last', 'finally', 'barely', 'narrowly ~'],
    meanings: ['at last', 'finally', 'barely', 'narrowly ~']
  },
  {
    word: 'より', // Word is Kana
    reading: 'yori', // Romaji reading inferred
    displayMeanings: ['than', 'rather than', 'more than ~'],
    meanings: ['than', 'rather than', 'more than ~']
  },
  {
    word: 'ぜひ', // Word is Kana
    reading: 'zehi', // Romaji reading inferred
    displayMeanings: ['by all means', 'certainly', 'definitely ~'],
    meanings: ['by all means', 'certainly', 'definitely ~']
  },
  {
    word: '全然',
    reading: 'zenzen ぜんぜん', // Combined Romaji + Kana reading
    displayMeanings: ['not entirely (used in a negative sentence)'],
    meanings: ['not entirely (used in a negative sentence)']
  },
  {
    word: '全然～ない',
    reading: 'zenzen~nai ぜんぜん～ない', // Combined Romaji + Kana reading
    displayMeanings: ['(not) at all'],
    meanings: ['(not) at all']
  }
];

export default N4Adverbs;
