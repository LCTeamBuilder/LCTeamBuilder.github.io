import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL2CleanupAgentFaustSkill3: Skill = {
    Name: "Overcharge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Charge] Count, Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Spend 5 [Charge] Count to inflict 2 [Attack Power Down] and 3 [Paralyze] next turn")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WCorpL2CleanupAgent/Overcharge.png"
}