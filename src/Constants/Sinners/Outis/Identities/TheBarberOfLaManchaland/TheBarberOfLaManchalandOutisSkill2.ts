import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheBarberOfLaManchalandOutisSkill2 implements Skill {
    readonly Name: string = "Scission";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("On Hit with this Skill: heal 20% of the HP damage dealt (max 20)<br>"+
            "[On Use] Consume up to 60 [Bloodfeast] and gain 1 [Blood-tinged Scissorblades] for every 6 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sewing Target] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/Scission.png";
}