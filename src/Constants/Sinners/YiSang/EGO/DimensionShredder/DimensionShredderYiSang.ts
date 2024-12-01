import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { DimensionShredderYiSangAwakening } from "./DimensionShredderYiSangAwakening";
import { DimensionShredderYiSangCorrosion } from "./DimensionShredderYiSangCorrosion";

export const DimensionShredderYiSang: Ego = {
    Id: 20104,
    Name: "Dimension Shredder",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: DimensionShredderYiSangAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: DimensionShredderYiSangCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Rambling Man", PassiveTypeEnum.Ego, "At the start of the turn, if this unit took no damage last turn, gain +4 [Charge] Count. After successfully hitting an enemy with lower Speed, inflict +1 [Rupture] Count. (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 3 },
            { sin: SinEnum.Gluttony, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/DimensionShredder/20104cg.png"
}