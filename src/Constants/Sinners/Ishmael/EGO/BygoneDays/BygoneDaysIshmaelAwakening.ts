import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BygoneDaysIshmaelAwakening: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 4+ highest Reson., gain +1 Atk Weight<br>"+
            "- If the said Reson. was a Gloom Reson., gain +1 Atk Weight<br>"+
            "[After Attack] Heal 2 allies with the lowest HP percentages by (10 + (sum of [Sinking] Potency and Count on the main target)/3)% HP (max 20%)<br>"+
            "- If the highest Reson. was a 4+ Gloom Reson., heal 10% more of the max HP"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 2 [Curse]<br>"+
            "[On Hit] At 4+ Gloom Reson., inflict 1 [Gloom Fragility]<br>"+
            "[On Hit] Inflict 2 [The Uninvited]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/BygoneDays/20807awakenprofile.png"
}