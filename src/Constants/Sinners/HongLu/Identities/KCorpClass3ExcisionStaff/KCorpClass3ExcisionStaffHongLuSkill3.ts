import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KCorpClass3ExcisionStaffHongLuSkill3: Skill = {
    Name: "Excise Target",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("At 80% or more HP, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] Count by the amount of [K Corp Ampule], Deal +5% damage per [K Corp Ampule]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/KCorpClass3ExcisionStaff/ExciseTarget.png"
}