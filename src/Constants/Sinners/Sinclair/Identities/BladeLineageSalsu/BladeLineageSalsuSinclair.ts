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
import { BladeLineageSalsuSinclairDefense } from "./BladeLineageSalsuSinclairDefense";
import { BladeLineageSalsuSinclairSkill1 } from "./BladeLineageSalsuSinclairSkill1";
import { BladeLineageSalsuSinclairSkill2 } from "./BladeLineageSalsuSinclairSkill2";
import { BladeLineageSalsuSinclairSkill3 } from "./BladeLineageSalsuSinclairSkill3";

export const BladeLineageSalsuSinclair: Identity = {
    Id: 11002,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuSinclairSkill1, 
            BladeLineageSalsuSinclairSkill2, 
            BladeLineageSalsuSinclairSkill3, 
            BladeLineageSalsuSinclairDefense],
    Passives: [
        new Passive("Slayer",
            PassiveTypeEnum.Combat,
            "The last Coin on the last skill in the chain deals +20% damage.<br>"+
            "Whenever an ally other than this unit gains [Poise] Count, this unit gains +1 [Poise] Count at a 50% chance.",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Bloodied Hands",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed gains +1 final Power for their last skill.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/BladeLineageSalsu/11002gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/BladeLineageSalsu/11002gacksunginfo.png"
}