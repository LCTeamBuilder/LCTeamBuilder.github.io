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

const RosespannerWorkshopRepRodionDefense: Skill = {
    Name: "Preheat",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain +2 [Charge] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/PreheatUT4.png'
}

const RosespannerWorkshopRepRodionSkill1: Skill = {
    Name: "Rev Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]<br>"+
            "[On Hit] Gain +4 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/RevUp.png'
}

const RosespannerWorkshopRepRodionSkill2: Skill = {
    Name: "Vibration Compression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]<br>"+
            "At 3+ [Charge] Count, reuse this Coin if it lands Heads (Up to 2 times)<br>"+
            "Inflict 2 more [Tremor] each time the Coin is reused<br>"+
            "If the Coin is reused twice, inflict [Tremor], then trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/VibrationCompression.png'
}

const RosespannerWorkshopRepRodionSkill3: Skill = {
    Name: "Let's Rack Up Some Scores",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 6+ [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1<br>"+
            "[On Hit] If target is Staggered, deal 25% of damage dealt as bonus damage")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/LetsRackUpSomeScores.png'
}

export const RosespannerWorkshopRepRodion: Identity = {
    Id: 10905,
    Name: "Rosespanner Workshop Rep",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RosespannerWorkshopRepRodionSkill1, 
            RosespannerWorkshopRepRodionSkill2, 
            RosespannerWorkshopRepRodionSkill3, 
            RosespannerWorkshopRepRodionDefense],
    Passives: [
        new Passive("Here's to Getting Off Early~",
            PassiveTypeEnum.Combat,
            "When bursting [Tremor], spend 3 [Charge] Count to increase the Stagger Threshold raise by +40%., After bursting [Tremor], gain 1 [Haste] and 1 [Blunt DMG Up] next turn.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Resonant Spanner",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Speed triggers [Tremor Burst], increase the Stagger Threshold raise by +20%.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/RosespannerWorkshopRep/10905gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/RosespannerWorkshopRep/10905gacksunginfo.png'
}