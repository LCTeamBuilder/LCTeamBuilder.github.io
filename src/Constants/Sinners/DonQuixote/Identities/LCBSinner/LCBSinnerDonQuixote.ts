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
import { LCBSinnerDonQuixoteDefense } from "./LCBSinnerDonQuixoteDefense";
import { LCBSinnerDonQuixoteSkill1 } from "./LCBSinnerDonQuixoteSkill1";
import { LCBSinnerDonQuixoteSkill2 } from "./LCBSinnerDonQuixoteSkill2";
import { LCBSinnerDonQuixoteSkill3 } from "./LCBSinnerDonQuixoteSkill3";

export const LCBSinnerDonQuixote: Identity = {
    Id: 10301,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LCBSinnerDonQuixoteSkill1, 
            LCBSinnerDonQuixoteSkill2, 
            LCBSinnerDonQuixoteSkill3, 
            LCBSinnerDonQuixoteDefense],
    Passives: [
        new Passive("Righteous Retribution",
            PassiveTypeEnum.Combat,
            "Skills deal +10% damage in a won clash.",
            [{ sin: SinEnum.Lust , amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Support",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +10% Pierce damage.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/LCBSinner/10301normal.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/LCBSinner/10301normalinfo.png"
}