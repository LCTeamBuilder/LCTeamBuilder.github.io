import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SodaHongLuAwakening implements Skill{
    readonly Name: string = "Soda";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = -5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Heads Attack End] Heal 2 allies with the lowest HP percentages for 15 HP<br>"+
            "[Tails Attack End] Heal 15 SP for 2 allies with the least SP<br>"+
            "[Crit Attack End] Heal the ally with the lowest HP percentage for 8 HP; Heal the ally with the least SP for 8 SP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/Soda/20604awakenprofile.png";
}