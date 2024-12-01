import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RBSouschefGregorSkill3: Skill = {
    Name: "Butcher Viand",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 10+ [Bleed] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]", 3),
        new SkillDescriptionPart("[On Hit] Heal HP based on target's [Bleed] (Max 20%)", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RBSouschef/ButcherViand.png"
}