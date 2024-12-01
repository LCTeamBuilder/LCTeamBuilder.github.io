import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerDonQuixoteSkill3: Skill = {
    Name: "For Justice!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("At 10+ Speed, Coin Power +2"),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),            new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] count", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LCBSinner/ForJustice.png", 
}