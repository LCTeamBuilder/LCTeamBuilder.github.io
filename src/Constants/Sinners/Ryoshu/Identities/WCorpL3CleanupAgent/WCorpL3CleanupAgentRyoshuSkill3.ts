import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentRyoshuSkill3: Skill = {
    Name: "D.D.E.D.R.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 7-14 [Charge] Count<br>"+
            "Consume all [Charge] Count,<br>"+
            "And consume 3 x (15 - [Charge] Count Consumed)% HP to gain +5 Coin Power<br>"+
            "[On Use] Consume 15 [Charge] Count to gain +5 Coin Power"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 2),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 3),
        new SkillDescriptionPart("[On Kill] If the skill consumed 15 [Charge] Count upon use, apply 7 [Charge Barrier] to self and 1 other ally", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/DDEDR.png"
}