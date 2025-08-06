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

const CrushboundPastMeursaultAwakening: Skill = {
    Name: "Crushbound Past",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +4,
    AttackWeight: 6,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] If the main target has 30+ (sum of [Tremor] Potency and [Tremor] Count), gain +1 Atk Weight<br>"+
            "- At 100+, gain +3 Atk Weight instead<br>"+
            "[Before Attack] For every 2 highest Reson., inflict 1 [Tremor] against all targets this unit attacks (max 3)<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End<br>"+
            "[After Attack] Heal ([Accumulated Past] x 2)% HP<br>"+
            "[After Attack] When activating odd-numbered (Sloth Reson.) in odd-numbered turns, or when activating even-numbered (Sloth Reson.) in even-numbered turns, heal 10 SP"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +(Sloth Reson. / 2) [Tremor] Count (max 3)<br>"+
            "[On Hit] If it's the main target, trigger [Amplitude Entanglement] to the target's current [Tremor] type", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Tremor]", 2),
        new SkillDescriptionPart("[Coin Start] This Coin deals +1% damage for every [Tremor] on the main target (max 50%)", 3),
        new SkillDescriptionPart("[Coin Start] This Coin deals +1% damage for every (sum of [Tremor] Potency and [Tremor] Count on the main target) (max 100%)<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] If this Coin's effects raised the damage dealt by 50% or more, trigger [Tremor Burst] once.<br>"+
            "[On Hit] If this Coin's effects raised the damage dealt by 100% or more, trigger [Tremor Burst] 2 times; then, reduce target's [Tremor] Count by 2", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/CrushboundPast/20508awakenprofile.png'
}

const CrushboundPastMeursaultCorrosion: Skill = {
    Name: "Crushbound Past",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 7,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "Deal +10% damage for every highest Reson. (max 100%)<br>"+
            "- If the highest Reson. was a Sloth Reson., deal +20% damage for every highest Reson. instead (max 100%)<br>"+
            "[Before Attack] If the main target has 30+ (sum of [Tremor] Potency and [Tremor] Count), gain +2 Atk Weight<br>"+
            "[Before Attack] When activating even-numbered (Sloth Reson.) in odd-numbered turns, or when activating odd-numbered (Sloth Reson.) in even-numbered turns, deal +12% damage<br>"+
            "[After Attack] Heal ([Accumulated Past] x 3)% HP"),
        new SkillDescriptionPart("[Coin Start] This Coin deals +2% damage for every (sum of [Tremor] Potency and [Tremor] Count on the main target) (max 100%)<br>"+
            "[On Hit] Inflict 5 [Tremor] and +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +(Sloth Reson.) [Tremor] Count (max 6)<br>"+
            "[On Hit] If it's the main target, trigger [Amplitude Entanglement] into the target's current [Tremor] type<br>"+
            "[On Hit] Trigger [Tremor Burst] 2 times; then, reduce target's [Tremor] Count by 2<br>"+
            "[On Hit] If this Coin's effects raised the damage dealt by +100% or more, trigger [Tremor Burst] 2 times; then, reduce target's [Tremor] Count by 2", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/CrushboundPast/20508erosionprofile.png'
}

export const CrushboundPastMeursault: Ego = {
    Id: 20508,
    Name: "Crushbound Past",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: CrushboundPastMeursaultAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: CrushboundPastMeursaultCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Metronome", PassiveTypeEnum.Ego, "Turn Start: in odd-numbered turns, gain 1 [Damage Up]; in even-numbered turns, gain 1 [Protection]<br>"+
        "- Does not stack with the Metronome E.G.O Gift. (If the said E.G.O Gift is at an enhanced state, its effect subtracts the values gained from this effect)<br>"+
        "- Does not affect the instances of its effect applied to other allies<br><br>"+

        "When using E.G.O Skill, gain 1 [Accumulated Past] next turn (once per Encounter)<br>"+
        "- Gain 1 [Accumulated Past] at every subsequent Turn End"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 6 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Meursault/EGO/CrushboundPast/20508cg.png'
}