import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheRingPointillistStudentOutisSkill2 implements Skill {
    readonly Name: string = "Sanguine Painting";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], +2 Clash Power"),
        new SkillDescriptionPart("[On Hit] 40% chance to Reuse Coin. +20% more chance to Reuse Coin for every type of negative effect on the target (2 times max per Skill)<br>"+
            "[On Hit] Inflict +1 [Bleed] Count<br>"+
            "When Reusing Coin with this unit's Coin effects, inflict +1 more [Bleed] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/SanguinePainting.png";
}