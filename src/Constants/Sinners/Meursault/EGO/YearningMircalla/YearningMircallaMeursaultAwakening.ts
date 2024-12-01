import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const YearningMircallaMeursaultAwakening: Skill = {
    Name: "Yearning Mircalla",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] At 4+ highest Reson., activate [Bleed] on the target once (target loses 1 [Bleed] Count)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] At 4+ highest Reson., activate [Bleed] on the target once (target loses 1 [Bleed] Count)", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[Hit after Clash Win] Inflict +2 [Rose Wedge] Count<br>"+
            "[On Hit] Inflict +2 [Rose Wedge] Count", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[Hit after Clash Win] Activate the target's [Bleed] (1 + (highest Reson./2)) times. (3 times max, target loses [Bleed] Count equal to the number of times it was activated)<br>"+
            "[On Kill] When dealing excess damage past the enemy's remaining HP, deal the excess damage as fixed damage between all enemies. (min 1)", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/YearningMircalla/20507awakenprofile.png"
}