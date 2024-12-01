import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LifetimeStewDonQuixoteAwakening: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Boost damage based on current Lust resources (Up to 50%)"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Burn] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/LifetimeStew/20304awakenprofile.png"
}