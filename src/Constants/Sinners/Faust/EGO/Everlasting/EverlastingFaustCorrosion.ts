import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EverlastingFaustCorrosion: Skill = {
    Name: "Everlasting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 36,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the main target's Speed is slower than this unit's, deal +(2.5 x (Speed difference))% more damage (max 20%)<br>"+
            "[Before Attack] At 3+ highest Reson., inflict [Tremor] Potency by highest Reson. (max 5)<br>"+
            "[Before Attack] If the highest Reson. was a Sloth A-Reson., inflict [Tremor] Count by [Tremor] Potency inflicted (max 5)"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor] and +5 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Entanglement] into [Tremor - Everlasting]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Reduce the target's Max Speed by half next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Everlasting/20206erosionprofile.png"
}