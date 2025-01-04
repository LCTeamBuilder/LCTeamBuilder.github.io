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

const KurokumoClanWakashuRyoshuDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/KurokumoClanWakashu/GuardUT4.png"
}

const KurokumoClanWakashuRyoshuSkill1: Skill = {
    Name: "Focus Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has +2 [Bleed] Count, deal +20% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/KurokumoClanWakashu/FocusStrike.png"
}

const KurokumoClanWakashuRyoshuSkill2: Skill = {
    Name: "Clean Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has +5 [Bleed] Count, deal +20% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Bleed] Count<br>"+
            "[Heads Hit] Inflict 2 [Damage Down]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/KurokumoClanWakashu/CleanUp.png"
}

const KurokumoClanWakashuRyoshuSkill3: Skill = {
    Name: "Lenticular Swirl",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has +9 [Bleed] Count, deal +40% damage"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Bleed] Count<br>"+
            "[On Hit] Inflict 5 [Offense Level Down]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/KurokumoClanWakashu/LenticularSwirl.png"
}

export const KurokumoClanWakashuRyoshu: Identity = {
    Id: 10403,
    Name: "Kurokumo Clan Wakashu",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KurokumoClanWakashuRyoshuSkill1, 
            KurokumoClanWakashuRyoshuSkill2, 
            KurokumoClanWakashuRyoshuSkill3, 
            KurokumoClanWakashuRyoshuDefense],
    Passives: [
        new Passive("Kokuundō",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to targets with [Bleed].",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Muscle in Charge",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed inflicts +1 [Bleed].",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/KurokumoClanWakashu/10403gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/KurokumoClanWakashu/10403gacksunginfo.png"
}