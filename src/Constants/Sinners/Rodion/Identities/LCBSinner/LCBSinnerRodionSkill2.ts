import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerRodionSkill2: Skill = {
    Name: "Axe Combo",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),            new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCBSinner/AxeCombo.png"
}