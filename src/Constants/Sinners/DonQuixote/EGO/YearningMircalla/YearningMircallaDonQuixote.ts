import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { YearningMircallaDonQuixoteAwakening } from "./YearningMircallaDonQuixoteAwakening";
import { YearningMircallaDonQuixoteCorrosion } from "./YearningMircallaDonQuixoteCorrosion";

export const YearningMircallaDonQuixote: Ego = {
    Id: 20307,
    Name: "Yearning Mircalla",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: YearningMircallaDonQuixoteAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: YearningMircallaDonQuixoteCorrosion,
    CorrosionSanityCost: 40,
    Passive: new Passive("Spiring Crimson Blossom", PassiveTypeEnum.Ego, "Every time 10 [Bleed] damage occurs, heal 1 SP on self (10 per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 5 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/YearningMircalla/20307cg.png"
}