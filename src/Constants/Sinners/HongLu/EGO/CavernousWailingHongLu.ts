import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Ego, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const CavernousWailingHongLuAwakening: Skill = {
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
    SkillImageDir: './assets/Sinners/HongLu/EGO/CavernousWailing/20606awakenprofile.png'
}

const CavernousWailingHongLuCorrosion: Skill = {
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
    SkillImageDir: './assets/Sinners/HongLu/EGO/CavernousWailing/20606erosionprofile.png'
}

export const CavernousWailingHongLu: Ego = {
    Id: 20606,
    Name: "Cavernous Wailing",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: CavernousWailingHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: CavernousWailingHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Gloominess", PassiveTypeEnum.Ego, "When this unit uses a Skill to trigger [Tremor Burst] on an enemy, inflict 1 [Offense Level Down] and 2 [Defense Level Down] on the enemy next turn. (3 times per turn, including E.G.O Skills)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 3 },
            { sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/HongLu/EGO/CavernousWailing/20606cg.png'
}