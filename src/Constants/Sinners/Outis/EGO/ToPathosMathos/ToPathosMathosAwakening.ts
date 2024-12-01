import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ToPathosMathosOutisAwakening: Skill = {
    Name: "To Páthos Máthos",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("If target's HP is below 50%, +30% Damage"),            new SkillDescriptionPart("[On Hit] Inflict 4 [Rupture]<br>"+                "[On Kill] Give 1 [Damage Up] to a random ally", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/ToPathosMathos/21101awakenprofile.png"
}