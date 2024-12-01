import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePequodCaptainIshmaelSkill1: Skill = {
    Name: "To Me!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Apply 2 [Defense Level Up] to 2 allies adjacent to this unit on the Dashboard<br>"+
            "[On Use] Next turn, the leftmost Skill Slot of 1 other ally with the highest Max HP gains +(Highest Reson.) [Aggro] (Once per turn)<br>"+
            "- At 4+ highest A-Reson., apply 1 [Protection] to the ally next turn when they gain [Aggro] (Once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/ToMe.png"
}