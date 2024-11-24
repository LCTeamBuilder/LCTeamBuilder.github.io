import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SunshowerOutisCorrosion implements Skill{
    readonly Name: string = "Sunshower";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 29;
    readonly Coins: number = 1;
    readonly CoinValue: number = -7;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "[Before Attack] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 6 [Rupture]<br>"+
            "[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Crit] Trigger [Tremor Burst]; Inflict +3 [Sinking] Count and [Rupture] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Outis/EGO/Sunshower/21104erosionprofile.png";
}