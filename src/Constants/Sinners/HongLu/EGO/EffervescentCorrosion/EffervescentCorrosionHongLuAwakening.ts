import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EffervescentCorrosionHongLuAwakening implements Skill{
    readonly Name: string = "Effervescent Corrosion";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 17;
    readonly Coins: number = 1;
    readonly CoinValue: number = +15;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] At 50%- HP, +1 Atk Weight<br>"+
            "At 25%- HP, gain an additiona +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] by (Gluttony Reson. /2)<br>"+
            "[On Hit] Inflict 2 [Gluttony Fragility] next turn<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605awakenprofile.png";
}