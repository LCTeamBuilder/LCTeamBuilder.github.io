import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoSunshowerHeathcliffSkill3 implements Skill {
    readonly Name: string = "Spread Out!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 18;
    readonly Coins: number = 3;
    readonly CoinValue: number = -7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 6 [Sinking] and +3 [Sinking] Count"),
        new SkillDescriptionPart("[Tails Hit] Inflict 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[Tails Hit] Inflict 1 [Fragile] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/SpreadOut.png";
}