import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePrincessOfLaManchalandRodionSkill4 implements Skill {
    readonly Name: string = "Ascendant Don Quixote Hardblood Arts - The Finale";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] To self and (highest Reson.) allies: apply (5 + (1 for every 50 [Bloodfeast Consumed] by this unit)) [Festive Fever] this turn and next turn (max 10)<br>"+
            "[On Use] To self and (highest Reson.) allies: apply 5 [Blooming Thorn]<br>"+
            "[On Use] Deal +1% more damage for every 5 [Bloodfeast Consumed] by this unit (max 50%)<br>"+
            "[After Attack] Consume all [Blooming Thorn] on self"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/AscendantDonQuixoteHardbloodArtsTheFinale.png";
}