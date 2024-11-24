import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TwinhookPiratesFirstMateGregorSkill2 implements Skill {
    readonly Name: string = "Unilateral Business";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 7 [Bleed] on target (Max 2)<br>"+
            "[On Use] Gain +3 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 4 [Poise]<br>"+
            "[On Crit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Crit] Inflict 2 [Bleed]<br>"+
            "+50% Damage on Critical Hit", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/UnilateralBusiness.png";
}