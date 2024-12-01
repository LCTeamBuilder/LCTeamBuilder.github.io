import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoSunshowerHeathcliffSkill2: Skill = {
    Name: "Puddle Stomp",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 10,
    Coins: 4,
    CoinValue: -3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] When below -15 SP, Final Power +3<br>"+
            "[On Use] When below -25 SP, Final Power +2"),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Rupture]", 3),
        new SkillDescriptionPart("Spend 5 [Sinking] to deal +20% damage<br>"+
            "[Tails Hit] Trigger [Tremor Burst]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/PuddleStomp.png"
}