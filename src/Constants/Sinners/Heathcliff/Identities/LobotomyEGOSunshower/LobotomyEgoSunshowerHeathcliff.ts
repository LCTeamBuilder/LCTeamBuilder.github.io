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
import { LobotomyEgoSunshowerHeathcliffDefense } from "./LobotomyEgoSunshowerHeathcliffDefense";
import { LobotomyEgoSunshowerHeathcliffSkill1 } from "./LobotomyEgoSunshowerHeathcliffSkill1";
import { LobotomyEgoSunshowerHeathcliffSkill2 } from "./LobotomyEgoSunshowerHeathcliffSkill2";
import { LobotomyEgoSunshowerHeathcliffSkill3 } from "./LobotomyEgoSunshowerHeathcliffSkill3";

export const LobotomyEgoSunshowerHeathcliff: Identity = {
    Id: 10705,
    Name: "Lobotomy E.G.O::Sunshower",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 3,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoSunshowerHeathcliffSkill1, 
            LobotomyEgoSunshowerHeathcliffSkill2, 
            LobotomyEgoSunshowerHeathcliffSkill3, 
            LobotomyEgoSunshowerHeathcliffDefense],
    Passives: [
        new Passive("Rain of Tears",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, spend 1 [Sinking] Count and lose SP by the current amount of Sinking.<br>"+
            "Before being hit by an attack, gain [Protection] equal to this unit's [Sinking]. (Up to 5 [Protection] can be gained per turn)<br>"+
            "When hit, gain 1 [Blunt DMG Up] next turn. (3 per turn)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Ragged Umbrella",
            PassiveTypeEnum.Support,
            "1 ally with the least SP loses 10 SP when hit by an attack and gains 1 [Blunt DMG Up] next turn. (Once per turn)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/LobotomyEGOSunshower/10705gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/LobotomyEGOSunshower/10705gacksunginfo.png"
}