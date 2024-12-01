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
import { BladeLineageSalsuYiSangDefense } from "./BladeLineageSalsuYiSangDefense";
import { BladeLineageSalsuYiSangSkill1 } from "./BladeLineageSalsuYiSangSkill1";
import { BladeLineageSalsuYiSangSkill2 } from "./BladeLineageSalsuYiSangSkill2";
import { BladeLineageSalsuYiSangSkill3 } from "./BladeLineageSalsuYiSangSkill3";

export const BladeLineageSalsuYiSang: Identity = {
    Id: 10103,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuYiSangSkill1, 
                BladeLineageSalsuYiSangSkill2, 
                BladeLineageSalsuYiSangSkill3, 
                BladeLineageSalsuYiSangDefense],
    Passives: [
        new Passive("Poised",
            PassiveTypeEnum.Combat,
            "On clash win, gain +1 [Poise] Count.<br>"+
            "Coin Power +1 For every 5 [Poise] Count. (Max 3)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Bestow",
            PassiveTypeEnum.Support,
            "1 ally with the most SP gains +1 [Poise] Count from skills.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/BladeLineageSalsu/10103gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/BladeLineageSalsu/10103gacksunginfo.png"
}