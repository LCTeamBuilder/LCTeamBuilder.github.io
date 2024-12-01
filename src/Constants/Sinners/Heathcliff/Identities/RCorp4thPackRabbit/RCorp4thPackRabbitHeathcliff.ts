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
import { RCorp4thPackRabbitHeathcliffDefense } from "./RCorp4thPackRabbitHeathcliffDefense";
import { RCorp4thPackRabbitHeathcliffSkill1 } from "./RCorp4thPackRabbitHeathcliffSkill1";
import { RCorp4thPackRabbitHeathcliffSkill2 } from "./RCorp4thPackRabbitHeathcliffSkill2";
import { RCorp4thPackRabbitHeathcliffSkill3 } from "./RCorp4thPackRabbitHeathcliffSkill3";

export const RCorp4thPackRabbitHeathcliff: Identity = {
    Id: 10703,
    Name: "R Corp. 4th Pack Rabbit",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RCorp4thPackRabbitHeathcliffSkill1, 
            RCorp4thPackRabbitHeathcliffSkill2, 
            RCorp4thPackRabbitHeathcliffSkill3, 
            RCorp4thPackRabbitHeathcliffDefense],
    Passives: [
        new Passive("Raring to Graze",
            PassiveTypeEnum.Combat,
            "Gain (Wrath Reson.) [Charge] Count next turn.<br>"+
            "At 5+ [Charge] Count, gain 1 [Haste] and 1 [Attack Power Up].<br>"+
            "Always Activate: At the start of the stage, gain +3 [Ammo].",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Doggedness",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed deals +10% Pierce damage.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/RCorp4thPackRabbit/10703gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/RCorp4thPackRabbit/10703gacksunginfo.png"
}