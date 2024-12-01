import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyButlerIshmaelSkill3: Skill = {
    Name: "Restraining Technique",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] Gain 6 [Poise]"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 1 [Slash Fragility] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/RestrainingTechnique.png"
}