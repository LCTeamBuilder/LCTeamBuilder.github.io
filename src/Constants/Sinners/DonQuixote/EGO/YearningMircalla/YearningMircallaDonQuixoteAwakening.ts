import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const YearningMircallaDonQuixoteAwakening: Skill = {
    Name: "Yearning Mircalla",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 7,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("This unit's HP does not drop below 1 while using this Skill.<br>"+
            "Coin Power +1 for every 10 [Bleed] on the target (max 2)<br>"+
            "Clash Power +1 for every 100 [Bloodfeast Consumed] by this unit (max 5)<br>"+
            "[Before Attack] At less than 100 [Bloodfeast], inflict 1 [Bleed] with every Hit<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End."),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "Deal +0.1% more damage for every [Bloodfeast Consumed (shared)] (max 10%)", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "At 100+ [Bloodfeast Consumed (shared)]: deal +0.1% more damage for every value (max 20%)", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "At 200+ [Bloodfeast Consumed (shared)]: deal +0.1% more damage for every value (max 30%)", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "At 300+ [Bloodfeast Consumed (shared)]: deal +0.1% more damage for every value (max 50%)<br>"+
            "[Hit after Clash Win] Inflict [Polydipsic Rose] based on the highest Lust A-Reson. (max 4)", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/YearningMircalla/20307awakenprofile.png"
}