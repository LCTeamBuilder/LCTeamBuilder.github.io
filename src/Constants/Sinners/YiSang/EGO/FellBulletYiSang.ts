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

const FellBulletYiSangAwakening: Skill = {
    Name: "Fell Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 18,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 7,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the ally with the least HP<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If the said Reson. was a Pride Reson., gain (highest Reson. x 2) [Torn Memory] instead (max 7)<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("This Coin only deals damage against the main target.<br>"+
            "If the main target is an ally, deal +15% more damage for every [Torn Memory] (max 105%)<br>"+
            "[On Ally Kill] Apply 3 [Poise] to self and 2 allies<br>"+
            "[On Ally Kill] +1 E.G.O resource for the killed ally's Skill 1 and 2 Affinities<br>"+
            "[On Ally Kill Fail] Gain 3 [Poise]", 1),
        new SkillDescriptionPart("This Coin only deals damage against the sub-targets<br>"+
            "- If the first Coin failed to kill the ally, 1 random sub-target takes damage<br>"+
            "+9% Damage on Critical Hit for every [Torn Memory] (max 63%)<br>"+
            "[On Crit] Inflict 3 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/FellBullet/20107awakenprofile.png'
}

const FellBulletYiSangCorrosion: Skill = {
    Name: "Fell Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 30,
    Coins: 2,
    CoinValue: -8,
    AttackWeight: 7,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the ally with the least HP<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If the said Reson. was a Pride Reson., gain (highest Reson. x 2) [Torn Memory] instead (max 7)<br>"+
            "[Before Attack] Deal +4% more damage for every [Torn Memory] (max 28%)<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("This Coin deals damage only against the main target.<br>"+
            "If the main target is an ally, deal +15% more damage for every [Torn Memory] (max 105%)<br>"+
            "If the main target is an ally, deal +2% more damage for every [Poise] on self (max 50%)<br>"+
            "+30% damage on Critical Hit<br>"+
            "[On Ally Kill] Apply 4 [Poise] to self and 3 allies<br>"+
            "[On Ally Kill] The next Coin deals +7% more damage for every [Torn Memory] (max 49%)<br>"+
            "[On Ally Kill] +1 E.G.O resource for the killed ally's Skill 1, 2, and 3 Affinities<br>"+
            "[On Ally Kill Fail] Gain 3 [Poise]", 1),
        new SkillDescriptionPart("This Coin deals damage only against the sub-targets<br>"+
            "- If the first Coin failed to kill the ally, 1 random sub-target takes damage<br>"+
            "+4% Damage on Critical Hit for every [Torn Memory] (max 28%)<br>"+
            "[On Crit] Inflict 5 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/FellBullet/20107erosionprofile.png'
}

export const FellBulletYiSang: Ego = {
    Id: 20107,
    Name: "Fell Bullet",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FellBulletYiSangAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: FellBulletYiSangCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Next", PassiveTypeEnum.Ego, "After Attack: if the target is killed, gain +2 [Poise] Count (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Pride, amount: 6 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/YiSang/EGO/FellBullet/20107cg.png'
}