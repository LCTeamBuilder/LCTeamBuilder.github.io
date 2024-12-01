import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LanternGregorAwakening: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Heal 60% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/Lantern/21203awakenprofile.png"
}