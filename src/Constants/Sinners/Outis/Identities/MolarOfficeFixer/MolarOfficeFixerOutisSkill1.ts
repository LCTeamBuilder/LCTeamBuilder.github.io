import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarOfficeFixerOutisSkill1: Skill = {
    Name: "Wait Up!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill is Discarded, gain +4 [Tremor] Count<br>"+
            "[On Use] Gain +2 [Tremor] Count<br>"+
            "At 6+ [Tremor] Count, gain +2 Final Power"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold for every [Tremor] Count on self (Max 10)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/WaitUp.png"
}