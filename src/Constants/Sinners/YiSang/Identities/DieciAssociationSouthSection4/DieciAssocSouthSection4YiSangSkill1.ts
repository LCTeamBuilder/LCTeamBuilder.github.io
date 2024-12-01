import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4YiSangSkill1: Skill = {
    Name: "Expend Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 3% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] If target has 5+ [Sinking], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by [Insight]", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by [Insight]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/ExpendKnowledge.png"
}