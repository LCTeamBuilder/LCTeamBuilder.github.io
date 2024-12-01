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
import { TheOneWhoShallGripSinclairDefense } from "./TheOneWhoShallGripSinclairDefense";
import { TheOneWhoShallGripSinclairSkill1 } from "./TheOneWhoShallGripSinclairSkill1";
import { TheOneWhoShallGripSinclairSkill2 } from "./TheOneWhoShallGripSinclairSkill2";
import { TheOneWhoShallGripSinclairSkill3 } from "./TheOneWhoShallGripSinclairSkill3";

export const TheOneWhoShallGripSinclair: Identity = {
    Id: 11005,
    Name: "The One Who Shall Grip",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheOneWhoShallGripSinclairSkill1, 
            TheOneWhoShallGripSinclairSkill2, 
            TheOneWhoShallGripSinclairSkill3, 
            TheOneWhoShallGripSinclairDefense],
    Passives: [
        new Passive("Mad Flame",
            PassiveTypeEnum.Combat,
            "Heal 50% less SP from winning a clash or defeating an enemy.<br>"+
            "If 5 or more surviving units, including this unit, are 'N Corp. Fanatic', they deal +10% damage.",
            [{ sin: SinEnum.Wrath, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Conering",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% Blunt damage.<br>"+
            "If said ally is below 0 SP, further boost their Blunt damage the lower their SP is. (Max 10%)",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/TheOneWhoShallGrip/11005gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/TheOneWhoShallGrip/11005gacksunginfo.png"
}