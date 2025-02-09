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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const CinqAssocWestSection3MeursaultDefense: Skill = {
    Name: "Défensive",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If this unit's Speed is faster than the target's by 3 or more, Coin Power +2")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Defensive.png'
}

const CinqAssocWestSection3MeursaultSkill1: Skill = {
    Name: "Allez",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 3 Speed difference, max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Potency with its effects, but does not consume [Rupture] Count On Hit<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If this unit's Speed is faster than the target's, inflict [Rupture] equal to their Speed difference (max 3)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Allez.png'
}

const CinqAssocWestSection3MeursaultSkill2: Skill = {
    Name: "Fente",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Potency or Count with its effects, but does not consume [Rupture] Count On Hit<br>"+
            "[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 2),
        new SkillDescriptionPart("If this unit does not inflict [Rupture], +5% Damage on Critical Hit for every [Rupture] Potency and Count it would have inflicted<br>"+
            "[On Hit] Inflict 4 [Rupture]<br>"+
            "[On Hit] At 7+ Speed, inflict +2 [Rupture] Count", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Fente.png'
}

const CinqAssocWestSection3MeursaultSkill3: Skill = {
    Name: "Salut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference, max 3)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not consume [Rupture] Count On Hit<br>"+
            "[Clash Win] Gain 5 [Poise]<br>"+
            "- If the target has [Focused Attack] - Meursault, gain 5 additional [Poise]"),
        new SkillDescriptionPart("[Hit after Clash Win] The final Coin deals +10% more damage", 1),
        new SkillDescriptionPart("[Hit after Clash Win] The final Coin deals +10% more damage", 2),
        new SkillDescriptionPart("Deal +20% more damage for every [Focused Attack] - Meursault on the Slot<br>"+
            "+30% Damage on Critial Hit<br>"+
            "- Deal +2% Damage on Critical Hit for every [Rupture] on the target (max 30%)<br>"+
            "[After Attack] If this Skill defeated the target or destroyed a Part, Reuse this Skill against a random target (does not activate on Reuse)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Salut.png'
}

export const CinqAssocWestSection3Meursault: Identity = {
    Id: 10511,
    Name: "Cinq Assoc. West Section 3",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocWestSection3MeursaultSkill1, 
            CinqAssocWestSection3MeursaultSkill2, 
            CinqAssocWestSection3MeursaultSkill3, 
            CinqAssocWestSection3MeursaultDefense],
    Passives: [
        new Passive("Duel Livestream",
            PassiveTypeEnum.Combat,
            "Gain 1 [Haste] next turn for every 3 [Poise] Potency on self at Turn End (max 2)<br>"+
            "On Hit with base Attack Skills: on the Slot it hit last, inflict [Focused Attack] - Meursault next turn. (once per Skill)<br>"+
            "If this unit attacked the Slot with [Focused Attack] - Meursault and defeated its owner or broke the Part, heal 7 SP",
            [{ sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("One Step Ahead",
            PassiveTypeEnum.Support,
            "The fastest ally, on Clash Win, gains 1 [Haste] next turn (2 times per turn)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/CinqAssocWestSection3/10511gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/CinqAssocWestSection3/10511gacksunginfo.png'
}