import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4RodionSkill1: Skill = {
    Name: "Illuminate Thy Vacuity",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 5% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] If [Insight] is 2 or higher, gain Coin Power by ([Insight] -1)"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 10", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/IlluminateThyVacuity.png"
}