import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerYiSangSkill3: Skill = {
    Name: "Enjamb",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 6,
    Coins: 3,
    CoinValue: 2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1),            new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 2),            new SkillDescriptionPart("[On Hit] If target's SP is below 0, inflict 1 [Fragile] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LCBSinner/Enjamb.png"
}