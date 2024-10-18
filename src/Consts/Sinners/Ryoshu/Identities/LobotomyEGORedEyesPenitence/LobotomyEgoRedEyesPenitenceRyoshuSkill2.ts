import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoRedEyesPenitenceRyoshuSkill2 implements Skill {
    readonly Name: string = "S.H. / S.F.";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the sum of [Red Eyes] and [Penitence] is 15 or higher, Coin Power +1<br>"+
            "If the target has 6+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 4 [Penitence]", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Red Eyes]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Gain [Red Eyes] equal to ([Bleed] on target/2) (max 3)<br>"+
            "[Heads Hit] At 7+ [Red Eyes], gain 1 [Haste] next turn (2 times per turn)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041002.png";
}