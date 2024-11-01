import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePriestOfLaManchalandGregorSkill3 implements Skill {
    readonly Name: string = "Nightmare Hunt";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 100 per Skill)<br>"+
            "[On Use] Deal +1.5% more damage for every X% missing HP on self<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] Consume every excess Stack of [Bloodied Hand] past 10 Stack to gain the following effects:<br>"+
            "- Heal (Stacks consumed x 3) HP on self<br>"+
            "- If this unit consumed 10+ Stack, Coin Power +1<br>"+
            "- If this unit consumed 20+ Stack, Reuse the final Coin<br>"+
            "[On Use] Gain 10 [Bleed]<br>"+
            "[After Attack] Heal 10% HP on self"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Bloodied Hand]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] Inflict 2 [Rupture]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/TheUnforgivableSin.png";
}