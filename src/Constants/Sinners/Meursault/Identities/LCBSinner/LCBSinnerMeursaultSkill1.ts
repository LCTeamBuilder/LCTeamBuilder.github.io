import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerMeursaultSkill1: Skill = {
    Name: "Un, Deux",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LCBSinner/UnDeux.png"
}