import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoSunshowerHeathcliffSkill1 implements Skill {
    readonly Name: string = "Umbrella Thwack";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 6;
    readonly Coins: number = 3;
    readonly CoinValue: number = -2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +1 [Sinking] Count<br>"+
            "[Clash Lose] Gain 3 [Sinking]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[Tails Hit] Inflict +2 [Sinking] Count", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/UmbrellaThwack.png";
}