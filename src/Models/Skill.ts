import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../Enums/Index';
import { SkillDescriptionPart } from './SkillDescriptionPart';

export abstract class Skill {
    abstract readonly Name: string;
    abstract readonly SkillType: SkillTypeEnum;
    abstract readonly SkillTier: SkillTierEnum;
    abstract readonly Affinity: SinEnum;
    abstract readonly BaseValue: number;
    abstract readonly Coins: number;
    abstract readonly CoinValue: number;
    abstract readonly AttackWeight: number;
    abstract readonly SkillLevel: number;
    abstract readonly SkillDescription: ReadonlyArray<SkillDescriptionPart>;
    abstract readonly DamageType?: DamageTypeEnum;
    abstract readonly DefenseType?: DefenseTypeEnum;
    abstract readonly SkillImageDir: string;
}