export type ZodiacSign = {
  name: string;
  symbol: string;
  element: string;
  dates: string;
  traits: string[];
};

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: "Aries", symbol: "♈", element: "Fire", dates: "Mar 21 – Apr 19", traits: ["Bold", "Ambitious", "Energetic"] },
  { name: "Taurus", symbol: "♉", element: "Earth", dates: "Apr 20 – May 20", traits: ["Reliable", "Patient", "Devoted"] },
  { name: "Gemini", symbol: "♊", element: "Air", dates: "May 21 – Jun 20", traits: ["Curious", "Adaptable", "Witty"] },
  { name: "Cancer", symbol: "♋", element: "Water", dates: "Jun 21 – Jul 22", traits: ["Intuitive", "Loyal", "Protective"] },
  { name: "Leo", symbol: "♌", element: "Fire", dates: "Jul 23 – Aug 22", traits: ["Confident", "Generous", "Creative"] },
  { name: "Virgo", symbol: "♍", element: "Earth", dates: "Aug 23 – Sep 22", traits: ["Analytical", "Practical", "Kind"] },
  { name: "Libra", symbol: "♎", element: "Air", dates: "Sep 23 – Oct 22", traits: ["Diplomatic", "Fair", "Social"] },
  { name: "Scorpio", symbol: "♏", element: "Water", dates: "Oct 23 – Nov 21", traits: ["Passionate", "Resourceful", "Brave"] },
  { name: "Sagittarius", symbol: "♐", element: "Fire", dates: "Nov 22 – Dec 21", traits: ["Optimistic", "Adventurous", "Honest"] },
  { name: "Capricorn", symbol: "♑", element: "Earth", dates: "Dec 22 – Jan 19", traits: ["Disciplined", "Responsible", "Ambitious"] },
  { name: "Aquarius", symbol: "♒", element: "Air", dates: "Jan 20 – Feb 18", traits: ["Progressive", "Original", "Independent"] },
  { name: "Pisces", symbol: "♓", element: "Water", dates: "Feb 19 – Mar 20", traits: ["Compassionate", "Artistic", "Intuitive"] },
];

export type HoroscopeResult = {
  sign: ZodiacSign;
  overall: string;
  love: string;
  career: string;
  health: string;
  luckyNumber: number;
  luckyColor: string;
  compatibility: string;
  mood: string;
  advice: string;
};

const OVERALL_READINGS = [
  "The stars align in your favor today. Unexpected opportunities may arise — stay open and trust your instincts.",
  "A period of reflection brings clarity. What seemed uncertain will soon make perfect sense.",
  "Cosmic energy surrounds you with warmth. Connections with others deepen and bring joy.",
  "The universe encourages bold action. Take that step you've been hesitating on.",
  "Patience is your greatest ally right now. Good things are brewing beneath the surface.",
  "Creative inspiration flows freely. Express yourself and let your unique light shine.",
  "Balance is key today. Find harmony between work and rest for optimal wellbeing.",
  "A surprise encounter could change your perspective. Stay curious and approachable.",
];

const LOVE_READINGS = [
  "Romance is in the air. Single? Someone intriguing may cross your path. Partnered? Deepen your bond with honest conversation.",
  "Your heart is open to new possibilities. Vulnerability leads to meaningful connections.",
  "Past misunderstandings clear up. Forgiveness and warmth restore harmony in relationships.",
  "Self-love radiates outward, attracting positive energy. Nurture yourself first.",
  "A small gesture of affection goes a long way today. Don't underestimate the power of kindness.",
  "Communication is your superpower in love right now. Speak from the heart.",
];

const CAREER_READINGS = [
  "Professional recognition is on the horizon. Your hard work hasn't gone unnoticed.",
  "A collaborative project brings success. Teamwork amplifies your individual strengths.",
  "Trust your expertise when making decisions. Others look to you for guidance.",
  "New skills you acquire now will pay dividends later. Invest in your growth.",
  "Networking opens doors you didn't know existed. Reach out to a mentor or colleague.",
  "Financial intuition is sharp. A wise choice today sets you up for future stability.",
];

const HEALTH_READINGS = [
  "Prioritize rest and hydration. Your body is asking for gentle care.",
  "Outdoor activity boosts your energy and mood. Take a walk under the open sky.",
  "Mindfulness practices bring peace. Even five minutes of meditation makes a difference.",
  "Listen to your body's signals. Small adjustments to routine yield big results.",
  "Social connection supports your mental health. Spend time with people who uplift you.",
  "Creative expression is therapeutic. Channel emotions through art, music, or writing.",
];

const LUCKY_COLORS = [
  "Cosmic Purple", "Stellar Gold", "Midnight Blue", "Rose Quartz",
  "Emerald Green", "Sunset Orange", "Silver Moon", "Celestial White",
];

const MOODS = [
  "Radiant ✨", "Contemplative 🌙", "Adventurous 🚀", "Peaceful 🕊️",
  "Passionate 🔥", "Inspired 💫", "Grounded 🌿", "Playful 🎭",
];

const ADVICE = [
  "Trust the timing of your life. Everything unfolds as it should.",
  "Say yes to something that scares you — growth lives outside comfort zones.",
  "Gratitude transforms ordinary moments into blessings.",
  "Your intuition is louder than doubt. Listen closely.",
  "Small consistent steps beat grand sporadic efforts.",
  "Be the energy you want to attract.",
  "Let go of what no longer serves your highest good.",
  "The universe rewards those who show up authentically.",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getZodiacSign(month: number, day: number): ZodiacSign {
  const ranges: [number, number, number, number, number][] = [
    [1, 20, 2, 18, 10], [2, 19, 3, 20, 11], [3, 21, 4, 19, 0],
    [4, 20, 5, 20, 1], [5, 21, 6, 20, 2], [6, 21, 7, 22, 3],
    [7, 23, 8, 22, 4], [8, 23, 9, 22, 5], [9, 23, 10, 22, 6],
    [10, 23, 11, 21, 7], [11, 22, 12, 21, 8], [12, 22, 1, 19, 9],
  ];

  for (const [sm, sd, em, ed, idx] of ranges) {
    if (
      (month === sm && day >= sd) ||
      (month === em && day <= ed) ||
      (sm > em && (month === sm && day >= sd || month === em && day <= ed))
    ) {
      return ZODIAC_SIGNS[idx];
    }
  }

  return ZODIAC_SIGNS[9];
}

export function generateHoroscope(sign: ZodiacSign): HoroscopeResult {
  const otherSigns = ZODIAC_SIGNS.filter((s) => s.name !== sign.name);
  const compatible = pickRandom(otherSigns);

  return {
    sign,
    overall: pickRandom(OVERALL_READINGS),
    love: pickRandom(LOVE_READINGS),
    career: pickRandom(CAREER_READINGS),
    health: pickRandom(HEALTH_READINGS),
    luckyNumber: Math.floor(Math.random() * 99) + 1,
    luckyColor: pickRandom(LUCKY_COLORS),
    compatibility: `${compatible.symbol} ${compatible.name}`,
    mood: pickRandom(MOODS),
    advice: pickRandom(ADVICE),
  };
}
