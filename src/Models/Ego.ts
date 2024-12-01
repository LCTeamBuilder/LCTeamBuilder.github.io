import { KeywordEnum, RiskLevelEnum, SinEnum, SinnerEnum } from "../Enums/Index";
import { Passive } from "./Passive";
import { Skill } from "./Skill";

export abstract class Ego {
    abstract readonly Id: number;
    abstract readonly Name: string;
    abstract readonly Sinner: SinnerEnum;
    abstract readonly RiskLevel: RiskLevelEnum;
    abstract readonly AwakeningSkill: Skill;
    abstract readonly AwakeningSanityCost: number;
    abstract readonly CorrosionSkill?: Skill;
    abstract readonly CorrosionSanityCost?: number;
    abstract readonly Passive: Passive;
    abstract readonly Resistances: ReadonlyArray<{ sin: SinEnum, resistance: number }>;
    abstract readonly Cost: ReadonlyArray<{ sin: SinEnum, amount: number }>;
    abstract readonly Keywords: ReadonlyArray<KeywordEnum>;

    abstract readonly FullImageDir: string;
}