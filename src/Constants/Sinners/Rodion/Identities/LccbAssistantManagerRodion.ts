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

const LccbAssistantManagerRodionDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCCBAssistantManager/GuardUT4.png"
}

const LccbAssistantManagerRodionSkill1: Skill = {
    Name: "Bludgeon",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If the next skill on the Dashboard does Blunt DMG, this skill's Coin Power +2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCCBAssistantManager/Bludgeon.png"
}

const LccbAssistantManagerRodionSkill2: Skill = {
    Name: "Thrust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If the next skill on the Dashboard does Blunt DMG, this skill's Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Defense Power Down]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCCBAssistantManager/Thrust.png"
}

const LccbAssistantManagerRodionSkill3: Skill = {
    Name: "Suppress",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target took no damage from attacks this turn, Coin Power +3"),
        new SkillDescriptionPart("[Heads Hit] Inflict 4 [Defense Power Down]<br>"+
            "[On Hit] Inflict 4 [Defense Level Down]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCCBAssistantManager/Suppress.png"
}

export const LccbAssistantManagerRodion: Identity = {
    Id: 10903,
    Name: "LCCB Assistant Manager",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LccbAssistantManagerRodionSkill1, 
            LccbAssistantManagerRodionSkill2, 
            LccbAssistantManagerRodionSkill3, 
            LccbAssistantManagerRodionDefense],
    Passives: [
        new Passive("Breach Defense",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to enemies that used defense skills this turn.",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Breaching",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +20% damage to enemies that used defense skills this turn.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/LCCBAssistantManager/10903gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/LCCBAssistantManager/10903gacksunginfo.png"
}