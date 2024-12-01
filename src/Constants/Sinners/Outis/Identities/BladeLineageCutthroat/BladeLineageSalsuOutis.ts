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
import { BladeLineageSalsuOutisDefense } from "./BladeLineageSalsuOutisDefense";
import { BladeLineageSalsuOutisSkill1 } from "./BladeLineageSalsuOutisSkill1";
import { BladeLineageSalsuOutisSkill2 } from "./BladeLineageSalsuOutisSkill2";
import { BladeLineageSalsuOutisSkill3 } from "./BladeLineageSalsuOutisSkill3";

export const BladeLineageSalsuOutis: Identity = {
    Id: 11102,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuOutisSkill1, 
            BladeLineageSalsuOutisSkill2, 
            BladeLineageSalsuOutisSkill3, 
            BladeLineageSalsuOutisDefense],
    Passives: [
        new Passive("Levelheaded",
            PassiveTypeEnum.Combat,
            "Deal +20% damage to targets below 25% HP",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Double Tap",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +30% damage to enemies below 25% HP.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/BladeLineageCutthroat/11102gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/BladeLineageCutthroat/11102gacksunginfo.png"
}