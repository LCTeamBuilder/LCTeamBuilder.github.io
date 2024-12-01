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
import { TingtangGangGangleaderHongLuDefense } from "./TingtangGangGangleaderHongLuDefense";
import { TingtangGangGangleaderHongLuSkill1 } from "./TingtangGangGangleaderHongLuSkill1";
import { TingtangGangGangleaderHongLuSkill2 } from "./TingtangGangGangleaderHongLuSkill2";
import { TingtangGangGangleaderHongLuSkill3 } from "./TingtangGangGangleaderHongLuSkill3";

export const TingtangGangGangleaderHongLu: Identity = {
    Id: 10603,
    Name: "Tingtang Gang Gangleader",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TingtangGangGangleaderHongLuSkill1, 
            TingtangGangGangleaderHongLuSkill2, 
            TingtangGangGangleaderHongLuSkill3, 
            TingtangGangGangleaderHongLuDefense],
    Passives: [
        new Passive("Gaiety",
            PassiveTypeEnum.Combat,
            "Heal (2x Gluttony Reson.) SP next turn.",
            [{ sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Gambit",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +20% damage with Heads Coins.",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/TingtangGangGangleader/10603gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/TingtangGangGangleader/10603gacksunginfo.png"
}