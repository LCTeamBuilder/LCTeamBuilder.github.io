import { FactionEnum, KeywordEnum, RarityEnum, SinnerEnum } from "../Enums/Index";
import { Passive } from "./Passive";
import { Skill } from "./Skill";

export abstract class Identity {
    abstract readonly Id: number;
    abstract readonly Name: string;
    abstract readonly Sinner: SinnerEnum;
    abstract readonly Rarity: RarityEnum;
    abstract readonly BaseHealth: number;
    abstract readonly HealthPerLevel: number;
    abstract readonly SpeedMin: number;
    abstract readonly SpeedMax: number;
    abstract readonly StaggerHpPercentThresholds: ReadonlyArray<number>;
    abstract readonly DefenseLevel: number;
    abstract readonly SlashResist: number;
    abstract readonly PierceResist: number;
    abstract readonly BluntResist: number;
    abstract readonly Skills: ReadonlyArray<Skill>
    abstract readonly Passives: ReadonlyArray<Passive>
    abstract readonly Keywords: ReadonlyArray<KeywordEnum>;
    abstract readonly Factions: ReadonlyArray<FactionEnum>;
    abstract readonly FullImageDir: string;
    abstract readonly PortraitImageDir: string;
}