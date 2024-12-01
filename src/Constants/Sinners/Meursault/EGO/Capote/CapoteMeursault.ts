import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { CapoteMeursaultAwakening } from "./CapoteMeursaultAwakening";
import { CapoteMeursaultCorrosion } from "./CapoteMeursaultCorrosion";

export const CapoteMeursault: Ego = {
    Id: 20504,
    Name: "Capote",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: CapoteMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: CapoteMeursaultCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Untempered Agitation", PassiveTypeEnum.Ego, "At the start of the combat phase, if targeted by 2 or more skills, this unit's skills have +1 Base Power, when hit, inflict 1 [Burn] on the attacker. (5 times per turn.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/Capote/20504cg.png"
}