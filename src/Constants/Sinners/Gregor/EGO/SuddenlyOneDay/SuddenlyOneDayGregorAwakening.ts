import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SuddenlyOneDayGregorAwakening: Skill = {
    Name: "Suddenly, One Day Gregor",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 14,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 10 of a random status, chosen from [Burn], [Bleed], [Tremor], [Rupture], and [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/SuddenlyOneDay/21201awakenprofile.png"
}