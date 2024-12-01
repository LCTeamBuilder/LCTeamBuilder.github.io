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
import { LCBSinnerHongLuDefense } from "./LCBSinnerHongLuDefense";
import { LCBSinnerHongLuSkill1 } from "./LCBSinnerHongLuSkill1";
import { LCBSinnerHongLuSkill2 } from "./LCBSinnerHongLuSkill2";
import { LCBSinnerHongLuSkill3 } from "./LCBSinnerHongLuSkill3";

export const LCBSinnerHongLu: Identity = {
    Id: 10601,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LCBSinnerHongLuSkill1, 
            LCBSinnerHongLuSkill2, 
            LCBSinnerHongLuSkill3, 
            LCBSinnerHongLuDefense],
    Passives: [
        new Passive("Entertainment",
            PassiveTypeEnum.Combat,
            "Heal 6 SP next turn.",
            [{ sin: SinEnum.Sloth , amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Frivolous Jokes",
            PassiveTypeEnum.Support,
            "At the start of combat phase, the ally with the least SP heals 6 SP.",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/LCBSinner/10601normal.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/LCBSinner/10601normalinfo.png"
}