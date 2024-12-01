import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RosespannerWorkshopFixerGregorSkill3: Skill = {
    Name: "Let's Grind 'Em",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst] then reduce [Tremor] Count by 2,<br>"+
            "Spend up to 4 [Charge] Count to inflict [Rupture] Count equal to [Charge] Count spent", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If target is Staggered, deal +10% damage<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If target is Staggered, deal +10% damage<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/LetsGrindEm.png"
}