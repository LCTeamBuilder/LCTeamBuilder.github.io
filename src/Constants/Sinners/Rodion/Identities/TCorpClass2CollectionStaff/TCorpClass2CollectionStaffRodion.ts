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
import { TCorpClass2CollectionStaffRodionDefense } from "./TCorpClass2CollectionStaffRodionDefense";
import { TCorpClass2CollectionStaffRodionSkill1 } from "./TCorpClass2CollectionStaffRodionSkill1";
import { TCorpClass2CollectionStaffRodionSkill2 } from "./TCorpClass2CollectionStaffRodionSkill2";
import { TCorpClass2CollectionStaffRodionSkill3 } from "./TCorpClass2CollectionStaffRodionSkill3";

export const TCorpClass2CollectionStaffRodion: Identity = {
    Id: 10909,
    Name: "T Corp. Class 2 Collection Staff",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TCorpClass2CollectionStaffRodionSkill1, 
            TCorpClass2CollectionStaffRodionSkill2, 
            TCorpClass2CollectionStaffRodionSkill3, 
            TCorpClass2CollectionStaffRodionDefense],
    Passives: [
        new Passive("Golden Time - Standoff",
            PassiveTypeEnum.Combat,
            "Turn End: If this unit's HP is between 16% - 20%, instantly heal up to 60% of Max HP, and recover from Stagger. (once per Encounter)<br>"+
            "When Clashing against targets with [Time Moratorium], Clash Power +2<br>"+
            "Take -10% less damage from targets with [Time Moratorium]",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("T Corp. Martial Arts",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: +1 Clash Power when Clashing against targets with 5+ Tremor",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/TCorpClass2CollectionStaff/10909gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/TCorpClass2CollectionStaff/10909gacksunginfo.png"
}