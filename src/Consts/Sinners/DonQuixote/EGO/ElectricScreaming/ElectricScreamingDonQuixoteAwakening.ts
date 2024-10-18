import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ElectricScreamingDonQuixoteAwakening implements Skill{
    readonly Name: string = "Electric Screaming";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 19;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain +1 Atk Weight (Max. 3) for every Envy Reson. above 2<br>"+
            "[Before Attack] Deal +((Envy Reson. - 3) x 10)% more damage (max 30%)<br>"+
            "[Before Attack] If this unit has 20+ [Charge] Count, Spend 20 [Charge] Count to deal +40% more damage<br>"), 
        new SkillDescriptionPart("[On Kill] Gain +2 [Charge] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306awakenprofile.png";
}