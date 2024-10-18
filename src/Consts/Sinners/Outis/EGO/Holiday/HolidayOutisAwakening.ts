import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HolidayOutisAwakening implements Skill{
    readonly Name: string = "Holiday";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +11;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[After Attack] Apply 1 [Damage Up] for the Affinity with the highest Resonance count to 4 allies with the least SP<br>"+
            "[After Attack] Heal 20 SP for 4 allies with the least SP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Outis/EGO/Holiday/21105awakenprofile.png";
}