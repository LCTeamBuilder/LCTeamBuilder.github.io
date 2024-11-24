import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ContemptAweRyoshuAwakening implements Skill{
    readonly Name: string = "Contempt, Awe";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 10;
    readonly Coins: number = 2;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson.) +1 Atk Weight (Max. 6)<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Gaze of Contempt] this turn and next turn (max 7)<br>"+
            "[After Attack] If this Skill was a part of a Lust Reson., gain 1 E.G.O resource in Affinities corresponding to each of this unit's Attack Skills<br>"+
            "[After Attack] For 2 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[After Attack] Evenly inflict 15 [Bleed] between all targets", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407awakenprofile.png";
}