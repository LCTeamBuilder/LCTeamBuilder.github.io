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

const LCBSinnerIshmaelDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LCBSinner/GuardUT4.png'
}

const LCBSinnerIshmaelSkill1: Skill = {
    Name: "Loggerhead",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LCBSinner/Loggerhead.png'
}

const LCBSinnerIshmaelSkill2: Skill = {
    Name: "Slide",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[Clash Win] Inflict 3 [Defense Power Down]"),            new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LCBSinner/Slide.png'
}

const LCBSinnerIshmaelSkill3: Skill = {
    Name: "Shield Bash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], Inflict 1 [Blunt Fragility]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LCBSinner/Guard.png', 
    // At time of writing this is incorrectly named in the source folder. To avoid having to manually rename this every time the
    // skill icon folder is overwritten and the rename script is ran, for the time being this will use the incorrect name until either
    // the source folder is fixed or the script is edited to automatically rename this file.
}

export const LCBSinnerIshmael: Identity = {
    Id: 10801,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 78,
    HealthPerLevel: 2.69,
    SpeedMin: 5,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +0,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LCBSinnerIshmaelSkill1, 
            LCBSinnerIshmaelSkill2, 
            LCBSinnerIshmaelSkill3, 
            LCBSinnerIshmaelDefense],
    Passives: [
        new Passive("Last-ditch Struggle",
            PassiveTypeEnum.Combat,
            "At less than 25% HP, gain +1 clash Power in a clash.",
            [{ sin: SinEnum.Wrath , amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Determination to Survive",
            PassiveTypeEnum.Support,
            "1 ally with the least HP and less than 50% of Max HP gains +1 Clash Power in a clash.",
            [{ sin: SinEnum.Wrath, amount: 6}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/LCBSinner/10801normal.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/LCBSinner/10801normalinfo.png'
}