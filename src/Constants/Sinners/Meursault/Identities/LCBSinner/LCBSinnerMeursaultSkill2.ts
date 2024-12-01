import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerMeursaultSkill2: Skill = {
    Name: "Nailing Fist",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: [new SkillDescriptionPart("[On Use] Gain 3 [Defense Power Up] next turn"),            new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LCBSinner/NailingFist.png"
}