import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePrincessOfLaManchalandRodionSkill1 implements Skill {
    readonly Name: string = "Begone…";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] On self and 1 ally with the highest max HP: consume up to 20 [Bloodfeast] and apply 1 [Blooming Thorn] for every 10 [Bloodfeast] consumed<br>"+
            "- Prioritizes &lt;Bloodfiend&gt; allies<br>"+
            "- If the affected ally is a &lt;Bloodfiend&gt;, this unit applies 1 additional [Blooming Thorn]<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Rupture]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/Begone.png";
}