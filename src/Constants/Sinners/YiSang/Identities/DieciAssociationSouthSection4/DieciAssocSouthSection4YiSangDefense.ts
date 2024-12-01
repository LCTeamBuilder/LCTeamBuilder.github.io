import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4YiSangDefense: Skill = {
    Name: "Fixated Study",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Randomly [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/FixatedStudy.png"
}