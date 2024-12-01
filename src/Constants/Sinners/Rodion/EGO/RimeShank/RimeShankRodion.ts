import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { RimeShankRodionAwakening } from "./RimeShankRodionAwakening";
import { RimeShankRodionCorrosion } from "./RimeShankRodionCorrosion";

export const RimeShankRodion: Ego = {
    Id: 20903,
    Name: "Rime Shank",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RimeShankRodionAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RimeShankRodionCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Coldness", PassiveTypeEnum.Ego, "On hit, if the target has 5+ [Sinking], inflict 1 [Bind] and [Attack Power Down]. (3 times per unit.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 5 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/RimeShank/20903cg.png"
}