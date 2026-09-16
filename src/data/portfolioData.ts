import { PhotoVignette, LoveStory, CinemaFilm, EditorialPress } from '../types';

export const HERO_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1WNqvraHqJ78i4nLeK9Zc_bRrO0o55I84MNT4CITi_Nk7oKPjbHQqAgL7g4sHA3yfVJFUQxVcYI2IUDD-xz86kiktpClNiLZMe2Riutfia8Ugbb-Be3E2DeiPfbH0iTamgYsyPGdVMM4SD6kIDIGDqxGd_LJzZjGAj7GDqNyvdKzdk1dpmAKzJF-53_5BGhcP9f8SDqQTu7bGtgqy6UhUr6hSSsXJ1jXuNsMO_n7n51iiTq4wF17Uqg843c',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW7mBluwzvaPcq4UmaxcDwKJCpJU-OxD8OswZGjaO1dZm8Rv9Smsak0GCy8SStLmhsJoVVFrLKK9ZDt57hZ2ULanfgTOaZtrgdqpxO-oGV5D-Osuy4ukXDOIVsxLy3iVqQ9yFz9tMjuaB5VwOOTMt-vAeAt1lRPcWzHAOdloCuXl12H9JHP7mCgHhL2M__h13SEoTcAYljp4PATM-BsAqnhQluMesySoHK_9MrLAzonqkq01d1EQThxQ',
  manifestoLeft: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzIjL-e3sIBwpAK66rKkfDgpoTP0b5FoW8wd6R5zE7DRnT9O9SmXAC4q1bBjvWEfdf_nJIghdSoKhKqbqOFL4csFZJY-nFjHjvVsZVgS3wGOPc-cEhOwncuBKZ5Dv-ojFhb-7H8cJ-yGDBBw0uilCqS1VlpO1EQhqpAYty9z_vB9s-Cnt__ufR-ffO0rAOhSJPyQ4ZgYVT9SIPKscglG_s9YovFq-bZqN-6CFhjtSwjK13YEoySBjN4Q',
  manifestoRight: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp4wQiN-dAq-KRwzHT_lP_3gC2JMA7HTToCdPjU0d-QJsIO0NUT4DpU7S734W9YvAKVYnJS8fmZKYiQ_qM_VM3x9KkYhvCG_uoJXd_d3aQxyQtjidVswOXYBggtS2wOhvNuMc890QYGMcynuTn7uL9wZEi66F2gwCE0tlJQc6lwJNullaqphrD0bKj8qscFHvNMqeWqp8DdOf5UlbdbqYNB8Id-cZFEObAplhCSXw6-pGm3b9DjlKmSw',
  directorPortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD00rfTbb2Q7kDQUskmRne5uCn-QDFa8MqPB2r-SOkSQrdbEMPahuVCTCc3_xaH7Rn_6NmxAe91sRuSOocdwpURCNSIoeOLy_-5VkElNzV56eo6DosscuCUN7MFVODsCRDFlwT6Y-G8M7QI80VXH7oSS9oSDJJFTMNGqcqfS4l5KUeS5dJJXg0JY4ErtV04Dq8CcehairBHlfywTrj0jSxth6c2TjXjr5tmx1TB8hRVehfGJPLeHQWYYA'
};

export const CURATED_VIGNETTES: PhotoVignette[] = [
  {
    id: 'vignette-1',
    title: 'Echoes in the Cloister',
    location: 'Borgo Santo Pietro, Tuscany',
    category: 'Como & Amalfi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfYEJzf52zsntAEagArEcUf8GvMmtQ55N383nT0t0nKwK8VO3Zf1Bix832xDlJTKUTbDvP47bnu7i5gFlxQi_AVKiXtwR_S7slnEZTL0EbdpEHjUlQN0-zoSRf2nwDN80txww1-i6EDCJ3cII1QCZyz8gYNxtRlUWI-eVP-mc1mnzJnqv2bNY7u6F6Rh80E2mHvHKXMFlO1Rf24igQuq7i06f0_oUAsHf1Une3EGv7XEcgSBeCVdh-kQ',
    altText: 'Editorial shot of a bride and groom walking hand in hand under stone arches of an ancient Italian courtyard, light spilling through Roman arches',
    figureNumber: 'Fig. 01 / Architecture',
    caption: 'Quiet stroll beneath Roman arches as the midday haze dissolves into golden amber.',
    filmStock: 'Kodak Portra 400',
    camera: 'Leica M11 with 35mm Summilux-M f/1.4'
  },
  {
    id: 'vignette-2',
    title: 'The Whisper at Dusk',
    location: 'Villa Balbiano, Lake Como',
    category: 'Como & Amalfi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD499CLzQAmAvh8b2qU9141QP_Rc39GVon54FhWO7gppfFW0_AEtLbPlasIb6Z4k5Ud2xGWziSoNVZdX2RXrOrPbPoaZnFcQcSJ2P6FnHAp9oRS8syEAwqbIGsbpre3iXXc4bpfIfNCG3rwnnEYu2WNtCtYvJsxom6GzOjdGSGN1tF-v1h3Hua-rWaZdzNurZRH9tgD3AKO5wSm7nON1PCL0HtLpFBr4mAD5lmlATnyjTGNOVC4v6sKQQ',
    altText: 'Candid intimate laughter between bride and groom whispering during cocktail hour, soft champagne glass flare, high-fashion candid',
    figureNumber: 'Fig. 02 / Intimacy',
    caption: 'Soft champagne crystal flare and unscripted laughter during the lakeside apéritif.',
    filmStock: 'Kodak Tri-X 400 (Pushed +1)',
    camera: 'Contax 645 Medium Format'
  },
  {
    id: 'vignette-3',
    title: 'A Mother\'s Benediction',
    location: 'Château de Villette, France',
    category: 'Monochrome',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb3rvbR23NfSD0VQWUEnMsJNXl2CanQr0pZVYnnlwD9yBcP5aMMgzJ52vUx4xVf5AxDVvSujl0aMxSb-YJCFxKA7RSu29iGiDwOnA6IPemZIzAybhMIZppsUI-AVSRzqbr1LFM3yXcMws4Dkk4Y3W_oV384XWBEr_bUCoosZwpJqehDHKo6skG_t-lgkB7WC7yWnYHpdbff_7Y0icmg6L2I9J42Zh_KGRa3CKdUp9yB9C8svwNDDXNng',
    altText: 'High contrast black and white shot of groom embracing his mother with tears of joy, raw emotional documentary wedding storytelling',
    figureNumber: 'Fig. 03 / Emotion',
    caption: 'Raw maternal gratitude captured in rich black and silver analog grain.',
    filmStock: 'Ilford HP5 Plus',
    camera: 'Hasselblad 500 C/M'
  },
  {
    id: 'vignette-4',
    title: 'Meadow of Wild Silk',
    location: 'Ravello, Amalfi Coast',
    category: 'Como & Amalfi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf865a6-QDjltP4OzyqlPYOhS5sAE4rDrOk8NxL7c21cqz6EoLeOved-tn8dU9INdr_W-kA9QVnAlk4pp9ZslmwPgOGCwYdyvR94twqZxpRICDA5hzesa1NIra_bm4KKHw9EwWI16_nDYIAqViYSQq_yCwsSUHq9G76FGPPjcIrW_o9-8VX-kvImNJkKwVdj6_VAxjwaMA2QdAAgpOD0jKTvwfX29zqEZ_XHMJ8NmgfOikVvvlR-00Qg',
    altText: 'Overhead aerial perspective of couple lying on meadow of wild florals, silk veil spread out in organic ripples, soft morning sunlight',
    figureNumber: 'Fig. 04 / Composition',
    caption: 'Organic ripples of couture French tulle cascading across wildflower terraces.',
    filmStock: 'Fuji 400H',
    camera: 'Pentax 67 II'
  },
  {
    id: 'vignette-5',
    title: 'The Emerald Diadem',
    location: 'City Palace, Udaipur',
    category: 'Rajasthan Palaces',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOEliaUVa-jYWUxvcGPf_omyJ7FfQYjDJyb9HRcZRlfTOZmdi3RiX0mGPeLgxDrhG5p3NAPiSZ21oGsV9YMo1zOFOoNRQSq7X5VGBvhAMN7KPljQUGRDolVCYN_5ZB8SMCBX0F_ktji4NMsd5JVXf3lY-qwHYQ_RUqgIlGDg0WsfZWXC2biVS2iW_k1mGaMdGHhNYlgRbrnNRbDVTfnZfs3foOhXOyIqncgJjndl1ibRxh-o18TQhJ7Q',
    altText: 'Profile portrait of a stunning bride wearing heritage emerald choker and sheer embroidered dupatta, regal poise, museum lighting',
    figureNumber: 'Fig. 05 / Regal',
    caption: 'Heirloom Colombian emeralds and antique zari embroidery bathed in palace archway illumination.',
    filmStock: 'Kodak Portra 160',
    camera: 'Leica SL2 with Noctilux 50mm f/0.95'
  },
  {
    id: 'vignette-6',
    title: 'Sacred Agni & Jasmine',
    location: 'Rambagh Palace, Jaipur',
    category: 'Rajasthan Palaces',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtAOGY_-KusZ0mfP6TCQABW3lz01Kh3FUgdB9vltxbAmxmjiN9hUMIu-7IThVzEjjkn2fYRH57LDcXrae63kKMeDRC-BvypBxLsp54ybOniWzf8o28NalT7IIk7S4Wnlmx7h7Ou8RIqQGnZnnW68yNYHU9E0dlCDLLawWNDXI_tiQluawUXh77w-4rl_HfSHeOZ4OazdefDo3ONO6vTWzOnBYEwVf2UwgN6h8kEfukrcZdnZaf3PPHfg',
    altText: 'Traditional Vedic ceremony prayer hands with jasmine garlands and sacred fire smoke swirling in soft focus, warm saffron and gold hues',
    figureNumber: 'Fig. 06 / Ritual',
    caption: 'Ancient Sanskrit chants curling with aromatic sandalwood smoke around intertwined fingers.',
    filmStock: 'Kodak Ektachrome E100',
    camera: 'Mamiya 7 II with 80mm f/4'
  },
  {
    id: 'vignette-7',
    title: 'The Cascading Train',
    location: 'Musée Rodin, Paris',
    category: 'Parisian Salons',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7kQ-CaIyyTGxnscGYRAb0BPu9ZihLnHP48UtBXG8mPrWLhQ3lzgS6lvsIwOjzyJ3j9LZTi8-PKmEcPc22lfg5XQqez4ba2o-pOrRWZRlvsf9lnscwqLdcAd2waAfwNafSoqt9729Shia44isgBOySJkpfo61ABRFU1O4FSKa2JAmElzW2En3to01mhdUPlTM1pJRVT29HwjPxn1mQHt7Gz6qV0M1C5fJSmgAqWoU5-zl9n9x29drUNQ',
    altText: 'Detailed couture shot of an intricate hand-embroidered wedding train cascading down grand marble museum steps, exquisite craftsmanship',
    figureNumber: 'Fig. 07 / Haute Couture',
    caption: 'Bespoke hand-appliqué silk organza descending Carrara marble staircase.',
    filmStock: 'Kodak Portra 400',
    camera: 'Leica M11'
  },
  {
    id: 'vignette-9',
    title: 'Showers of Damask Petals',
    location: 'Villa Cimbrone, Ravello',
    category: 'Como & Amalfi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTThc2YUMnkxw5qNm65RTl9mYtgtDXfN7b0vpwJer8mXH1YHT_3sXcwvvu6OgoIqHuuL-Xy71F65T8gvy3GTQoX8sVHXW8bZ6IzZas2G4ccJStcn19G71_6FgH2fAjB8mbj9AeyD4jFAbgRAO_Kpz0LwgpJqQWxph2PuD0PrJQfjdwoGuGZBU11JYLfKdrVecdFWvVsBPtN3BDPFX34wgM7hozHJCyuDskvM6LEgUXEGZVPoQaQo-kEA',
    altText: 'Euphoric open-air celebration with guests showering colorful rose petals on the dancing couple under fireworks, high shutter speed capturing petals in mid-air',
    figureNumber: 'Fig. 08 / Euphoria',
    caption: 'A frozen tempest of heirloom rose petals caught suspended against midnight sparklers.',
    filmStock: 'Cinestill 800T',
    camera: 'Arri Alexa Mini LF (Still Capture)'
  },
  {
    id: 'vignette-10',
    title: 'The Procession of Drums',
    location: 'Samode Palace, Rajasthan',
    category: 'Rajasthan Palaces',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_HUnTbjdqlyWd-Y5J-kKK-3Yp59gWRQ_1TsrErFfbmF7Bh8Iy-NjsPJUP9NfPVF2KmTY5VentoJ03WeMyfTsen9m2vRVz4C-5rBlsz2pxWOCEDWIzApwVygYPxrwWFSAvxIWlmXQLaRDYgfstKge6j4N0E1eQ4JwJ0AIlPLSuPKsaao32Pe2B1ZiHuecr86d0z0Cu3P3kbXM4XT-L_srcWaERS31L3rbJys9oB9yRWddnzlRJBK1GEA',
    altText: 'Royal procession entrance with groom and bride dressed in ivory and blush couture garments, grand palace archway background',
    figureNumber: 'Fig. 09 / Ceremony',
    caption: 'Dappled palace lanterns illuminate ivory raw silk and ceremonial silver trumpets.',
    filmStock: 'Kodak Portra 800',
    camera: 'Contax 645'
  },
  {
    id: 'vignette-11',
    title: 'Chandelier Noir',
    location: 'Hôtel de Crillon, Paris',
    category: 'Monochrome',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnIkdSeR1tpgiy3whDyIgVrIx_lwy59F1-l33zOE0dr2zEj35Hv9kkvqBk7Ngil-1x8oinf0rXieY1lvFVWUvkM64hPr2CDI-v81Hk02JtREpKLPvuDlowfkWh7C5_S4KwoacZOu6WwT1n7ZNqJmqmzn26HPJpmf9AwMCovdZ7inSwUaifE2ksrLWj8FMmn1t_3vcn3hmYjugxpJBkyboOES4jBsMF-3rFuoKZKtFRCVg_3x0MswrYeg',
    altText: 'Intimate tender embrace between bride and groom holding crystal glass under chandelier glow, black and white fine art film grain',
    figureNumber: 'Fig. 10 / Glamour',
    caption: 'Midnight Baccarat crystal reflections whispering across silk lapels.',
    filmStock: 'Ilford Delta 3200',
    camera: 'Leica MP Analog Rangefinder'
  },
  {
    id: 'vignette-12',
    title: 'The Lace Veil Canopy',
    location: 'Villa Ephrussi de Rothschild, Cap Ferrat',
    category: 'Analog 35mm',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgBUdjbTWMBeFGS3yGFxMdFInYKJ14G7YFcHFhLIGLKbycSFFd-ouNbIRGMTnkr0vGxDZC09PQ0Ez21NEZmzsophVrnMg9zqf7MV4VUEMp9A_HoP9e18dYcepQb-gB-STJ__uN31WRa87MaO96jQhPIfYznWDDvW5NFLjQVs1MbtbsOp8wEaQ_vuc8fgWoaTQkeXAFiT-H2oPQHNOubK4nDUWh5uomMKeESEVLs3FESSc1NamsYvRyOw',
    altText: 'Gentle forehead kiss under vintage lace canopy, soft focus bokeh, warm beige and sepia film tones',
    figureNumber: 'Fig. 11 / Nuance',
    caption: 'Tender forehead reverence framed by antique Chantilly needlework.',
    filmStock: 'Kodak Gold 200',
    camera: 'Canon AE-1 Program'
  },
  {
    id: 'vignette-13',
    title: 'Guard of Honor',
    location: 'Umaid Bhawan Palace, Jodhpur',
    category: 'Rajasthan Palaces',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF90A55WfbngrGEttjLhJO7KMpb2PIZfNzL1VHmoNHu4ZvO3J6e69pe4n-ci-pZytkfQ6rsVE49hiccUfHGGXYJ1_V6u6Rx4lYK1dGF2vlAfvu07eJvMFt14aE15J3fAXPr3VgQCTPp3aNKKRazRlHW-qlPupVm-dBVEnyk4pFMhaAJjKHf7mmwuJb46NDIG9xxRC9XZTsNXqUFZJLUIkpKDgLaKBfqhSYq6nsR25OGzSQmmHtxJxj5Q',
    altText: 'Majestic bridal couple walking across palace courtyard flanked by traditional guards and ceremonial flags, golden hour long shadows',
    figureNumber: 'Fig. 12 / Grandeur',
    caption: 'Golden hour sandstone shadows stretching across historic palatial ramparts.',
    filmStock: 'Kodak Portra 400',
    camera: 'Hasselblad H6D-100c'
  },
  {
    id: 'vignette-14',
    title: 'La Dolce Vita Getaway',
    location: 'Positano, Amalfi Coast',
    category: 'Como & Amalfi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCatfiXPON5o7gy-gZHv6kz7pD_KbpJNUBDp-AlRL6BOKq1hVExtos9nQWl4uOCw1b3sb8HodxyrdPjWsHxKAPpn8o52ZWpitqE6HylCUjyTCZcGF1oxOlSjTn1W8YSOd0YSHs_HvYQcoDNlf1PXSfb305_3MELbG15HL9OrWc74GE3O_P6w7WM_420AfKjkR8V0pRZXOjGmaVNrXczf7WqdHFwQPF1yOQPgQH-UpULZksMgjnIXj4CLg',
    altText: 'Spontaneous joyful laughing portrait of couple seated closely together in convertible vintage sports car, wind in bride hair',
    figureNumber: 'Fig. 13 / Spontaneity',
    caption: 'Wind-whipped veil and spontaneous euphoria inside a vintage Alfa Romeo Spider.',
    filmStock: 'Kodak Portra 800',
    camera: 'Leica M6 35mm'
  },
  {
    id: 'vignette-15',
    title: 'The Aquarama Stanza',
    location: 'Lake Como, Northern Italy',
    category: 'Como & Amalfi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6vqwbR808KW92RE789swFvu6N712gJSDldYg81q2DkTd1kqET7FdHb9OzJ9Bf3_XaicRIgF-GEVlh5o1_VsKcop-wUHXfckLP28yCEXc2HlotSMGPAWWDHD6qWcUtrRZNK1XWlssek6DUbvx3-wSTpMRsbGenCB-EUVLBCDm1T920RT2Bd2BZnGNOiOxWftNd3APLIc6wn7_Pi25-f0Xjx1NHBZ-g4zEQhpLstc6-TwEkVHZTlka9IQ',
    altText: 'Bride standing gracefully on classic wooden Riva boat speeding across Lake Como water, mountains in mist, cinematic fine art portrait',
    figureNumber: 'Fig. 14 / Celluloid Horizon',
    caption: 'Standing aboard mahogany Riva Aquarama as alpine mist envelops Bellagio.',
    filmStock: 'Super 16mm Kodak Vision3 250D',
    camera: 'Arriflex 416 Super 16'
  }
];

export const STORIES_DATA: LoveStory[] = [
  {
    id: 'alia-julian',
    couple: 'Alia & Julian',
    subtitle: 'An Alpine & Florentine Odyssey',
    location: 'Villa Balbiano & Bellagio, Lake Como',
    date: 'August 8, 2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw8YbrABqe6BahwiMZPNnQXwHblOYblr1vreK1emysv5SYXIr-IOgtB8J6vFQFdB5YfcNicE6faHUnY55THYI2jJ3uIVifBJjH905YjSFrNUvzzH_YexEVcimpbxn5FehFcX9C1iPg03R-dzX8TZrAyyZGCvkxQQwI6cNzQYDYIpS71NPPnsmgedfTu_VL7_I6ezsQkHZUupEXaP4vRfu0vUWzCR2w1ajKZ5QA0PoY7Tu5ICDntUokYQ',
    altText: 'Celebrated wedding couple sharing an emotional candid laugh during golden hour ceremony, delicate silk ivory sherwani and lehenga with natural light rays',
    teaser: 'Spanning three days across Villa Balbiano and Bellagio, this documentation focused on atmospheric light, intimate familial moments, and an unhurried editorial flow with 16mm analog reels.',
    fullStory: `Alia and Julian envisioned their celebration not as a hurried spectacle, but as an intimate communion of heritage and alpine tranquility. Over three sun-bleached August days, forty of their closest relations gathered on the western shores of Lake Como.

From dawn sessions on a vintage mahogany Riva speeding across misted coves to the candlelit banquet within Villa Balbiano's historic salons, our atelier captured every sigh and spontaneous laughter on 16mm celluloid and large-format black-and-white negatives.`,
    framesCount: 72,
    featured: true,
    filmFormat: 'Super 16mm Kodak Vision3 + 4K Cinema',
    quote: 'Sign by Nanthu did not make us pose for a single minute; they revealed our connection exactly as it breathed.',
    palette: ['#F9F7F2', '#A39274', '#1B1C19', '#6C5C3F'],
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp4wQiN-dAq-KRwzHT_lP_3gC2JMA7HTToCdPjU0d-QJsIO0NUT4DpU7S734W9YvAKVYnJS8fmZKYiQ_qM_VM3x9KkYhvCG_uoJXd_d3aQxyQtjidVswOXYBggtS2wOhvNuMc890QYGMcynuTn7uL9wZEi66F2gwCE0tlJQc6lwJNullaqphrD0bKj8qscFHvNMqeWqp8DdOf5UlbdbqYNB8Id-cZFEObAplhCSXw6-pGm3b9DjlKmSw',
        caption: 'Lakeside vows framed by alpine cliffs and stone balustrades.',
        alt: 'Lakeside couple at Lake Como'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6vqwbR808KW92RE789swFvu6N712gJSDldYg81q2DkTd1kqET7FdHb9OzJ9Bf3_XaicRIgF-GEVlh5o1_VsKcop-wUHXfckLP28yCEXc2HlotSMGPAWWDHD6qWcUtrRZNK1XWlssek6DUbvx3-wSTpMRsbGenCB-EUVLBCDm1T920RT2Bd2BZnGNOiOxWftNd3APLIc6wn7_Pi25-f0Xjx1NHBZ-g4zEQhpLstc6-TwEkVHZTlka9IQ',
        caption: 'The breeze across Bellagio waters during the golden hour excursion.',
        alt: 'Bride on vintage wooden boat'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD499CLzQAmAvh8b2qU9141QP_Rc39GVon54FhWO7gppfFW0_AEtLbPlasIb6Z4k5Ud2xGWziSoNVZdX2RXrOrPbPoaZnFcQcSJ2P6FnHAp9oRS8syEAwqbIGsbpre3iXXc4bpfIfNCG3rwnnEYu2WNtCtYvJsxom6GzOjdGSGN1tF-v1h3Hua-rWaZdzNurZRH9tgD3AKO5wSm7nON1PCL0HtLpFBr4mAD5lmlATnyjTGNOVC4v6sKQQ',
        caption: 'Cocktail hour laughter caught on medium format negative.',
        alt: 'Candid wedding portrait'
      }
    ]
  },
  {
    id: 'camilla-arthur',
    couple: 'Camilla & Arthur',
    subtitle: 'Under the Tuscan Olive Groves',
    location: 'Borgo Santo Pietro, Tuscany',
    date: 'May 14, 2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHpsJ0EZcGb_DyAsMeXhZk3s4NX045mV0tJxm_W2UVc4N2k869ymL592HEY5-58HtpQS_2eKH4XdOZRKq1WIXUB5PrdNuIg_zhXAN4T526E6BtHaHU_KJOxxrvYpufgJTY7wre036503gL3kJHWREwxkSrH1nEQQ7a5dh9BhRYrzgwjrskG4XZw_sXyGwfw2IQiAoDCbiMWxZaj5QEozZuYTA-8MUfUDfBpPQmLkgb-cmc3aDIxKdC7w',
    altText: 'Tuscan wedding guests cheering as bride in modern column gown and groom in black tuxedo walk down aisle flanked by olive trees',
    teaser: 'A modern minimalist column gown juxtaposed against ancient stone estates, featuring acoustic cello serenades and long candlelit cypress tables.',
    fullStory: `Set in the secluded vales of Chiusdino, Camilla and Arthur created an immersive sensory reverie for their guests. We documented the transition from the humid fragrance of Tuscan wild rosemary in the morning mist to the roaring bonfires beneath starry Tuscan skies.`,
    framesCount: 54,
    filmFormat: 'Kodak Portra 400 & Arri Alexa LF',
    quote: 'The photographs look like a collection of museum stills rather than a wedding album.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfYEJzf52zsntAEagArEcUf8GvMmtQ55N383nT0t0nKwK8VO3Zf1Bix832xDlJTKUTbDvP47bnu7i5gFlxQi_AVKiXtwR_S7slnEZTL0EbdpEHjUlQN0-zoSRf2nwDN80txww1-i6EDCJ3cII1QCZyz8gYNxtRlUWI-eVP-mc1mnzJnqv2bNY7u6F6Rh80E2mHvHKXMFlO1Rf24igQuq7i06f0_oUAsHf1Une3EGv7XEcgSBeCVdh-kQ',
        caption: 'Walking hand in hand through centuries-old Roman arches.',
        alt: 'Couple in Tuscan stone cloister'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb3rvbR23NfSD0VQWUEnMsJNXl2CanQr0pZVYnnlwD9yBcP5aMMgzJ52vUx4xVf5AxDVvSujl0aMxSb-YJCFxKA7RSu29iGiDwOnA6IPemZIzAybhMIZppsUI-AVSRzqbr1LFM3yXcMws4Dkk4Y3W_oV384XWBEr_bUCoosZwpJqehDHKo6skG_t-lgkB7WC7yWnYHpdbff_7Y0icmg6L2I9J42Zh_KGRa3CKdUp9yB9C8svwNDDXNng',
        caption: 'Quiet unscripted tears during the pre-ceremony blessing.',
        alt: 'Intimate emotional embrace'
      }
    ]
  },
  {
    id: 'reva-zach',
    couple: 'Reva & Zach',
    subtitle: 'Sandstone Frescoes & Midnight Sitar',
    location: 'Samode Palace, Jaipur',
    date: 'October 7, 2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYhdYedqMtTAe0jZl6J-NTv5YwSR5S6q3rZMebaLmvt6xTCG1eSqrVFUkNpp91ocEQT7D1rkM_JN709FYVjDbTgMAq1XbHFpATeDqf_dfgIYna6oc8oa6U68ZxxBm9Wd0kN0gjafHmm-DijoluETjhsz50-PIEX0UT8W89_F2RI9JQ9twkUZy2aDBICkHRhGZJyr4-Lk9dkoi2OQELzhECC71j4zmy966BJlZutdXRwvwB1NcpHdVWXw',
    altText: 'Bride leaning against heritage pink sandstone wall adorned with cascading bougainvillea in royal palace courtyard, regal fine art portrait',
    teaser: 'Heritage Indian splendor reimagined through an understated high-fashion lens. Hand-embroidered silk zardozi, candle-strewn courtyards, and midnight fireworks.',
    fullStory: `In the 400-year-old painted corridors of Samode Palace, Reva and Zach merged cosmopolitan New York sensibility with deep ancestral royalty. We documented both the seismic joy of the baraat and the breathtaking silence of the morning mirror palace portraits.`,
    framesCount: 88,
    filmFormat: 'Kodak Vision3 500T 16mm & Leica M Rangefinder',
    quote: 'They captured the royal scale without ever missing the soft, delicate glances between us.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOEliaUVa-jYWUxvcGPf_omyJ7FfQYjDJyb9HRcZRlfTOZmdi3RiX0mGPeLgxDrhG5p3NAPiSZ21oGsV9YMo1zOFOoNRQSq7X5VGBvhAMN7KPljQUGRDolVCYN_5ZB8SMCBX0F_ktji4NMsd5JVXf3lY-qwHYQ_RUqgIlGDg0WsfZWXC2biVS2iW_k1mGaMdGHhNYlgRbrnNRbDVTfnZfs3foOhXOyIqncgJjndl1ibRxh-o18TQhJ7Q',
        caption: 'Regal bridal portrait in the morning salon.',
        alt: 'Bride in emerald and silk'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF90A55WfbngrGEttjLhJO7KMpb2PIZfNzL1VHmoNHu4ZvO3J6e69pe4n-ci-pZytkfQ6rsVE49hiccUfHGGXYJ1_V6u6Rx4lYK1dGF2vlAfvu07eJvMFt14aE15J3fAXPr3VgQCTPp3aNKKRazRlHW-qlPupVm-dBVEnyk4pFMhaAJjKHf7mmwuJb46NDIG9xxRC9XZTsNXqUFZJLUIkpKDgLaKBfqhSYq6nsR25OGzSQmmHtxJxj5Q',
        caption: 'The ceremonial procession stepping into golden evening sunlight.',
        alt: 'Palace wedding courtyard procession'
      }
    ]
  },
  {
    id: 'solene-jean-luc',
    couple: 'Solene & Jean-Luc',
    subtitle: 'Riviera Twilight & Sea Salt Breeze',
    location: 'Hôtel du Cap-Eden-Roc, Antibes',
    date: 'August 25, 2024',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DsJG0PYKaGFyABzo2rFZUtmK5xThurN7A33uyNQuBfC-zKGfSdGjOQ_kwr2PuXjOzfNTwT92rifLBTnTzi39E0b2Z9fW15ZEe_UbisJ3Iug7YgT7NVSgVPdbO5I_5zeNz_wUsphgdOMxFIWRM4uOghDnd6z3_7V8V4RuGOxXS9P4vIBBgLQ2wmDAJqidsc1uN3m270RoZ27SjxwC1QNUdVsYNT0_ZMPC5GDkwrq4KD1l6CYNNXU4yQ',
    altText: 'Couple standing on colonial veranda overlooking tropical sea at twilight, bride in backless silk crepe gown, sleek minimalist editorial',
    teaser: 'Backless silk crepe, champagne flowing into crystal coupes overlooking the Mediterranean limestone bluffs, and late-night jazz serenades under maritime pines.',
    fullStory: `Eden-Roc has long symbolized refined French seaside glamour. Solene and Jean-Luc chose to honour that heritage with black-tie minimalism. Every frame looks as though it was lifted from an unreleased 1960s Nouvelle Vague film print.`,
    framesCount: 65,
    filmFormat: 'Kodak Double-X Black & White + 35mm Tri-X',
    quote: 'Our film transports us straight back to the scent of pine trees and salt water.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnIkdSeR1tpgiy3whDyIgVrIx_lwy59F1-l33zOE0dr2zEj35Hv9kkvqBk7Ngil-1x8oinf0rXieY1lvFVWUvkM64hPr2CDI-v81Hk02JtREpKLPvuDlowfkWh7C5_S4KwoacZOu6WwT1n7ZNqJmqmzn26HPJpmf9AwMCovdZ7inSwUaifE2ksrLWj8FMmn1t_3vcn3hmYjugxpJBkyboOES4jBsMF-3rFuoKZKtFRCVg_3x0MswrYeg',
        caption: 'Champagne toast in the candlelit grand ballroom.',
        alt: 'Intimate champagne toast'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCatfiXPON5o7gy-gZHv6kz7pD_KbpJNUBDp-AlRL6BOKq1hVExtos9nQWl4uOCw1b3sb8HodxyrdPjWsHxKAPpn8o52ZWpitqE6HylCUjyTCZcGF1oxOlSjTn1W8YSOd0YSHs_HvYQcoDNlf1PXSfb305_3MELbG15HL9OrWc74GE3O_P6w7WM_420AfKjkR8V0pRZXOjGmaVNrXczf7WqdHFwQPF1yOQPgQH-UpULZksMgjnIXj4CLg',
        caption: 'Coastal drive into the dusk along the French cliffs.',
        alt: 'Vintage car getaway'
      }
    ]
  }
];

export const CINEMA_FILMS: CinemaFilm[] = [
  {
    id: 'film-1',
    title: 'Love In Second Innings',
    duration: '11:42',
    format: '4K Cinema • Arri Alexa LF',
    location: 'Mumbai & Scottish Highlands',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLEqOYVgme5szS-pmhPYmSXvBMjJY_GGtPU86hxXgNZg7-OwzLqBBc4wiK5jDDvwblQDEFte2g0Lt0yHjE4UQNGpkToGiagwjQ7wdQ60PP35xKKq9Q4mYFsCMHr3m4FNofJN-K8GpoVWCxCPeeqx1t8zqmFi4p9WxEN6Iea4YuEmFkRado1Fda7U7G7m9zXwuUMX3CzGafepradcs4WqdGq1R6_0F2Q9cDehFXdpOX5MClJ1qxhKPljA',
    altText: 'Cinematic still from wedding film showing bride in soft candlelight looking out arched French chateau window, moody film noir lighting, 35mm grain',
    summary: 'A quiet, heart-stirring examination of enduring devotion. Filmed between Mumbai and the Scottish Highlands.',
    logline: 'When two souls reconnect after a decade apart, their vows become a poetic testament to patient devotion.',
    directorNote: 'Shot predominantly on prime cinema lenses with available twilight and candlelight. We wanted the sound design to reflect the whistling winds of Glencoe balanced against classical Indian flute.',
    scoreCredit: 'Original Score performed by Prague Philharmonic Soloists',
    laurels: ['Cannes Indie Shorts - Best Wedding Doc', 'WedAwards 2024 - Film of the Year'],
    featured: true
  },
  {
    id: 'film-2',
    title: 'Twenty Years in the Making',
    duration: '14:20',
    format: 'Super 16 & Digital Master',
    location: 'Mallorca & London',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG6OXuZPkwQG-kO54AyoSN5tJqwMOmazDV18jQpHettCsYu9frTFhxhFIGeu3TWfRoNETT6rbV4ioiZaF9SZXldFIU3rqc1XASbzTqdUV4BSw-wCr3GdRzxfYNO80fZF1AKPt_lFVxRfD4ZIVdaSJr92dZnLFelh2fM610MliGSBqU5n61u9omUIfaDzOuQTmqp8p24OcL_0MbaBLsZytf-jDEE3vmvmfe1IAF1YkSiRMT7K2DB2GukA',
    altText: 'Cinematic frame of two lovers laughing in the spray of waterfall in Mallorca during dusk, vibrant golden cinematic color grading, motion blur',
    summary: 'Childhood companions uniting across two continents. An orchestral score woven with intimate voice recordings.',
    logline: 'Childhood pen-pals whose bond weathered two decades of physical distance exchange vows on Mallorca clifftops.',
    directorNote: 'A hybrid celluloid work utilizing 16mm Bolex cameras alongside modern large-format digital sensors for tactile warmth.',
    scoreCredit: 'Recorded live at Abbey Road Studio Two',
    laurels: ['Platinum Film Club - Direction Gold', 'International Guild - Cinematography Winner'],
    featured: true
  },
  {
    id: 'film-3',
    title: 'Dunes of Starlight',
    duration: '09:15',
    format: '35mm Celluloid & Anamorphic',
    location: 'Jaisalmer, Thar Desert',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb3KHjKvXKow_201p8zhaAPYDxvAsGIr3baUfqNw-USrM-fTidwTOyT73-MB72y6pSvrFmaqZkcgT49T10voBXCwo830I7IN_I9sFAZOsZuaU7FNM6qDFGrgzZf1s9Nqsx8soezPaCPg3qkRimnEpNVZ_zcjcVOmzR1-byJzXStzTrOVToGIl-q2yGqkrNXdMbl-cHDAcXB0XQHBM30qWYPTOh98ADdkfwHz4Ztlz2DNnPPgzreLxeCA',
    altText: 'Film still of bride and groom walking on sand dunes under desert starlight, dramatic cinematic lighting',
    summary: 'Tanya & Dan exchange private vows under the galactic dome of the Great Thar Desert.',
    logline: 'A silent escape into the desert dunes at sunset before three days of royal Rajasthani festivity.',
    directorNote: 'Night scenes illuminated purely by custom bronze oil lamps and starlight.',
    scoreCredit: 'Manganiyar folk chorus recorded under the stars',
    laurels: ['Best Night Cinematography Award']
  },
  {
    id: 'film-4',
    title: 'Lavender & Sunstone',
    duration: '12:40',
    format: 'Super 16mm Analog Reel',
    location: 'Luberon Valley, Provence',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-q3Z17XWNQMSAf322Y10ntORHg17S--j-z5lxY8tCDLnSbNGqvoqAl7O6dqpsD7x_b1s2rKfpt-0UyjI_fPtU5NHjsEu0Dl6zLegiE3hKfjydh4Zbe0yMuOBWDvsS4kMUjAVG_fLqsMvsWbgZf7zUhLhsSYkC0uR-IMxfzLrCrH18vVvooti4GjLIubKw86qcwXHRxFjbeB0q4OwuqJB1HxWvQQa9xL4gZNcdkNlk4X71Ex3DcQ2MAQ',
    altText: 'Couple dancing in candlelit stone wine cellar in France, warm amber tones and rich shadows',
    summary: 'Alisha & Rahul bring family together across stone wine cellars and lavender hillsides.',
    logline: 'An intoxicating blend of rustic French terroir and vibrant cross-cultural celebrations.',
    directorNote: 'Over 12 rolls of Kodak 50D daylight stock exposed under gentle Provençal sun.',
    scoreCredit: 'Acoustic nylon guitar & cello duet',
    laurels: ['Fine Art Cinema Gold Medal']
  },
  {
    id: 'film-5',
    title: 'Serenissima Echo',
    duration: '08:50',
    format: '4K HDR Cinema',
    location: 'Grand Canal & Torcello, Venice',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW3lsPYx1X6XBvy_ALcOka3bxDoDj88MbFxexbGO3rSsWkIc9kjWhSs_NAahqYODE52bVGXVupXaiEOBSM_JanhF0PoqrJADqr4HAalmnfQA3iOyAixnwjL1vJmST0qelYth8JVyyRFc6Y2d6Lt3FStjaBc5YD2eTvv39IZaq3G9W2dHNLHfTPAK92rtVVedngVBhLFD5Fuow8ApRFCuNRDL9jemhV_qmB9DNy2YB_1SuvW3Wf-cKdRg',
    altText: 'Bride resting head on groom shoulder inside classic Venetian water taxi, misty Venice Grand Canal',
    summary: 'Saloni & Sid drift along Venetian canals before an intimate dinner inside a 14th-century palazzo.',
    logline: 'The quiet beauty of Venice at dawn captured before the world wakes.',
    directorNote: 'Shot from a moving wooden water taxi utilizing stabilization and vintage Leica R primes.',
    scoreCredit: 'Solo grand piano by Matteo Rossi',
    laurels: ['Venice Visual Arts Laureate']
  },
  {
    id: 'film-6',
    title: 'The Temple Garden at Dawn',
    duration: '10:05',
    format: 'Super 16mm & Monochromatic Stills',
    location: 'Kyoto, Japan',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWRrOTxvRFJKF6erW1cSp_dM-qWAqEC5MoNBXQ_cT4UKYA4My1PUuKGYwYcDKd9saytxLQYvYA4VS28LgNPOKO5nqqAjFQ1yDVsB1GUfWD_w3jKZEKlaGn9_wKZFkf0eaKYnBCHmvvZQOKEwK5Ft0Pc9zQN2qm8dhU57wM4E8UdNheYAd3D067IUy0Ji180hzwMaoQP9wWznwiIjHWBzuuJEtCZg77tDa4AIY4GvDXjQO0-CJmQlikJw',
    altText: 'Intimate morning vow exchange in Kyoto wooden temple garden with falling cherry blossoms',
    summary: 'Zina & Zain seal their private vows amidst morning cedar mist and blooming sakura.',
    logline: 'Minimalist vows in a 600-year-old Zen garden framed by centuries of stillness.',
    directorNote: 'Deliberate, meditative camera pacing prioritizing natural ambient soundscapes.',
    scoreCredit: 'Koto, Shakuhachi and ambient field recordings',
    laurels: ['Asian Film Culture Award']
  }
];

export const EDITORIAL_PRESS: EditorialPress[] = [
  {
    id: 'press-1',
    publication: 'VOGUE',
    headline: 'The New Wave of Celluloid Wedding Cinema',
    issue: 'Fall Haute Edition',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_PU0lqWXSaZrgc5PzLYSkMYtgtDfj1zPj94qlW0a-5KZHvX9cDoH4pDU5bIqaQwIisfg8--xvCZZgYCrzpNBYzy97NfxYAw5VirG_Pu70_mz-LK1Jq9LMYC24NUahjtXWNt6wGi6dFSpgyc91Smo7TqlIc6AY8L7PE4yYhc_moMN6VNDPHwG0-cRpug5QEWnOt3izDN6HKwAHiSaFXPVX1PK_JdOwCabvwdScgG-DokKQGQCR3SBVg',
    altText: 'Editorial magazine cover featuring Sign by Nanthu wedding bride against historic architectural palace backdrop with Vogue typography',
    excerpt: 'Sign by Nanthu Studio is leading a renaissance in wedding documentation, blending the raw grain of 16mm film with unscripted modern romance.'
  },
  {
    id: 'press-2',
    publication: 'BRIDES',
    headline: 'Top Destination Cinematographers in the World',
    issue: 'Annual Icons List',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfFzntJnzUnGHbD4fUqHJUlMQu1tneZ_Qm3UeWm9v7KsL4l1sfSV-yieMwSzPwR-6QWt4dpkPGEXG62dcLgiHH1H9sWyAeuyjTL_qo2wgIs7UcZiC6slJzIrWzkkWckDjwkMWENhM28BXzkdzBJAjZjNidScEOgDl3925DsG7dYUV7JiszMP1RzkkWMDfrt3jF_HoP5721ICTcIkR3SPEHMZBF5iZAtIJuUCs6trMIZRD0diiC9cAWsw',
    altText: 'Luxury magazine cover showing high-fashion bride and groom in vintage Italian villa garden setting with Brides headline',
    excerpt: 'Their films do not look like weddings; they look like award-winning European art cinema you want to watch again and again.'
  },
  {
    id: 'press-3',
    publication: 'THE PEACOCK MAGAZINE',
    headline: 'Haute Couture Nuptials: Samode Palace Special',
    issue: 'Heritage Collector Issue',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5uv9zdu_kYfi7dKiyN3hrGpTSf8iqs40sETRA-HPAzunHMNLyr60pwcgJxByFOFq49-iyQZszxPm-hdugICwogUkRQ8Ne3QsSSubCuC188LhM00rEJS7vYta-QleSRGEJmt7FVcFZIi_Z5qfTVFYevbI3pjK3DsD0KRg4crfwU-qC75uNo6-Ej5J79SDHnjy4c8q04vrNFnV0GKGYrWf1bEOyGNgQ-CidWjqOW1poVX8AoKlvg-a9RQ',
    altText: 'Magazine cover featuring couple in regal crimson couture attire with Peacock Magazine branding',
    excerpt: 'A masterful lens that respects the weight of ancestral customs while framing every scene with Parisian editorial discretion.'
  },
  {
    id: 'press-4',
    publication: 'CONDÉ NAST TRAVELER',
    headline: 'The Ultimate Guide to Italian Villa Unions',
    issue: 'Luxury Escapes Edition',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0T8Cl3okm7FPBIsRehuUVw22TaOzDsDyDuATM_Dd6I0Upxe8SZSpBWhjofcj7wL8XpX_G9cAazXpsj3KtaU7A8pKgGsfmttVxS_Ocb9ud-nOtWYocYie9chf2Dqle8N4AB_h1BKwGWY5uXASkxyuJIknwadoxrKFN0NS4rXRvP9qpbqLu75dah0oHK9HckK_NNK0avPtVdJkEFldd_KylqJS1YIVrPrghM0dXuhFNgi0yCIjPc76d_g',
    altText: 'Travel luxury magazine cover showing Lake Como wedding celebration with Condé Nast Traveler aesthetic',
    excerpt: 'The go-to visual directors for Lake Como and Amalfi, creating timeless documents that outlive changing trends.'
  },
  {
    id: 'press-5',
    publication: 'ELLE WEDDINGS',
    headline: 'Veils, Silk & Spontaneity',
    issue: 'Spring Couture',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADc9HS7qQHAKurqR4kbDHCUlKS7LIygSjpqa5t0F5ybl6XaZk-V4hvXL_zGSmf2INoEPN_XAkRd5VB-uAYOt4TjC4NW4rNOaunl-fM135nLXyzkHmgQHqRqOgjO1--lC4jwkeaSMXSq2M5VMc7PqNONgbdbWC_VKjiQwzzUhaTEu0EJ8PixSuXZq-4JuzonJlkPuI2B-MahwTK3w8xpPrefR4s1rOxWYFF_e4qV80hjSpSHETOChhjFQ',
    altText: 'Fashion bridal spread cover featuring bride under delicate veil with Elle Weddings title plate',
    excerpt: 'In an era of generic video templates, Sign by Nanthu’s tactile film emulsion brings back the tactile majesty of true cinema.'
  },
  {
    id: 'press-6',
    publication: 'HARPER’S BAZAAR',
    headline: 'Artisans of the Heirlooms',
    issue: 'Summer Bride',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjn6yyb_twhUEvnzGb_AOnMGmuI32yiTHFYJDpp47pd3HDHbL_qY-hjnH04rpKQ-BlaEVW6JC8-lmvjYoJ55pd3sZ_mfoar7YneNDWU9pbF8P1vAWWNecG2CojOxF-V9a8VbtuVbBzdakZCi2IfVZVAxRj2FHh8jBk0zvW3mO2WzE9TNyxC1COoZ927SiW41ulHKHK5vlsxTLr4rky1n6Hhdygmlpj_KXACq-5azBWaLUMiMiCrJuEzA',
    altText: 'Fine art publication cover showcasing emotional couple close-up with Harper\'s Bazaar typography',
    excerpt: 'The studio’s quiet confidence and documentary restraint allow real emotion to take center stage.'
  }
];
