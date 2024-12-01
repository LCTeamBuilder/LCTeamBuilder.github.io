import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheRingPointillistStudentOutisSkill3: Skill = {
    Name: "Artwork Inspection",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], Coin Power +1<br>"+
            "Deal +12.5% more damage for every type of negative effect on the target (Max 50%)<br>"+
            "[On Use] Apply 1 [Haste] next turn to 2 allies adjacent to this unit on the Dashboard"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 3 Potency for 1 of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Effect selected at random.<br>"+
            "[After Attack] If the target is Staggered or defeated, apply 1 [Pierce DMG Up] next turn to 1 other ally with the highest SP.<br>"+
            "If the affected ally is a member of the Ring, apply 1 [Pierce Power Up] as well", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/ArtworkInspection.png"
}