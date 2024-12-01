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
import { WCorpL2CleanupAgentFaustDefense } from "./WCorpL2CleanupAgentFaustDefense";
import { WCorpL2CleanupAgentFaustSkill1 } from "./WCorpL2CleanupAgentFaustSkill1";
import { WCorpL2CleanupAgentFaustSkill2 } from "./WCorpL2CleanupAgentFaustSkill2";
import { WCorpL2CleanupAgentFaustSkill3 } from "./WCorpL2CleanupAgentFaustSkill3";

export const WCorpL2CleanupAgentFaust: Identity = {
    Id: 10202,
    Name: "W Corp. L2 Cleanup Agent",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 88,
    HealthPerLevel: 3.05,
    SpeedMin: 2,
    SpeedMax: 4,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL2CleanupAgentFaustSkill1, 
            WCorpL2CleanupAgentFaustSkill2, 
            WCorpL2CleanupAgentFaustSkill3, 
            WCorpL2CleanupAgentFaustDefense],
    Passives: [
        new Passive("Self-charging",
            PassiveTypeEnum.Combat,
            "Gain +1 [Charge] Count after an attack.<br>"+
            "A random ally gains +1 [Charge] Count after an attack.",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Radio Comms",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains +1 [Charge] Count.",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/WCorpL2CleanupAgent/10202gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/WCorpL2CleanupAgent/10202gacksunginfo.png"
}