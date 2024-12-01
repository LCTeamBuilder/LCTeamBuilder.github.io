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
import { BladeLineageSalsuFaustDefense } from "./BladeLineageSalsuFaustDefense";
import { BladeLineageSalsuFaustSkill1 } from "./BladeLineageSalsuFaustSkill1";
import { BladeLineageSalsuFaustSkill2 } from "./BladeLineageSalsuFaustSkill2";
import { BladeLineageSalsuFaustSkill3 } from "./BladeLineageSalsuFaustSkill3";

export const BladeLineageSalsuFaust: Identity = {
    Id: 10208,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 76,
    HealthPerLevel: 2.5,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuFaustSkill1, 
            BladeLineageSalsuFaustSkill2, 
            BladeLineageSalsuFaustSkill3, 
            BladeLineageSalsuFaustDefense],
    Passives: [
        new Passive("Sanguine Plum Blossoms",
            PassiveTypeEnum.Combat,
            "On Crit: Inflict 1 [Red Plum Blossom]. If the target has 10 [Red Plum Blossom], inflict 1 [Defense Level Down] instead (6 times max)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Lingering Bladepoint",
            PassiveTypeEnum.Support,
            "When the ally first deployed in the pre-battle team setup Critically hits with a Slash type Skill, inflict 1 [Defense Level Down] (3 times max per 1 enemy per turn)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/BladeLineageSalsu/10208gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/BladeLineageSalsu/10208gacksunginfo.png"
}