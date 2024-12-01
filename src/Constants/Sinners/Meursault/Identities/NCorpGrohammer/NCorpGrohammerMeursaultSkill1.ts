import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpGrohammerMeursaultSkill1: Skill = {
    Name: "Drive",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "At less than 50% HP, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 60% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 60% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/NCorpGrohammer/Drive.png"
}