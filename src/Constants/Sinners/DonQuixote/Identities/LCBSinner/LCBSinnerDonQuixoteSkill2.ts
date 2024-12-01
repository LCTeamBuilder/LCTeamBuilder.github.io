import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerDonQuixoteSkill2: Skill = {
    Name: "Galloping Tilt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("[Clash Win] Gain 2 [Attack Power Up] next turn"),            new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LCBSinner/GallopingTilt.png", 
}