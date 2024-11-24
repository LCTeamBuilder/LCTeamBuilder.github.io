import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoRedEyesPenitenceRyoshuSkill1 implements Skill {
    readonly Name: string = "Both of You, Shut Up";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 7+ [Red Eyes], Coin Power +1<br>"+
            "At 7+ [Penitence], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Penitence]<br>"+
            "[Heads Hit] Gain 1 [Penitence]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Red Eyes]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041001.png";
}