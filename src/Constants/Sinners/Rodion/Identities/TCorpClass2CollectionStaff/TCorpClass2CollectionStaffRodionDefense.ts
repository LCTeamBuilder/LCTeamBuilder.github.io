import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TCorpClass2CollectionStaffRodionDefense: Skill = {
    Name: "Borrow Time",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If this unit is not in a [Borrowed Time] state, gain 3 [Borrowed Time] at Turn End (once per turn)<br>"+
            "[On Use] For this turn: when hit by an enemy, inflict 2 [Tremor] on target next turn (6 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/BorrowTimeUT4.png"
}