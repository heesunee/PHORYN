export const STEPS = [
  'ENERGY',
  'NOW_FEELING',
  'STRESS',
  'FEELING',
  'CONSIDER',
  'WORKING',
  'CONDITION',
  'DIFFICULT',
  'CONTROL',
  'NEEDS',
] as const;

interface ScoreTypes {
  title: string;
  img: string;
  sub: string[];
}

export const SCORE_INFO: Record<number, ScoreTypes> = {
  1: {
    title: '알파 상태',
    img: '/logo_img.png',
    sub: [
      '아주 편안하고 안정적인 상태예요!',
      '명상할 때나 자연 속에서 바람을 느낄 때처럼, 생각이 가볍고 마음이 차분한 상태예요.',
      '창의적인 아이디어도 이런 때에 많이 떠올라요.',
    ],
  },
  2: {
    title: '알파와 베타 중간 상태',
    img: '/logo_img.png',
    sub: [
      '집중력이 필요한 순간에도 마음이 비교적 편안한 상태예요.',
      '업무나 공부에 몰입할 수 있지만, 동시에 긴장감이 과하지 않아 안정적이에요.',
      '생각이 정리되면서도 여유가 있어 창의적인 발상으로 이어질 수 있어요.',
    ],
  },
  3: {
    title: '베타 상태',
    img: '/logo_img.png',
    sub: [
      '회의 중 아이디어가 잘 떠오르거나, 책을 읽을 때 술술 이해되는 것처럼 집중력이 좋은 상태예요.',
      '하지만 잔잔한 긴장으로 인한 스트레스가 지속될 수 있어요.',
      '쉽게 피로가 쌓일 수 있으니 휴식도 잊지 마세요.',
    ],
  },
  4: {
    title: '베타와 감마 중간 상태',
    img: '/logo_img.png',
    sub: [
      '집중도가 높은 상태지만, 마음 한켠엔 긴장감이 남아 있는 상태예요.',
      '마치 중요한 일을 하면서도 계속 주변을 신경 쓰는 느낌이죠.',
      '차분함과 활기를 적절히 섞어주는 게 좋아요.',
    ],
  },
  5: {
    title: '감마 상태',
    img: '/logo_img.png',
    sub: [
      '머릿속이 아주 복잡하고, 긴장감이 높아 스트레스가 많은 상태예요.',
      '하루종일 생각이 많은 상태죠. 에너지가 강하게 몰려있기 때문에',
      '조금은 숨 고르기가 필요해요.',
    ],
  },
} as const;
