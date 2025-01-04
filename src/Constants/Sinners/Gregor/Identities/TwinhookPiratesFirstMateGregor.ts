import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const TwinhookPiratesFirstMateGregorDefense: Skill = {
    Name: "Take a Breather",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Gain 1 [Poise] (Max 5 per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/TakeABreather.png"
}

const TwinhookPiratesFirstMateGregorSkill1: Skill = {
    Name: "Negotiation Start",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 3 [Poise]<br>"+
            "If target has 7+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count<br>"+
            "[On Crit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Crit] Inflict 2 Bleed", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/NegotiationStart.png"
}

const TwinhookPiratesFirstMateGregorSkill2: Skill = {
    Name: "Unilateral Business",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 7 [Bleed] on target (Max 2)<br>"+
            "[On Use] Gain +3 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 4 [Poise]<br>"+
            "[On Crit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Crit] Inflict 2 [Bleed]<br>"+
            "+50% Damage on Critical Hit", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/UnilateralBusiness.png"
}

const TwinhookPiratesFirstMateGregorSkill3: Skill = {
    Name: "Foregone Conclusion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Poise] for every 3 [Bleed] on target (Max 10)<br>"+
            "Gain Coin Power +1 for every 7 [Poise] on self (Max 3)"),
        new SkillDescriptionPart("[On Crit] Inflict 2 [Bleed] Count", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "+100% Damage on Critical Hit<br>"+
            "[On Kill] Gain 1 [Plus Coin Boost] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/ForegoneConclusion.png"
}

export const TwinhookPiratesFirstMateGregor: Identity = {
    Id: 11207,
    Name: "Twinhook Pirates First Mate",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TwinhookPiratesFirstMateGregorSkill1, 
            TwinhookPiratesFirstMateGregorSkill2, 
            TwinhookPiratesFirstMateGregorSkill3, 
            TwinhookPiratesFirstMateGregorDefense],
    Passives: [
        new Passive("Bullets are Pricey",
            PassiveTypeEnum.Combat,
            "- Always Activate: Begin encounters with 7 [Ammo]<br>"+
            "- On Heads Hit against target with [Bleed], gain [Unjust Enrichment]. (Max 4)<br>"+
            "If a Coin that uses [Ammo] hits, consume all [Unjust Enrichment] and deal (25 x [Unjust Enrichment] consumed)% of damage dealt as bonus damage.<br>"+
            "- If this unit Critical Hits when out of [Ammo], consume all [Unjust Enrichment] and deal (5 x [Unjust Enrichment] consumed)% of damage dealt as bonus damage",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("New Breathing Hole",
            PassiveTypeEnum.Support,
            "If 1 ally with the most [Poise] defeats an enemy, gain 1 [Pierce DMG Up] next turn. (Once per turn)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/TwinhookPiratesFirstMate/11207gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/TwinhookPiratesFirstMate/11207gacksunginfo.png"
}