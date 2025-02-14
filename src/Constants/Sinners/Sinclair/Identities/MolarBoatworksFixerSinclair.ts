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

const MolarBoatworksFixerSinclairDefense: Skill = {
    Name: "Crab Bastards...!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +1 [Rupture Protection] (3 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/CrabBastardsUT4.png'
}

const MolarBoatworksFixerSinclairSkill1: Skill = {
    Name: "Fierce Assault",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +1 [Tremor] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/FierceAssault.png'
}

const MolarBoatworksFixerSinclairSkill2: Skill = {
    Name: "Steady",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +6 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/Steady.png'
}

const MolarBoatworksFixerSinclairSkill3: Skill = {
    Name: "Gamble",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Tremor] Count on self (Max 2)"),
        new SkillDescriptionPart("[On Hit] At 10+ [Tremor] Count, spend all [Tremor] Count to inflict target with the same amount of [Tremor] Count<br>"+
            "[On Hit] At less than 10 [Tremor] Count, gain 10 [Tremor] and Trigger [Tremor Burst] on self. Deal Blunt damage equal to [Tremor Burst] damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/Gamble.png'
}

export const MolarBoatworksFixerSinclair: Identity = {
    Id: 11007,
    Name: "Molar Boatworks Fixer",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarBoatworksFixerSinclairSkill1, 
            MolarBoatworksFixerSinclairSkill2, 
            MolarBoatworksFixerSinclairSkill3, 
            MolarBoatworksFixerSinclairDefense],
    Passives: [
        new Passive("Unstable Power Output",
            PassiveTypeEnum.Combat,
            "On hit with Heads Coins at 10+ [Tremor] Count on self, Inflict +1 [Tremor] and [Tremor] Count with Coin effects.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Modified Power Output",
            PassiveTypeEnum.Support,
            "1 ally with the most Max HP inflicts +1 [Tremor] with the effects of their attack Skills/Coins.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/MolarBoatworksFixer/11007gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/MolarBoatworksFixer/11007gacksunginfo.png'
}