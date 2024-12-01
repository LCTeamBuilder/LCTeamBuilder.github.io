import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRedSheetSinclairSkill1: Skill = {
    Name: "Magnify Wound",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
        "[On Hit] If target has 5+ [Rupture], gain 1 [Talisman]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/LobotomyEGORedSheet/MagnifyWound.png"
}