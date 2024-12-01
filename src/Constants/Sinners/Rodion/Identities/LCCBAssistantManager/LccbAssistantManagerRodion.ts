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
import { LccbAssistantManagerRodionDefense } from "./LccbAssistantManagerRodionDefense";
import { LccbAssistantManagerRodionSkill1 } from "./LccbAssistantManagerRodionSkill1";
import { LccbAssistantManagerRodionSkill2 } from "./LccbAssistantManagerRodionSkill2";
import { LccbAssistantManagerRodionSkill3 } from "./LccbAssistantManagerRodionSkill3";

export const LccbAssistantManagerRodion: Identity = {
    Id: 10903,
    Name: "LCCB Assistant Manager",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LccbAssistantManagerRodionSkill1, 
            LccbAssistantManagerRodionSkill2, 
            LccbAssistantManagerRodionSkill3, 
            LccbAssistantManagerRodionDefense],
    Passives: [
        new Passive("Breach Defense",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to enemies that used defense skills this turn.",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Breaching",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +20% damage to enemies that used defense skills this turn.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/LCCBAssistantManager/10903gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/LCCBAssistantManager/10903gacksunginfo.png"
}