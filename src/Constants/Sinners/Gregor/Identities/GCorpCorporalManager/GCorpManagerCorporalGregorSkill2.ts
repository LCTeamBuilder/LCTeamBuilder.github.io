import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const GCorpManagerCorporalGregorSkill2: Skill = {
    Name: "Dismember",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Rupture], deal +50% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Heal by 50% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/Dismember.png"
}