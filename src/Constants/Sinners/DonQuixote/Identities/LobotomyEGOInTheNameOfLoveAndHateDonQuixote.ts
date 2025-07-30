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

const LobotomyEGOInTheNameOfLoveAndHateDonQuixoteDefense: Skill = {
    Name: "Rapid Chant",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>" +
            "[On Use] Base Power +1 for every [Hysteria] (max 3)<br>" +
            "[On Use] Gain +4 [LoveHate] Count (2 times per turn)"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOInTheNameOfLoveAndHate/1031204.png'
}

const LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill11: Skill = {
    Name: "By Manager Esquire's Orders, I Am Here!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Consume 5 [LoveHate] on self to gain Coin Power +1<br>" +
            "[On Use] Coin Power +1 for every 2 [LoveHate] (max 2)<br>" +
            "[On Use] Gain +3 [LoveHate] Count"),
        new SkillDescriptionPart("[On Hit] Gain +3 [LoveHate] Count<br>" +
            "[On Hit] Inflict 3 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOInTheNameOfLoveAndHate/1031201.png'
}

const LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill12: Skill = {
    Name: "Where are… the villains…?",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 12,
    Coins: 2,
    CoinValue: -4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% damage for every [Hysteria] on self (max 15%)<br>" +
            "[On Use] Consume 5 [LoveHate] Count on self to gain Base Power +1<br>" +
            "[On Use] Gain +3 [LoveHate] Count<br>" +
            "[On Use] Lose 5 SP"),
        new SkillDescriptionPart("[On Hit] Gain +3 [LoveHate] Count<br>" +
            "[On Hit] Inflict 3 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOInTheNameOfLoveAndHate/1031205.png'
}

const LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill21: Skill = {
    Name: "With Love! Hyah!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Deal +10% damage for every [LoveHate] on self (max 50%)<br>" +
            "[On Use] Consume 6 [LoveHate] Count on self to gain Coin Power +1<br>" +
            "[On Use] Gain +5 [LoveHate] Count"),
        new SkillDescriptionPart("[On Hit] Gain +4 [LoveHate] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>" +
            "[On Hit] Inflict [Mark of Villainy] against the main target next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOInTheNameOfLoveAndHate/1031202.png'
}

const LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill22: Skill = {
    Name: "Get out of my head…",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 15,
    Coins: 2,
    CoinValue: -6,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 for every [Hysteria] on self (max 2)<br>" +
            "- At 3 [Hysteria], gain +1 Atk Weight<br>" +
            "- Deal -50% damage against sub-targets<br>" +
            "[On Use] Consume 6 [LoveHate] Count on self to gain Base Power +1<br>" +
            "[On Use] Gain +5 [LoveHate] Count<br>" +
            "[On Use] Lose 8 SP"),
        new SkillDescriptionPart("[On Hit] Gain +3 [LoveHate] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>" +
            "[On Hit] Inflict [Mark of Villainy] against the main target next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOInTheNameOfLoveAndHate/1031206.png'
}

const LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill31: Skill = {
    Name: "Arcana Beats!! / Minor Arcana Slave!!!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +30% damage for every [Magical Arcana] on self (max 90%)<br>" +
            "[On Use] At 3+ [LoveHate], deal +([LoveHate] x 20)% damage (max 100%)<br>" +
            "[On Use] At 3+ [LoveHate], Base Power +2<br>" +
            "[On Use] Consume [LoveHate] Count to gain Coin Power (Coin Power +1 for every 5 Count consumed, max 4)<br>" +
            "[On Use] Gain +6 [LoveHate] Count<br>" +
            "[After Attack] Gain 1 [Magical Arcana]"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit without Cracking] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit without Cracking] Inflict 2 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOInTheNameOfLoveAndHate/1031203.png'
}

const LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill32: Skill = {
    Name: "Reversed Beats / Reversed Arcana Slave",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 20,
    Coins: 3,
    CoinValue: -6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("This Skill deals -50% damage against sub-targets<br><br>" +

            "[On Use] Consume all [Hysteria]; Clash Power +1 for every Stack consumed (max 3)<br>" +
            "[On Use] Consume [LoveHate] Count to gain Clash Power (Clash Power +1 for every 5 Count consumed, max 4)<br>" +
            "[On Use] Deal +24% damage for every [LoveHate] on self (max 120%)<br>" +
            "[Before Attack] Consume all [Magical Arcana] on self; gain +1 Atk Weight for every Stack consumed (max 3)<br>" +
            "- If this Skill consumed 3 [Hysteria], gain +1 Atk Weight<br>" +
            "[Before Attack] If this Skill only has a single target (for Focused Encounters, a Part), deal +(20 x (Atk Weight - 1))% damage (max 80%)<br>" +
            "[Before Attack] Base Power -6 for every Cracked Coin (max -18)<br>" +
            "[Turn End] If this unit isn't at -45 SP, and is at less than 0 SP, heal 10 SP. Heal more SP the further this unit's SP value is from 0 (2 SP healed for every missing SP, max 50 SP)<br>" +
            "[On Use] Lose 10 SP"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit without Cracking] Inflict 2 [Sinking]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit without Cracking] Inflict 2 [Sinking]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOInTheNameOfLoveAndHate/1031207.png'
}

export const LobotomyEGOInTheNameOfLoveAndHateDonQuixote: Identity = {
    Id: 10312,
    Name: "Lobotomy E.G.O::In the Name of Love and Hate",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 15],
    DefenseLevel: +2,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill11, 
            LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill12,
            LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill21, 
            LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill22, 
            LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill31, 
            LobotomyEGOInTheNameOfLoveAndHateDonQuixoteSkill32, 
            LobotomyEGOInTheNameOfLoveAndHateDonQuixoteDefense],
    Passives: [
        new Passive("In the Name of Love and Hate - !ALERT: E.G.O GEAR SYNC THRESHOLD EXCEEDED!",
            PassiveTypeEnum.Combat,
            "Gain 1 [LoveHate] every time this unit consumes 10 cumulative [LoveHate] Count in this Encounter<br><br>" +

            "Encounter Start: if this unit does not have [Hysteria], gain [Hysteria]<br>" +
            "Encounter Start: if this unit does not have [LoveHate], gain [LoveHate]<br><br>" +

            "Turn Start:<br>" +
            "- At 0 or higher SP, gain [Here Comes Magical Girl] and lose [Regressive Transformation - Reversed]<br>" +
            "- At less than 0 SP, gain [Regressive Transformation - Reversed] and lose [Here Comes Magical Girl]<br><br>" +

            "This unit's SP cannot drop below -40 due to the SP loss effects from this unit's Base Attack Skills"),
        new Passive("Magical Girl of Love / Queen of Hatred",
            PassiveTypeEnum.Combat,
            "Deal +2% damage for every [LoveHate] (max 10%)<br>" +
            "Combat Start: gain 1 [Magical Arcana]",
            [{ sin: SinEnum.Envy, amount: 4}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Magical Power Charging Support",
            PassiveTypeEnum.Support,
            "If, among allies that gain [Charge] Count with their Base Attack Skills, 1 ally with the least [Charge] Count uses a Base Attack Skill that gains [Charge] Count, they gain +2 [Charge] Count (2 times per turn)<br>" +
            "- At 0 or higher SP: heal ([Charge] on target x 2) HP (max 10; heals up to 20 per turn)<br>" +
            "- At less than 0 SP: heal ([Charge] on target) SP (max 5; heals up to 10 per turn)",
            [{ sin: SinEnum.Envy, amount: 3}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/DonQuixote/Identities/LobotomyEGOInTheNameOfLoveAndHate/10312gacksung.png',
    PortraitImageDir: './assets/Sinners/DonQuixote/Identities/LobotomyEGOInTheNameOfLoveAndHate/10312gacksunginfo.png'
}