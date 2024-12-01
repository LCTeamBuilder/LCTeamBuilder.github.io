import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TCorpClass3CollectionStaffDonQuixoteSkill2: Skill = {
    Name: "T Corp. Accelerated Amputator",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Consume up to 3 [Tremor] on target, and gain double the amount consumed as [Tremor] Count on self<br>"+
            "Inflict ([Tremor] - 1) [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If this Skill's Coin effects consumed [Tremor] on target, trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/TCorpAcceleratedAmputator.png"
}