import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LosMariachisJefeSinclairSkill3: Skill = {
    Name: "Pañata Party",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +11,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("If target's SP is below 0, boost crit chance proportional to target's SP<br>"+
            "If user has 5+ [Poise] Count, +30% Critical Damage"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 50% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/JefeDeLosMariachis/PanataParty.png"
}