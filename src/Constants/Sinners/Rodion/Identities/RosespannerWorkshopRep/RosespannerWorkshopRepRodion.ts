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
import { RosespannerWorkshopRepRodionDefense } from "./RosespannerWorkshopRepRodionDefense";
import { RosespannerWorkshopRepRodionSkill1 } from "./RosespannerWorkshopRepRodionSkill1";
import { RosespannerWorkshopRepRodionSkill2 } from "./RosespannerWorkshopRepRodionSkill2";
import { RosespannerWorkshopRepRodionSkill3 } from "./RosespannerWorkshopRepRodionSkill3";

export const RosespannerWorkshopRepRodion: Identity = {
    Id: 10905,
    Name: "Rosespanner Workshop Rep",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RosespannerWorkshopRepRodionSkill1, 
            RosespannerWorkshopRepRodionSkill2, 
            RosespannerWorkshopRepRodionSkill3, 
            RosespannerWorkshopRepRodionDefense],
    Passives: [
        new Passive("Here's to Getting Off Early~",
            PassiveTypeEnum.Combat,
            "When bursting [Tremor], spend 3 [Charge] Count to increase the Stagger Threshold raise by +40%., After bursting [Tremor], gain 1 [Haste] and 1 [Blunt DMG Up] next turn.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Resonant Spanner",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Speed triggers [Tremor Burst], increase the Stagger Threshold raise by +20%.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/RosespannerWorkshopRep/10905gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/RosespannerWorkshopRep/10905gacksunginfo.png"
}