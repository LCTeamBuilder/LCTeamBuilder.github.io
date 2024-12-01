import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WildHuntHeathcliffSkill1: Skill = {
    Name: "Beheading",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 6+ [Sinking], Clash Power +1<br>"+
            "[On Use] Coin Power +1 for every 3 [Sinking] Count on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/Beheading.png"
}