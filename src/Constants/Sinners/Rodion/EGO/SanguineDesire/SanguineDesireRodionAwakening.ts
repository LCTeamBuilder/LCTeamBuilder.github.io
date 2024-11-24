import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SanguineDesireRodionAwakening implements Skill{
    readonly Name: string = "Sanguine Desire";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 21;
    readonly Coins: number = 1;
    readonly CoinValue: number = +12;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 2 [Bleed] on target (max 13)<br>"+
            "[Combat Start] The main target for this Skill does not lose [Bleed] Count for this turn.<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End."),
        new SkillDescriptionPart("[On Hit] Inflict Lust Affinity damage equal to ([Bleed] Potency on target x 1.5)<br>"+
            "- At 4+ Lust Reson., inflict Lust Affinity damage equal to ([Bleed] Potency on target x 1.8).<br>"+
            "- At 4+ Lust A-Reson., inflict Lust Affinity damage equal to ([Bleed] Potency on target x 2).<br>"+
            "([Bleed] Potency up to only 99 will be used to calculate for this Skill.)<br>"+
            "[On Kill] If this Skill or its Coin effects dealt damage that exceeds the target's(In Focused Encounters, the Core's) remaining HP, deal the excess damage as fixed damage between all enemies.", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Rodion/EGO/SanguineDesire/20906awakenprofile.png";
}