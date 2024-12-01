import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const District20YurodivyHongLuSkill2: Skill = {
    Name: "Morph Cane Technique",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 6+ [Tremor], Clash Power +1<br>"+
            "[On Use] Gain +3 [Tremor] Count<br>"+
            "At 5+ [Tremor] Count, +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Tremor], trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/MorphCaneTechnique.png"
}