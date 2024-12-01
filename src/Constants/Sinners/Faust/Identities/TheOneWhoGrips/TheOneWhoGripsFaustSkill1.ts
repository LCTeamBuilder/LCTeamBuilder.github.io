import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheOneWhoGripsFaustSkill1: Skill = {
    Name: "Cackle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Target loses 3 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Nails]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/TheOneWhoGrips/Cackle.png"
}