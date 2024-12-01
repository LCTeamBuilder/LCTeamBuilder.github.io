import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { KurokumoClanWakashuRyoshuDefense } from "./KurokumoClanWakashuRyoshuDefense";
import { KurokumoClanWakashuRyoshuSkill1 } from "./KurokumoClanWakashuRyoshuSkill1";
import { KurokumoClanWakashuRyoshuSkill2 } from "./KurokumoClanWakashuRyoshuSkill2";
import { KurokumoClanWakashuRyoshuSkill3 } from "./KurokumoClanWakashuRyoshuSkill3";

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