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
import { RCorp4thPackReindeerIshmaelDefense } from "./RCorp4thPackReindeerIshmaelDefense";
import { RCorp4thPackReindeerIshmaelSkill1 } from "./RCorp4thPackReindeerIshmaelSkill1";
import { RCorp4thPackReindeerIshmaelSkill2 } from "./RCorp4thPackReindeerIshmaelSkill2";
import { RCorp4thPackReindeerIshmaelSkill3 } from "./RCorp4thPackReindeerIshmaelSkill3";

export const RCorp4thPackReindeerIshmael: Identity = {
    Id: 10802,
    Name: "R Corp. 4th Pack Reindeer",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.69,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RCorp4thPackReindeerIshmaelSkill1, 
            RCorp4thPackReindeerIshmaelSkill2, 
            RCorp4thPackReindeerIshmaelSkill3, 
            RCorp4thPackReindeerIshmaelDefense],
    Passives: [
        new Passive("Brainwave Focus",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain (Gloom Reson. / 3) [Attack Power Up].<br>"+
            "If this unit fails to deal damage this turn, lose 15 SP at the end of the turn.",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Tenacity",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% Blunt damage.",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/RCorp4thPackReindeer/10802gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/RCorp4thPackReindeer/10802gacksunginfo.png"
}