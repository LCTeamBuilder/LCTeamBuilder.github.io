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
import { LCBSinnerYiSangDefense } from "./LCBSinnerYiSangDefense";
import { LCBSinnerYiSangSkill1 } from "./LCBSinnerYiSangSkill1";
import { LCBSinnerYiSangSkill2 } from "./LCBSinnerYiSangSkill2";
import { LCBSinnerYiSangSkill3 } from "./LCBSinnerYiSangSkill3";

export const LCBSinnerYiSang: Identity = {
    Id: 10101,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 72,
    HealthPerLevel: 2.48,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [LCBSinnerYiSangSkill1, 
            LCBSinnerYiSangSkill2, 
            LCBSinnerYiSangSkill3, 
            LCBSinnerYiSangDefense],
    Passives: [
        new Passive("Information Relay",
            PassiveTypeEnum.Combat,
            "Apply 1 [Damage Up] to 2 allies placed after this unit on the Dashboard.",
            [{ sin: SinEnum.Gloom, amount: 4}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Information Neutralization",
            PassiveTypeEnum.Support,
            "At the end of the turn, Heal 10 SP for 1 ally with the least SP if they lost SP.",
            [{ sin: SinEnum.Gloom, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/LCBSinner/10101normal.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/LCBSinner/10101normalinfo.png"
}