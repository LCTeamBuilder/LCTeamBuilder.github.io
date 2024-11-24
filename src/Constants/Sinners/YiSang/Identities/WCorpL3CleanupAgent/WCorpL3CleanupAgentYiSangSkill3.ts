import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL3CleanupAgentYiSangSkill3 implements Skill {
    readonly Name: string = "Dimensional Rift";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At less than 15 [Charge] Count, consume 10 [Charge] Count to gain +1 Coin Power<br>"+
            "[On Use] Consume 15 [Charge] Count to gain +2 Coin Power<br>"+
            "[Before Attack] If 15 [Charge] Count has been consumed, inflict +3 [Rupture] Count"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture] for every 5 [Charge] Count consumed by the Skill (Max 9)<br>"+
            "[On Hit] If the Skill consumed 15 [Charge] Count upon use, inflict 2 [Dimensional Rift]<br>"+
            "[On Kill] Gain 5 [Charge Barrier]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/DimensionalRift.png";
}