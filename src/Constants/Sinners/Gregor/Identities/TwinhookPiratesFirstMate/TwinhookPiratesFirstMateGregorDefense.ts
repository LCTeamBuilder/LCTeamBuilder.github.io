import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TwinhookPiratesFirstMateGregorDefense: Skill = {
    Name: "Take a Breather",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Gain 1 [Poise] (Max 5 per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/TakeABreather.png"
}