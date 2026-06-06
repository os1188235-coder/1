/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CardType = 'attack' | 'defense' | 'heal' | 'buff' | 'debuff' | 'special';
export type CardRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Card {
  id: string;
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
  upgraded: boolean;
  goldCost?: number;
}

export type EnemyIntentType = 'attack' | 'defend' | 'buff' | 'debuff' | 'stunned';

export interface EnemyIntent {
  type: EnemyIntentType;
  value: number;
  text: string;
}

export interface Enemy {
  id: string;
  name: string;
  maxHp: number;
  hp: number;
  block: number;
  strength: number;
  intent: EnemyIntent;
  difficulty: 'basic' | 'elite' | 'boss' | 'infinite';
  goldReward: number;
}

export interface PlayerStats {
  hp: number;
  maxHp: number;
  block: number;
  strength: number;
  gold: number;
  energy: number;
  maxEnergy: number;
  score: number;
  perfBattles: number; // number of perfect battles (no damage taken)
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  stageCleared: number;
  deckSize: number;
  date: string;
  isPlayer?: boolean;
}

export interface BattleLog {
  id: string;
  text: string;
  type: 'player' | 'enemy' | 'system' | 'info';
}

export type GamePhase = 'menu' | 'battle' | 'map' | 'shop' | 'campfire' | 'reward' | 'victory' | 'gameover';
