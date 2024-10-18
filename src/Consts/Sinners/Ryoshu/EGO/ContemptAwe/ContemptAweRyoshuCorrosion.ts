import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ContemptAweRyoshuCorrosion implements Skill{
    readonly Name: string = "Contempt, Awe";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 44;
    readonly Coins: number = 1;
    readonly CoinValue: number = -20;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain 7 [Gaze of Contempt]<br>"+
            "[After Attack] If this Skill was part of a Lust Reson., gain 1 E.G.O resource in Affinities corresponding to each of this unit's Attack Skills"),
        new SkillDescriptionPart("[On Hit] If the target has [Bleed], deal +(the sum of [Bleed] Potency and Count)% more damage (max 60%)<br>"+
            "[On Hit] Inflict (10 + (highest Reson. x 2.5)) [Bleed] (max 25, rounded down)<br>"+
            "[On Hit] Inflict +5 [Bleed] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407erosionprofile.png";
}