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

const MulticrackOfficeFixerHeathcliffDefense: Skill = {
    Name: "Charge",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Charge] Count (2 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/ChargeUT4.png'
}

const MulticrackOfficeFixerHeathcliffSkill1: Skill = {
    Name: "4OS-2 Activation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Consume 5 [Charge] Count to gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/40S2Activation.png'
}

const MulticrackOfficeFixerHeathcliffSkill2: Skill = {
    Name: "Photoelectric Mark",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 5-9 [Charge] Count, consume 2(10 - current [Charge] Count)% HP to raise [Charge] Count to 10<br>"+
            "[On Use] Consume 10 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] If this unit consumed [Charge] Count, inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] If this unit consumed [Charge] Count, inflict 2 [Defense Level Down]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [HP Healing Down]<br>"+
            "[On Hit] Inflict [Photoelectricity] equal to [Charge] (max 3)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/PhotoelectricMark.png'
}

const MulticrackOfficeFixerHeathcliffSkill3: Skill = {
    Name: "Photoelectric Harpoon",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 2 [Charge] on self (max 2)"),
        new SkillDescriptionPart("[On Hit] Gain +7 [Charge] Count", 2),
        new SkillDescriptionPart("[On Hit] Gain +([Charge] x 3) [Charge] Count (max 9)", 3),
        new SkillDescriptionPart("[On Hit] Inflict [Photoelectricity] equal to [Charge] (max 3)<br>"+
            "[On Hit] Inflict 1 [Blunt Fragility] for every 2 [Charge] (max 2)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/PhotoelectricHarpoon.png'
}

export const MulticrackOfficeFixerHeathcliff: Identity = {
    Id: 10709,
    Name: "MultiCrack Office Fixer",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 71,
    HealthPerLevel: 2.55,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MulticrackOfficeFixerHeathcliffSkill1, 
            MulticrackOfficeFixerHeathcliffSkill2, 
            MulticrackOfficeFixerHeathcliffSkill3, 
            MulticrackOfficeFixerHeathcliffDefense],
    Passives: [
        new Passive("Charge Model L37",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count in this Encounter<br>"+
            "[Turn End] At 2+ [Charge], gain 1 [Haste] next turn<br>"+
            "[Turn End] At 3+ [Charge], gain 1 additional [Haste] and 1 [Clash Power Up] next turn",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Charging Module Installation",
            PassiveTypeEnum.Support,
            "#1 Deployed ally: Max [Charge] Count +5<br>"+
            "(When conditions are met, this effect will remain activated until the start of the next turn)",
            [{ sin: SinEnum.Envy, amount: 7 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Heathcliff/Identities/MultiCrackOfficeFixer/10709gacksung.png',
    PortraitImageDir: './assets/Sinners/Heathcliff/Identities/MultiCrackOfficeFixer/10709gacksunginfo.png'
}