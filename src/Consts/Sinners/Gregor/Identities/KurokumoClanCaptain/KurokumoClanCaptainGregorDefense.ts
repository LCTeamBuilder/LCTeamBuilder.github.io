import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class KurokumoClanCaptainGregorDefense implements Skill {
    readonly Name: string = "Guard";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 8;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/GuardUT4.png";
}