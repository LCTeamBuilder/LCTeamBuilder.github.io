import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BygoneDaysIshmaelAwakening implements Skill{
    readonly Name: string = "Bygone Days";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 17;
    readonly Coins: number = 1;
    readonly CoinValue: number = +9;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] At 4+ highest Reson., gain +1 Atk Weight<br>"+
            "- If the said Reson. was a Gloom Reson., gain +1 Atk Weight<br>"+
            "[After Attack] Heal 2 allies with the lowest HP percentages by (10 + (sum of [Sinking] Potency and Count on the main target)/3)% HP (max 20%)<br>"+
            "- If the highest Reson. was a 4+ Gloom Reson., heal 10% more of the max HP"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 2 [Curse]<br>"+
            "[On Hit] At 4+ Gloom Reson., inflict 1 [Gloom Fragility]<br>"+
            "[On Hit] Inflict 2 [The Uninvited]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/BygoneDays/20807awakenprofile.png";
}