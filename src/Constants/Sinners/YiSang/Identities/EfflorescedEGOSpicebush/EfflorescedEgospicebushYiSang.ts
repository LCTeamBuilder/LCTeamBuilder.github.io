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
import { EfflorescedEgospicebushYiSangDefense } from "./EfflorescedEgospicebushYiSangDefense";
import { EfflorescedEgospicebushYiSangSkill1 } from "./EfflorescedEgospicebushYiSangSkill1";
import { EfflorescedEgospicebushYiSangSkill2 } from "./EfflorescedEgospicebushYiSangSkill2";
import { EfflorescedEgospicebushYiSangSkill3 } from "./EfflorescedEgospicebushYiSangSkill3";

export const EfflorescedEgospicebushYiSang: Identity = {
    Id: 10104,
    Name: "Effloresced E.G.O::Spicebush",
    Sinner: SinnerEnum.YiSang,
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
    Skills: [EfflorescedEgospicebushYiSangSkill1, 
            EfflorescedEgospicebushYiSangSkill2, 
            EfflorescedEgospicebushYiSangSkill3, 
            EfflorescedEgospicebushYiSangDefense],
    Passives: [
        new Passive("Full Bloom",
            PassiveTypeEnum.Combat,
            "When attacking 2 or more targets at once, deal +30% damage.",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Pungent Spring Breeze",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% damage when attacking 2 or more targets at once.",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/EfflorescedEGOSpicebush/10104gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/EfflorescedEGOSpicebush/10104gacksunginfo.png"
}