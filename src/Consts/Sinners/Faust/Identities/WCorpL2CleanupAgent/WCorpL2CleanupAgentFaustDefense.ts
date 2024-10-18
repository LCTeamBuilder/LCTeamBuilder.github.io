import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL2CleanupAgentFaustDefense implements Skill {
    readonly Name: string = "Guard";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 10;
    readonly Coins: number = 1;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/WCorpL2CleanupAgent/GuardUT4.png";
}