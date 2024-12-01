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
import { LCBSinnerHeathcliffDefense } from "./LCBSinnerHeathcliffDefense";
import { LCBSinnerHeathcliffSkill1 } from "./LCBSinnerHeathcliffSkill1";
import { LCBSinnerHeathcliffSkill2 } from "./LCBSinnerHeathcliffSkill2";
import { LCBSinnerHeathcliffSkill3 } from "./LCBSinnerHeathcliffSkill3";

export const LCBSinnerHeathcliff: Identity = {
    Id: 10701,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 78,
    HealthPerLevel: 2.69,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +0,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LCBSinnerHeathcliffSkill1, 
            LCBSinnerHeathcliffSkill2, 
            LCBSinnerHeathcliffSkill3, 
            LCBSinnerHeathcliffDefense],
    Passives: [
        new Passive("Ressentiment",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to targets with higher Max HP.",
            [{ sin: SinEnum.Envy , amount: 4}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Spite-driven",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP deals +10% Blunt damage.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/LCBSinner/10701normal.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/LCBSinner/10701normalinfo.png"
}