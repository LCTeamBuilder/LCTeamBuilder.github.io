import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WingbeatIshmaelAwakening implements Skill{
    readonly Name: string = "Wingbeat";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this Skill's healing exceeds this unit's max HP, redirect the excess healing to 1 ally with the least HP percentage instead"),
        new SkillDescriptionPart("[On Hit] Heal 20% of Max HP on self", 1),
        new SkillDescriptionPart("[Heads Hit] Lose 1~2 SP<br>"+
            "[Heads Hit] Reuse this Coin (5 times per Skill)<br>"+
            "[On Hit] Heal self by 8~12% of damage dealt<br>"+
            "[On Hit] Inflict 1 [Gluttony Fragility]<br>"+
            "[On Hit] Inflict 1~4 [Bleed]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/Wingbeat/20806awakenprofile.png";
}