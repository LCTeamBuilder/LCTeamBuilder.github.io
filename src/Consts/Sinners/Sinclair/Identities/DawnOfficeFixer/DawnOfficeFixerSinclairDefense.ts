import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DawnOfficeFixerSinclairDefense implements Skill {
    readonly Name: string = "Rue";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 15;
    readonly Coins: number = 1;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("When in a Volatile E.G.O state, Base Power +1 for every 2 [Burn] on target (max 20)")];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/RueUT4.png";
}