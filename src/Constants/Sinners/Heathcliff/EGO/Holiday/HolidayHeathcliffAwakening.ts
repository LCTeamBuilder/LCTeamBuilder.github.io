import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HolidayHeathcliffAwakening: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Randomly select one of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect next turn. Repeat the above process (2 + (Highest Glut. A-Reson.)) times. (7 times max)<br>"+
            "[On Kill] Randomly select one of the following effects: 2 [Poise] Count, 2 [Charge] Count, 2 [Haste], 2 [Offense Level Up], or 2 [Defense Power Up]. Then, apply the selected effect to 2 random allies next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Holiday/20705awakenprofile.png"
}