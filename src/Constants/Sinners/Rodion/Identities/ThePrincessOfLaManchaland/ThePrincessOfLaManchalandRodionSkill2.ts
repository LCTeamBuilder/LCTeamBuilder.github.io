import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePrincessOfLaManchalandRodionSkill2 implements Skill {
    readonly Name: string = "In Finely Ground Mistfall";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] On self and 1 ally with the least max HP: apply 1 [Attack Power Up], consume up to 30 [Bloodfeast] and apply 1 [Blooming Thorn] for every 10 [Bloodfeast] consumed (2 times per turn)<br>"+
            "- Prioritizes &lt;Bloodfiend&gt; allies<br>"+
            "- If the affected ally is a &lt;Bloodfiend&gt;, this unit applies additional 1 [Attack Power Up] and 2 [Blooming Thorn]<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/InFinelyGroundMistfall.png";
}