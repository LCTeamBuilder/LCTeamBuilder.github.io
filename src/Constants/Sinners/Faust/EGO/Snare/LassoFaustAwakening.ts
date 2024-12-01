import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LassoFaustAwakening: Skill = {
    Name: "Lasso",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for ever 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[Before Attack] At 4+ highest Reson., Atk Weight +1<br>"+
            "- If the said Reson. was a Gluttony Reson., Atk Weight +1"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 3),],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Snare/20207awakenprofile.png"
}