import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentYiSangSkill3: Skill = {
    Name: "Dimensional Rift",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At less than 15 [Charge] Count, consume 10 [Charge] Count to gain +1 Coin Power<br>"+
            "[On Use] Consume 15 [Charge] Count to gain +2 Coin Power<br>"+
            "[Before Attack] If 15 [Charge] Count has been consumed, inflict +3 [Rupture] Count"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture] for every 5 [Charge] Count consumed by the Skill (Max 9)<br>"+
            "[On Hit] If the Skill consumed 15 [Charge] Count upon use, inflict 2 [Dimensional Rift]<br>"+
            "[On Kill] Gain 5 [Charge Barrier]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/DimensionalRift.png"
}