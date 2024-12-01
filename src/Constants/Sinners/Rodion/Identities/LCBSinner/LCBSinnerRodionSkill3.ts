import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerRodionSkill3: Skill = {
    Name: "Slay",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("Skill Power +1 when below 0 SP"),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),            new SkillDescriptionPart("[On Hit] If target has +6 [Bleed], deal +20% damage", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCBSinner/Slay.png"
}