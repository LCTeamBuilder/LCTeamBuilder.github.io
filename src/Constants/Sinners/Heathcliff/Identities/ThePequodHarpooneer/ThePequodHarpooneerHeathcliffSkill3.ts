import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePequodHarpooneerHeathcliffSkill3 implements Skill {
    readonly Name: string = "Sever Knot";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 3+ Envy Reson., Clash Power +1<br>"+
            "At 4+ Envy Reson., Coin Power +1<br>"+
            "At 6+ Envy A-Reson., Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] At 75%- HP, inflict 1 [Bleed]<br>"+
            "[On Hit] At 50%- HP, inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] At 75%- HP, inflict 1 [Bleed]<br>"+
            "[On Hit] At 50%- HP, inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Crit] +50% Damage on Critical Hit", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/ThePequodHarpooneer/SeverKnot.png";
}