import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4YiSangSkill3: Skill = {
    Name: "Grace of Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 12% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] Gain +10 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] At 50%- HP, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/GraceOfKnowledge.png"
}