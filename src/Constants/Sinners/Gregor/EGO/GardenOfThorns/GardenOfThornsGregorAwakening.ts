import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class GardenOfThornsGregorAwakening implements Skill{
    readonly Name: string = "Garden of Thorns";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 4;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain (Count of highest Reson. - 2) +1 Atk Weight (Max. 3)<br>"+
            "[On Use] Apply 1 '(Corresponding Sin Affinity) Damage Up' and 1 '(Corresponding Sin Affinity) Power Up' to (4+ Count of highest Reson.) allies.<br>"+
            "- At 4+ Corresponding Reson., apply 1 additional '(Corresponding Sin Affinity) Damage up'<br>"+
            "- At 5+ Corresponding Reson., apply 1 additional '(Corresponding Sin Affinity) Power Up'<br>"+
            "- At 6+ Corresponding A-Reson., apply the above effects next turn as well"),
        new SkillDescriptionPart("[After Attack] Heal 4 allies with the lowest HP percentages for 22% of their max HP<br>"+
            "- Heal (highest Count of Reson. - 2) more allies (Max 3)", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205awakenprofile.png";
}