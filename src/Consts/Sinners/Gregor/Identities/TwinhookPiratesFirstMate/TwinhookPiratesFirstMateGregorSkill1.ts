import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TwinhookPiratesFirstMateGregorSkill1 implements Skill {
    readonly Name: string = "Negotiation Start";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 3 [Poise] If target has 7+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count<br>"+
            "[On Crit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Crit] Inflict 2 Bleed", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/NegotiationStart.png";
}