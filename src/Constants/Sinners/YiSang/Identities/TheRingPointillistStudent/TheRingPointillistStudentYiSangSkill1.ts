import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheRingPointillistStudentYiSangSkill1: Skill = {
    Name: "Paint Over",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 2,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], Clash Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict +2 Count for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/PaintOver.png"
}