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

const ShiAssocSouthSection5DirectorDonQuixoteDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/ShiSection5/EvadeUT4.png'
}

const ShiAssocSouthSection5DirectorDonQuixoteSkill1: Skill = {
    Name: "Catch Breath",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/ShiSection5/CatchBreath.png'
}

const ShiAssocSouthSection5DirectorDonQuixoteSkill2: Skill = {
    Name: "Dual Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At less than 50% HP, gain 4 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Haste] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/ShiSection5/DualStrike.png'
}

const ShiAssocSouthSection5DirectorDonQuixoteSkill3: Skill = {
    Name: "Overbreathe",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +21,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ Speed, Skill Power +5")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/ShiSection5/Overbreathe.png'
}

export const ShiAssocSouthSection5DirectorDonQuixote: Identity = {
    Id: 10303,
    Name: "Shi Assoc. South Section 5 Director",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80, 60],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ShiAssocSouthSection5DirectorDonQuixoteSkill1, 
            ShiAssocSouthSection5DirectorDonQuixoteSkill2, 
            ShiAssocSouthSection5DirectorDonQuixoteSkill3, 
            ShiAssocSouthSection5DirectorDonQuixoteDefense],
    Passives: [
        new Passive("Prepared Mind",
            PassiveTypeEnum.Combat,
            "Gain [Haste] by (Wrath Reson. / 3) next turn.",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Divide in Two",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed deals +10% Slash damage.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/DonQuixote/Identities/ShiAssocSouthSection5Director/10303gacksung.png',
    PortraitImageDir: './assets/Sinners/DonQuixote/Identities/ShiAssocSouthSection5Director/10303gacksunginfo.png'
}