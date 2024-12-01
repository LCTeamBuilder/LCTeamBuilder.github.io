import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { FellBulletHeathcliffAwakening } from "./FellBulletHeathcliffAwakening";
import { FellBulletHeathcliffCorrosion } from "./FellBulletHeathcliffCorrosion";

export const FellBulletHeathcliff: Ego = {
    Id: 20707,
    Name: "Fell Bullet",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: FellBulletHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FellBulletHeathcliffCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Crushed Pendant", PassiveTypeEnum.Ego, "Combat Start: At 3+ highest Reson., gain 3 [Poise]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/FellBullet/20707cg.png"
}