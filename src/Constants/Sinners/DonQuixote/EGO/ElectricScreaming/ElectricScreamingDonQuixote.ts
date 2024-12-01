import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ElectricScreamingDonQuixoteAwakening } from "./ElectricScreamingDonQuixoteAwakening";
import { ElectricScreamingDonQuixoteCorrosion } from "./ElectricScreamingDonQuixoteCorrosion";

export const ElectricScreamingDonQuixote: Ego = {
    Id: 20306,
    Name: "Electric Screaming",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ElectricScreamingDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ElectricScreamingDonQuixoteCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Tempestuous Screaming", PassiveTypeEnum.Ego, "If the target is defeated at this unit's Slash or Envy Affinity Skill End, gain 1 [Attack Power Up] next turn (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306cg.png"
}