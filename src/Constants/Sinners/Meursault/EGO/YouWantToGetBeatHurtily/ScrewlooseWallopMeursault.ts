import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ScrewlooseWallopMeursaultAwakening } from "./ScrewlooseWallopMeursaultAwakening";
import { ScrewlooseWallopMeursaultCorrosion } from "./ScrewlooseWallopMeursaultCorrosion";

export const ScrewlooseWallopMeursault: Ego = {
    Id: 20502,
    Name: "Screwloose Wallop",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ScrewlooseWallopMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ScrewlooseWallopMeursaultCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Final Augment", PassiveTypeEnum.Ego, "If the E.G.O Skill is used at less than 25% HP, gain 3 [Attack Power Up], [Defense Power Up], and [Haste] every turn, but then die in 3 turns."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 1 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502cg.png"
}