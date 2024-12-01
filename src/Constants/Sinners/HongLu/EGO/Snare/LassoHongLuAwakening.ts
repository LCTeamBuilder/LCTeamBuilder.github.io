import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LassoHongLuAwakening: Skill = {
    Name: "Lasso",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lasso]", 2),
        new SkillDescriptionPart("On Hit] Inflict 2 [HP Healing Down] next turn<br>"+
            "[On Hit] Inflict +1 [Rupture] Count for every 2 Gluttony Reson. (max 3)", 3),
        new SkillDescriptionPart("[On Hit] Randomly inflict [Bleed] equal to this unit's Speed between the targets (max 7)<br>"+
            "[On Hit] Randomly inflict [Rupture] equal to this unit's Speed between the targets (max 7)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Snare/20607awakenprofile.png"
}