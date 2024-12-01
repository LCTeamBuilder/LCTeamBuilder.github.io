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
import { LobotomyEgoRegretFaustDefense } from "./LobotomyEgoRegretFaustDefense";
import { LobotomyEgoRegretFaustSkill1 } from "./LobotomyEgoRegretFaustSkill1";
import { LobotomyEgoRegretFaustSkill2 } from "./LobotomyEgoRegretFaustSkill2";
import { LobotomyEgoRegretFaustSkill3 } from "./LobotomyEgoRegretFaustSkill3";

export const LobotomyEgoRegretFaust: Identity = {
    Id: 10207,
    Name: "Lobotomy E.G.O::Regret",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoRegretFaustSkill1, 
            LobotomyEgoRegretFaustSkill2, 
            LobotomyEgoRegretFaustSkill3, 
            LobotomyEgoRegretFaustDefense],
    Passives: [
        new Passive("Coerced Regret",
            PassiveTypeEnum.Combat,
            "- In a clash, the target has -1 Clash Power for every 3 types of negative effects it has (Max -2 Clash Power)<br>"+
            "- When this unit is alive, enemies affected by [Tremor Burst] gain 2 [Defense Level Down]. (3 times per enemy per turn)<br>"+
            "- Mental Corruption: If at less than -25 SP at Turn End, gain 2 [Bind] and 1 [Blunt Power Up] next turn",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Repression Work",
            PassiveTypeEnum.Support,
            "In a clash, the target of the slowest ally has -1 Clash Power if they have 3+ types of negative effects",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/LobotomyEGORegret/10207gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/LobotomyEGORegret/10207gacksunginfo.png"
}