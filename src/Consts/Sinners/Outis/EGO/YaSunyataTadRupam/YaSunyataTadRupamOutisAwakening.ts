import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class YaSunyataTadRupamOutisAwakening implements Skill{
    readonly Name: string = "Ya Śūnyatā Tad Rūpam";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 19;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[After Attack] Heal 18 SP<br>"+
            "[After Attack] Apply 1 [Attack Power Up] to 2 random other allies"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lust Fragility]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103awakenprofile.png";
}