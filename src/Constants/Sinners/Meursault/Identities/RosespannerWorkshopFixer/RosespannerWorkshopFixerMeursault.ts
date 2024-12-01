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
import { RosespannerWorkshopFixerMeursaultDefense } from "./RosespannerWorkshopFixerMeursaultDefense";
import { RosespannerWorkshopFixerMeursaultSkill1 } from "./RosespannerWorkshopFixerMeursaultSkill1";
import { RosespannerWorkshopFixerMeursaultSkill2 } from "./RosespannerWorkshopFixerMeursaultSkill2";
import { RosespannerWorkshopFixerMeursaultSkill3 } from "./RosespannerWorkshopFixerMeursaultSkill3";

export const RosespannerWorkshopFixerMeursault: Identity = {
    Id: 10505,
    Name: "Rosespanner Workshop Fixer",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RosespannerWorkshopFixerMeursaultSkill1, 
            RosespannerWorkshopFixerMeursaultSkill2, 
            RosespannerWorkshopFixerMeursaultSkill3, 
            RosespannerWorkshopFixerMeursaultDefense],
    Passives: [
        new Passive("Chronic Fatigue",
            PassiveTypeEnum.Combat,
            "In a clash, the opponent has -1 Clash Power if they have 5+ [Tremor].<br>"+
            "When recovering from Stagger, heal 5% of Max HP.",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Leave by Suggestion",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed lowers the Clash Power of opponents with [Tremor] by 1.",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/RosespannerWorkshopFixer/10505gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/RosespannerWorkshopFixer/10505gacksunginfo.png"
}