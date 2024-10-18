import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WutheringHeightsChiefButlerOutisDefense implements Skill {
    readonly Name: string = "Insolent Fool...!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Evade] Inflict 1 [Sinking] (6 times per turn)")];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Evade;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/InsolentFoolUT4.png";
}