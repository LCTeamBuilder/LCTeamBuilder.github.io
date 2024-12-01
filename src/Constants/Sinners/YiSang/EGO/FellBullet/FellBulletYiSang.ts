import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { FellBulletYiSangAwakening } from "./FellBulletYiSangAwakening";
import { FellBulletYiSangCorrosion } from "./FellBulletYiSangCorrosion";

export const FellBulletYiSang: Ego = {
    Id: 20107,
    Name: "Fell Bullet",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FellBulletYiSangAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: FellBulletYiSangCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Next", PassiveTypeEnum.Ego, "After Attack: if the target is killed, gain +2 [Poise] Count (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Pride, amount: 6 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/FellBullet/20107cg.png"
}