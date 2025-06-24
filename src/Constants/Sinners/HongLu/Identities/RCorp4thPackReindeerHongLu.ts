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

const RCorp4thPackReindeerHongLuDefense: Skill = {
    Name: "Energy Condensation",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Charge] Count, Coin Power +4<br>" +
            "[On Use] Gain +3 [Charge] Count (2 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/RCorp4thPackReindeer/EnergyCondensationUT4.png'
}

const RCorp4thPackReindeerHongLuSkill1: Skill = {
    Name: "Energy Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +3% damage for every [Charge] (max 15%)<br>" +
            "At 2+ [Charge], Coin Power +1<br>" +
            "At 5+ [Charge] Count, Coin Power +1<br>" +
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +([Charge] + 1) [Charge] Count (max 4)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/RCorp4thPackReindeer/EnergyStrike.png'
}

const RCorp4thPackReindeerHongLuSkill2: Skill = {
    Name: "Mind Whip",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +4% damage with every [Charge] (max 20%)<br>" +
            "[On Use] At 5~9 [Charge] Count:<br>" +
            "- Gain 10 [Sinking] and raise this unit's [Charge] Count to 10<br>" +
            "- This Skill gains the following attributes: [Indiscriminate], [Unfocused Volley], and Atk Weight +1<br>" +
            "- [Before Use] At 5+ [Charge], this Skill does not gain the [Indiscriminate] effect<br>" +
            "[On Use] Consume 10 [Charge] Count to gain Coin Power +2<br>" +
            "[Before Attack] At 8+ remaining [Charge] Count, consume 8 [Charge] Count to deal +40% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>" +
            "[On Hit] Raise Stagger Threshold by 5% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>" +
            "[On Hit] Raise Stagger Threshold by 5% of damage dealt", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>" +
            "[On Hit] Raise Stagger Threshold by 5% of damage dealt", 3),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count<br>" +
            "[On Hit] Raise Stagger Threshold by 10% of damage dealt", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/RCorp4thPackReindeer/MindWhip.png'
}

const RCorp4thPackReindeerHongLuSkill3: Skill = {
    Name: "Concentration",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 and Coin Power +1 for every [Charge] (max 5 each)<br>" +
            "At 10+ [Charge] Count, Final Power +4<br>" +
            "[On Use] Gain +7 [Charge] Count"),
        new SkillDescriptionPart("Deal +(this Skill's Power x 5)% damage (max 150%)<br>" +
            "At 3+ [Charge], deal +20% damage for every [Charge] (max 100%)<br>" +
            "[On Hit] Gain +([Charge] + 3) [Charge] Count (max 8)<br>" +
            "[On Hit] Inflict 4 [Sinking] and +4 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/RCorp4thPackReindeer/Concentration.png'
}

export const RCorp4thPackReindeerHongLu: Identity = {
    Id: 10612,
    Name: "R Corp. 4th Pack Reindeer",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 65,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [RCorp4thPackReindeerHongLuSkill1, 
            RCorp4thPackReindeerHongLuSkill2, 
            RCorp4thPackReindeerHongLuSkill3, 
            RCorp4thPackReindeerHongLuDefense],
    Passives: [
        new Passive("Brainwave Charge-focusing Antlers",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count in this Encounter<br><br>" +

            "At 2+ [Charge]:<br>" +
            "- Inflict +1 more [Sinking] with Base Attack Skills for every 2 [Charge] (max 2, does not activate when inflicting only [Sinking] Count or when inflicting [Sinking] on self)<br>" +
            "- Deal +([Charge] x 5)% damage with Base Attack Skills (max 25%)",
            [{ sin: SinEnum.Envy, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Charged Pulverization Support",
            PassiveTypeEnum.Support,
            "1 ally with the most [Charge]: when using a Base Attack Skill that gains [Charge] Count, deal +15% damage with the final Coin",
            [{ sin: SinEnum.Envy, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/HongLu/Identities/RCorp4thPackReindeer/10612gacksung.png',
    PortraitImageDir: './assets/Sinners/HongLu/Identities/RCorp4thPackReindeer/10612gacksunginfo.png'
}