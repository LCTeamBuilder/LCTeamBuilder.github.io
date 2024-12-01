import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EverlastingFaustAwakening: Skill = {
    Name: "Everlasting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the target's Speed is slower than this unit's, deal +(5 x (Speed difference))% more damage (max 50%)<br>"+
            "[Before Attack] At 3+ highest Reson., inflict [Tremor] Potency by (2 x (highest Reson.)) (max 10)<br>"+
            "[Before Attack] If the highest Reson. was a Sloth A-Reson., inflict [Tremor] Count by [Tremor] Potency inflicted (max 10)<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Tremor] and +10 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Entanglement] into [Tremor - Everlasting]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Reduce target's Max Speed by half next turn", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Everlasting/20206awakenprofile.png"
}