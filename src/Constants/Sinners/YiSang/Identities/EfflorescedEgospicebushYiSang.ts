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
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const EfflorescedEgospicebushYiSangDefense: Skill = {
    Name: "Scattering Aroma",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Inflict 1 [Sinking]")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/ScatteringAroma.png"
}

const EfflorescedEgospicebushYiSangSkill1: Skill = {
    Name: "Sprouting Bud",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/SproutingBud.png"
}

const EfflorescedEgospicebushYiSangSkill2: Skill = {
    Name: "Moment's Floral Breeze",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Spend 6 [Tremor] Count to turn this into an AoE skill with 3 Atk Weight<br>"+
            "If main target has 6+ [Sinking] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/MomentsFloralBreeze.png"
}

const EfflorescedEgospicebushYiSangSkill3: Skill = {
    Name: "Bloodsteeped Scent",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Lose] Lose 20 SP<br>"+
            "[On Use] Gain +6 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count", 2),
        new SkillDescriptionPart("[On Hit] If target has 6+ [Sinking], cause [Sinking Deluge]<br>"+
            "[On Hit] If user has 10+ [Tremor] Count, deal 40% of damage dealt as bonus damage", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/BloodsteepedScent.png"
}

export const EfflorescedEgospicebushYiSang: Identity = {
    Id: 10104,
    Name: "Effloresced E.G.O::Spicebush",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [EfflorescedEgospicebushYiSangSkill1, 
            EfflorescedEgospicebushYiSangSkill2, 
            EfflorescedEgospicebushYiSangSkill3, 
            EfflorescedEgospicebushYiSangDefense],
    Passives: [
        new Passive("Full Bloom",
            PassiveTypeEnum.Combat,
            "When attacking 2 or more targets at once, deal +30% damage.",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Pungent Spring Breeze",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% damage when attacking 2 or more targets at once.",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/EfflorescedEGOSpicebush/10104gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/EfflorescedEGOSpicebush/10104gacksunginfo.png"
}