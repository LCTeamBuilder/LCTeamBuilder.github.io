import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageSalsuSinclairSkill2: Skill = {
    Name: "Slash Series",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Lose] Gain 2 [Attack Power Up] next turn<br>"+
            "[Clash Win] Do not spend [Poise] Count with critical attacks landed with this skill"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/SlashSeries.png"
}