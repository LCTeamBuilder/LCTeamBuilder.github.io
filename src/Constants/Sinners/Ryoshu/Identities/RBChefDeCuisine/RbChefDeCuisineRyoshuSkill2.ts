import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RbChefDeCuisineRyoshuSkill2: Skill = {
    Name: "I.H.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Appetite]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] If target has [Bleed] or [Paralyze], inflict 4 [HP Healing Down] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/RBChefDeCuisine/IH.png"
}