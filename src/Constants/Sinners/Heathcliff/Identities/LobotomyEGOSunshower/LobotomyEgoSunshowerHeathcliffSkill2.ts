import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoSunshowerHeathcliffSkill2 implements Skill {
    readonly Name: string = "Puddle Stomp";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 10;
    readonly Coins: number = 4;
    readonly CoinValue: number = -3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] When below -15 SP, Final Power +3<br>"+
            "[On Use] When below -25 SP, Final Power +2"),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Rupture]", 3),
        new SkillDescriptionPart("Spend 5 [Sinking] to deal +20% damage<br>"+
            "[Tails Hit] Trigger [Tremor Burst]", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/PuddleStomp.png";
}