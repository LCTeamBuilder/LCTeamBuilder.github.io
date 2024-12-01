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
import { LobotomyEgoSloshingIshmaelDefense } from "./LobotomyEgoSloshingIshmaelDefense";
import { LobotomyEgoSloshingIshmaelSkill1 } from "./LobotomyEgoSloshingIshmaelSkill1";
import { LobotomyEgoSloshingIshmaelSkill2 } from "./LobotomyEgoSloshingIshmaelSkill2";
import { LobotomyEgoSloshingIshmaelSkill3 } from "./LobotomyEgoSloshingIshmaelSkill3";

export const LobotomyEgoSloshingIshmael: Identity = {
    Id: 10805,
    Name: "Lobotomy E.G.O::Sloshing",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 90,
    HealthPerLevel: 3.1,
    SpeedMin: 2,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoSloshingIshmaelSkill1, 
            LobotomyEgoSloshingIshmaelSkill2, 
            LobotomyEgoSloshingIshmaelSkill3, 
            LobotomyEgoSloshingIshmaelDefense],
    Passives: [
        new Passive("Filling Fluid",
            PassiveTypeEnum.Combat,
            "If this unit fails to deal HP damage using attack Skills in a turn, gain a Shield equal to 10% of Max HP next turn. (Max 30)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Corrosive Slime",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest Speed triggers [Tremor Burst], they inflict 2 [Rupture].",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/LobotomyEGOSloshing/10805gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/LobotomyEGOSloshing/10805gacksunginfo.png"
}