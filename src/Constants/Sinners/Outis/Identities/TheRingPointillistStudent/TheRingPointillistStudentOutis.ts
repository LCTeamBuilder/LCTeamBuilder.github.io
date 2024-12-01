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
import { TheRingPointillistStudentOutisDefense } from "./TheRingPointillistStudentOutisDefense";
import { TheRingPointillistStudentOutisSkill1 } from "./TheRingPointillistStudentOutisSkill1";
import { TheRingPointillistStudentOutisSkill2 } from "./TheRingPointillistStudentOutisSkill2";
import { TheRingPointillistStudentOutisSkill3 } from "./TheRingPointillistStudentOutisSkill3";

export const TheRingPointillistStudentOutis: Identity = {
    Id: 11109,
    Name: "The Ring Pointillist Student",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.26,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheRingPointillistStudentOutisSkill1, 
            TheRingPointillistStudentOutisSkill2, 
            TheRingPointillistStudentOutisSkill3, 
            TheRingPointillistStudentOutisDefense],
    Passives: [
        new Passive("Sanguine Pointillist",
            PassiveTypeEnum.Combat,
            "This Identity only counts as an 'Identity that inflicts [Bleed]'. This Identity's Skills that randomly inflict [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] do not count as Skills that inflict each respective Keyword."),

        new Passive("Multitude of Dots",
            PassiveTypeEnum.Combat,
            "Combat Start: Inflict 2 Potency for 1 of the following effects on 2 enemies with the least types of negative effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Effect selected at random.<br>"+
            "(In Focused Encounters, Parts)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rough Sketch",
            PassiveTypeEnum.Support,
            "1 ally with the least SP heals 4 SP when defeating an enemy with [Bleed].<br>"+
            "Heal 1 additional SP for every type of negative effect on the target. (Max 4. 3 times per turn)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/TheRingPointillistStudent/11109gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/TheRingPointillistStudent/11109gacksunginfo.png"
}