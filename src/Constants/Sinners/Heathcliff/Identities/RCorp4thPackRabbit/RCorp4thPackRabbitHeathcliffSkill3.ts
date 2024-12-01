import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RCorp4thPackRabbitHeathcliffSkill3: Skill = {
    Name: "Quick Suppression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 5,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +2 at 6+ Speed"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 2 [Fragile]", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 2 [Fragile]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 4),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 5)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/RCorp4thPackRabbit/QuickSuppression.png"
}