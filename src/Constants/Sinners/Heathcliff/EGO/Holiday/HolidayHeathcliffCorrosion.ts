import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HolidayHeathcliffCorrosion: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 25,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate] Targets the unit with the Most SP<br>"+
            "If the main target's SP is higher than 15, +1 Atk Weight<br>"+
            "[Before Attack] Target loses 10 SP"),
        new SkillDescriptionPart("[On Hit] Randomly select one of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect next turn. Repeat the above process (2 + (Highest Glut. A-Reson.)) times. (7 times max)", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Holiday/20705erosionprofile.png"
}