import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class KurokumoClanWakashuHongLuSkill3 implements Skill {
    readonly Name: string = "Cloudburst";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 7;
    readonly Coins: number = 3;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] This skill inflicts 1 additional [Bleed] and [Paralyze]"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Paralyze]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/KurokumoClanWakashu/Cloudburst.png";
}