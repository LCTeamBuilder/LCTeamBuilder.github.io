import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { RepresentationEmitterFaustAwakening } from "./RepresentationEmitterFaustAwakening";

export const RepresentationEmitterFaust: Ego = {
    Id: 20201,
    Name: "Representation Emitter",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: RepresentationEmitterFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Ennui", PassiveTypeEnum.Ego, "If an enemy is staggered during this unit's attack, 1 ally with the lowest SP has +2 [SP Heal Efficiency] next turn. (Max 3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Pride, amount: 4}],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/RepresentationEmitter/20201cg.png"
}