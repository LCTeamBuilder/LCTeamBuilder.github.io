import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePequodCaptainIshmaelSkill1 implements Skill {
    readonly Name: string = "To Me!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] Apply 2 [Defense Level Up] to 2 allies adjacent to this unit on the Dashboard<br>"+
            "[On Use] Next turn, the leftmost Skill Slot of 1 other ally with the highest Max HP gains +(Highest Reson.) [Aggro] (Once per turn)<br>"+
            "- At 4+ highest A-Reson., apply 1 [Protection] to the ally next turn when they gain [Aggro] (Once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/ToMe.png";
}