import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRedSheetSinclairSkill2: Skill = {
    Name: "Proliferating Talismans",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/LobotomyEGORedSheet/ProliferatingTalismans.png"
}