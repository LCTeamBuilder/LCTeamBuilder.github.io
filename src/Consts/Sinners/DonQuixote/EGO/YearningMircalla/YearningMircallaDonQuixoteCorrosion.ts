import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class YearningMircallaDonQuixoteCorrosion implements Skill{
    readonly Name: string = "Yearning Mircalla";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 30;
    readonly Coins: number = 2;
    readonly CoinValue: number = -10;
    readonly AttackWeight: number = 7;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "This unit's HP does not drop below 1 while using this Skill.<br>"+
            "If the target has 10+ [Bleed], Coin Power -1<br>"+
            "At 200+ [Bloodfeast Consumed] by this unit, Coin Power -1<br>"+
            "[Before Attack] At less than 150 [Bloodfeast], inflict 1 [Bleed] with every hit<br>"+
            "[Before Attack] Gain 20 [Bleed], and activate [Bleed] on self immediately. Lose 2 [Bleed] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed] for every 50 [Bloodfeast Consumed (shared)] (max 10)<br>"+
            "[On Hit] At 100- [Bloodfeast], inflict 10 [Bleed]", 1),
        new SkillDescriptionPart("Deal +20% more damage for every 100 [Bloodfeast Consumed (shared)] (max 100%)<br>"+
            "[Hit after Clash Win] Inflict [Polydipsic Rose] based on the highest Lust A-Reson. (max 5)<br>"+
            "[Hit after Clash Win] Heal by 50% of the HP damage dealt (max 10)", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/DonQuixote/EGO/YearningMircalla/20307erosionprofile.png";
}