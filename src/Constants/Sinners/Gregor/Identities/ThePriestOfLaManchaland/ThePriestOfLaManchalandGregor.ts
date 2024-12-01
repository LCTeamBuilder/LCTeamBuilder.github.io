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
import { ThePriestOfLaManchalandGregorDefense } from "./ThePriestOfLaManchalandGregorDefense";
import { ThePriestOfLaManchalandGregorSkill1 } from "./ThePriestOfLaManchalandGregorSkill1";
import { ThePriestOfLaManchalandGregorSkill2 } from "./ThePriestOfLaManchalandGregorSkill2";
import { ThePriestOfLaManchalandGregorSkill3 } from "./ThePriestOfLaManchalandGregorSkill3";

export const ThePriestOfLaManchalandGregor: Identity = {
    Id: 11210,
    Name: "The Priest of La Manchaland",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 108,
    HealthPerLevel: 3.41,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [ThePriestOfLaManchalandGregorSkill1, 
            ThePriestOfLaManchalandGregorSkill2, 
            ThePriestOfLaManchalandGregorSkill3, 
            ThePriestOfLaManchalandGregorDefense],
    Passives: [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will surface."),

        new Passive("Self-destructive Dedication",
            PassiveTypeEnum.Combat,
            "Turn End: heal (10 - [Ailing Heart]) SP for the ally with the least SP (excluding: self or allies that are Panicked or Corroded)<br>"+
            "In this Encounter, when this unit takes damage that brings their HP down to X, nullify that damage, then, this unit's HP cannot drop below 1 for the turn.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Don Quixote Hardblood Arts 6: Whip",
            PassiveTypeEnum.Support,
            "1 ally with the lowest HP percentage heals 3 HP On Hit (3 times per turn)<br>"+
            "- If the target hit by the said ally had [Bleed], heal 3 additional HP",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/ThePriestOfLaManchaland/11210gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/ThePriestOfLaManchaland/11210gacksunginfo.png"
}