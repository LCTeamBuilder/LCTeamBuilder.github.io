import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection6DirectorOutisSkill1: Skill = {
    Name: "Predictive Analysis",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze] next turn<br>"+
            "[On Hit] Inflict 1 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/PredictiveAnalysis.png"
}