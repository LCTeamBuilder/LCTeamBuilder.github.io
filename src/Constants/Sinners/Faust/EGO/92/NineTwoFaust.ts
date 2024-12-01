import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { NineTwoFaustAwakening } from "./NineTwoFaustAwakening";
import { NineTwoFaustCorrosion } from "./NineTwoFaustCorrosion";

export const NineTwoFaust: Ego = {
    Id: 20205,
    Name: "9:2",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: NineTwoFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: NineTwoFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Flamebrand", PassiveTypeEnum.Ego, "On Heads Hit with a Lust affinity Skill, inflict 1 [Burn] on target (6 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/92/20205cg.png"
}