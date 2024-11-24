import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePriestOfLaManchalandGregorSkill2 implements Skill {
    readonly Name: string = "Suffocating Guilt";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 10 [Bleed]<br>"+
            "[On Use] At 5+ [Ailing Heart], consume up to 60 [Bloodfeast]; then, gain 1 [Bloodied Hand] for every 6 [Bloodfeast] consumed<br>"+
            "- At less than 5+ [Ailing Heart], gain 10 [Bleed] and 3 [Bloodied Hand]"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Gain 3 [Bloodied Hand]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/SuffocatingGuilt.png";
}