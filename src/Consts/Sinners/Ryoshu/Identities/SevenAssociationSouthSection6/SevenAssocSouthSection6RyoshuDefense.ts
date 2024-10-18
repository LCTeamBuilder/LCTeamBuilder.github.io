import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SevenAssocSouthSection6RyoshuDefense implements Skill {
    readonly Name: string = "Counter";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 8;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Slash Fragility]")];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Counter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/SevenAssociationSouthSection6/Counter.png";
}