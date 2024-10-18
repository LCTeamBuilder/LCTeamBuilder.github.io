import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoRedEyesPenitenceRyoshuSkill3 implements Skill {
    readonly Name: string = "Skullbuster";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Use] If [Red Eyes] and [Penitence] are both at 15+, activate 'Serious Skullbuster' instead<br>"+
            "If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] At max SP, gain Clash Power +2 and Coin Power +1<br>"+
            "- [After Attack] If this effect activated, lose 15 SP"),
        new SkillDescriptionPart("[On Hit] Gain 7 [Red Eyes]<br>"+
            "[On Hit] Gain 7 [Penitence]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain 2 [Penitence]", 2),
        new SkillDescriptionPart("[On Hit] Heal self and 1 ally with the lowest HP percentage by ([Penitence]/2)% of each unit's max HP<br>"+
            "[On Hit] Heal self and 1 ally with the least SP by ([Penitence] - 10) SP (min 0)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041003.png";
}