import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheRingPointillistStudentYiSangSkill3: Skill = {
    Name: "Hematic Coloring",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Clash Power +1 for every 3 [Bleed] on target (max 2)<br>"+
        "Coin Power +1 for every 3 [Bleed] Count on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count. If the target has 3+ types of negative effects, inflict +2 additional [Bleed] Count<br>"+
        "[On Hit] Inflict +3 Count for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]. If the target has 3+ types of negative effects, inflict 2 additional [Bleed]<br>"+
        "[On Hit] Inflict 2 Potency for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 3),
        new SkillDescriptionPart(" Deal +25% more damage for every type of negative effect on target (max 125%)<br>"+
        "[After Attack] If the target is Staggered or Defeated, inflict 2 Potency of 1 of the following effects on 2 enemies with the least negative effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/HematicColoring.png"
}