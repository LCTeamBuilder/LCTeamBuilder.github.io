import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LassoFaustAwakening implements Skill{
    readonly Name: string = "Lasso";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for ever 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[Before Attack] At 4+ highest Reson., Atk Weight +1<br>"+
            "- If the said Reson. was a Gluttony Reson., Atk Weight +1"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 3),];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Faust/EGO/Snare/20207awakenprofile.png";
}