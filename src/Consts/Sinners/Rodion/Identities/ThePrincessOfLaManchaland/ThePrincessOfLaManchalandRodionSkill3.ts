import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePrincessOfLaManchalandRodionSkill3 implements Skill {
    readonly Name: string = "The Festival Will End";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Use] At 25+ [Blooming Thorn], activate 'Ascendant Don Quixote Hardblood Arts - The Finale' instead<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] To self and (highest Reson.) allies: apply (3 + (1 for every 50 [Bloodfeast Consumed] by this unit)) [Festive Fever] this turn and next turn (max 10)<br>"+
            "[On Use] To self and (highest Reson.) allies: apply 3 [Blooming Thorn]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[On Hit] Inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/TheFestivalWillEnd.png";
}