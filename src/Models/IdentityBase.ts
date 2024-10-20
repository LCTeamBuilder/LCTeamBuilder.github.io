import { FactionEnum } from "../Enums/FactionEnum";
import { KeywordEnum } from "../Enums/KeywordEnum";
import { RarityEnum } from "../Enums/RarityEnum";
import { SinnerEnum } from "../Enums/SinnerEnum";
import { Passive } from "./Passive";
import { Skill } from "./Skill";

export abstract class IdentityBase{
    abstract readonly Id: number;
    abstract readonly Name: string;
    abstract readonly Sinner: SinnerEnum;
    abstract readonly Rarity: RarityEnum;
    abstract readonly BaseHealth: number;
    abstract readonly HealthPerLevel: number;
    abstract readonly SpeedMin: number;
    abstract readonly SpeedMax: number;
    abstract readonly StaggerHpPercentThresholds: number[];
    abstract readonly DefenseLevel: number;
    abstract readonly SlashResist: number;
    abstract readonly PierceResist: number;
    abstract readonly BluntResist: number;
    abstract readonly Skills: Array<Skill>
    abstract readonly Passives: Array<Passive>
    abstract readonly Keywords: Array<KeywordEnum>;
    abstract readonly Factions: Array<FactionEnum>;
    abstract readonly FullImageDir: string;
    abstract readonly PortraitImageDir: string;
}