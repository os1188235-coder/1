/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Card, CardRarity, CardType } from '../types';

export interface CardTemplate {
  templateId: string;
  name: string;
  type: CardType;
  rarity: CardRarity;
  cost: number;
  damage?: number;
  block?: number;
  heal?: number;
  strength?: number;
  drawBonus?: number;
  description: string;
  upgradedDescription: string;
  baseGoldCost: number;
}

export const CARD_TEMPLATES: Record<string, CardTemplate> = {
  strike: {
    templateId: 'strike',
    name: '타격 (Strike)',
    type: 'attack',
    rarity: 'common',
    cost: 1,
    damage: 6,
    description: '적에게 6의 피해를 줍니다.',
    upgradedDescription: '적에게 9의 피해를 줍니다.',
    baseGoldCost: 40
  },
  defend: {
    templateId: 'defend',
    name: '수비 (Defend)',
    type: 'defense',
    rarity: 'common',
    cost: 1,
    block: 5,
    description: '방어도를 5 얻습니다. (이번 턴 동안 유지)',
    upgradedDescription: '방어도를 8 얻습니다. (이번 턴 동안 유지)',
    baseGoldCost: 40
  },
  recover: {
    templateId: 'recover',
    name: '안정 (Recover)',
    type: 'heal',
    rarity: 'common',
    cost: 1,
    heal: 4,
    description: '체력을 4 회복합니다.',
    upgradedDescription: '체력을 7 회복합니다.',
    baseGoldCost: 55
  },
  shield_slam: {
    templateId: 'shield_slam',
    name: '방패 밀치기 (Shield Slam)',
    type: 'attack',
    rarity: 'common',
    cost: 1,
    damage: 5,
    block: 5,
    description: '피해를 5 주고, 방어도를 5 얻습니다.',
    upgradedDescription: '피해를 8 주고, 방어도를 8 얻습니다.',
    baseGoldCost: 50
  },
  heavy_strike: {
    templateId: 'heavy_strike',
    name: '강타 (Heavy Strike)',
    type: 'attack',
    rarity: 'rare',
    cost: 2,
    damage: 13,
    description: '묵직한 타격으로 13의 큰 피해를 줍니다.',
    upgradedDescription: '묵직한 타격으로 19의 큰 피해를 줍니다.',
    baseGoldCost: 80
  },
  swift_slash: {
    templateId: 'swift_slash',
    name: '신속 연격 (Swift Slash)',
    type: 'attack',
    rarity: 'rare',
    cost: 1,
    damage: 4, // Will hit twice!
    description: '신속하게 4의 피해를 두 번 줍니다. (힘 버프 시 위력 급증!)',
    upgradedDescription: '신속하게 6의 피해를 두 번 줍니다. (힘 버프 시 위력 급증!)',
    baseGoldCost: 90
  },
  focus: {
    templateId: 'focus',
    name: '기집중 (Focus)',
    type: 'buff',
    rarity: 'rare',
    cost: 1,
    strength: 2,
    description: '힘을 2 얻습니다. (공격 카드의 모든 타수 공격력이 +2 영구 강화)',
    upgradedDescription: '힘을 4 얻습니다. (공격 카드의 모든 타수 공격력이 +4 영구 강화)',
    baseGoldCost: 85
  },
  iron_wall: {
    templateId: 'iron_wall',
    name: '합금 철벽 (Iron Wall)',
    type: 'defense',
    rarity: 'rare',
    cost: 2,
    block: 13,
    description: '철벽의 방막을 형성해 방어도를 13 얻습니다.',
    upgradedDescription: '철벽의 방막을 형성해 방어도를 19 얻습니다.',
    baseGoldCost: 75
  },
  retaliate: {
    templateId: 'retaliate',
    name: '공격적 반격 (Retaliate)',
    type: 'defense',
    rarity: 'epic',
    cost: 1,
    block: 7,
    strength: 1,
    description: '방어도를 7 얻고, 공격용 기세로 힘을 1 얻습니다.',
    upgradedDescription: '방어도를 10 얻고, 공격용 기세로 힘을 2 얻습니다.',
    baseGoldCost: 120
  },
  berserk: {
    templateId: 'berserk',
    name: '광분 (Berserk)',
    type: 'buff',
    rarity: 'epic',
    cost: 1,
    strength: 4,
    heal: -3, // takes damage
    description: '자해 피해를 3 입는 대신, 힘을 4 얻습니다.',
    upgradedDescription: '자해 피해를 2 입는 대신, 힘을 6 얻습니다.',
    baseGoldCost: 110
  },
  overcharge: {
    templateId: 'overcharge',
    name: '과충전 부스터 (Overcharge)',
    type: 'special',
    rarity: 'epic',
    cost: 1,
    drawBonus: 3,
    description: '카드를 3장 뽑습니다.',
    upgradedDescription: '에너지 소모 없이 카드를 3장 뽑습니다.', // upgraded cost is 0
    baseGoldCost: 100
  },
  execution: {
    templateId: 'execution',
    name: '단죄의 처형 (Execution)',
    type: 'attack',
    rarity: 'epic',
    cost: 3,
    damage: 24,
    description: '차단 불가의 위력으로 24의 파괴적 피해를 가합니다.',
    upgradedDescription: '차단 불가의 위력으로 34의 파괴적 피해를 가합니다.',
    baseGoldCost: 130
  },
  holy_light: {
    templateId: 'holy_light',
    name: '신성 장막 (Holy Light)',
    type: 'heal',
    rarity: 'epic',
    cost: 2,
    heal: 8,
    block: 8,
    description: '손상된 건강을 8 회복하고, 방어도를 8 얻습니다.',
    upgradedDescription: '손상된 건강을 12 회복하고, 방어도를 12 얻습니다.',
    baseGoldCost: 145
  },
  double_energy: {
    templateId: 'double_energy',
    name: '무한의 기백 (Double Energy)',
    type: 'special',
    rarity: 'legendary',
    cost: 0,
    drawBonus: 2,
    description: '에너지를 1 회복하고 카드를 1장 뽑습니다.',
    upgradedDescription: '에너지를 2 회복하고 카드를 2장 뽑습니다.',
    baseGoldCost: 200
  },
  sword_of_light: {
    templateId: 'sword_of_light',
    name: '홀리 리뎀션 (Sword of Light)',
    type: 'attack',
    rarity: 'legendary',
    cost: 2,
    damage: 16,
    block: 10,
    description: '심판의 광휘를 가해 피해를 16 주고, 방어도를 10 얻습니다.',
    upgradedDescription: '심판의 광휘를 가해 피해를 22 주고, 방어도를 14 얻습니다.',
    baseGoldCost: 220
  }
};

let uniqueCounter = 0;

export function createCard(templateId: string, upgraded = false): Card {
  const template = CARD_TEMPLATES[templateId];
  if (!template) {
    throw new Error(`Card template not found: ${templateId}`);
  }

  // Calculate stats based on whether upgraded is true
  let cost = template.cost;
  let damage = template.damage;
  let block = template.block;
  let heal = template.heal;
  let strength = template.strength;
  let drawBonus = template.drawBonus;

  if (upgraded) {
    if (templateId === 'strike') damage = 9;
    if (templateId === 'defend') block = 8;
    if (templateId === 'recover') heal = 7;
    if (templateId === 'shield_slam') {
      damage = 8;
      block = 8;
    }
    if (templateId === 'heavy_strike') damage = 19;
    if (templateId === 'swift_slash') damage = 6;
    if (templateId === 'focus') strength = 4;
    if (templateId === 'iron_wall') block = 19;
    if (templateId === 'retaliate') {
      block = 10;
      strength = 2;
    }
    if (templateId === 'berserk') {
      strength = 6;
      heal = -2;
    }
    if (templateId === 'overcharge') cost = 0; // energy reduced
    if (templateId === 'execution') damage = 34;
    if (templateId === 'holy_light') {
      heal = 12;
      block = 12;
    }
    if (templateId === 'double_energy') {
      // upgraded values handled during execution to trigger 2 energy & draw 2
      drawBonus = 2;
    }
    if (templateId === 'sword_of_light') {
      damage = 22;
      block = 14;
    }
  }

  uniqueCounter += 1;
  const id = `${templateId}_${Date.now()}_${uniqueCounter}`;

  // Description
  const description = upgraded ? template.upgradedDescription : template.description;

  return {
    id,
    templateId,
    name: template.name,
    type: template.type,
    rarity: template.rarity,
    cost,
    damage,
    block,
    heal,
    strength,
    drawBonus,
    description,
    upgraded,
    goldCost: Math.floor(template.baseGoldCost * (0.9 + Math.random() * 0.2)) // Random modifier +/- 10%
  };
}

/**
 * Generates the standard starting deck.
 * Standard starter deck has 10 cards:
 * - 4 Strikes (타격)
 * - 4 Defends (수비)
 * - 1 Recover (안정)
 * - 1 Shield Slam (방패 밀치기) - a nice versatile starter card!
 */
export function getStartingDeck(): Card[] {
  const deck: Card[] = [];
  
  for (let i = 0; i < 4; i++) {
    deck.push(createCard('strike'));
  }
  for (let i = 0; i < 4; i++) {
    deck.push(createCard('defend'));
  }
  deck.push(createCard('recover'));
  deck.push(createCard('shield_slam'));

  return deck;
}

/**
 * Gets a random card draft select options (3 options of random rarity)
 */
export function getRandomDraftOptions(excludeTemplates?: string[]): Card[] {
  const templates = Object.keys(CARD_TEMPLATES);
  const options: Card[] = [];
  
  // Weights based on rarity
  // common: 55%, rare: 30%, epic: 12%, legendary: 3%
  const getRandTemplateId = () => {
    let rand = Math.random();
    let selectedRarity: CardRarity = 'common';
    if (rand < 0.03) {
      selectedRarity = 'legendary';
    } else if (rand < 0.15) {
      selectedRarity = 'epic';
    } else if (rand < 0.45) {
      selectedRarity = 'rare';
    }

    const filtered = templates.filter(id => {
      const isExcluded = excludeTemplates?.includes(id);
      return CARD_TEMPLATES[id].rarity === selectedRarity && !isExcluded;
    });

    if (filtered.length > 0) {
      return filtered[Math.floor(Math.random() * filtered.length)];
    }

    // fallback
    return templates[Math.floor(Math.random() * templates.length)];
  };

  while (options.length < 3) {
    const tId = getRandTemplateId();
    // avoid duplicates in same draft
    if (!options.some(o => o.templateId === tId)) {
      options.push(createCard(tId));
    }
  }

  return options;
}
