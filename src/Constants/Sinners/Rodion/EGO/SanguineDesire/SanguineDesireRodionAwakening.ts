import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SanguineDesireRodionAwakening: Skill = {
    Name: "Sanguine Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 2 [Bleed] on target (max 13)<br>"+
            "[Combat Start] The main target for this Skill does not lose [Bleed] Count for this turn.<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End."),
        new SkillDescriptionPart("[On Hit] Inflict Lust Affinity damage equal to ([Bleed] Potency on target x 1.5)<br>"+
            "- At 4+ Lust Reson., inflict Lust Affinity damage equal to ([Bleed] Potency on target x 1.8).<br>"+
            "- At 4+ Lust A-Reson., inflict Lust Affinity damage equal to ([Bleed] Potency on target x 2).<br>"+
            "([Bleed] Potency up to only 99 will be used to calculate for this Skill.)<br>"+
            "[On Kill] If this Skill or its Coin effects dealt damage that exceeds the target's(In Focused Encounters, the Core's) remaining HP, deal the excess damage as fixed damage between all enemies.", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/SanguineDesire/20906awakenprofile.png"
}