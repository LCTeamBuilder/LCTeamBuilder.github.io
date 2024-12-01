import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerGregorSkill3: Skill = {
    Name: "Chop Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] If target has [Rupture], +10% Damage", 1),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], +10% Damage<br>"+
            "[Heads Hit] Heal by 30% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/LCBSinner/ChopUp.png", 
}