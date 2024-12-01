import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { FluidSacFaustAwakening } from "./FluidSacFaustAwakening";
import { FluidSacFaustCorrosion } from "./FluidSacFaustCorrosion";

export const FluidSacFaust: Ego = {
    Id: 20202,
    Name: "Fluid Sac",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FluidSacFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FluidSacFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Liquid Veil", PassiveTypeEnum.Ego, "At the start of the turn, apply 2 [Protection] to the ally with the least HP. (Including self.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gloom, amount: 4 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/FluidSac/20202cg.png"
}