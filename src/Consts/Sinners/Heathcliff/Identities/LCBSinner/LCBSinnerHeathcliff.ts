import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerHeathcliffSkill1 } from "./LCBSinnerHeathcliffSkill1";
import { LCBSinnerHeathcliffSkill2 } from "./LCBSinnerHeathcliffSkill2";
import { LCBSinnerHeathcliffSkill3 } from "./LCBSinnerHeathcliffSkill3";
import { LCBSinnerHeathcliffDefense } from "./LCBSinnerHeathcliffDefense";

export class LCBSinnerHeathcliff implements IdentityBase{
    readonly Id: number = 10701;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 78;
    readonly HealthPerLevel: number = 2.69;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = +0;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 1;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new LCBSinnerHeathcliffSkill1, 
                                new LCBSinnerHeathcliffSkill2, 
                                new LCBSinnerHeathcliffSkill3, 
                                new LCBSinnerHeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Ressentiment",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to targets with higher Max HP.",
            [{sin: SinEnum.Envy , amount: 4}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Spite-driven",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP deals +10% Blunt damage.",
            [{sin: SinEnum.Envy, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/LCBSinner/10701normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/LCBSinner/10701normalinfo.png";
}