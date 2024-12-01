import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerMeursaultSkill3: Skill = {
    Name: "Des Coups",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: [new SkillDescriptionPart("[On Use] Gain 3 [Protection] next turn"),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 1),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 3),            new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LCBSinner/DesCoups.png"
}