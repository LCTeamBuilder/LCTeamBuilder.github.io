import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocWestSection3MeursaultSkill1 implements Skill {
    readonly Name: string = "Allez";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 3 Speed difference; max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Potency with its effects, but does not consume [Rupture] Count On Hit<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If this unit's Speed is faster than the target's, inflict [Rupture] equal to their Speed difference (max 3)", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Allez.png";
}