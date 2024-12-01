import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection4GregorDefense: Skill = {
    Name: "The Best Defense",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain Shield by (2*[Defense Level Up] on self)<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/TheBestDefenseUT4.png"
}