import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheRingPointillistStudentOutisSkill3 implements Skill {
    readonly Name: string = "Artwork Inspection";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], Coin Power +1<br>"+
            "Deal +12.5% more damage for every type of negative effect on the target (Max 50%)<br>"+
            "[On Use] Apply 1 [Haste] next turn to 2 allies adjacent to this unit on the Dashboard"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 3 Potency for 1 of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Effect selected at random.<br>"+
            "[After Attack] If the target is Staggered or defeated, apply 1 [Pierce DMG Up] next turn to 1 other ally with the highest SP.<br>"+
            "If the affected ally is a member of the Ring, apply 1 [Pierce Power Up] as well", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/ArtworkInspection.png";
}