import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheRingPointillistStudentOutisSkill2: Skill = {
    Name: "Sanguine Painting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], +2 Clash Power"),
        new SkillDescriptionPart("[On Hit] 40% chance to Reuse Coin. +20% more chance to Reuse Coin for every type of negative effect on the target (2 times max per Skill)<br>"+
            "[On Hit] Inflict +1 [Bleed] Count<br>"+
            "When Reusing Coin with this unit's Coin effects, inflict +1 more [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/SanguinePainting.png"
}