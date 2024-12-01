import {
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Ego, Passive } from "../../../../../Models/Index";
import { ArdorBlossomStarIshmaelAwakening } from "./ArdorBlossomStarIshmaelAwakening";
import { ArdorBlossomStarIshmaelCorrosion } from "./ArdorBlossomStarIshmaelCorrosion";

export const ArdorBlossomStarIshmael: Ego = {
    Id: 20803,
    Name: "Ardor Blossom Star",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: ArdorBlossomStarIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ArdorBlossomStarIshmaelCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Shower of Fire", PassiveTypeEnum.Ego, "On hit, if the target had [Burn], inflict 1 [Burn] on 3 random enemies."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 4 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803cg.png"
}