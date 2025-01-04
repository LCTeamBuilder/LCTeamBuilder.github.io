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

const LCBSinnerYiSangDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LCBSinner/GuardUT4.png"
}

const LCBSinnerYiSangSkill1: Skill = {
    Name: "Deflect",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LCBSinner/Deflect.png"
}

const LCBSinnerYiSangSkill2: Skill = {
    Name: "End-stop Stab",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking], Inflict +1 [Sinking] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LCBSinner/EndstopStab.png"
}

const LCBSinnerYiSangSkill3: Skill = {
    Name: "Enjamb",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 6,
    Coins: 3,
    CoinValue: 2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1),            new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 2),            new SkillDescriptionPart("[On Hit] If target's SP is below 0, inflict 1 [Fragile] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LCBSinner/Enjamb.png"
}

export const LCBSinnerYiSang: Identity = {
    Id: 10101,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 72,
    HealthPerLevel: 2.48,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [LCBSinnerYiSangSkill1, 
            LCBSinnerYiSangSkill2, 
            LCBSinnerYiSangSkill3, 
            LCBSinnerYiSangDefense],
    Passives: [
        new Passive("Information Relay",
            PassiveTypeEnum.Combat,
            "Apply 1 [Damage Up] to 2 allies placed after this unit on the Dashboard.",
            [{ sin: SinEnum.Gloom, amount: 4}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Information Neutralization",
            PassiveTypeEnum.Support,
            "At the end of the turn, Heal 10 SP for 1 ally with the least SP if they lost SP.",
            [{ sin: SinEnum.Gloom, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/LCBSinner/10101normal.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/LCBSinner/10101normalinfo.png"
}