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
import { LCBSinnerOutisDefense } from "./LCBSinnerOutisDefense";
import { LCBSinnerOutisSkill1 } from "./LCBSinnerOutisSkill1";
import { LCBSinnerOutisSkill2 } from "./LCBSinnerOutisSkill2";
import { LCBSinnerOutisSkill3 } from "./LCBSinnerOutisSkill3";

export const LCBSinnerOutis: Identity = {
    Id: 11101,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 60,
    HealthPerLevel: 2.07,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [LCBSinnerOutisSkill1, 
            LCBSinnerOutisSkill2, 
            LCBSinnerOutisSkill3, 
            LCBSinnerOutisDefense],
    Passives: [
        new Passive("Executor",
            PassiveTypeEnum.Combat,
            "If target's SP is below 0, deal +10% damage.",
            [{ sin: SinEnum.Sloth, amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("Military Mindset",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +30% damage to enemies below 0 SP.",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/LCBSinner/11101normal.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/LCBSinner/11101normalinfo.png"
}