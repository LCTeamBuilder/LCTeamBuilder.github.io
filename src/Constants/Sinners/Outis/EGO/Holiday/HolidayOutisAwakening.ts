import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HolidayOutisAwakening: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +11,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[After Attack] Apply 1 [Damage Up] for the Affinity with the highest Resonance count to 4 allies with the least SP<br>"+
            "[After Attack] Heal 20 SP for 4 allies with the least SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/Holiday/21105awakenprofile.png"
}