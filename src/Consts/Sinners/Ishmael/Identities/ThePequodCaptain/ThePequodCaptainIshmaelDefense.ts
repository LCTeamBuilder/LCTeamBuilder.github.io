import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePequodCaptainIshmaelDefense implements Skill {
    readonly Name: string = "Do Not Fear";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 10;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Heal 5 SP for 2 allies adjacent to this unit on the Dashboard (2 times max)")];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/DoNotFearUT4.png";
}