import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RbChefDeCuisineRyoshuSkill3: Skill = {
    Name: "I Can Cook Anything",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Boost damage by 5% of target's missing HP (Max 20)"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +5% damage", 2),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +5% damage", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/RBChefDeCuisine/ICanCookAnything.png"
}