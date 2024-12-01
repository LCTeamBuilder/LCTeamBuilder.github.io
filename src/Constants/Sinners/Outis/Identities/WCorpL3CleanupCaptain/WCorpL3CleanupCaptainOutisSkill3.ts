import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupCaptainOutisSkill3: Skill = {
    Name: "Rip Dimension",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] To self and (highest Reson.) allies with [Charge]: apply [Load] equal to [Charge] on self<br>"+
            "(Max 5 other allies)<br>"+
            "[On Use] At 2+ [Charge] and 7-14 [Charge] Count, consume all [Charge] Count on self to gain Coin Power +2<br>"+
            "[On Use] Consume 15 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 15 [Charge] Count on use, inflict 3 [Rupture]<br>"+
            "[On Hit] Gain (5 - [Charge]) [Charge] Count (Min 0)", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/RipDimension.png"
}