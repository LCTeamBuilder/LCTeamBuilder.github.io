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
import { BladeLineageSalsuDonQuixoteDefense } from "./BladeLineageSalsuDonQuixoteDefense";
import { BladeLineageSalsuDonQuixoteSkill1 } from "./BladeLineageSalsuDonQuixoteSkill1";
import { BladeLineageSalsuDonQuixoteSkill2 } from "./BladeLineageSalsuDonQuixoteSkill2";
import { BladeLineageSalsuDonQuixoteSkill3 } from "./BladeLineageSalsuDonQuixoteSkill3";

export const BladeLineageSalsuDonQuixote: Identity = {
    Id: 10308,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.4,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuDonQuixoteSkill1, 
            BladeLineageSalsuDonQuixoteSkill2, 
            BladeLineageSalsuDonQuixoteSkill3, 
            BladeLineageSalsuDonQuixoteDefense],
    Passives: [
        new Passive("Collective Breathing",
            PassiveTypeEnum.Combat,
            "When this unit gains [Poise] Potency with its own Skill or Coin effects: give 1 Poise Potency to 1 ally with no [Poise] or with the least [Poise] Potency (5 times max)",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Nightly Stroll",
            PassiveTypeEnum.Support,
            "1 ally with the least [Poise] gains 2 more [Poise] Potency when gaining [Poise] Potency with its own Skill or Coin effects. (2 times max. Does not apply to allies without [Poise])",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/BladeLineageSalsu/10308gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/BladeLineageSalsu/10308gacksunginfo.png"
}