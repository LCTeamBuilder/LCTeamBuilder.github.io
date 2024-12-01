import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const GCorpManagerCorporalGregorSkill3: Skill = {
    Name: "Eviscerate",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 1),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 2),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 3),
        new SkillDescriptionPart("[On Hit] Heal by 100% of damage dealt", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/Eviscerate.png"
}