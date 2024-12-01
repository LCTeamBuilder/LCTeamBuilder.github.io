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
import { TheRingPointillistStudentYiSangDefense } from "./TheRingPointillistStudentYiSangDefense";
import { TheRingPointillistStudentYiSangSkill1 } from "./TheRingPointillistStudentYiSangSkill1";
import { TheRingPointillistStudentYiSangSkill2 } from "./TheRingPointillistStudentYiSangSkill2";
import { TheRingPointillistStudentYiSangSkill3 } from "./TheRingPointillistStudentYiSangSkill3";

export const TheRingPointillistStudentYiSang: Identity = {
    Id: 10109,
    Name: "The Ring Pointillist Student",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 190,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheRingPointillistStudentYiSangSkill1, 
            TheRingPointillistStudentYiSangSkill2, 
            TheRingPointillistStudentYiSangSkill3, 
            TheRingPointillistStudentYiSangDefense],
    Passives: [
        new Passive("Sanguine Pointillist",
            PassiveTypeEnum.Combat,
            "This Identity only counts as an 'Identity that inflicts [Bleed]'. This Identity's Skills that randomly inflict [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] do not count as Skills that inflict each respective Keyword."),

        new Passive("Assignment Evaluation",
            PassiveTypeEnum.Combat,
            "On Hit, if the target has 4+ [Bleed], heal 2 SP<br>"+
            "Heal 1 additional SP for every type of negative effect on the target. (max 3)<br>"+
            "If this unit's SP is at max, gain 2 [Offense Level Up] next turn when this unit heals SP with this effect.<br>"+
            "(This Passive activates 4 times max per turn)",
            [{ sin: SinEnum.Lust , amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("Practices on Aesthetics",
            PassiveTypeEnum.Support,
            "1 ally with the least SP heals 2 SP On Hit for every type of negative effect on the target (max 6)<br>"+
            "If the target has [Bleed], heal 3 additional SP<br>"+
            "(This Passive activates 2 times max per turn)",
            [{ sin: SinEnum.Lust, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/TheRingPointillistStudent/10109gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/TheRingPointillistStudent/10109gacksunginfo.png"
}