import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { CapoteIshmaelAwakening } from "./CapoteIshmaelAwakening";
import { CapoteIshmaelCorrosion } from "./CapoteIshmaelCorrosion";

export const CapoteIshmael: Ego = {
    Id: 20804,
    Name: "Capote",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: CapoteIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: CapoteIshmaelCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Slaying Amid Cheers", PassiveTypeEnum.Ego, "When attacking a target with less than 30% HP, Wrath skills deal +20% damage."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/Capote/20804cg.png"
}