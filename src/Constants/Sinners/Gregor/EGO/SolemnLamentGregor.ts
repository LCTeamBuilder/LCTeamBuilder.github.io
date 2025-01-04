import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Ego, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const SolemnLamentGregorAwakening: Skill = {
    Name: "Solemn Lament",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 3,
    SkillLevel: 2,
    SkillDescription: 
        [new SkillDescriptionPart("When this Skill flips Coins, each Coin flips against a random enemy among its targets.<br>"+
            "- The first Coin always targets the main target.<br>"+
            "- All 'On Hit' effects and all damage dealt by each Coin are inflicted only against the random target the Coin selected.<br>"+
            "When inflicting [Butterfly] with this Skill effects: (Chance to flip Heads)% chance to inflict The Departed. If this unit did not inflict The Departed, inflict The Living instead. (calculates every [Butterfly] stack independently)<br>"+
            "[After Attack] Heal (# of Coin 3 hits x 3) SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 random [Butterfly]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 random [Butterfly]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1-2 random [Butterfly]<br>"+
            "[On Hit] Lose 2-6 SP<br>"+
            "[On Hit] At 0+ SP, Reuse this Coin (5 times max per Skill)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/SolemnLament/21207awakenprofile.png"
}

const SolemnLamentGregorCorrosion: Skill = {
    Name: "Solemn Lament",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 32,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the target has less than 0 SP, deal more damage the further their SP value is from 0 (+1% more damage for every missing SP, max 45%)<br>"+
            "Against targets without SP: deal +1% more damage for every 2 [Sinking] on the target (max 45%)<br>"+
            "[On Kill] Heal 5 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Butterfly] (The Living)<br>"+
            "[On Hit] Inflict 5 [Butterfly] (The Departed)<br>"+
            "[On Hit] Inflict +3 [Sinking] Count<br>"+
            '[On Hit] If the target has 50%- HP, inflict Gloom Damage equal to "All" [Butterfly] values on the target<br>'+
            '- "All" = the sum of both The Living and The Departed on the target', 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/SolemnLament/21207erosionprofile.png"
}

export const SolemnLamentGregor: Ego = {
    Id: 21207,
    Name: "Solemn Lament",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: SolemnLamentGregorAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: SolemnLamentGregorCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Lament", PassiveTypeEnum.Ego, "Turn End: if this unit has a negative effect, gain 1 [Attack Power Up] next turn<br>"+
        "When attacking targets that are either in Panic or in E.G.O Corrosion: deal +15% more damage"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/SolemnLament/21207cg.png"
}