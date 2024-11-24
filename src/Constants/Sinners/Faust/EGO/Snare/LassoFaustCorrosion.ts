import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LassoFaustCorrosion implements Skill{
    readonly Name: string = "Lasso";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed<br>"+
            "If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[After Attack] If the target is Staggered or defeated, gain 1 [Gluttony Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lasso]<br>"+
            "[On Hit] Deal +2% more damage for every [Rupture] on the target (max 60%)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Faust/EGO/Snare/20207erosionprofile.png";
}