import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LifetimeStewSinclairCorrosion: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 24,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "[Before Attack] Spend 3 random E.G.O resources to boost damage by 30%"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Burn] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003erosionprofile.png"
}