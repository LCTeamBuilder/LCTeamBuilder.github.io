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
import { LobotomyEgoRedSheetSinclairDefense } from "./LobotomyEgoRedSheetSinclairDefense";
import { LobotomyEgoRedSheetSinclairSkill1 } from "./LobotomyEgoRedSheetSinclairSkill1";
import { LobotomyEgoRedSheetSinclairSkill2 } from "./LobotomyEgoRedSheetSinclairSkill2";
import { LobotomyEgoRedSheetSinclairSkill3 } from "./LobotomyEgoRedSheetSinclairSkill3";

export const LobotomyEgoRedSheetSinclair: Identity = {
    Id: 11006,
    Name: "Lobotomy E.G.O::Red Sheet",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoRedSheetSinclairSkill1, 
            LobotomyEgoRedSheetSinclairSkill2, 
            LobotomyEgoRedSheetSinclairSkill3, 
            LobotomyEgoRedSheetSinclairDefense],
    Passives: [
        new Passive("Unfixing Talismans",
            PassiveTypeEnum.Combat,
            "On hit, if the target had [Rupture], gain 1 [Talisman] .",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Wishing Talisman",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, give (Highest Reson. * 2) [Talisman] to the ally with the most HP.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/LobotomyEGORedSheet/11006gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/LobotomyEGORedSheet/11006gacksunginfo.png"
}