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

const MolarBoatworksFixerIshmaelDefense: Skill = {
    Name: "Nimble Steps",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Rupture Protection] (6 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/NimbleStepsUT4.png'
}

const MolarBoatworksFixerIshmaelSkill1: Skill = {
    Name: "Ready to Crush",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/ReadyToCrush.png'
}

const MolarBoatworksFixerIshmaelSkill2: Skill = {
    Name: "Explosive Blast",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] Gain +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Defense Level Down] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/ExplosiveBlast.png'
}

const MolarBoatworksFixerIshmaelSkill3: Skill = {
    Name: "Risky Judgement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 5 [Tremor] Count on self (Max 2)<br>"+
            "If target has 6+ [Sinking], deal +40% damage"),
        new SkillDescriptionPart("[On Hit] Inflict +5 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Spend 5 [Tremor] Count to inflict 1 [Fragile] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Spend 5 [Tremor] Count to inflict 2 [Fragile] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/RiskyJudgement.png'
}

export const MolarBoatworksFixerIshmael: Identity = {
    Id: 10807,
    Name: "Molar Boatworks Fixer",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarBoatworksFixerIshmaelSkill1, 
            MolarBoatworksFixerIshmaelSkill2, 
            MolarBoatworksFixerIshmaelSkill3, 
            MolarBoatworksFixerIshmaelDefense],
    Passives: [
        new Passive("Crushin' Crabs",
            PassiveTypeEnum.Combat,
            "On hit against a target with [Tremor], inflict +1 [Sinking] Count",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Crab Driver",
            PassiveTypeEnum.Support,
            "When an ally with the lowest Max HP hits with Heads Coins, they inflict +1 [Sinking] Count when inflicting [Tremor] Count on their target with Coin effects.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/MolarBoatworksFixer/10807gacksung.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/MolarBoatworksFixer/10807gacksunginfo.png'
}