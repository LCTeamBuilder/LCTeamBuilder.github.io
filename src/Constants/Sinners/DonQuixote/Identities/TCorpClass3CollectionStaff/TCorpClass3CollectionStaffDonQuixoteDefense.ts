import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TCorpClass3CollectionStaffDonQuixoteDefense: Skill = {
    Name: "I Shall Summon the Time",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If this unit is not in a [Borrowed Time] state, gain 4 [Borrowed Time] at Turn End (once per turn)<br>"+
            "[On Use] For this turn: when hit by an enemy, inflict 3 [Tremor] on target next turn (6 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/IShallSummonTheTimeUT4.png"
}