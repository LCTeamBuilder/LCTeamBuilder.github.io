import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerIshmaelSkill2: Skill = {
    Name: "Slide",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[Clash Win] Inflict 3 [Defense Power Down]"),            new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LCBSinner/Slide.png"
}