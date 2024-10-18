import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { BladeLineageSalsuOutisSkill1 } from "./BladeLineageSalsuOutisSkill1";
import { BladeLineageSalsuOutisSkill2 } from "./BladeLineageSalsuOutisSkill2";
import { BladeLineageSalsuOutisSkill3 } from "./BladeLineageSalsuOutisSkill3";
import { BladeLineageSalsuOutisDefense } from "./BladeLineageSalsuOutisDefense";

export class BladeLineageSalsuOutis implements IdentityBase{
    readonly Id: number = 11102;
    readonly Name: string = "Blade Lineage Salsu";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new BladeLineageSalsuOutisSkill1, 
                                new BladeLineageSalsuOutisSkill2, 
                                new BladeLineageSalsuOutisSkill3, 
                                new BladeLineageSalsuOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Levelheaded",
            PassiveTypeEnum.Combat,
            "Deal +20% damage to targets below 25% HP",
            [{sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Double Tap",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +30% damage to enemies below 25% HP.",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/BladeLineageCutthroat/11102gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/BladeLineageCutthroat/11102gacksunginfo.png";
}