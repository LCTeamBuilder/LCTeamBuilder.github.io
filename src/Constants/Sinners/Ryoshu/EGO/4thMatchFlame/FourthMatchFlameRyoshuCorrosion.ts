import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class FourthMatchFlameRyoshuCorrosion implements Skill{
    readonly Name: string = "4th Match Flame";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 42;
    readonly Coins: number = 1;
    readonly CoinValue: number = -22;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "Skill Power +4 against units with [Burn]<br>"+
            "Deal +5% damage per 1 [Burn] on target (Max 100%)<br>"+
            "[On Kill] Gain +3 [Attack Power Up] next turn<br>"+
            "[Failed Kill] Gain +3 [Attack Power Up] and 10 [Burn] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402erosionprofile.png";
}