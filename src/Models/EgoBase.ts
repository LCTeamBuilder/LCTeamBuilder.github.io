import { DamageTypeEnum } from "../Enums/DamageTypeEnum";
import { KeywordEnum } from "../Enums/KeywordEnum";
import { RiskLevelEnum } from "../Enums/RiskLevelEnum";
import { SinEnum } from "../Enums/SinEnum";
import { SinnerEnum } from "../Enums/SinnerEnum";
import { Passive } from "./Passive";
import { Skill } from "./Skill";

export abstract class EgoBase{
    abstract readonly Id: number;
    abstract readonly Name: string;
    abstract readonly Sinner: SinnerEnum;
    abstract readonly RiskLevel: RiskLevelEnum;
    abstract readonly AwakeningSkill: Skill;
    abstract readonly AwakeningSanityCost: number;
    abstract readonly CorrosionSkill?: Skill;
    abstract readonly CorrosionSanityCost?: number;
    abstract readonly Passive: Passive;
    abstract readonly Resistances: Array<{sin: SinEnum, resistance: number}>;
    abstract readonly Cost: Array<{sin: SinEnum, amount: number}>;
    abstract readonly Keywords: Array<KeywordEnum>;

    abstract readonly FullImageDir: string;
}