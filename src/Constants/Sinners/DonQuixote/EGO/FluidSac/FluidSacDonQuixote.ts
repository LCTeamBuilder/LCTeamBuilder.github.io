import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { FluidSacDonQuixoteAwakening } from "./FluidSacDonQuixoteAwakening";
import { FluidSacDonQuixoteCorrosion } from "./FluidSacDonQuixoteCorrosion";

export const FluidSacDonQuixote: Ego = {
    Id: 20302,
    Name: "Fluid Sac",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FluidSacDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FluidSacDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Wave of Depression", PassiveTypeEnum.Ego, 
                "The target of the rightmost skill on the Dashboard loses SP by (2x Gloom A-Reson.) after the attack.<br>"+
                "(Targets without SP values take Gloom damage instead.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gloom, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/FluidSac/20302cg.png"
}