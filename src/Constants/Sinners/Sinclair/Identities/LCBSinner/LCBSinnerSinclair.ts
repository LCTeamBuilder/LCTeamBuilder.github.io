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
import { LCBSinnerSinclairDefense } from "./LCBSinnerSinclairDefense";
import { LCBSinnerSinclairSkill1 } from "./LCBSinnerSinclairSkill1";
import { LCBSinnerSinclairSkill2 } from "./LCBSinnerSinclairSkill2";
import { LCBSinnerSinclairSkill3 } from "./LCBSinnerSinclairSkill3";

export const LCBSinnerSinclair: Identity = {
    Id: 11001,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 60,
    HealthPerLevel: 2.07,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 0.5,
    PierceResist: 2,
    BluntResist: 1,
    Skills: [LCBSinnerSinclairSkill1, 
            LCBSinnerSinclairSkill2, 
            LCBSinnerSinclairSkill3, 
            LCBSinnerSinclairDefense],
    Passives: [
        new Passive("Pluckiness",
            PassiveTypeEnum.Combat,
            "When an ally is defeated, gain 1 [Attack Power Up] next turn.",
            [{ sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Grudge",
            PassiveTypeEnum.Support,
            "1 ally with the least SP gains 1 [Attack Power Up] the turn after an ally is defeated.",
            [{ sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/LCBSinner/11001normal.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/LCBSinner/11001normalinfo.png"
}