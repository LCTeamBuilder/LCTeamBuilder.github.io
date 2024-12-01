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
import { LCBSinnerIshmaelDefense } from "./LCBSinnerIshmaelDefense";
import { LCBSinnerIshmaelSkill1 } from "./LCBSinnerIshmaelSkill1";
import { LCBSinnerIshmaelSkill2 } from "./LCBSinnerIshmaelSkill2";
import { LCBSinnerIshmaelSkill3 } from "./LCBSinnerIshmaelSkill3";

export const LCBSinnerIshmael: Identity = {
    Id: 10801,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 78,
    HealthPerLevel: 2.69,
    SpeedMin: 5,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +0,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LCBSinnerIshmaelSkill1, 
            LCBSinnerIshmaelSkill2, 
            LCBSinnerIshmaelSkill3, 
            LCBSinnerIshmaelDefense],
    Passives: [
        new Passive("Last-ditch Struggle",
            PassiveTypeEnum.Combat,
            "At less than 25% HP, gain +1 clash Power in a clash.",
            [{ sin: SinEnum.Wrath , amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Determination to Survive",
            PassiveTypeEnum.Support,
            "1 ally with the least HP and less than 50% of Max HP gains +1 Clash Power in a clash.",
            [{ sin: SinEnum.Wrath, amount: 6}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/LCBSinner/10801normal.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/LCBSinner/10801normalinfo.png"
}