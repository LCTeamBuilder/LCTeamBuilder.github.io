import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection6DirectorOutisDefense: Skill = {
    Name: "I'll Take the Lead",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 13,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Haste] and 1 [Defense Power Up] next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/IllTakeTheLeadUT4.png"
}