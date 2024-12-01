import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerSinclairSkill3: Skill = {
    Name: "Ravaging Cut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("[Clash Win] Gain 1 [Attack Power Up]"),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/EvadeUT4.png"
}