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
import { ThePequodHarpooneerHeathcliffDefense } from "./ThePequodHarpooneerHeathcliffDefense";
import { ThePequodHarpooneerHeathcliffSkill1 } from "./ThePequodHarpooneerHeathcliffSkill1";
import { ThePequodHarpooneerHeathcliffSkill2 } from "./ThePequodHarpooneerHeathcliffSkill2";
import { ThePequodHarpooneerHeathcliffSkill3 } from "./ThePequodHarpooneerHeathcliffSkill3";

export const ThePequodHarpooneerHeathcliff: Identity = {
    Id: 10707,
    Name: "The Pequod Harpooneer",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 99,
    HealthPerLevel: 3.41,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ThePequodHarpooneerHeathcliffSkill1, 
            ThePequodHarpooneerHeathcliffSkill2, 
            ThePequodHarpooneerHeathcliffSkill3, 
            ThePequodHarpooneerHeathcliffDefense],
    Passives: [
        new Passive("Mutilated Tattoos",
            PassiveTypeEnum.Combat,
            "Gain 1 [Offense Level Up] and 1 [Defense Level Up] next turn every time an ally (including this unit) is attacked. Gain 2 of each instead if the ally is from The Pequod. (Max 9)<br>"+
            "Deal more damage the less HP this unit has.<br>"+
            "- Deal 1% more damage for every 1% missing HP",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Desperation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP deals more Pierce Damage at less HP<br>"+
            "- Deal 0.3% more damage for every 1% missing HP (Max 30%)",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/ThePequodHarpooneer/10707gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/ThePequodHarpooneer/10707gacksunginfo.png"
}