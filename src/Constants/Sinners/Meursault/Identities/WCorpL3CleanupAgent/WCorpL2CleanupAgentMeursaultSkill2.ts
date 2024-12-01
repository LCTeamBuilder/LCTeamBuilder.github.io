import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL2CleanupAgentMeursaultSkill2: Skill = {
    Name: "Energy Cycle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If at 5+ [Charge] Count, Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "[On Hit] Spend 3 [Charge] Count to inflict 2 [Slash Fragility]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/WCorpL3CleanupAgent/EnergyCycle.png"
}