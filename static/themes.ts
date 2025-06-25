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
      },
      {
        id: 'ice-ice-baby',
        backgroundColor: 'hsla(181, 84%, 79%, 1)',
        cardColor: 'hsla(181, 84%, 70%, 1)',
        borderColor: 'hsla(181, 84%, 50%, 1)',
        mainColor: 'hsla(283, 44%, 50%, 1)'
      },
      {
        id: 'miami',
        backgroundColor: 'hsla(330, 100%, 66%, 1)',
        cardColor: 'hsla(330, 100%, 62%, 1)',
        borderColor: 'hsla(330, 100%, 55%, 1)',
        mainColor: 'hsla(176, 74%, 50%, 1)'
      },
      {
        id: 'mint',
        backgroundColor: 'hsla(165, 100%, 41%, 1)',
        cardColor: 'hsla(165, 100%, 38%, 1)',
        borderColor: 'hsla(165, 100%, 30%, 1)',
        mainColor: 'hsla(0, 0%, 100%, 1)'
      }
    ]
  },

  {
    name: 'Dark',
    icon: Moon,
    themes: [
      {
        id: 'nord',
        backgroundColor: 'hsl(220, 16%, 23%)',
        cardColor: 'hsl(220, 16%, 30%)',
        borderColor: 'hsl(220, 16%, 40%)',
        mainColor: 'hsl(92, 28%, 65%)'
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
        id: 'phantom',
        backgroundColor: 'hsl(233, 76%, 13%)',
        cardColor: 'hsl(233, 76%, 14%)',
        borderColor: 'hsl(233, 76%, 20%)',
        mainColor: 'hsl(330, 73%, 62%)'
      },
      {
        id: 'bushido',
        backgroundColor: 'hsl(220, 17%, 17%)',
        cardColor: 'hsl(220, 17%, 18%)',
        borderColor: 'hsl(220, 17%, 25%)',
        mainColor: 'hsl(356, 90%, 60%)'
      },
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
        id: 'noir',
        backgroundColor: 'hsla(0, 0%, 0%, 1)',
        cardColor: 'hsla(0, 0%, 5%, 1)',
        borderColor: 'hsla(0, 0%, 20%, 1)',
        mainColor: 'hsla(0, 0%, 100%, 1)'
      },
      {
        id: 'tron',
        backgroundColor: 'hsla(160, 38%, 9%, 1)',
        cardColor: 'hsla(160, 38%, 12%, 1)',
        borderColor: 'hsla(160, 38%, 25%, 1)',
        mainColor: 'hsla(59, 100%, 42%, 1)'
      },
      {
        id: 'diamond',
        backgroundColor: 'hsla(249, 45%, 17%, 1)',
        cardColor: 'hsla(249, 45%, 22%, 1)',
        borderColor: 'hsla(249, 45%, 30%, 1)',
        mainColor: 'hsla(187, 100%, 42%, 1)'
      },
      {
        id: 'pulse',
        backgroundColor: 'hsla(180, 5%, 11%, 1)',
        cardColor: 'hsla(180, 5%, 15%, 1)',
        borderColor: 'hsla(180, 5%, 25%, 1)',
        mainColor: 'hsla(191, 100%, 50%, 1)'
      },
      {
        id: 'flora',
        backgroundColor: 'hsla(195, 39%, 12%, 1)',
        cardColor: 'hsla(195, 39%, 16%, 1)',
        borderColor: 'hsla(195, 39%, 25%, 1)',
        mainColor: 'hsla(113, 100%, 58%, 1)'
      },
      {
        id: 'midnight-blossom',
        backgroundColor: 'hsla(265, 40%, 14%, 1)',
        cardColor: 'hsla(265, 40%, 17%, 1)',
        borderColor: 'hsla(265, 30%, 27%, 1)',
        mainColor: 'hsla(330, 75%, 60%, 1)',
        secondaryColor: 'hsla(285, 60%, 65%, 1)'
      },
      {
        id: 'neon-dusk',
        backgroundColor: 'hsla(250, 58%, 10%, 1)',
        cardColor: 'hsla(250, 58%, 15%, 1)',
        borderColor: 'hsla(250, 40%, 22%, 1)',
        mainColor: 'hsla(190, 100%, 50%, 1)',
        secondaryColor: 'hsla(45, 100%, 48%, 1)'
      },
      {
        id: 'mystic-forest',
        backgroundColor: 'hsla(146, 30%, 12%, 1)',
        cardColor: 'hsla(146, 32%, 17%, 1)',
        borderColor: 'hsla(146, 26%, 25%, 1)',
        mainColor: 'hsla(111, 62%, 45%, 1)',
        secondaryColor: 'hsla(96, 45%, 60%, 1)'
      },
      {
        id: 'velvet-night',
        backgroundColor: 'hsla(220, 26%, 13%, 1)',
        cardColor: 'hsla(220, 26%, 17%, 1)',
        borderColor: 'hsla(220, 22%, 28%, 1)',
        mainColor: 'hsla(271, 85%, 57%, 1)',
        secondaryColor: 'hsla(340, 77%, 53%, 1)'
      },
      {
        id: 'cosmic-charcoal',
        backgroundColor: 'hsla(210, 15%, 11%, 1)',
        cardColor: 'hsla(210, 15%, 15%, 1)',
        borderColor: 'hsla(210, 15%, 25%, 1)',
        mainColor: 'hsla(15, 95%, 62%, 1)',
        secondaryColor: 'hsla(29, 100%, 55%, 1)'
      },
      {
        id: 'moonlit-sakura',
        backgroundColor: 'hsla(255, 32%, 13%, 1)',
        cardColor: 'hsla(255, 36%, 17%, 1)',
        borderColor: 'hsla(340, 38%, 30%, 1)',
        mainColor: 'hsla(328, 70%, 73%, 1)',
        secondaryColor: 'hsla(340, 100%, 80%, 1)'
      },
      {
        id: 'sapphire-frost',
        backgroundColor: 'hsla(209, 60%, 10%, 1)',
        cardColor: 'hsla(209, 60%, 14%, 1)',
        borderColor: 'hsla(205, 45%, 25%, 1)',
        mainColor: 'hsla(196, 100%, 68%, 1)',
        secondaryColor: 'hsla(170, 55%, 67%, 1)'
      },
      {
        id: 'ember-glow',
        backgroundColor: 'hsla(18, 69%, 13%, 1)',
        cardColor: 'hsla(18, 70%, 17%, 1)',
        borderColor: 'hsla(28, 40%, 27%, 1)',
        mainColor: 'hsla(28, 97%, 58%, 1)',
        secondaryColor: 'hsla(14, 80%, 59%, 1)'
      },
      {
        id: 'jade-mirage',
        backgroundColor: 'hsla(163, 21%, 13%, 1)',
        cardColor: 'hsla(163, 25%, 17%, 1)',
        borderColor: 'hsla(166, 25%, 27%, 1)',
        mainColor: 'hsla(150, 66%, 54%, 1)',
        secondaryColor: 'hsla(170, 64%, 54%, 1)'
      },
      {
        id: 'rosewood-nightfall',
        backgroundColor: 'hsla(345, 31%, 13%, 1)',
        cardColor: 'hsla(345, 38%, 18%, 1)',
        borderColor: 'hsla(356, 30%, 27%, 1)',
        mainColor: 'hsla(340, 78%, 60%, 1)',
        secondaryColor: 'hsla(10, 60%, 60%, 1)'
      },
      {
        id: 'nebula-veil',
        backgroundColor: 'hsla(248, 31%, 11%, 1)',
        cardColor: 'hsla(263, 41%, 17%, 1)',
        borderColor: 'hsla(286, 54%, 27%, 1)',
        mainColor: 'hsla(293, 83%, 74%, 1)',
        secondaryColor: 'hsla(192, 92%, 71%, 1)'
      },
      {
        id: 'velvet-citrus-dream',
        backgroundColor: 'hsla(274, 33%, 13%, 1)',
        cardColor: 'hsla(274, 36%, 17%, 1)',
        borderColor: 'hsla(47, 90%, 60%, 1)',
        mainColor: 'hsla(48, 100%, 67%, 1)',
        secondaryColor: 'hsla(17, 98%, 64%, 1)'
      },
      {
        id: 'arctic-inferno',
        backgroundColor: 'hsla(217, 44%, 14%, 1)',
        cardColor: 'hsla(220, 60%, 17%, 1)',
        borderColor: 'hsla(8, 86%, 54%, 1)',
        mainColor: 'hsla(6, 96%, 66%, 1)',
        secondaryColor: 'hsla(181, 100%, 65%, 1)'
      },
      {
        id: 'haunted-lagoon',
        backgroundColor: 'hsla(194, 80%, 9%, 1)',
        cardColor: 'hsla(177, 47%, 14%, 1)',
        borderColor: 'hsla(170, 63%, 30%, 1)',
        mainColor: 'hsla(168, 81%, 56%, 1)',
        secondaryColor: 'hsla(117, 39%, 64%, 1)'
      },
      {
        id: 'blood-moon-waltz',
        backgroundColor: 'hsla(352, 65%, 12%, 1)',
        cardColor: 'hsla(357, 71%, 18%, 1)',
        borderColor: 'hsla(17, 81%, 42%, 1)',
        mainColor: 'hsla(6, 100%, 67%, 1)',
        secondaryColor: 'hsla(40, 97%, 60%, 1)'
      }
    ]
  }
];

export default themes;
