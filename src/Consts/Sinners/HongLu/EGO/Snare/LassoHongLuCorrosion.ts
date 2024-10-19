import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LassoHongLuCorrosion implements Skill{
    readonly Name: string = "Lasso";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed<br>"+
            "If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[Before Attack] At 4+ Gluttony or Lust Reson., gain +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Lasso]", 1),
        new SkillDescriptionPart("On Hit] Inflict 2 [HP Healing Down] next turn<br>"+
            "[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Deal +1% more damage for every [Bleed] on the target (max 30%)<br>"+
            "[On Hit] Deal +1% more damage for every [Rupture] on the target (max 30%)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/Snare/20607erosionprofile.png";
}