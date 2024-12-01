import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentDonQuixoteSkill2: Skill = {
    Name: "Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Charge] Count, Coin Power +1"),
            new SkillDescriptionPart("[On Hit] Gain +4 [Charge] Count", 1),
            new SkillDescriptionPart("[On Hit] Gain +4 [Charge] Count", 2),
            new SkillDescriptionPart("[Heads Hit] Inflict 2 [Fragile]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/WCorpL3CleanupAgent/Leap.png"
}