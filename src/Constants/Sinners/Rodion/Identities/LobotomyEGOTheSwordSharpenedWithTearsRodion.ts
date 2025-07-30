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

const LobotomyEGOTheSwordSharpenedWithTearsRodionDefense1: Skill = {
    Name: "The Knight's Faith",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>" +
            "[Combat Start] Coin Power +1 for every 2 [Protecting Sword] (max 2)<br>" +
            "[Combat Start] Gain Shield equal to (SP / 3)% of this unit's max HP (once per turn)<br>" +
            "[On Use] Gain 5 [Deep Tears] (2 times per turn)<br>" +
            "[Turn End] At less than 3 [Tear-sharpened], lose 15 SP to gain 1 [Tear-sharpened] (once per turn)<br>" +
            "- If this unit has [Tear-sharpened], lose ([Tear-sharpened] Stack x 15) more SP"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091304.png'
}

const LobotomyEGOTheSwordSharpenedWithTearsRodionDefense2: Skill = {
    Name: "Weathered Pride",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 12,
    Coins: 2,
    CoinValue: -4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>" +
            "[Combat Start] Final Power +1 for every 2 [Piercing Sword] (max 2)<br>" +
            "[On Use] Gain 5 [Deep Tears] (2 times per turn)<br>" +
            "[Turn End] At less than 3 [Tear-sharpened], lose 15 SP and gain 1 [Tear-sharpened] (once per turn)<br>" +
            "- If this unit has [Tear-sharpened], lose ([Tear-sharpened] Stack x 15) more SP"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict 1 [Sinking]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict 1 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091308.png'
}

const LobotomyEGOTheSwordSharpenedWithTearsRodionSkill11: Skill = {
    Name: "The Knight's Sanctuary",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Sinking], Coin Power +1<br>" +
            "At 3+ [Protecting Sword], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>" +
            "[On Hit] Gain 2 [Deep Tears]<br>" +
            "- Gain 1 additional [Deep Tears] for every 2 [Protecting Sword] (max 2)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091301.png'
}

const LobotomyEGOTheSwordSharpenedWithTearsRodionSkill12: Skill = {
    Name: "Faded Faith",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 10,
    Coins: 2,
    CoinValue: -4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Final Power +1 for every 3 [Sinking] on target (max 3)<br>" +
            "[On Use] Lose 7 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>" +
            "[On Hit] Gain 2 [Deep Tears]<br>" +
            "- Combat Start: gain 1 additional [Deep Tears] for every 2 [Piercing Sword] (max 2)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091305.png'
}

const LobotomyEGOTheSwordSharpenedWithTearsRodionSkill21: Skill = {
    Name: "With the Power of Justice",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Sinking], Coin Power +1<br>" +
            "Clash Power +1 for every 2 [Protecting Sword] (max 2)<br>" +
            "[On Use] At 15+ [Deep Tears], consume 5 [Deep Tears] to deal +15% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count<br>" +
            "[On Hit] Gain 3 [Deep Tears]<br>" +
            "- Gain additional [Deep Tears] equal to [Protecting Sword] (max 5)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091302.png'
}

const LobotomyEGOTheSwordSharpenedWithTearsRodionSkill22: Skill = {
    Name: "With the Tear-sharpened Sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 16,
    Coins: 3,
    CoinValue: -4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Final Power +1 for every 3 [Sinking] on target (max 3)<br>" +
            "[On Use] Lose 10 SP<br>" +
            "[On Use] At 15+ [Deep Tears], consume 5 [Deep Tears] to deal +20% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] and +2 [Sinking] Count<br>" +
            "[On Hit] Gain 3 [Deep Tears]<br>" +
            "- Combat Start: Gain additional [Deep Tears] equal to [Piercing Sword] this unit had at Combat Start (max 5)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091306.png'
}

const LobotomyEGOTheSwordSharpenedWithTearsRodionSkill31: Skill = {
    Name: "Arcana Pierce",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Sinking], Coin Power +1<br>" +
            "Clash Power +1 for every 2 [Protecting Sword] (max 5)<br>" +
            "[On Use] At 10+ [Deep Tears], consume up to 20 [Deep Tears]<br>" +
            "- Deal +(Stack consumed x 1.5)% damage<br>" +
            "- Base Power +1 for every 5 Stack consumed<br>" +
            "[After Attack] If target is defeated, regain half of [Deep Tears] consumed by this Skill"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 2),
        new SkillDescriptionPart("If this unit has [Tear-sharpened] or has consumed it with this Coin, deal +20% damage<br>" +
            "[On Hit] Inflict [Sinking] equal to [Protecting Sword] (max 5)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091303.png'
}

const LobotomyEGOTheSwordSharpenedWithTearsRodionSkill32: Skill = {
    Name: "Arcana: Tear and Pierce",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 3,
    CoinValue: -5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Final Power +1 for every 3 [Sinking] on target (max 4)<br>" +
            "[On Use] Lose 15 SP<br>" +
            "[On Use] At 10+ [Deep Tears], consume up to 20 [Deep Tears]<br>" +
            "- Deal +(Stack consumed x 3)% damage<br>" +
            "- Base Power +1 for every 5 Stack consumed<br>" +
            "[After Attack] If target is defeated, regain half of [Deep Tears] consumed by this Skill"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking] (once per Skill)<br>" +
            "[On Hit] If this Coin consumed [Tear-sharpened], Reuse Coin once (once per turn)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/LobotomyEGOTheSwordSharpenedWithTears/1091307.png'
}

export const LobotomyEGOTheSwordSharpenedWithTearsRodion: Identity = {
    Id: 10913,
    Name: "Lobotomy E.G.O::The Sword Sharpened with Tears",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 90,
    HealthPerLevel: 3.14,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEGOTheSwordSharpenedWithTearsRodionSkill11, 
            LobotomyEGOTheSwordSharpenedWithTearsRodionSkill12,
            LobotomyEGOTheSwordSharpenedWithTearsRodionSkill21, 
            LobotomyEGOTheSwordSharpenedWithTearsRodionSkill22, 
            LobotomyEGOTheSwordSharpenedWithTearsRodionSkill31, 
            LobotomyEGOTheSwordSharpenedWithTearsRodionSkill32, 
            LobotomyEGOTheSwordSharpenedWithTearsRodionDefense1, 
            LobotomyEGOTheSwordSharpenedWithTearsRodionDefense2],
    Passives: [
        new Passive("The Sword Sharpened with Tears - !ALERT: E.G.O GEAR SYNC THRESHOLD EXCEEDED!",
            PassiveTypeEnum.Combat,
            "Turn Start: at 0 or higher SP, gain [Blessing]<br>" +
            "- Uses Plus Coin Skills as Base Skills<br><br>" +

            "Turn Start: at less than 0 SP, gain [Despair]<br>" +
            "- Uses Minus Coin Skills as Base Skills<br><br>" +

            "When gaining [Charge] Count, gain [Deep Tears] instead<br>" +
            "- [Deep Tears] is unaffected by [Charge] Potency"),
        new Passive("Whispers of the Betrayed Knight",
            PassiveTypeEnum.Combat,
            "This unit's SP does not drop below -40 from the following effects:<br>" +
            "- SP loss effects on this unit's Base Skills<br>" +
            "- SP loss effects from allied units' Support Passives<br>" +
            "- SP loss effects from [Tear-sharpened]<br>" +
            "- SP loss effects from ally death in this unit's 'Base factors decreasing Sanity'<br><br>" +

            "In an Encounter, when this unit takes damage that brings its SP to -45, maintain this unit's SP at -44 for that turn (once per Encounter)<br>" +
            "(※ This applies only to SP damages; it does not apply to SP changes or SP consuming abilities like using E.G.O Skills)"),
        new Passive("Break, Tear, and Pierce",
            PassiveTypeEnum.Combat,
            "If this unit has [Piercing Sword]: before hitting an enemy with a Base Attack Skill, consume 1 [Piercing Sword] to inflict 1 [Sinking]<br>" +
            "- If this unit has 2+ [Piercing Sword] before this turn's final Base Attack Skill's final Coin hits, consume all of it instead to inflict it as [Sinking]<br><br>" +

            "If this unit has 3 [Tear-sharpened]: before hitting an enemy with the final Coin of a Base Attack Skill, consume all [Tear-sharpened] to inflict 3 [Sinking] and +3 [Sinking] Count, and deal +50% damage with that Coin<br>" +
            "- If this effect activated, reset to 0 SP if this unit has less than 0 SP at Turn End. (when in Panic or 'E.G.O Corrosion', recover) Then, heal 30 SP"),
        new Passive("Magical Girl of Justice / Knight of Despair",
            PassiveTypeEnum.Combat,
            "When in [Blessing] state…<br>" +
            "Take -(SP / 2)% HP damage from attacks (max 20%)<br>" +
            "- Combat Start: at 3+ [Protecting Sword], gain 1 [Protection]<br>" +
            "- Combat Start: at 5 [Protecting Sword], gain 2 [Protection] and 1 [Clash Power Up] instead<br><br>" +

            "When in [Despair] state…<br>" +
            "- Deal +(-SP/2)% damage with Base Skills (max 20%)<br>" +
            "- Combat Start: at 3+ [Piercing Sword], gain 1 [Damage Up]<br>" +
            "- Combat Start: at 5 [Piercing Sword] gain 2 [Damage Up] and 1 [Power Up] instead",
            [{ sin: SinEnum.Gloom, amount: 3},
             { sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("For All Those Who Despair…",
            PassiveTypeEnum.Support,
            "Combat Start: applies to the ally with the earliest Deployment order<br>" +
            "At -15 or less SP, +1 Final Power to Minus Coin Skills<br>" +
            "At -30 or less SP, +15% damage and +1 Final Power to Minus Coin Skills instead",
            [{ sin: SinEnum.Gloom, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/LobotomyEGOTheSwordSharpenedWithTears/10913gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/LobotomyEGOTheSwordSharpenedWithTears/10913gacksunginfo.png'
}