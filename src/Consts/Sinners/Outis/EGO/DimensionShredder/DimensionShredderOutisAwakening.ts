import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DimensionShredderOutisAwakening implements Skill{
    readonly Name: string = "Dimension Shredder";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 21;
    readonly Coins: number = 1;
    readonly CoinValue: number = +9;
    readonly AttackWeight: number = 4;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain +1 Atk Weight (Max. 2) for every Reson. above 2<br>"+
            "[Before Attack] At less than 10 [Charge] Count, consume 10% HP to gain +10 [Charge] Count (this damage does not reduce this unit's HP to 0; rounded down)<br>"+
            "[Before Attack] Consume up to 40 [Charge] Count and deal +1% more damage for every [Charge] Count consumed (max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict ([Charge] - 1) [Dimensional Rift] (max 2)<br>"+
            "[On Hit] Gain 1 [Haste] and 1 [Load] next turn for every [Charge] (max 3 of each per Skill)<br>"+
            "[On Kill] Gain +2 [Charge] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Outis/EGO/DimensionShredder/21107awakenprofile.png";
}