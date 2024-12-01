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
import { TheOneWhoGripsFaustDefense } from "./TheOneWhoGripsFaustDefense";
import { TheOneWhoGripsFaustSkill1 } from "./TheOneWhoGripsFaustSkill1";
import { TheOneWhoGripsFaustSkill2 } from "./TheOneWhoGripsFaustSkill2";
import { TheOneWhoGripsFaustSkill3 } from "./TheOneWhoGripsFaustSkill3";

export const TheOneWhoGripsFaust: Identity = {
    Id: 10204,
    Name: "The One Who Grips",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheOneWhoGripsFaustSkill1, 
            TheOneWhoGripsFaustSkill2, 
            TheOneWhoGripsFaustSkill3, 
            TheOneWhoGripsFaustDefense],
    Passives: [
        new Passive("Whistles",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, heal 2 allies with the least SP for 15 SP.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 2 [Fanatic].",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Whispers",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, heal 1 ally with the least SP for 15 SP.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 2 [Fanatic] .",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/TheOneWhoGrips/10204gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/TheOneWhoGrips/10204gacksunginfo.png"
}