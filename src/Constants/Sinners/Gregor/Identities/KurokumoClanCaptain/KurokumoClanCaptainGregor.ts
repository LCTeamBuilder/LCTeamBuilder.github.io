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
import { KurokumoClanCaptainGregorDefense } from "./KurokumoClanCaptainGregorDefense";
import { KurokumoClanCaptainGregorSkill1 } from "./KurokumoClanCaptainGregorSkill1";
import { KurokumoClanCaptainGregorSkill2 } from "./KurokumoClanCaptainGregorSkill2";
import { KurokumoClanCaptainGregorSkill3 } from "./KurokumoClanCaptainGregorSkill3";

export const KurokumoClanCaptainGregor: Identity = {
    Id: 11208,
    Name: "Kurokumo Clan Captain",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KurokumoClanCaptainGregorSkill1, 
            KurokumoClanCaptainGregorSkill2, 
            KurokumoClanCaptainGregorSkill3, 
            KurokumoClanCaptainGregorDefense],
    Passives: [
        new Passive("Dark Cloud Blade",
            PassiveTypeEnum.Combat,
            "Clash Win: inflict 1 [Bleed] (3 times per turn)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dark Cloud Style",
            PassiveTypeEnum.Support,
            "When 1 ally with the slowest Speed hits and enemy with 7+ [Bleed], inflict 1 [Offense Level Down] next turn (3 times per turn)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/KurokumoClanCaptain/11208gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/KurokumoClanCaptain/11208gacksunginfo.png"
}