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
import { WCorpL3CleanupAgentRyoshuDefense } from "./WCorpL3CleanupAgentRyoshuDefense";
import { WCorpL3CleanupAgentRyoshuSkill1 } from "./WCorpL3CleanupAgentRyoshuSkill1";
import { WCorpL3CleanupAgentRyoshuSkill2 } from "./WCorpL3CleanupAgentRyoshuSkill2";
import { WCorpL3CleanupAgentRyoshuSkill3 } from "./WCorpL3CleanupAgentRyoshuSkill3";

export const WCorpL3CleanupAgentRyoshu: Identity = {
    Id: 10405,
    Name: "W Corp. L3 Cleanup Agent",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupAgentRyoshuSkill1, 
            WCorpL3CleanupAgentRyoshuSkill2, 
            WCorpL3CleanupAgentRyoshuSkill3, 
            WCorpL3CleanupAgentRyoshuDefense],
    Passives: [
        new Passive("Dimensional Demon Edge",
            PassiveTypeEnum.Combat,
            "Upon defeating an enemy, gain +3 [Charge] Count (3 times per turn)",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dimensional Refraction Edge - Type: Blade Mk7",
            PassiveTypeEnum.Support,
            "When an ally with the lowest Max HP defeats an enemy, they gain +3 [Charge] Count (Once per turn)",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/WCorpL3CleanupAgent/10405gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/WCorpL3CleanupAgent/10405gacksunginfo.png"
}