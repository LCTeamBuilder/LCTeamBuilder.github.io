import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LifetimeStewDonQuixoteCorrosion: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets the unit with the most HP<br>"+
        "[Before Attack] Boost damage based on current Lust resources (Up to 50%)<br>"+
        "Then spend Lust resources by (Lust Reson.), further boost damage by 10% per resource spent"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Burn] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/LifetimeStew/20304erosionprofile.png"
}