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
import { MolarBoatworksFixerIshmaelDefense } from "./MolarBoatworksFixerIshmaelDefense";
import { MolarBoatworksFixerIshmaelSkill1 } from "./MolarBoatworksFixerIshmaelSkill1";
import { MolarBoatworksFixerIshmaelSkill2 } from "./MolarBoatworksFixerIshmaelSkill2";
import { MolarBoatworksFixerIshmaelSkill3 } from "./MolarBoatworksFixerIshmaelSkill3";

export const MolarBoatworksFixerIshmael: Identity = {
    Id: 10807,
    Name: "Molar Boatworks Fixer",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarBoatworksFixerIshmaelSkill1, 
            MolarBoatworksFixerIshmaelSkill2, 
            MolarBoatworksFixerIshmaelSkill3, 
            MolarBoatworksFixerIshmaelDefense],
    Passives: [
        new Passive("Crushin' Crabs",
            PassiveTypeEnum.Combat,
            "On hit against a target with [Tremor], inflict +1 [Sinking] Count",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Crab Driver",
            PassiveTypeEnum.Support,
            "When an ally with the lowest Max HP hits with Heads Coins, they inflict +1 [Sinking] Count when inflicting [Tremor] Count on their target with Coin effects.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/MolarBoatworksFixer/10807gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/MolarBoatworksFixer/10807gacksunginfo.png"
}