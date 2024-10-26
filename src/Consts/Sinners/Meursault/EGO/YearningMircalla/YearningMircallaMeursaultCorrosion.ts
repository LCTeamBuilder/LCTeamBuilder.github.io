import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class YearningMircallaMeursaultCorrosion implements Skill{
    readonly Name: string = "Yearning Mircalla";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 6;
    readonly Coins: number = 4;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "Coin Power +1 for every 6 (sum of [Bleed] on self and the target) (max 3)<br>"+
            "[On Use] Consume up to 10% of this unit's max HP and deal (HP consumed / 2) damage to all enemies and allies<br>"+
            "- At less than 50% of this unit's max HP, inflict and activate 5 [Bleed] on all allies instead (lose 1 [Bleed] Count). Heal HP equal to the amount of [Bleed] damage dealt to allies"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed] on self and the target<br>"+
            "[On Hit] Activate [Bleed] on self and the target once (both lose 1 Count)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed] on self and the target<br>"+
            "[On Hit] Activate [Bleed] on self and the target once (both lose 1 Count)", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[Hit after Clash Win] Inflict +2 [Rose Wedge] Count<br>"+
            "[On Hit] Inflict +2 [Rose Wedge] Count<br>"+
            "- If the target did not have [Rose Wedge], inflict 4 additional [Rose Wedge] Potency", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[Hit after Clash Win] Activate the target's [Bleed] (1 + (highest Reson./2)) times. (3 times max; target loses [Bleed] Count equal to the number of times it was activated)<br>"+
            "[On Kill] When dealing excess damage past the enemy's remaining HP, deal the excess damage as fixed damage between all enemies. (min 1)", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Meursault/EGO/YearningMircalla/20507erosionprofile.png";
}