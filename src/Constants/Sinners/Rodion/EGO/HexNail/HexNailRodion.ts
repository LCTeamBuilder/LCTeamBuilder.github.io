import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { HexNailRodionAwakening } from "./HexNailRodionAwakening";
import { HexNailRodionCorrosion } from "./HexNailRodionCorrosion";

export const HexNailRodion: Ego = {
    Id: 20907,
    Name: "Hex Nail",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: HexNailRodionAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: HexNailRodionCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Iron Stake against the Heart", PassiveTypeEnum.Ego, "When inflicting [Bleed] or 'Unique Bleed' against an enemy with Base Attack Skills, inflict 1 [Defense Level Down] (once per turn)<br>"+
        "- If the target has [Bleed] or 'Unique Bleed', inflict additional 2 [Bleed] (once per turn)<br><br>"+

        "If an ally, including this unit, takes direct HP damage from the enemy, inflict 1 [Curse] against the target enemy (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Pride, amount: 1 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/HexNail/20907cg.png"
}