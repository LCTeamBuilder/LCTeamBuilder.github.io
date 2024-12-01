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
import { KurokumoClanWakashuHongLuDefense } from "./KurokumoClanWakashuHongLuDefense";
import { KurokumoClanWakashuHongLuSkill1 } from "./KurokumoClanWakashuHongLuSkill1";
import { KurokumoClanWakashuHongLuSkill2 } from "./KurokumoClanWakashuHongLuSkill2";
import { KurokumoClanWakashuHongLuSkill3 } from "./KurokumoClanWakashuHongLuSkill3";

export const KurokumoClanWakashuHongLu: Identity = {
    Id: 10602,
    Name: "Kurokumo Clan Wakashu",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KurokumoClanWakashuHongLuSkill1, 
            KurokumoClanWakashuHongLuSkill2, 
            KurokumoClanWakashuHongLuSkill3, 
            KurokumoClanWakashuHongLuDefense],
    Passives: [
        new Passive("Hēiyúndào",
            PassiveTypeEnum.Combat,
            "The last Coin on the last skill in the chain inflicts 3 [Bleed].",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Syndicate Payback",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed inflicts +1 [Bleed].",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/KurokumoClanWakashu/10602gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/KurokumoClanWakashu/10602gacksunginfo.png"
}