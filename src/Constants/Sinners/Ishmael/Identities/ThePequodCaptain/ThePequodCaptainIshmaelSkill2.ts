import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePequodCaptainIshmaelSkill2: Skill = {
    Name: "Pursue Them to the End",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Apply 3 [Offense Level Up] to 2 allies adjacent to this unit on the Dashboard<br>"+
            "[On Use] Every Reson. of the highest Reson. adds 20% chance that this unit orders the ally on its immediate right (on the Dashboard) to use [Assist Attack] this turn.<br>"+
            "- At 4+ highest A-Reson., apply 2 [Damage Up] to the ally<br>"+
            "- At 4+ Pride A-Reson., apply 2 additional [Pride Power Up]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/PursueThemToTheEnd.png"
}