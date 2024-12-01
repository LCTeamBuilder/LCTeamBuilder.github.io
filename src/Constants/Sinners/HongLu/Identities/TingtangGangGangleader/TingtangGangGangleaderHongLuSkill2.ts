import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TingtangGangGangleaderHongLuSkill2: Skill = {
    Name: "Shank",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 7+ [Bleed] , deal +20% damage"),
        new SkillDescriptionPart("[Heads Hit] Damage +3", 1),
        new SkillDescriptionPart("[Heads Hit] Damage +3", 2),
        new SkillDescriptionPart("[Heads Hit] If target is below 25% HP, use this Coin an additional time if target survives<br>"+
            "Heads: +50% Damage for this Coin<br>"+
            "[Reuse - Heads Hit] +50% Damage for this Coin", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/Shank.png"
}