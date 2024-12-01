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
import { WCorpL2CleanupAgentHongLuDefense } from "./WCorpL2CleanupAgentHongLuDefense";
import { WCorpL2CleanupAgentHongLuSkill1 } from "./WCorpL2CleanupAgentHongLuSkill1";
import { WCorpL2CleanupAgentHongLuSkill2 } from "./WCorpL2CleanupAgentHongLuSkill2";
import { WCorpL2CleanupAgentHongLuSkill3 } from "./WCorpL2CleanupAgentHongLuSkill3";

export const WCorpL2CleanupAgentHongLu: Identity = {
    Id: 10606,
    Name: "W Corp. L2 Cleanup Agent",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL2CleanupAgentHongLuSkill1, 
            WCorpL2CleanupAgentHongLuSkill2, 
            WCorpL2CleanupAgentHongLuSkill3, 
            WCorpL2CleanupAgentHongLuDefense],
    Passives: [
        new Passive("Cleanup Mastery",
            PassiveTypeEnum.Combat,
            "If at 5+ [Charge] Count at the start of the combat phase, gain 2 [Haste].<br>"+
            "At 10+ [Charge] Count, gain 1 additional [Haste].",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Train Cleanup Manual",
            PassiveTypeEnum.Support,
            "An ally with the lowest Speed gains 2 Haste next turn if at 5+ [Charge] Count at the start of the combat phase",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/WCorpL2CleanupAgent/10606gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/WCorpL2CleanupAgent/10606gacksunginfo.png"
}