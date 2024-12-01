import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ElectricScreamingMeursaultAwakening: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +12 [Charge] Count<br>"+
            "[After Attack] Apply +8 [Charge] Count to 1 other ally with the least [Charge] Count<br>"+
            "- Number of affected allies grows by (highest Envy Reson. - 2) (max 5)<br>"+
            "- At 4+ (highest Envy Reson.), apply 1 [Envy DMG Up] to self and all affected allies<br>"+
            "- At 6+ (highest Envy Reson.), apply 1 [Envy DMG Up] to self and all affected allies"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506awakenprofile.png"
}