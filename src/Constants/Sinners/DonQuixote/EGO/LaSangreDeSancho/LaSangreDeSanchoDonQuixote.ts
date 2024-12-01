import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { LaSangreDeSanchoDonQuixoteAwakening } from "./LaSangreDeSanchoDonQuixoteAwakening";

export const LaSangreDeSanchoDonQuixote: Ego = {
    Id: 20301,
    Name: "La Sangre de Sancho",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: LaSangreDeSanchoDonQuixoteAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Immoderate Passion", PassiveTypeEnum.Ego, "On hit, if the target had [Bleed], heal 3 HP."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/LaSangreDeSancho/20301cg.png"
}