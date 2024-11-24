import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LassoHongLuAwakening implements Skill{
    readonly Name: string = "Lasso";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lasso]", 2),
        new SkillDescriptionPart("On Hit] Inflict 2 [HP Healing Down] next turn<br>"+
            "[On Hit] Inflict +1 [Rupture] Count for every 2 Gluttony Reson. (max 3)", 3),
        new SkillDescriptionPart("[On Hit] Randomly inflict [Bleed] equal to this unit's Speed between the targets (max 7)<br>"+
            "[On Hit] Randomly inflict [Rupture] equal to this unit's Speed between the targets (max 7)", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/Snare/20607awakenprofile.png";
}