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
      },
      {
        id: 'celestial-grove',
        backgroundColor: 'hsla(170, 35%, 10%, 1)',
        cardColor: 'hsla(170, 37%, 15%, 1)',
        borderColor: 'hsla(170, 37%, 25%, 1)',
        mainColor: 'hsla(86, 68%, 57%, 1)',
        secondaryColor: 'hsla(43, 93%, 64%, 1)'
      },
      {
        id: 'amethyst-nightfall',
        backgroundColor: 'hsla(277, 34%, 12%, 1)',
        cardColor: 'hsla(277, 38%, 18%, 1)',
        borderColor: 'hsla(277, 38%, 28%, 1)',
        mainColor: 'hsla(289, 72%, 63%, 1)',
        secondaryColor: 'hsla(214, 77%, 65%, 1)'
      },
      {
        id: 'luminous-tide',
        backgroundColor: 'hsla(209, 49%, 11%, 1)',
        cardColor: 'hsla(209, 54%, 16%, 1)',
        borderColor: 'hsla(209, 54%, 26%, 1)',
        mainColor: 'hsla(188, 85%, 50%, 1)',
        secondaryColor: 'hsla(45, 96%, 62%, 1)'
      },
      {
        id: 'enchanted-ember',
        backgroundColor: 'hsla(28, 33%, 11%, 1)',
        cardColor: 'hsla(28, 37%, 17%, 1)',
        borderColor: 'hsla(28, 37%, 27%, 1)',
        mainColor: 'hsla(16, 76%, 61%, 1)',
        secondaryColor: 'hsla(40, 98%, 54%, 1)'
      },
      {
        id: 'orchid-eclipse',
        backgroundColor: 'hsla(325, 24%, 14%, 1)',
        cardColor: 'hsla(325, 27%, 18%, 1)',
        borderColor: 'hsla(325, 27%, 28%, 1)',
        mainColor: 'hsla(304, 71%, 67%, 1)',
        secondaryColor: 'hsla(164, 75%, 54%, 1)'
      },
      {
        id: 'andromeda-dream',
        backgroundColor: 'hsla(264, 51%, 10%, 1)',
        cardColor: 'hsla(264, 53%, 16%, 1)',
        borderColor: 'hsla(264, 53%, 27%, 1)',
        mainColor: 'hsla(312, 76%, 72%, 1)',
        secondaryColor: 'hsla(194, 100%, 69%, 1)'
      },
      {
        id: 'luminous-nebula',
        backgroundColor: 'hsla(239, 71%, 9%, 1)',
        cardColor: 'hsla(239, 74%, 16%, 1)',
        borderColor: 'hsla(239, 74%, 28%, 1)',
        mainColor: 'hsla(288, 99%, 70%, 1)',
        secondaryColor: 'hsla(199, 100%, 75%, 1)'
      },
      {
        id: 'seraphic-aurora',
        backgroundColor: 'hsla(217, 52%, 12%, 1)',
        cardColor: 'hsla(197, 56%, 18%, 1)',
        borderColor: 'hsla(197, 56%, 28%, 1)',
        mainColor: 'hsla(153, 100%, 60%, 1)',
        secondaryColor: 'hsla(273, 97%, 74%, 1)'
      },
      {
        id: 'cosmic-prism',
        backgroundColor: 'hsla(287, 65%, 11%, 1)',
        cardColor: 'hsla(287, 72%, 18%, 1)',
        borderColor: 'hsla(287, 72%, 28%, 1)',
        mainColor: 'hsla(341, 100%, 71%, 1)',
        secondaryColor: 'hsla(179, 97%, 68%, 1)'
      },
      {
        id: 'opaline-zodiac',
        backgroundColor: 'hsla(197, 51%, 13%, 1)',
        cardColor: 'hsla(197, 56%, 19%, 1)',
        borderColor: 'hsla(197, 56%, 29%, 1)',
        mainColor: 'hsla(174, 100%, 67%, 1)',
        secondaryColor: 'hsla(56, 100%, 73%, 1)'
      },
      {
        id: 'glitching-eden',
        backgroundColor: 'hsla(320, 81%, 7%, 1)',
        cardColor: 'hsla(139, 57%, 17%, 1)',
        borderColor: 'hsla(139, 57%, 33%, 1)',
        mainColor: 'hsla(90, 100%, 56%, 1)',
        secondaryColor: 'hsla(299, 96%, 67%, 1)'
      },
      {
        id: 'solar-paradox',
        backgroundColor: 'hsla(57, 91%, 12%, 1)',
        cardColor: 'hsla(276, 32%, 18%, 1)',
        borderColor: 'hsla(276, 32%, 31%, 1)',
        mainColor: 'hsla(50, 100%, 56%, 1)',
        secondaryColor: 'hsla(201, 100%, 54%, 1)'
      },
      {
        id: 'velvet-abyss',
        backgroundColor: 'hsla(258, 60%, 8%, 1)',
        cardColor: 'hsla(305, 32%, 16%, 1)',
        borderColor: 'hsla(305, 32%, 27%, 1)',
        mainColor: 'hsla(12, 83%, 55%, 1)',
        secondaryColor: 'hsla(172, 86%, 65%, 1)'
      },
      {
        id: 'prism-infection',
        backgroundColor: 'hsla(48, 92%, 10%, 1)',
        cardColor: 'hsla(348, 94%, 15%, 1)',
        borderColor: 'hsla(348, 94%, 27%, 1)',
        mainColor: 'hsla(101, 81%, 57%, 1)',
        secondaryColor: 'hsla(187, 96%, 44%, 1)'
      },
      {
        id: 'radioactive-lagoon',
        backgroundColor: 'hsla(161, 79%, 11%, 1)',
        cardColor: 'hsla(117, 82%, 13%, 1)',
        borderColor: 'hsla(117, 82%, 22%, 1)',
        mainColor: 'hsla(60, 100%, 61%, 1)',
        secondaryColor: 'hsla(310, 94%, 69%, 1)'
      },
      {
        id: 'polaris-veil',
        backgroundColor: 'hsla(222, 46%, 12%, 1)',
        cardColor: 'hsla(222, 46%, 17%, 1)',
        borderColor: 'hsla(222, 46%, 29%, 1)',
        mainColor: 'hsla(196, 100%, 72%, 1)',
        secondaryColor: 'hsla(60, 100%, 73%, 1)'
      },
      {
        id: 'rose-nebula',
        backgroundColor: 'hsla(310, 38%, 13%, 1)',
        cardColor: 'hsla(310, 38%, 19%, 1)',
        borderColor: 'hsla(310, 38%, 28%, 1)',
        mainColor: 'hsla(346, 75%, 69%, 1)',
        secondaryColor: 'hsla(273, 98%, 75%, 1)'
      },
      {
        id: 'azure-twilight',
        backgroundColor: 'hsla(219, 37%, 11%, 1)',
        cardColor: 'hsla(219, 39%, 16%, 1)',
        borderColor: 'hsla(219, 39%, 27%, 1)',
        mainColor: 'hsla(187, 97%, 58%, 1)',
        secondaryColor: 'hsla(261, 74%, 78%, 1)'
      },
      {
        id: 'ethereal-dawn',
        backgroundColor: 'hsla(263, 52%, 12%, 1)',
        cardColor: 'hsla(263, 57%, 17%, 1)',
        borderColor: 'hsla(263, 57%, 29%, 1)',
        mainColor: 'hsla(41, 98%, 67%, 1)',
        secondaryColor: 'hsla(172, 78%, 65%, 1)'
      },
      {
        id: 'halcyon-garden',
        backgroundColor: 'hsla(151, 35%, 11%, 1)',
        cardColor: 'hsla(151, 37%, 17%, 1)',
        borderColor: 'hsla(151, 37%, 28%, 1)',
        mainColor: 'hsla(109, 83%, 57%, 1)',
        secondaryColor: 'hsla(219, 91%, 67%, 1)'
      },
      {
        id: 'hyperion-skies',
        backgroundColor: 'hsla(209, 54%, 11%, 1)',
        cardColor: 'hsla(209, 57%, 17%, 1)',
        borderColor: 'hsla(209, 57%, 26%, 1)',
        mainColor: 'hsla(199, 96%, 68%, 1)',
        secondaryColor: 'hsla(47, 100%, 63%, 1)'
      },
      {
        id: 'velvet-starlight',
        backgroundColor: 'hsla(291, 39%, 11%, 1)',
        cardColor: 'hsla(291, 43%, 19%, 1)',
        borderColor: 'hsla(291, 43%, 32%, 1)',
        mainColor: 'hsla(317, 94%, 67%, 1)',
        secondaryColor: 'hsla(235, 92%, 82%, 1)'
      },
      {
        id: 'solaris-orchard',
        backgroundColor: 'hsla(73, 34%, 12%, 1)',
        cardColor: 'hsla(73, 36%, 18%, 1)',
        borderColor: 'hsla(73, 36%, 29%, 1)',
        mainColor: 'hsla(20, 98%, 68%, 1)',
        secondaryColor: 'hsla(120, 77%, 65%, 1)'
      },
      {
        id: 'astral-mirage',
        backgroundColor: 'hsla(191, 75%, 9%, 1)',
        cardColor: 'hsla(191, 81%, 13%, 1)',
        borderColor: 'hsla(191, 81%, 27%, 1)',
        mainColor: 'hsla(271, 97%, 73%, 1)',
        secondaryColor: 'hsla(47, 94%, 65%, 1)'
      },
      {
        id: 'oceanic-aurora',
        backgroundColor: 'hsla(204, 67%, 12%, 1)',
        cardColor: 'hsla(204, 70%, 17%, 1)',
        borderColor: 'hsla(204, 70%, 27%, 1)',
        mainColor: 'hsla(162, 92%, 62%, 1)',
        secondaryColor: 'hsla(280, 78%, 76%, 1)'
      },
      {
        id: 'zephyrite-dream',
        backgroundColor: 'hsla(157, 29%, 11%, 1)',
        cardColor: 'hsla(157, 33%, 17%, 1)',
        borderColor: 'hsla(157, 33%, 29%, 1)',
        mainColor: 'hsla(196, 93%, 69%, 1)',
        secondaryColor: 'hsla(98, 82%, 63%, 1)'
      },
      {
        id: 'lapis-cascade',
        backgroundColor: 'hsla(215, 50%, 11%, 1)',
        cardColor: 'hsla(215, 55%, 17%, 1)',
        borderColor: 'hsla(215, 55%, 29%, 1)',
        mainColor: 'hsla(230, 100%, 75%, 1)',
        secondaryColor: 'hsla(186, 88%, 52%, 1)'
      },
      {
        id: 'lucid-dusk',
        backgroundColor: 'hsla(246, 42%, 13%, 1)',
        cardColor: 'hsla(246, 45%, 18%, 1)',
        borderColor: 'hsla(246, 45%, 28%, 1)',
        mainColor: 'hsla(6, 81%, 68%, 1)',
        secondaryColor: 'hsla(182, 100%, 68%, 1)'
      },
      {
        id: 'fuchsia-solstice',
        backgroundColor: 'hsla(322, 48%, 11%, 1)',
        cardColor: 'hsla(322, 53%, 16%, 1)',
        borderColor: 'hsla(322, 53%, 29%, 1)',
        mainColor: 'hsla(291, 99%, 72%, 1)',
        secondaryColor: 'hsla(53, 100%, 67%, 1)'
      },
      {
        id: 'sapphire-bloom',
        backgroundColor: 'hsla(224, 41%, 14%, 1)',
        cardColor: 'hsla(224, 47%, 19%, 1)',
        borderColor: 'hsla(224, 47%, 30%, 1)',
        mainColor: 'hsla(261, 100%, 83%, 1)',
        secondaryColor: 'hsla(166, 100%, 59%, 1)'
      },
      {
        id: 'citrus-eclipse',
        backgroundColor: 'hsla(34, 49%, 11%, 1)',
        cardColor: 'hsla(34, 54%, 16%, 1)',
        borderColor: 'hsla(34, 54%, 29%, 1)',
        mainColor: 'hsla(42, 100%, 65%, 1)',
        secondaryColor: 'hsla(293, 94%, 71%, 1)'
      },
      {
        id: 'celestite-frost',
        backgroundColor: 'hsla(196, 43%, 13%, 1)',
        cardColor: 'hsla(196, 50%, 19%, 1)',
        borderColor: 'hsla(196, 50%, 29%, 1)',
        mainColor: 'hsla(196, 100%, 85%, 1)',
        secondaryColor: 'hsla(314, 86%, 76%, 1)'
      },
      {
        id: 'peony-nightshade',
        backgroundColor: 'hsla(338, 30%, 12%, 1)',
        cardColor: 'hsla(338, 35%, 19%, 1)',
        borderColor: 'hsla(338, 35%, 30%, 1)',
        mainColor: 'hsla(328, 95%, 68%, 1)',
        secondaryColor: 'hsla(119, 89%, 73%, 1)'
      },
      {
        id: 'topaz-drift',
        backgroundColor: 'hsla(172, 34%, 11%, 1)',
        cardColor: 'hsla(172, 37%, 17%, 1)',
        borderColor: 'hsla(172, 37%, 29%, 1)',
        mainColor: 'hsla(45, 98%, 71%, 1)',
        secondaryColor: 'hsla(18, 88%, 64%, 1)'
      },
      {
        id: 'emberlit-cloud',
        backgroundColor: 'hsla(10, 40%, 12%, 1)',
        cardColor: 'hsla(10, 45%, 19%, 1)',
        borderColor: 'hsla(10, 45%, 29%, 1)',
        mainColor: 'hsla(16, 100%, 70%, 1)',
        secondaryColor: 'hsla(181, 92%, 67%, 1)'
      },
      {
        id: 'nebulous-maw',
        backgroundColor: 'hsla(252, 59%, 8%, 1)',
        cardColor: 'hsla(247, 65%, 18%, 1)',
        borderColor: 'hsla(247, 65%, 28%, 1)',
        mainColor: 'hsla(46, 100%, 69%, 1)',
        secondaryColor: 'hsla(321, 99%, 78%, 1)'
      },
      {
        id: 'epsilon-halo',
        backgroundColor: 'hsla(69, 60%, 8%, 1)',
        cardColor: 'hsla(102, 59%, 17%, 1)',
        borderColor: 'hsla(102, 59%, 27%, 1)',
        mainColor: 'hsla(200, 80%, 73%, 1)',
        secondaryColor: 'hsla(94, 97%, 60%, 1)'
      },
      {
        id: 'black-opaline',
        backgroundColor: 'hsla(33, 24%, 10%, 1)',
        cardColor: 'hsla(233, 23%, 15%, 1)',
        borderColor: 'hsla(233, 23%, 29%, 1)',
        mainColor: 'hsla(316, 98%, 66%, 1)',
        secondaryColor: 'hsla(180, 92%, 63%, 1)'
      },
      {
        id: 'vortex-requiem',
        backgroundColor: 'hsla(290, 51%, 10%, 1)',
        cardColor: 'hsla(227, 41%, 18%, 1)',
        borderColor: 'hsla(227, 41%, 29%, 1)',
        mainColor: 'hsla(192, 100%, 64%, 1)',
        secondaryColor: 'hsla(292, 100%, 62%, 1)'
      },
      {
        id: 'solar-genesis',
        backgroundColor: 'hsla(23, 94%, 7%, 1)',
        cardColor: 'hsla(27, 88%, 14%, 1)',
        borderColor: 'hsla(27, 88%, 28%, 1)',
        mainColor: 'hsla(48, 100%, 74%, 1)',
        secondaryColor: 'hsla(16, 92%, 66%, 1)'
      },
      {
        id: 'aurora-mechanica',
        backgroundColor: 'hsla(180, 46%, 8%, 1)',
        cardColor: 'hsla(127, 62%, 15%, 1)',
        borderColor: 'hsla(127, 62%, 25%, 1)',
        mainColor: 'hsla(208, 94%, 59%, 1)',
        secondaryColor: 'hsla(317, 90%, 69%, 1)'
      },
      {
        id: 'ultraviolet-oracle',
        backgroundColor: 'hsla(265, 81%, 9%, 1)',
        cardColor: 'hsla(267, 82%, 16%, 1)',
        borderColor: 'hsla(267, 82%, 29%, 1)',
        mainColor: 'hsla(210, 100%, 69%, 1)',
        secondaryColor: 'hsla(273, 93%, 73%, 1)'
      },
      {
        id: 'dusk-vermillion',
        backgroundColor: 'hsla(12, 83%, 7%, 1)',
        cardColor: 'hsla(12, 83%, 17%, 1)',
        borderColor: 'hsla(12, 83%, 29%, 1)',
        mainColor: 'hsla(340, 91%, 69%, 1)',
        secondaryColor: 'hsla(19, 100%, 73%, 1)'
      },
      {
        id: 'blue-emberveil',
        backgroundColor: 'hsla(212, 60%, 10%, 1)',
        cardColor: 'hsla(288, 35%, 16%, 1)',
        borderColor: 'hsla(288, 35%, 29%, 1)',
        mainColor: 'hsla(199, 94%, 71%, 1)',
        secondaryColor: 'hsla(19, 97%, 61%, 1)'
      },
      {
        id: 'genesis-prism',
        backgroundColor: 'hsla(39, 60%, 9%, 1)',
        cardColor: 'hsla(280, 80%, 14%, 1)',
        borderColor: 'hsla(280, 80%, 28%, 1)',
        mainColor: 'hsla(102, 78%, 64%, 1)',
        secondaryColor: 'hsla(325, 75%, 75%, 1)'
      },
      {
        id: 'liminal-bloom',
        backgroundColor: 'hsla(346, 41%, 10%, 1)',
        cardColor: 'hsla(312, 42%, 18%, 1)',
        borderColor: 'hsla(312, 42%, 29%, 1)',
        mainColor: 'hsla(294, 99%, 62%, 1)',
        secondaryColor: 'hsla(55, 98%, 58%, 1)'
      },
      {
        id: 'nautilus-star',
        backgroundColor: 'hsla(205, 47%, 8%, 1)',
        cardColor: 'hsla(187, 83%, 19%, 1)',
        borderColor: 'hsla(187, 83%, 30%, 1)',
        mainColor: 'hsla(207, 95%, 65%, 1)',
        secondaryColor: 'hsla(30, 92%, 72%, 1)'
      },
      {
        id: 'cardinal-void',
        backgroundColor: 'hsla(350, 85%, 9%, 1)',
        cardColor: 'hsla(347, 86%, 19%, 1)',
        borderColor: 'hsla(347, 86%, 28%, 1)',
        mainColor: 'hsla(22, 95%, 65%, 1)',
        secondaryColor: 'hsla(201, 89%, 52%, 1)'
      },
      {
        id: 'cyanic-wisdom',
        backgroundColor: 'hsla(197, 62%, 9%, 1)',
        cardColor: 'hsla(203, 75%, 15%, 1)',
        borderColor: 'hsla(203, 75%, 28%, 1)',
        mainColor: 'hsla(192, 100%, 73%, 1)',
        secondaryColor: 'hsla(331, 79%, 74%, 1)'
      },
      {
        id: 'twilight-oracle',
        backgroundColor: 'hsla(256, 42%, 12%, 1)',
        cardColor: 'hsla(333, 61%, 18%, 1)',
        borderColor: 'hsla(333, 61%, 29%, 1)',
        mainColor: 'hsla(5, 92%, 66%, 1)',
        secondaryColor: 'hsla(208, 70%, 70%, 1)'
      },
      {
        id: 'silica-dusk',
        backgroundColor: 'hsla(19, 29%, 8%, 1)',
        cardColor: 'hsla(29, 17%, 14%, 1)',
        borderColor: 'hsla(29, 17%, 24%, 1)',
        mainColor: 'hsla(359, 95%, 78%, 1)',
        secondaryColor: 'hsla(186, 88%, 69%, 1)'
      },
      {
        id: 'galaxy-oracle',
        backgroundColor: 'hsla(219, 78%, 7%, 1)',
        cardColor: 'hsla(254, 67%, 14%, 1)',
        borderColor: 'hsla(254, 67%, 25%, 1)',
        mainColor: 'hsla(296, 84%, 78%, 1)',
        secondaryColor: 'hsla(222, 100%, 73%, 1)'
      },
      {
        id: 'fathom-frost',
        backgroundColor: 'hsla(200, 58%, 10%, 1)',
        cardColor: 'hsla(202, 68%, 13%, 1)',
        borderColor: 'hsla(202, 68%, 27%, 1)',
        mainColor: 'hsla(123, 84%, 59%, 1)',
        secondaryColor: 'hsla(319, 91%, 78%, 1)'
      },
      {
        id: 'amber-frostbite',
        backgroundColor: 'hsla(32, 85%, 11%, 1)',
        cardColor: 'hsla(44, 97%, 13%, 1)',
        borderColor: 'hsla(44, 97%, 26%, 1)',
        mainColor: 'hsla(197, 91%, 83%, 1)',
        secondaryColor: 'hsla(343, 88%, 71%, 1)'
      },
      {
        id: 'verdant-comet',
        backgroundColor: 'hsla(123, 35%, 8%, 1)',
        cardColor: 'hsla(83, 62%, 15%, 1)',
        borderColor: 'hsla(83, 62%, 27%, 1)',
        mainColor: 'hsla(127, 100%, 62%, 1)',
        secondaryColor: 'hsla(364, 98%, 74%, 1)'
      },
      {
        id: 'radiant-umbra',
        backgroundColor: 'hsla(172, 60%, 9%, 1)',
        cardColor: 'hsla(61, 66%, 16%, 1)',
        borderColor: 'hsla(61, 66%, 28%, 1)',
        mainColor: 'hsla(197, 90%, 65%, 1)',
        secondaryColor: 'hsla(325, 90%, 64%, 1)'
      },
      {
        id: 'magenta-tundra',
        backgroundColor: 'hsla(333, 61%, 9%, 1)',
        cardColor: 'hsla(314, 89%, 21%, 1)',
        borderColor: 'hsla(314, 89%, 32%, 1)',
        mainColor: 'hsla(53, 93%, 69%, 1)',
        secondaryColor: 'hsla(194, 92%, 79%, 1)'
      },
      {
        id: 'lapis-solara',
        backgroundColor: 'hsla(226, 63%, 9%, 1)',
        cardColor: 'hsla(208, 69%, 18%, 1)',
        borderColor: 'hsla(208, 69%, 30%, 1)',
        mainColor: 'hsla(57, 100%, 77%, 1)',
        secondaryColor: 'hsla(259, 97%, 82%, 1)'
      },
      {
        id: 'neon-haze',
        backgroundColor: 'hsla(297, 77%, 9%, 1)',
        cardColor: 'hsla(88, 64%, 16%, 1)',
        borderColor: 'hsla(88, 64%, 27%, 1)',
        mainColor: 'hsla(72, 95%, 66%, 1)',
        secondaryColor: 'hsla(314, 96%, 74%, 1)'
      },
      {
        id: 'lyra-cascade',
        backgroundColor: 'hsla(144, 41%, 9%, 1)',
        cardColor: 'hsla(221, 62%, 18%, 1)',
        borderColor: 'hsla(221, 62%, 31%, 1)',
        mainColor: 'hsla(195, 97%, 69%, 1)',
        secondaryColor: 'hsla(325, 85%, 73%, 1)'
      },
      {
        id: 'arcane-fathoms',
        backgroundColor: 'hsla(207, 74%, 10%, 1)',
        cardColor: 'hsla(272, 80%, 22%, 1)',
        borderColor: 'hsla(272, 80%, 34%, 1)',
        mainColor: 'hsla(97, 76%, 66%, 1)',
        secondaryColor: 'hsla(281, 93%, 80%, 1)'
      },
      {
        id: 'melancholy-halo',
        backgroundColor: 'hsla(222, 29%, 9%, 1)',
        cardColor: 'hsla(253, 30%, 16%, 1)',
        borderColor: 'hsla(253, 30%, 27%, 1)',
        mainColor: 'hsla(257, 94%, 74%, 1)',
        secondaryColor: 'hsla(159, 96%, 66%, 1)'
      },
      {
        id: 'prism-snowfall',
        backgroundColor: 'hsla(301, 15%, 8%, 1)',
        cardColor: 'hsla(185, 16%, 20%, 1)',
        borderColor: 'hsla(185, 16%, 32%, 1)',
        mainColor: 'hsla(190, 92%, 75%, 1)',
        secondaryColor: 'hsla(41, 98%, 81%, 1)'
      },
      {
        id: 'infinite-spice',
        backgroundColor: 'hsla(36, 86%, 7%, 1)',
        cardColor: 'hsla(27, 83%, 15%, 1)',
        borderColor: 'hsla(27, 83%, 29%, 1)',
        mainColor: 'hsla(22, 98%, 68%, 1)',
        secondaryColor: 'hsla(199, 92%, 69%, 1)'
      },
      {
        id: 'lotus-specter',
        backgroundColor: 'hsla(324, 27%, 8%, 1)',
        cardColor: 'hsla(345, 64%, 17%, 1)',
        borderColor: 'hsla(345, 64%, 30%, 1)',
        mainColor: 'hsla(319, 96%, 76%, 1)',
        secondaryColor: 'hsla(66, 100%, 73%, 1)'
      },
      {
        id: 'azure-mirage',
        backgroundColor: 'hsla(190, 100%, 7%, 1)',
        cardColor: 'hsla(191, 93%, 16%, 1)',
        borderColor: 'hsla(191, 93%, 27%, 1)',
        mainColor: 'hsla(271, 99%, 72%, 1)',
        secondaryColor: 'hsla(52, 100%, 69%, 1)'
      },
      {
        id: 'polar-rose',
        backgroundColor: 'hsla(355, 61%, 9%, 1)',
        cardColor: 'hsla(13, 72%, 17%, 1)',
        borderColor: 'hsla(13, 72%, 30%, 1)',
        mainColor: 'hsla(290, 100%, 78%, 1)',
        secondaryColor: 'hsla(175, 86%, 69%, 1)'
      },
      {
        id: 'ion-ember',
        backgroundColor: 'hsla(22, 100%, 8%, 1)',
        cardColor: 'hsla(15, 85%, 17%, 1)',
        borderColor: 'hsla(15, 85%, 30%, 1)',
        mainColor: 'hsla(50, 86%, 68%, 1)',
        secondaryColor: 'hsla(323, 87%, 75%, 1)'
      },
      {
        id: 'cobalt-lumen',
        backgroundColor: 'hsla(205, 90%, 8%, 1)',
        cardColor: 'hsla(210, 71%, 18%, 1)',
        borderColor: 'hsla(210, 71%, 31%, 1)',
        mainColor: 'hsla(193, 97%, 67%, 1)',
        secondaryColor: 'hsla(299, 94%, 62%, 1)'
      },
      {
        id: 'mirage-peach',
        backgroundColor: 'hsla(19, 63%, 8%, 1)',
        cardColor: 'hsla(30, 94%, 19%, 1)',
        borderColor: 'hsla(30, 94%, 32%, 1)',
        mainColor: 'hsla(24, 98%, 66%, 1)',
        secondaryColor: 'hsla(266, 96%, 66%, 1)'
      },
      {
        id: 'spectral-mint',
        backgroundColor: 'hsla(146, 68%, 8%, 1)',
        cardColor: 'hsla(163, 82%, 18%, 1)',
        borderColor: 'hsla(163, 82%, 29%, 1)',
        mainColor: 'hsla(147, 94%, 78%, 1)',
        secondaryColor: 'hsla(259, 98%, 72%, 1)'
      },
      {
        id: 'aero-blossom',
        backgroundColor: 'hsla(200, 25%, 10%, 1)',
        cardColor: 'hsla(222, 61%, 18%, 1)',
        borderColor: 'hsla(222, 61%, 29%, 1)',
        mainColor: 'hsla(155, 93%, 66%, 1)',
        secondaryColor: 'hsla(335, 92%, 72%, 1)'
      },
      {
        id: 'antimatter-bloom',
        backgroundColor: 'hsla(264, 88%, 9%, 1)',
        cardColor: 'hsla(289, 53%, 15%, 1)',
        borderColor: 'hsla(289, 53%, 27%, 1)',
        mainColor: 'hsla(125, 93%, 68%, 1)',
        secondaryColor: 'hsla(349, 96%, 72%, 1)'
      },
      {
        id: 'golden-lyric',
        backgroundColor: 'hsla(45, 60%, 8%, 1)',
        cardColor: 'hsla(29, 61%, 18%, 1)',
        borderColor: 'hsla(29, 61%, 28%, 1)',
        mainColor: 'hsla(49, 97%, 74%, 1)',
        secondaryColor: 'hsla(286, 89%, 76%, 1)'
      },
      {
        id: 'neon-singularity',
        backgroundColor: 'hsla(171, 92%, 8%, 1)',
        cardColor: 'hsla(83, 93%, 16%, 1)',
        borderColor: 'hsla(83, 93%, 28%, 1)',
        mainColor: 'hsla(326, 96%, 72%, 1)',
        secondaryColor: 'hsla(196, 100%, 68%, 1)'
      }
    ]
  }
];

export default themes;
