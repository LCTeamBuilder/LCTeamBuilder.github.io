import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CavernousWailingHongLuCorrosion: Skill = {
    Name: "Cavernous Wailing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 26,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the target has [Tremor], deal + (5 + (the sum of [Tremor] Potency and Count on target)/2)% more damage (max 40%)<br>"+
            "- At 4+ highest Reason., deal +(7.5 + (the sum of [Tremor] Potency and Count on target)/1.5)% more damage instead (max 50%)"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor] and +6 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Reverb]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/CavernousWailing/20606erosionprofile.png"
}