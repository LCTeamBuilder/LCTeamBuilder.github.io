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
import { LCBSinnerRodionDefense } from "./LCBSinnerRodionDefense";
import { LCBSinnerRodionSkill1 } from "./LCBSinnerRodionSkill1";
import { LCBSinnerRodionSkill2 } from "./LCBSinnerRodionSkill2";
import { LCBSinnerRodionSkill3 } from "./LCBSinnerRodionSkill3";

export const LCBSinnerRodion: Identity = {
    Id: 10901,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 78,
    HealthPerLevel: 2.69,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +0,
    SlashResist: 0.5,
    PierceResist: 2,
    BluntResist: 1,
    Skills: [LCBSinnerRodionSkill1, 
            LCBSinnerRodionSkill2, 
            LCBSinnerRodionSkill3, 
            LCBSinnerRodionDefense],
    Passives: [
        new Passive("Split Evil",
            PassiveTypeEnum.Combat,
            "On hit, inflict 1 [Bleed] at a 50% chance.",
            [{ sin: SinEnum.Wrath , amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Gambler",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +20% damage with Heads Coins.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/LCBSinner/10901normal.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/LCBSinner/10901normalinfo.png"
}