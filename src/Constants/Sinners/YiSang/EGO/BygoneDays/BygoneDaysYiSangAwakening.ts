import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BygoneDaysYiSangAwakening: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Randomly inflict (6 + (Gloom Reson. x1.5)) [Sinking] between targets"),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Sinking], inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/BygoneDays/20106awakenprofile.png"
}