export type GalleryCategory = 'All' | 'Portraits' | 'Coffee & Cafes' | 'Outings' | 'Candid';

export interface GalleryPhoto {
  id: string;
  figure: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  moment: string;
  note: string;
  objectPosition?: 'center' | 'top';
  featured?: boolean;
}

export interface TimelineChapter {
  id: string;
  indexLabel: string;
  period: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  imageAlt: string;
  objectPosition?: 'center' | 'top';
  story: string[];
  whisper: string;
}

export interface LetterParagraph {
  id: string;
  text: string;
  marginNote?: {
    label: string;
    caption: string;
    image?: string;
    imageAlt?: string;
  };
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'doorway-white-shirt',
    figure: 'Fig. 01',
    src: '/assets/aistudio/photo_6323182331170067447_y_fa9eecc4.jpg',
    alt: 'Kit in a white satin button-down shirt standing beside a carved wooden doorway with a braided hairstyle',
    title: 'Stillness in the Doorway',
    category: 'Portraits',
    moment: 'Afternoon light · Carved teakwood',
    note: 'The quiet grace in how you glance away without trying—like time itself slowed down just to frame you in soft white silk.',
    objectPosition: 'top',
    featured: true,
  },
  {
    id: 'pagoda-crimson',
    figure: 'Fig. 02',
    src: '/assets/aistudio/photo_6323182331170067436_x_f9a72da9.jpg',
    alt: 'Kit wearing a deep crimson traditional top and floral longyi in front of carved white pagoda terraces',
    title: 'Crimson Against White Stone',
    category: 'Outings',
    moment: 'Golden sun · Pagoda terraces',
    note: 'You in deep red against sunlit white carvings. Every time I look at this photo, I remember how effortless beauty looks when it is simply you.',
    objectPosition: 'top',
    featured: true,
  },
  {
    id: 'district-coffee',
    figure: 'Fig. 03',
    src: '/assets/aistudio/photo_6323182331170067440_y_baddb08b.jpg',
    alt: 'Kit seated at The District Coffee Lounge holding an iced coffee under warm pendant lights',
    title: 'The District Coffee Lounge',
    category: 'Coffee & Cafes',
    moment: 'February 9, 2022 · Iced coffee',
    note: 'Even across a quiet table with an iced coffee in your hand, you are the only detail in the room my eyes ever remember.',
    objectPosition: 'center',
  },
  {
    id: 'story-cafe-red',
    figure: 'Fig. 04',
    src: '/assets/aistudio/photo_6323182331170067441_y_dc030277.jpg',
    alt: 'Kit taking a mirror selfie at Story Cafe in a red off-shoulder top with bright afternoon trees outside',
    title: 'Story Cafe Sunlight',
    category: 'Coffee & Cafes',
    moment: 'Midday window glare · Red off-shoulder',
    note: 'Sunlight spilling through glass, trees outside, and you catching a reflection that makes my whole week feel lighter.',
    objectPosition: 'top',
  },
  {
    id: 'concrete-linen',
    figure: 'Fig. 05',
    src: '/assets/aistudio/photo_6323182331170067439_y_c986c7c0.jpg',
    alt: 'Close portrait of Kit against a muted concrete wall wearing a soft beige linen shirt',
    title: 'Unfiltered Eyes',
    category: 'Portraits',
    moment: 'Quiet afternoon · Soft beige linen',
    note: 'No distraction, no pose—just your calm eyes looking right back. Whenever I miss you, this is the look I carry in my head.',
    objectPosition: 'top',
  },
  {
    id: 'garden-glasses',
    figure: 'Fig. 06',
    src: '/assets/aistudio/photo_6323182331170067443_y_dcebae43.jpg',
    alt: 'Kit outdoors among green trees wearing round clear-framed glasses, a patterned maroon top, and a side braid',
    title: 'Through Clear Frames',
    category: 'Portraits',
    moment: 'Garden shade · Braided hair & glasses',
    note: 'Your neat braid, the tiny star pendant, and that gentle side-glance through your glasses—small details I never stop adoring.',
    objectPosition: 'top',
  },
  {
    id: 'hallway-peace',
    figure: 'Fig. 07',
    src: '/assets/aistudio/photo_6323182331170067446_y_4aa22fc3.jpg',
    alt: 'Kit in a pale yellow hallway making a peace sign near her cheek with long dark hair',
    title: 'Yellow Corridor Candid',
    category: 'Candid',
    moment: 'Everyday afternoon · Quick snapshot',
    note: 'One of those unguarded, ordinary moments that somehow turns into a treasure simply because you are in it.',
    objectPosition: 'top',
  },
  {
    id: 'rocky-pout',
    figure: 'Fig. 08',
    src: '/assets/aistudio/photo_6323182331170067444_y_0cca213c.jpg',
    alt: 'Kit making a playful pout in front of weathered rock formations and hanging tree roots',
    title: 'A Little Pout by the Cliffs',
    category: 'Outings',
    moment: 'Trail walk · Limestone & roots',
    note: 'Even when you pull a tiny pout mid-walk, it makes me smile from across any distance.',
    objectPosition: 'top',
  },
  {
    id: 'cave-selfie',
    figure: 'Fig. 09',
    src: '/assets/aistudio/photo_6323182331170067442_y_0c8042f7.jpg',
    alt: 'Close selfie of Kit in front of a stone cave archway with wispy bangs',
    title: 'Before the Stone Arch',
    category: 'Outings',
    moment: 'Day trip · Cave steps',
    note: 'Cool stone behind you, soft wispy bangs, and that steady presence that turns every trip into a favorite memory.',
    objectPosition: 'top',
  },
  {
    id: 'yellow-overshirt-mirror',
    figure: 'Fig. 10',
    src: '/assets/aistudio/photo_6323182331170067445_y_106f4278.jpg',
    alt: 'Kit smiling softly in a mirror selfie wearing a pastel yellow overshirt with glasses clipped to her neckline',
    title: 'Pastel Yellow & Soft Smile',
    category: 'Candid',
    moment: 'Mirror glance · Glasses on collar',
    note: 'That small, warm half-smile you make when you catch yourself in the mirror—it softens every hard day I have ever had.',
    objectPosition: 'top',
  },
  {
    id: 'lace-garden-cafe',
    figure: 'Fig. 11',
    src: '/assets/aistudio/photo_6323182331170067437_y_37e4fc61.jpg',
    alt: 'Kit outdoors at a wooden garden cafe in a white lace top, lightly holding a lock of her hair',
    title: 'White Lace & Palms',
    category: 'Coffee & Cafes',
    moment: 'Warm breeze · Garden terrace',
    note: 'Palm leaves, warm sun on wooden beams, and you tucking your hair back while looking right at me.',
    objectPosition: 'top',
  },
  {
    id: 'car-ride-wink',
    figure: 'Fig. 12',
    src: '/assets/aistudio/photo_6323182331170067438_y_5b5169aa.jpg',
    alt: 'Playful selfie of Kit inside a car wearing a sage grey traditional top with pink frog-knot clasps',
    title: 'Wink on the Road',
    category: 'Candid',
    moment: 'Car window light · Sage traditional top',
    note: 'The playful side of you that makes me laugh out loud, even on days when all I can do is search through our old photos and miss you.',
    objectPosition: 'top',
  },
];

export const TIMELINE_CHAPTERS: TimelineChapter[] = [
  {
    id: 'nov-2018',
    indexLabel: '01',
    period: 'November 2018',
    shortLabel: 'Nov 2018',
    title: 'Where My Quiet Crush Began',
    subtitle: 'The month you walked into my heart and never left',
    location: 'November 2018',
    image: '/assets/aistudio/photo_6323182331170067447_y_fa9eecc4.jpg',
    imageAlt: 'Kit beside a carved wooden doorway in white silk',
    objectPosition: 'top',
    story: [
      'Everything started back in November 2018, the moment I began crushing on you. At first it felt like a quiet secret I kept tucked inside my chest—just noticing you, hoping to cross paths, and realizing that nobody else ever caught my attention the way you did.',
      'Months turned into years, and what began as a crush in November 2018 never faded for even a single week. It only grew deeper, steadier, and more certain.',
    ],
    whisper: 'From November 2018 onward, my heart quietly chose you and never looked elsewhere.',
  },
  {
    id: '2019-2021',
    indexLabel: '02',
    period: '2019 — 2021',
    shortLabel: '2019–21',
    title: 'Missing You & Searching For You Everywhere',
    subtitle: 'Loving you quietly through every season from afar',
    location: 'Quiet Days & Long Evenings',
    image: '/assets/aistudio/photo_6323182331170067439_y_c986c7c0.jpg',
    imageAlt: 'Close portrait of Kit in soft beige linen',
    objectPosition: 'top',
    story: [
      'Through all the quiet days in between, I missed you more than I knew how to say. I caught myself searching for you everywhere—checking for your updates, looking down familiar streets hoping to see you, and coming back to your photos whenever the day felt heavy.',
      'Even before I could hold your hand or hear those words from you, you were already the person my thoughts returned to first every morning and last every night.',
    ],
    whisper: 'Whenever a day felt too quiet, my eyes still instinctively searched for you.',
  },
  {
    id: '2022-2025',
    indexLabel: '03',
    period: '2022 — 2025',
    shortLabel: '2022–25',
    title: 'Holding Onto Every Glimpse of You',
    subtitle: 'Every iced coffee, sunlit outing, and candid smile kept close',
    location: 'Cafes, Sunlight & Little Moments',
    image: '/assets/aistudio/photo_6323182331170067440_y_baddb08b.jpg',
    imageAlt: 'Kit at The District Coffee Lounge holding iced coffee',
    objectPosition: 'center',
    story: [
      'Watching you grow through the years—sitting at The District Coffee Lounge with an iced coffee, catching afternoon sun at Story Cafe, wearing crimson silk against white pagoda stone—made me fall for you all over again in a hundred small ways.',
      'Every photograph of you became something precious to me, proof of how effortless, warm, and unforgettable you are.',
    ],
    whisper: 'Year after year, loving you never felt like waiting—it just felt like knowing.',
  },
  {
    id: 'aug-26-2026',
    indexLabel: '04',
    period: '26 August 2026',
    shortLabel: '26 Aug 2026',
    title: 'The Day You Said "Chit Tl"',
    subtitle: 'The very happiest day of my life, after nearly eight years of loving you',
    location: '26 Aug 2026 · Forever Remembered',
    image: '/assets/aistudio/photo_6323182331170067436_x_f9a72da9.jpg',
    imageAlt: 'Kit in deep crimson traditional dress at white pagoda terraces',
    objectPosition: 'top',
    story: [
      'On 26 August 2026, you said "chit tl"—and in one heartbeat, nearly eight years of crushing on you, missing you, and searching for you turned into the very happiest day of my entire life.',
      'I still cannot describe the rush of warmth and disbelief I felt hearing those two words from you. Everything I had quietly carried since November 2018 suddenly had an answer, and it was sweeter than anything I had ever dared to dream.',
    ],
    whisper: '26 Aug 2026 — the day "chit tl" made every single year since Nov 2018 worth it.',
  },
  {
    id: 'everyday',
    indexLabel: '05',
    period: 'Today & Every Day',
    shortLabel: 'Every Day',
    title: 'Expressing How Much You Mean Every Day',
    subtitle: 'Not just on special dates—every morning, every evening, every ordinary day',
    location: 'Always With You',
    image: '/assets/aistudio/photo_6323182331170067443_y_dcebae43.jpg',
    imageAlt: 'Kit in garden shade wearing glasses and a side braid',
    objectPosition: 'top',
    story: [
      'Now that I finally get to call you mine, I never want a single day to pass where you doubt how deeply you are loved. I still miss you the second we are apart, still search for your smile in every hour, and still look at you with the same wonder I felt back in November 2018.',
      'I want to spend every day ahead showing you—in quiet gestures and honest words—just how much you mean to me.',
    ],
    whisper: 'Since Nov 2018, happiest on 26 Aug 2026, and loving you more every single day.',
  },
];

export const LOVE_LETTER_PARAGRAPHS: LetterParagraph[] = [
  {
    id: 'p1',
    text: 'I still remember November 2018 like a doorway that never closed. That was when my quiet crush on you first began—gentle at the start, yet somehow strong enough to stay alive in my heart through nearly eight whole years. Back then, you might not have known how often you crossed my mind, or how carefully I held onto every small moment we shared, only knowing that no one else in the world ever felt quite like you.',
    marginNote: {
      label: 'November 2018',
      caption: 'Where a quiet crush took root and grew into the deepest love of my life.',
      image: '/assets/aistudio/photo_6323182331170067447_y_fa9eecc4.jpg',
      imageAlt: 'Kit beside carved wooden doorway',
    },
  },
  {
    id: 'p2',
    text: 'Through all the seasons that followed, missing you and searching for you became part of who I was. When you were not around, I searched for you in little ways without even thinking—looking for your name, scrolling back to your old photos late at night, noticing cafes and streets and wondering if you had walked past them too. Missing you was never something fleeting; it was the quiet proof of how deeply you already lived inside every corner of my days.',
  },
  {
    id: 'p3',
    text: 'And then came 26 August 2026—the very happiest day of my life. When you looked at me and said "chit tl," it felt as if all those years of hoping from afar, of missing you in silence and holding onto November 2018, suddenly bloomed all at once. Two soft words from you gave meaning to every patient day I had ever waited, and I will remember the exact feeling of 26 Aug 2026 for as long as I live.',
    marginNote: {
      label: '26 August 2026',
      caption: 'The happiest day of my life—the day you said "chit tl" (ချစ်တယ်).',
      image: '/assets/aistudio/photo_6323182331170067436_x_f9a72da9.jpg',
      imageAlt: 'Kit in red traditional dress by white pagoda terraces',
    },
  },
  {
    id: 'p4',
    text: 'I love every small, unguarded version of you—the half-serious peace sign in a pale yellow hallway, your calm eyes against a concrete wall, the way your glasses rest softly in garden shade, your playful pout beside rocky cliffs, your iced coffee moments, and your bright wink from a car seat. Every single side of you makes me fall a little harder, even after all this time.',
    marginNote: {
      label: 'In Every Detail',
      caption: 'Every candid glance and quiet smile I keep close whenever I miss you.',
      image: '/assets/aistudio/photo_6323182331170067445_y_106f4278.jpg',
      imageAlt: 'Kit smiling softly in pastel yellow overshirt',
    },
  },
  {
    id: 'p5',
    text: 'More than anything, Kit, I want you to feel how much you mean to me—not just on anniversaries or big milestones, but every ordinary day. I still miss you the moment we are apart, I still search for you in every room, and I am endlessly grateful that the girl I started crushing on in November 2018 is the very same girl who made 26 August 2026 the happiest day of my life. Chit tl—today, tomorrow, and every single day ahead.',
  },
];
