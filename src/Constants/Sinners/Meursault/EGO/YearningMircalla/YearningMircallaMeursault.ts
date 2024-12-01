import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { YearningMircallaMeursaultAwakening } from "./YearningMircallaMeursaultAwakening";
import { YearningMircallaMeursaultCorrosion } from "./YearningMircallaMeursaultCorrosion";

export const YearningMircallaMeursault: Ego = {
    Id: 20507,
    Name: "Yearning Mircalla",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: YearningMircallaMeursaultAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: YearningMircallaMeursaultCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Bloodthirsty Banquet", PassiveTypeEnum.Ego, "When this unit deals or takes [Bleed] damage, heal HP equal to the [Bleed] damage (max 10 per turn)<br>"+
        "- When activating a Skill/Coin effect that inflicts [Bleed], if the target has [Rose Wedge], inflict 1 [Bleed] against the target. (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Lust, amount: 4 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/YearningMircalla/20507cg.png"
}