import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const GardenOfThornsGregorAwakening: Skill = {
    Name: "Garden of Thorns",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 4,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (Count of highest Reson. - 2) +1 Atk Weight (Max. 3)<br>"+
            "[On Use] Apply 1 '(Corresponding Sin Affinity) Damage Up' and 1 '(Corresponding Sin Affinity) Power Up' to (4+ Count of highest Reson.) allies.<br>"+
            "- At 4+ Corresponding Reson., apply 1 additional '(Corresponding Sin Affinity) Damage up'<br>"+
            "- At 5+ Corresponding Reson., apply 1 additional '(Corresponding Sin Affinity) Power Up'<br>"+
            "- At 6+ Corresponding A-Reson., apply the above effects next turn as well"),
        new SkillDescriptionPart("[After Attack] Heal 4 allies with the lowest HP percentages for 22% of their max HP<br>"+
            "- Heal (highest Count of Reson. - 2) more allies (Max 3)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205awakenprofile.png"
}