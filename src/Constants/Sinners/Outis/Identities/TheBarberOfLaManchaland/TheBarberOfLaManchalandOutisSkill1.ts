import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheBarberOfLaManchalandOutisSkill1 implements Skill {
    readonly Name: string = "Sewing";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("On Hit with this Skill: heal 10% of the HP damage dealt (max 10)<br>"+
            "[On Use] Consume up to 40 [Bloodfeast] and gain 1 [Blood-tinged Scissorblades] for every 8 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain +2 [Bleed] Count<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict +1 [Bleed] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/Sewing.png";
}