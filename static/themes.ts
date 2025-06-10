import { Atom, Sun, Moon } from 'lucide-react';

const themes = [
  {
    name: 'Base',
    icon: Atom,
    themes: [
      {
        id: 'light',
        backgroundColor: 'hsl(0, 0%, 100%)',
        cardColor: '	hsl(0, 0%, 96%)',
        borderColor: 'hsl(0, 0%, 75%)',
        mainColor: 'hsl(0, 0%, 0%)'
      },
      {
        id: 'dark',
        backgroundColor: 'hsl(204, 36%, 10%)',
        cardColor: 'hsl(204, 36%, 11%)',
        borderColor: 'hsl(204, 36%, 20%)',
        mainColor: '#F1F7FB'
      }
    ]
  },
  {
    name: 'Light',
    icon: Sun,
    themes: [
      {
        id: 'long',
        backgroundColor: 'hsl(350, 100%, 91%)',
        cardColor: 'hsl(350, 100%, 90%)',
        borderColor: 'hsl(350, 100%, 85%)',
        mainColor: ' hsl(270, 70%, 65%)'
      },
      {
        id: 'amethyst',
        backgroundColor: 'hsl(270, 80%, 95%)',
        cardColor: 'hsl(270, 80%, 94%)',
        borderColor: 'hsl(270, 80%, 80%)',
        mainColor: 'hsl(270, 100%, 65%)'
      }
    ]
  },

  {
    name: 'Dark',
    icon: Moon,
    themes: [
      {
        id: 'nord',
        backgroundColor: 'hsl(221.05263, 16%, 23%)',
        cardColor: 'hsl(220.8, 16%, 30%)',
        borderColor: 'hsl(312.55814, 28%, 70%)',
        mainColor: 'hsl(92.399994, 28%, 65%)'
      },
      {
        id: 'midnight',
        backgroundColor: 'hsl(221, 15%, 18%)',
        cardColor: 'hsl(221, 15%, 19%)',
        borderColor: 'hsl(221, 15%, 30%)',
        mainColor: 'hsl(207, 90%, 66%)'
      },
      {
        id: 'bubblegum',
        backgroundColor: 'hsl(240, 25%, 16%)',
        cardColor: 'hsl(240, 25%, 17%)',
        borderColor: 'hsl(240, 25%, 30%)',
        mainColor: 'hsl(320, 90%, 50%)'
      },
      {
        id: 'aurora',
        backgroundColor: 'hsl(201, 95%, 8%)',
        cardColor: 'hsl(201, 95%, 9%)',
        borderColor: 'hsl(201, 95%, 15%)',
        mainColor: 'hsl(153, 100%, 45%)'
      },
      {
        id: 'nebula',
        backgroundColor: 'hsl(248, 35%, 13%)',
        cardColor: 'hsl(248, 35%, 14%)',
        borderColor: 'hsl(248, 35%, 20%)',
        mainColor: '#fd77d7'
      },
      {
        id: 'lavender',
        backgroundColor: 'hsl(220, 20%, 12%)',
        cardColor: 'hsl(220, 20%, 13%)',
        borderColor: 'hsl(220, 20%, 20%)',
        mainColor: 'hsl(270, 100%, 77%)'
      },
      {
        id: 'matrix',
        backgroundColor: 'hsl(0, 0%, 0%)',
        cardColor: 'hsl(0, 0%, 2.5%)',
        borderColor: 'hsl(0, 0%, 5%)',
        mainColor: '#15ff00'
      },
      {
        id: 'magic-sky',
        backgroundColor: 'hsl(202, 66%, 10%)',
        cardColor: 'hsl(202, 66%, 10.5%)',
        borderColor: 'hsl(202, 66%, 15%)',
        mainColor: '#f5b1cc'
      },
      {
        id: 'incognito',
        backgroundColor: 'hsl(0, 0%, 5%)',
        cardColor: 'hsl(0, 0%, 6%)',
        borderColor: 'hsl(0, 0%, 12%)',
        mainColor: '#ff9900'
      },
      {
        id: 'cherry-blossom',
        backgroundColor: 'hsl(200, 5%, 15%)',
        cardColor: 'hsl(200, 5%, 16%)',
        borderColor: 'hsl(200, 5%, 22%)',
        mainColor: '#d65ccc'
      },
      {
        id: 'bushido',
        backgroundColor: 'hsl(220, 17%, 17%)',
        cardColor: 'hsl(220, 17%, 18%)',
        borderColor: 'hsl(220, 17%, 25%)',
        mainColor: 'hsl(356, 90%, 60%)'
      }
      ,
      {
        id: 'luna',
        backgroundColor: 'hsl(257, 30%, 16%)',
        cardColor: 'hsl(257, 30%, 17%)',
        borderColor: 'hsl(257, 30%, 25%)',
        mainColor: 'hsl(331, 78%, 65%)'
      },
      {
        id: 'grape',
        backgroundColor: 'hsl(268, 100%, 18%)',
        cardColor: 'hsl(268, 100%, 22%)',
        borderColor: 'hsl(268, 100%, 45%)',
        mainColor: 'hsl(35, 100%, 50%)'
      },
      {
        id: 'hammerhead',
        backgroundColor: 'hsl(204, 61%, 11%)',
        cardColor: 'hsl(204, 61%, 20%)',
        borderColor: 'hsl(204, 61%, 25%)',
        mainColor: 'hsl(176, 74%, 50%)'
      },
      {
        id: 'venus-flytrap',
        backgroundColor: 'hsl(268, 100%, 18%)',
        cardColor: 'hsl(268, 100%, 22%)',
        borderColor: 'hsl(268, 100%, 45%)',
        mainColor: 'hsl(80, 87%, 46%)'
      },
      {
        id: 'fantasy',
        backgroundColor: 'hsl(246, 85%, 10%)',
        cardColor: 'hsl(246, 85%, 11%)',
        borderColor: 'hsl(246, 85%, 20%)',
        mainColor: 'hsl(326, 100%, 54%)'
      },
      {
        id: 'phantom',
        backgroundColor: 'hsl(233, 76%, 13%)',
        cardColor: 'hsl(233, 76%, 14%)',
        borderColor: 'hsl(233, 76%, 20%)',
        mainColor: 'hsl(330, 73%, 62%)'
      }
    ]
  }
];

export default themes;
