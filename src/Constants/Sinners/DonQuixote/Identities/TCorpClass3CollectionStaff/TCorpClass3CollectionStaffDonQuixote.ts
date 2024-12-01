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
import { TCorpClass3CollectionStaffDonQuixoteDefense } from "./TCorpClass3CollectionStaffDonQuixoteDefense";
import { TCorpClass3CollectionStaffDonQuixoteSkill1 } from "./TCorpClass3CollectionStaffDonQuixoteSkill1";
import { TCorpClass3CollectionStaffDonQuixoteSkill2 } from "./TCorpClass3CollectionStaffDonQuixoteSkill2";
import { TCorpClass3CollectionStaffDonQuixoteSkill3 } from "./TCorpClass3CollectionStaffDonQuixoteSkill3";

export const TCorpClass3CollectionStaffDonQuixote: Identity = {
    Id: 10309,
    Name: "T Corp. Class 3 Collection Staff",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 95,
    HealthPerLevel: 3.26,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TCorpClass3CollectionStaffDonQuixoteSkill1, 
            TCorpClass3CollectionStaffDonQuixoteSkill2, 
            TCorpClass3CollectionStaffDonQuixoteSkill3, 
            TCorpClass3CollectionStaffDonQuixoteDefense],
    Passives: [
        new Passive("Golden Time - Extracting",
            PassiveTypeEnum.Combat,
            "Turn End: If this unit's HP is between 10% - 20%, instantly heal 80% of this unit's max HP, and recover from Stagger. (once per Encounter)<br><br>"+

            "When this unit loses [Borrowed Time], gain +8 [Aggro] to one of this unit's Skill Slots next turn",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("T Corp. Physics Distortion Field",
            PassiveTypeEnum.Support,
            "When 1 ally with the slowest Speed takes damage from enemies with [Tremor] , take -10% less damage",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/TCorpClass3CollectionStaff/10309gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/TCorpClass3CollectionStaff/10309gacksunginfo.png"
}