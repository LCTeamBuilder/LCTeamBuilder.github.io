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
import { LCBSinnerFaustDefense } from "./LCBSinnerFaustDefense";
import { LCBSinnerFaustSkill1 } from "./LCBSinnerFaustSkill1";
import { LCBSinnerFaustSkill2 } from "./LCBSinnerFaustSkill2";
import { LCBSinnerFaustSkill3 } from "./LCBSinnerFaustSkill3";

export const LCBSinnerFaust: Identity = {
    Id: 10201,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 84,
    HealthPerLevel: 2.9,
    SpeedMin: 2,
    SpeedMax: 4,
    StaggerHpPercentThresholds: [60, 30, 15],
    DefenseLevel: +1,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [LCBSinnerFaustSkill1, 
            LCBSinnerFaustSkill2, 
            LCBSinnerFaustSkill3, 
            LCBSinnerFaustDefense],
    Passives: [
        new Passive("Analytic Eye",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to units with negative status effects.",
            [{ sin: SinEnum.Pride , amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Keen Observation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP inflicts 2 [Offense Level Down] with attacks at a 25% chance.",
            [{ sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/LCBSinner/10201normal.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/LCBSinner/10201normalinfo.png"
}