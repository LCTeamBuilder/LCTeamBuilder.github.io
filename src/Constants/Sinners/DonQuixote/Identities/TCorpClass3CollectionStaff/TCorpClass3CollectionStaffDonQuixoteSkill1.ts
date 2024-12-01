import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TCorpClass3CollectionStaffDonQuixoteSkill1: Skill = {
    Name: "Let Us Prepare To Collect",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Gain Clash Power +1 for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Gain +4 [Aggro] to this Skill Slot next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/LetUsPrepareToCollect.png"
}