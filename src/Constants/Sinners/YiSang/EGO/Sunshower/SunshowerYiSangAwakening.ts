import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SunshowerYiSangAwakening: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 7,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Give 1 [Sloth Power Up], 2 [Sloth DMG Up], and 3 [Protection] to all allies this turn and next turn"),
        new SkillDescriptionPart("[Heads Hit] Heal 15 SP", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/Sunshower/20105awakenprofile.png"
}