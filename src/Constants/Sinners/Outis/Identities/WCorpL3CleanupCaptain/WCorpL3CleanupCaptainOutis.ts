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
import { WCorpL3CleanupCaptainOutisDefense } from "./WCorpL3CleanupCaptainOutisDefense";
import { WCorpL3CleanupCaptainOutisSkill1 } from "./WCorpL3CleanupCaptainOutisSkill1";
import { WCorpL3CleanupCaptainOutisSkill2 } from "./WCorpL3CleanupCaptainOutisSkill2";
import { WCorpL3CleanupCaptainOutisSkill3 } from "./WCorpL3CleanupCaptainOutisSkill3";

export const WCorpL3CleanupCaptainOutis: Identity = {
    Id: 11110,
    Name: "W Corp. L3 Cleanup Capitan",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.32,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupCaptainOutisSkill1, 
            WCorpL3CleanupCaptainOutisSkill2, 
            WCorpL3CleanupCaptainOutisSkill3, 
            WCorpL3CleanupCaptainOutisDefense],
    Passives: [
        new Passive("Overcharge / Cleanup Order",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consume 10 cumulative [Charge] Count in this Encounter<br>"+
            "Turn End: Apply 1 [Clash Power Up] next turn to ([Charge]) W Corp. employees, including this unit, in reverse Deployment order (max: 5 allies)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Refraction",
            PassiveTypeEnum.Support,
            "1 ally who has the most [Charge] Count at Turn Start: deal +10% more damage with Skills that consumed 7+ [Charge] Count (once per turn)",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/WCorpL3CleanupCaptain/11110gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/WCorpL3CleanupCaptain/11110gacksunginfo.png"
}