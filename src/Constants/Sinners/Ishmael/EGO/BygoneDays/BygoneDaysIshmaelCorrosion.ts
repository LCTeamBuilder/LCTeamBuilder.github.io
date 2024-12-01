import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BygoneDaysIshmaelCorrosion: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Prioritizes targets with the most [Sinking]<br>"+
            "[Before Attack] Lose HP by 10% of Max HP (does not get Staggered due to this effect)<br>"+
            "[After Attack] Heal 3 other allies with the lowest HP percentages by (10 + (sum of [Sinking] Potency and Count on the main target)/3)% HP (max 15%)<br>"+
            "- At 4+ highest Reson., heal 1 additional ally<br>"+
            "- If the said Reson. was a Gloom Reson., heal an additional 5% HP"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 2 [Curse]<br>"+
            "[On Hit] For every 3 Gloom Reson., inflict 1 [Gloom Fragility] (max 2)<br>"+
            "[On Hit] Inflict 2 [The Uninvited]<br>"+
            "[On Hit] Inflict 2 [Echoes of the Manor] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/BygoneDays/20807erosionprofile.png"
}