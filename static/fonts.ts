import {
  Noto_Sans_JP,
  Zen_Maru_Gothic,
  Rampart_One,
  Zen_Kurenaido,
  Klee_One,
  DotGothic16,
  Kiwi_Maru,
  Potta_One,
  Hachi_Maru_Pop,
  Yuji_Mai,
  RocknRoll_One,
  Reggae_One,
  Stick
} from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const rampartOne = Rampart_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const zenKurenaido = Zen_Kurenaido({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const kleeOne = Klee_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const kiwiMaru = Kiwi_Maru({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const pottaOne = Potta_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const hachiMaruPop = Hachi_Maru_Pop({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const yujiMai = Yuji_Mai({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const rocknRollOne = RocknRoll_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const reggaeOne = Reggae_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const stick = Stick({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const fonts = [
  {
    name: 'Noto Sans JP',
    font: notoSansJP
  },
  {
    name: 'Zen Maru Gothic',
    font: zenMaruGothic
  },
  {
    name: 'Rampart One',
    font: rampartOne
  },
  {
    name: 'Zen Kurenaido',
    font: zenKurenaido
  },
  {
    name: 'Klee One',
    font: kleeOne
  },
  {
    name: 'Dot Gothic 16',
    font: dotGothic16
  },
  {
    name: 'Kiwi Maru',
    font: kiwiMaru
  },
  {
    name: 'Potta One',
    font: pottaOne
  },
  {
    name: 'Hachi Maru Pop',
    font: hachiMaruPop
  },
  {
    name: 'Yuji Mai',
    font: yujiMai
  },
  {
    name: 'RocknRoll One',
    font: rocknRollOne
  },
  {
    name: 'Reggae One',
    font: reggaeOne
  },
  {
    name: 'Stick',
    font: stick
  }
];

export default fonts;
