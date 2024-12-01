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
import { LccbAssistantManagerIshmaelDefense } from "./LccbAssistantManagerIshmaelDefense";
import { LccbAssistantManagerIshmaelSkill1 } from "./LccbAssistantManagerIshmaelSkill1";
import { LccbAssistantManagerIshmaelSkill2 } from "./LccbAssistantManagerIshmaelSkill2";
import { LccbAssistantManagerIshmaelSkill3 } from "./LccbAssistantManagerIshmaelSkill3";

export const LccbAssistantManagerIshmael: Identity = {
    Id: 10804,
    Name: "LCCB Assistant Manager",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LccbAssistantManagerIshmaelSkill1, 
            LccbAssistantManagerIshmaelSkill2, 
            LccbAssistantManagerIshmaelSkill3, 
            LccbAssistantManagerIshmaelDefense],
    Passives: [
        new Passive("Eye for Weakness",
            PassiveTypeEnum.Combat,
            "Attacks inflict 1 [Tremor] in a won clash.",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("By the Manual",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed gains +2 guard skill Final Power.",
            [{ sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/LCCBAssistantManager/10804gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/LCCBAssistantManager/10804gacksunginfo.png"
}