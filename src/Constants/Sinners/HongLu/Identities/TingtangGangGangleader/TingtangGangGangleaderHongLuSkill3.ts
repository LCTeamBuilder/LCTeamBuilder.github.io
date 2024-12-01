import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TingtangGangGangleaderHongLuSkill3: Skill = {
    Name: "Mutilate",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +25,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Kill] Use this skill 1 more time"),
        new SkillDescriptionPart("[Heads Hit] Damage +7<br>"+
            "[Reuse - Heads Hit] +100% damage for this Coin<br>"+
            "[Reuse - Heads Hit] If target has 10+ [Bleed], deal +50% damage", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/Mutilate.png"
}