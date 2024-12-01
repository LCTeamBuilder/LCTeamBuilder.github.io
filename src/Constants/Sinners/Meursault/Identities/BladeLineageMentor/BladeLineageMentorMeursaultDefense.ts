import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageMentorMeursaultDefense: Skill = {
    Name: "Overthrow",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Slash Power Up] next turn (1 time max)<br>"+
            "Deal +0.5% more Damage per 1% missing HP on self (Max 25%)"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/OverthrowUT4.png"
}