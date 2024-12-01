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
import { LCBSinnerRyoshuDefense } from "./LCBSinnerRyoshuDefense";
import { LCBSinnerRyoshuSkill1 } from "./LCBSinnerRyoshuSkill1";
import { LCBSinnerRyoshuSkill2 } from "./LCBSinnerRyoshuSkill2";
import { LCBSinnerRyoshuSkill3 } from "./LCBSinnerRyoshuSkill3";

export const LCBSinnerRyoshu: Identity = {
    Id: 10401,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [LCBSinnerRyoshuSkill1, 
            LCBSinnerRyoshuSkill2, 
            LCBSinnerRyoshuSkill3, 
            LCBSinnerRyoshuDefense],
    Passives: [
        new Passive("Indiscriminate Art",
            PassiveTypeEnum.Combat,
            "Deal and take +25% damage.",
            [{ sin: SinEnum.Gluttony , amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Hustle",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP deals and takes +20% damage.",
            [{ sin: SinEnum.Gluttony, amount: 3}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/LCBSinner/10401normal.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/LCBSinner/10401normalinfo.png"
}