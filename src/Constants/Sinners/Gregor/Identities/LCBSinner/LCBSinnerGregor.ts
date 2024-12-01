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
import { LCBSinnerGregorDefense } from "./LCBSinnerGregorDefense";
import { LCBSinnerGregorSkill1 } from "./LCBSinnerGregorSkill1";
import { LCBSinnerGregorSkill2 } from "./LCBSinnerGregorSkill2";
import { LCBSinnerGregorSkill3 } from "./LCBSinnerGregorSkill3";

export const LCBSinnerGregor: Identity = {
    Id: 11201,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 72,
    HealthPerLevel: 2.48,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LCBSinnerGregorSkill1, 
            LCBSinnerGregorSkill2, 
            LCBSinnerGregorSkill3, 
            LCBSinnerGregorDefense],
    Passives: [
        new Passive("Forced Survival",
            PassiveTypeEnum.Combat,
            "Heal 5 HP at the start of the combat phase.",
            [{ sin: SinEnum.Gloom , amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Gene Code G-0",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, the ally with the least HP heals 5 HP.",
            [{ sin: SinEnum.Gloom, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/LCBSinner/11201normal.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/LCBSinner/11201normalinfo.png"
}