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
import { MolarBoatworksFixerSinclairDefense } from "./MolarBoatworksFixerSinclairDefense";
import { MolarBoatworksFixerSinclairSkill1 } from "./MolarBoatworksFixerSinclairSkill1";
import { MolarBoatworksFixerSinclairSkill2 } from "./MolarBoatworksFixerSinclairSkill2";
import { MolarBoatworksFixerSinclairSkill3 } from "./MolarBoatworksFixerSinclairSkill3";

export const MolarBoatworksFixerSinclair: Identity = {
    Id: 11007,
    Name: "Molar Boatworks Fixer",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarBoatworksFixerSinclairSkill1, 
            MolarBoatworksFixerSinclairSkill2, 
            MolarBoatworksFixerSinclairSkill3, 
            MolarBoatworksFixerSinclairDefense],
    Passives: [
        new Passive("Unstable Power Output",
            PassiveTypeEnum.Combat,
            "On hit with Heads Coins at 10+ [Tremor] Count on self, Inflict +1 [Tremor] and [Tremor] Count with Coin effects.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Modified Power Output",
            PassiveTypeEnum.Support,
            "1 ally with the most Max HP inflicts +1 [Tremor] with the effects of their attack Skills/Coins.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/MolarBoatworksFixer/11007gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/MolarBoatworksFixer/11007gacksunginfo.png"
}