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

const FellBulletHeathcliffAwakening: Skill = {
    Name: "Fell Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If it was an A-Reson., gain (highest Reson. + 2) [Torn Memory] instead<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[Before Attack] Gain +1 [Poise] Count<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("+15% Damage on Critical Hit for every [Torn Memory] (max 105%)<br>"+
            "[On Hit] Inflict 5 [Bleed]<br>"+
            "[On Crit] Inflict 3 [Sinking]<br>"+
            "[On Crit Kill] If this unit has the Ammo effect, gain 1 Ammo (3 times per Encounter)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/FellBullet/20707awakenprofile.png"
}

const FellBulletHeathcliffCorrosion: Skill = {
    Name: "Fell Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If it was an A-Reson., gain (highest Reson. + 2) [Torn Memory] instead<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 2) for every 3 [Torn Memory]<br>"+
            "[Before Attack] Deal +3% more damage for every [Torn Memory] (max 21%)<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[Before Attack] Deal +5% more damage for every 5 [Poise] on self (max 25%)<br>"+
            "[Before Attack] Consume 5 [Poise] on self<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed] and 3 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/FellBullet/20707erosionprofile.png"
}

export const FellBulletHeathcliff: Ego = {
    Id: 20707,
    Name: "Fell Bullet",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: FellBulletHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FellBulletHeathcliffCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Crushed Pendant", PassiveTypeEnum.Ego, "Combat Start: At 3+ highest Reson., gain 3 [Poise]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/FellBullet/20707cg.png"
}