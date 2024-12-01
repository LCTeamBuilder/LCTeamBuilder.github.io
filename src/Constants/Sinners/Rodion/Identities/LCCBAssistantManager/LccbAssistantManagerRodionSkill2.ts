import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LccbAssistantManagerRodionSkill2: Skill = {
    Name: "Thrust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If the next skill on the Dashboard does Blunt DMG, this skill's Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Defense Power Down]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCCBAssistantManager/Thrust.png"
}