import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class KurokumoClanWakashuRodionSkill2 implements Skill {
    readonly Name: string = "Scattering Slash";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 6;
    readonly Coins: number = 2;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count<br>"+
            "At 5+ [Poise], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/KurokumoHenchwoman/ScatteringSlash.png";
}