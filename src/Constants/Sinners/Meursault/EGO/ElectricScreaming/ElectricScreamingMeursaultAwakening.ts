import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ElectricScreamingMeursaultAwakening implements Skill{
    readonly Name: string = "Electric Screaming";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 22;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain +12 [Charge] Count<br>"+
            "[After Attack] Apply +8 [Charge] Count to 1 other ally with the least [Charge] Count<br>"+
            "- Number of affected allies grows by (highest Envy Reson. - 2) (max 5)<br>"+
            "- At 4+ (highest Envy Reson.), apply 1 [Envy DMG Up] to self and all affected allies<br>"+
            "- At 6+ (highest Envy Reson.), apply 1 [Envy DMG Up] to self and all affected allies"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506awakenprofile.png";
}