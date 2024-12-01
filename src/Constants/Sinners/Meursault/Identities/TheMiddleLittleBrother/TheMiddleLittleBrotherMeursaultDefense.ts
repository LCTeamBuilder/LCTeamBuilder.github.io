import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheMiddleLittleBrotherMeursaultDefense: Skill = {
    Name: "Multifold Retribution",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 4+ Envy Reson., Coin Power +1"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/TheMiddleLittleBrother/MultifoldRetribution.png"
}