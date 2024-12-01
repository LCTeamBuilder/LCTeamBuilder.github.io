import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerIshmaelSkill1: Skill = {
    Name: "Loggerhead",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LCBSinner/Loggerhead.png"
}