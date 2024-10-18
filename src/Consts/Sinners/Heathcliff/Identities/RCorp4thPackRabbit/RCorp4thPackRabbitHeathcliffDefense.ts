import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RCorp4thPackRabbitHeathcliffDefense implements Skill {
    readonly Name: string = "Evade";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +1 [Charge] Count")];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Evade;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/RCorp4thPackRabbit/EvadeUT4.png";
}