import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerFaustSkill3: Skill = {
    Name: "Drilling Stab",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[Heads Hit] Inflict 1 [Attack Power Down] next turn", 1),            new SkillDescriptionPart("[On Hit] Inflict 1 [Attack Power Down] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LCBSinner/DrillingStab.png", 
}