import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CavernousWailingHongLuAwakening: Skill = {
    Name: "Cavernous Wailing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has [Tremor], deal + (5 + (the sum of [Tremor] Potency and Count on target)/2)% more damage (max 30%)<br>"+
            "- At 4+ highest Reason., deal +(7.5 + (the sum of [Tremor] Potency and Count on target)/1.5)% more damage instead (max 40%)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor] and +3 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Reverb]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/CavernousWailing/20606awakenprofile.png"
}