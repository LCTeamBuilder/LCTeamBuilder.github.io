import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ElectricScreamingDonQuixoteAwakening: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 2,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +1 Atk Weight (Max. 3) for every Envy Reson. above 2<br>"+
            "[Before Attack] Deal +((Envy Reson. - 3) x 10)% more damage (max 30%)<br>"+
            "[Before Attack] If this unit has 20+ [Charge] Count, Spend 20 [Charge] Count to deal +40% more damage<br>"), 
        new SkillDescriptionPart("[On Kill] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306awakenprofile.png"
}