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
import { WutheringHeightsButlerFaustDefense } from "./WutheringHeightsButlerFaustDefense";
import { WutheringHeightsButlerFaustSkill1 } from "./WutheringHeightsButlerFaustSkill1";
import { WutheringHeightsButlerFaustSkill2 } from "./WutheringHeightsButlerFaustSkill2";
import { WutheringHeightsButlerFaustSkill3 } from "./WutheringHeightsButlerFaustSkill3";

export const WutheringHeightsButlerFaust: Identity = {
    Id: 10209,
    Name: "Wuthering Heights Butler",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WutheringHeightsButlerFaustSkill1, 
            WutheringHeightsButlerFaustSkill2, 
            WutheringHeightsButlerFaustSkill3, 
            WutheringHeightsButlerFaustDefense],
    Passives: [
        new Passive("Butler Style Response",
            PassiveTypeEnum.Combat,
            "- Clash Win: inflict 1 [Sinking] on target (3 times per turn)<br>"+
            "- If the target has [Echoes of the Manor], inflict 3 [Sinking] instead",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Anticipatory Training",
            PassiveTypeEnum.Support,
            "When 1 ally with the least SP hits an enemy with 5+ [Sinking], the ally heals 3 SP On Hit (4 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/WutheringHeightsButler/10209gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/WutheringHeightsButler/10209gacksunginfo.png"
}