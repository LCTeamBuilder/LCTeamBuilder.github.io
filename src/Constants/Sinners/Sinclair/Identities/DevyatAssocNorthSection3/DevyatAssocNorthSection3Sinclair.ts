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
import { DevyatAssocNorthSection3SinclairDefense } from "./DevyatAssocNorthSection3SinclairDefense";
import { DevyatAssocNorthSection3SinclairDefense2 } from "./DevyatAssocNorthSection3SinclairDefense2";
import { DevyatAssocNorthSection3SinclairSkill1 } from "./DevyatAssocNorthSection3SinclairSkill1";
import { DevyatAssocNorthSection3SinclairSkill2 } from "./DevyatAssocNorthSection3SinclairSkill2";
import { DevyatAssocNorthSection3SinclairSkill3 } from "./DevyatAssocNorthSection3SinclairSkill3";

export const DevyatAssocNorthSection3Sinclair: Identity = {
    Id: 11011,
    Name: "Devyat' Assoc. North Section 3",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [DevyatAssocNorthSection3SinclairSkill1, 
            DevyatAssocNorthSection3SinclairSkill2, 
            DevyatAssocNorthSection3SinclairSkill3, 
            DevyatAssocNorthSection3SinclairDefense, 
            DevyatAssocNorthSection3SinclairDefense2],
    Passives: [
        new Passive("I'll do better next time…",
            PassiveTypeEnum.Combat,
            "&ltFor Chain Battles&gt When, after Retreating with '[Strategic R&R Mode]', if this unit rejoins the battle, halve the [Courier Trunk - Sinclair] value (once per Encounter, rounded up)"),

        new Passive("A moment, please…",
            PassiveTypeEnum.Combat,
            "Turn Start: At 6+ Speed, or if this unit has [Haste], gain ([Courier Trunk - Sinclair])% of this unit's max HP as Shield (max 20%)<br>"+
            "Upon Retreat, apply 1 [Clash Power Up] to 2 allies next turn (prioritizes Substituted units first, then in Deployment order)<br>"+
            "- Lasts for 1 additional turn for every 15 [Courier Trunk - Sinclair] (2 more turns max)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Outstanding Courier",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed hits and enemy with [Rupture], inflict 1 [Defense Level Down] (3 times per enemy per turn)",
            [{ sin: SinEnum.Gluttony, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/DevyatAssocNorthSection3/11011gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/DevyatAssocNorthSection3/11011gacksunginfo.png"
}