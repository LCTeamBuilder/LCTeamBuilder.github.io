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
import { WutheringHeightsChiefButlerOutisDefense } from "./WutheringHeightsChiefButlerOutisDefense";
import { WutheringHeightsChiefButlerOutisSkill1 } from "./WutheringHeightsChiefButlerOutisSkill1";
import { WutheringHeightsChiefButlerOutisSkill2 } from "./WutheringHeightsChiefButlerOutisSkill2";
import { WutheringHeightsChiefButlerOutisSkill3 } from "./WutheringHeightsChiefButlerOutisSkill3";

export const WutheringHeightsChiefButlerOutis: Identity = {
    Id: 11108,
    Name: "Wuthering Heights Chief Butler",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WutheringHeightsChiefButlerOutisSkill1, 
            WutheringHeightsChiefButlerOutisSkill2, 
            WutheringHeightsChiefButlerOutisSkill3, 
            WutheringHeightsChiefButlerOutisDefense],
    Passives: [
        new Passive("The Mistress' Voice...!",
            PassiveTypeEnum.Combat,
            "- When clashing against targets with less than 0 SP, Clash Power +1 and deal +20% more damage<br>"+
            "- Deal +30% more damage against targets with [Echoes of the Manor]<br>"+
            "- When winning a Clash without losing a single Coin, heal 10 SP. If this unit is already at max SP, gain 3 [Offense Level Up] next turn (2 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Butler Training",
            PassiveTypeEnum.Support,
            "Clash Power +1 to 1 ally with the most SP when clashing against targets with less than -25 SP",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/WutheringHeightsChiefButler/11108gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/WutheringHeightsChiefButler/11108gacksunginfo.png"
}