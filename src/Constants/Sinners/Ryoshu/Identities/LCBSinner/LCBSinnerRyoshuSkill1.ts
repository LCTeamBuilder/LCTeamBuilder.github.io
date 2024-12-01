import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerRyoshuSkill1: Skill = {
    Name: "Paint",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/Paint.png"
}