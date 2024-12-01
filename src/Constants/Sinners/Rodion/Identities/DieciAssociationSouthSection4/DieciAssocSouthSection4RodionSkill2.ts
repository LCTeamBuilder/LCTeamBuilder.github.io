import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4RodionSkill2: Skill = {
    Name: "Weight of Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 10% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] the Skill of the lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] This Slot gains +5 [Aggro] next turn<br>"+
            "[On Use] If target has 5+ [Sinking], gain Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 5 Sinking", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/WeightOfKnowledge.png"
}