import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { TelepoleDonQuixoteAwakening } from "./TelepoleDonQuixoteAwakening";
import { TelepoleDonQuixoteCorrosion } from "./TelepoleDonQuixoteCorrosion";

export const TelepoleDonQuixote: Ego = {
    Id: 20303,
    Name: "Telepole",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: TelepoleDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: TelepoleDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Haphazard Discharge", PassiveTypeEnum.Ego, "At the start of the combat phase, a random ally with [Charge] gains +(Envy A-Reson. / 2) [Charge] Count."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/Telepole/20303cg.png"
}