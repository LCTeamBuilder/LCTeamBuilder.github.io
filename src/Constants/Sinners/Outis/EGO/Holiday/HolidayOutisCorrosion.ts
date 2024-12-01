import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HolidayOutisCorrosion: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 34,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 5,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] This unit loses 10% HP"),
        new SkillDescriptionPart("[On Hit] Target loses 10 SP<br>"+
            "[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 2 Fragility for the Affinity with the highest Resonance count<br>"+
            "[Tails Attack End] Gain 1 'Damage Up' to the Affinity with the highest Resonance count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/Holiday/21105erosionprofile.png"
}