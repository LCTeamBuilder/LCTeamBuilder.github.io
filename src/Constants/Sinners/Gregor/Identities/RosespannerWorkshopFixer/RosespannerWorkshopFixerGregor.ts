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
import { RosespannerWorkshopFixerGregorDefense } from "./RosespannerWorkshopFixerGregorDefense";
import { RosespannerWorkshopFixerGregorSkill1 } from "./RosespannerWorkshopFixerGregorSkill1";
import { RosespannerWorkshopFixerGregorSkill2 } from "./RosespannerWorkshopFixerGregorSkill2";
import { RosespannerWorkshopFixerGregorSkill3 } from "./RosespannerWorkshopFixerGregorSkill3";

export const RosespannerWorkshopFixerGregor: Identity = {
    Id: 11205,
    Name: "Rosespanner Workshop Fixer",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.29,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RosespannerWorkshopFixerGregorSkill1, 
            RosespannerWorkshopFixerGregorSkill2, 
            RosespannerWorkshopFixerGregorSkill3, 
            RosespannerWorkshopFixerGregorDefense],
    Passives: [
        new Passive("Sawblade Fired Up",
            PassiveTypeEnum.Combat,
            "Inflict +1 Rupture to targets with [Tremor]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Sawblade Maintenance",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Rupture] to targets with [Tremor]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/RosespannerWorkshopFixer/11205gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/RosespannerWorkshopFixer/11205gacksunginfo.png"
}