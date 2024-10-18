import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocSouthSection4GregorDefense implements Skill {
    readonly Name: string = "The Best Defense";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 15;
    readonly Coins: number = 1;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] Gain Shield by (2*[Defense Level Up] on self)<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn")];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/TheBestDefenseUT4.png";
}