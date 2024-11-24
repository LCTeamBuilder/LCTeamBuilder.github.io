import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheRingPointillistStudentYiSangSkill2 implements Skill {
    readonly Name: string = "Sanguine Pointillism";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 8;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Clash Power +1 for every 3 [Bleed] on target (max 2)<br>"+
                                "Coin Power +1 for every 3 [Bleed] Count on target (max 2)"),
        new SkillDescriptionPart("[On Hit] 40% chance to Reuse Coin, +20% more chance to Reuse Coin for every type of negative effect on the target (2 times max per Skill)<br>"+
                                "[On Hit] Inflict +1 [Bleed] Count<br>"+
                                "[On Hit] Inflict +3 Count for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/SanguinePointillism.png";
}