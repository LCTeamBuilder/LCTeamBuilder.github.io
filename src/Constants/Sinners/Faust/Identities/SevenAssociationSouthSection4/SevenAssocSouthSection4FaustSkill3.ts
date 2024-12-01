import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection4FaustSkill3: Skill = {
    Name: "Profiling",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Deal +10% damage for every 3 [Rupture] on target (Max 50%)<br>"+
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[After Attack] If target is Staggered or defeated, gain 1 [Haste] and 1 [Slash Power Up] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/Profiling.png"
}