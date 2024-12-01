import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RBSouschefGregorSkill1: Skill = {
    Name: "Keep It Fresh",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 4+ [Bind], deal +30% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze], if target has [Bleed], inflict 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RBSouschef/KeepItFresh.png"
}