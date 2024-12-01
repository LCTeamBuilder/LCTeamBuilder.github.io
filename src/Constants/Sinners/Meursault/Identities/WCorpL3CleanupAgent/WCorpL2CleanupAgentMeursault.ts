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
import { WCorpL2CleanupAgentMeursaultDefense } from "./WCorpL2CleanupAgentMeursaultDefense";
import { WCorpL2CleanupAgentMeursaultSkill1 } from "./WCorpL2CleanupAgentMeursaultSkill1";
import { WCorpL2CleanupAgentMeursaultSkill2 } from "./WCorpL2CleanupAgentMeursaultSkill2";
import { WCorpL2CleanupAgentMeursaultSkill3 } from "./WCorpL2CleanupAgentMeursaultSkill3";

export const WCorpL2CleanupAgentMeursault: Identity = {
    Id: 10503,
    Name: "W Corp. L2 Cleanup Agent",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL2CleanupAgentMeursaultSkill1, 
            WCorpL2CleanupAgentMeursaultSkill2, 
            WCorpL2CleanupAgentMeursaultSkill3, 
            WCorpL2CleanupAgentMeursaultDefense],
    Passives: [
        new Passive("Enduring Spirit",
            PassiveTypeEnum.Combat,
            "When attacked, gain +1 [Charge] Count.<br>"+
            "(Up to 6 times)<br>"+
            "After losing a clash, gain +1 [Charge] Count. (Up 6 times, counted independently of hits taken)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Taciturn",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Rupture].",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/WCorpCleanupCrew/10503gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/WCorpCleanupCrew/10503gacksunginfo.png"
}