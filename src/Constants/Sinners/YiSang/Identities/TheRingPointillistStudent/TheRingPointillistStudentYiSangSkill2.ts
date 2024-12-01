import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheRingPointillistStudentYiSangSkill2: Skill = {
    Name: "Sanguine Pointillism",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Clash Power +1 for every 3 [Bleed] on target (max 2)<br>"+
        "Coin Power +1 for every 3 [Bleed] Count on target (max 2)"),
        new SkillDescriptionPart("[On Hit] 40% chance to Reuse Coin, +20% more chance to Reuse Coin for every type of negative effect on the target (2 times max per Skill)<br>"+
        "[On Hit] Inflict +1 [Bleed] Count<br>"+
        "[On Hit] Inflict +3 Count for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/SanguinePointillism.png"
}