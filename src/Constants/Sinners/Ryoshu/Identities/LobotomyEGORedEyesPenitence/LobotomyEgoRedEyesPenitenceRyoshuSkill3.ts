import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRedEyesPenitenceRyoshuSkill3: Skill = {
    Name: "Skullbuster",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Use] If [Red Eyes] and [Penitence] are both at 15+, activate 'Serious Skullbuster' instead<br>"+
            "If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] At max SP, gain Clash Power +2 and Coin Power +1<br>"+
            "- [After Attack] If this effect activated, lose 15 SP"),
        new SkillDescriptionPart("[On Hit] Gain 7 [Red Eyes]<br>"+
            "[On Hit] Gain 7 [Penitence]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain 2 [Penitence]", 2),
        new SkillDescriptionPart("[On Hit] Heal self and 1 ally with the lowest HP percentage by ([Penitence]/2)% of each unit's max HP<br>"+
            "[On Hit] Heal self and 1 ally with the least SP by ([Penitence] - 10) SP (min 0)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041003.png"
}