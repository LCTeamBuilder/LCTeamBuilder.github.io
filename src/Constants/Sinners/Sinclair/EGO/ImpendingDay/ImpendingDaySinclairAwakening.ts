import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ImpendingDaySinclairAwakening implements Skill{
    readonly Name: string = "Impending Day";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 28;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target's HP is below 25%, +40% Damage"),
        new SkillDescriptionPart("[On Kill] Gain 1 [Attack Power Up] next turn<br>"+
            "[On Kill] Heal all allies for 15% of their Max HP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/ImpendingDay/21002awakenprofile.png";
}