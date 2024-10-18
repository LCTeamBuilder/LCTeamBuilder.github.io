import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { BladeLineageSalsuSinclairSkill1 } from "./BladeLineageSalsuSinclairSkill1";
import { BladeLineageSalsuSinclairSkill2 } from "./BladeLineageSalsuSinclairSkill2";
import { BladeLineageSalsuSinclairSkill3 } from "./BladeLineageSalsuSinclairSkill3";
import { BladeLineageSalsuSinclairDefense } from "./BladeLineageSalsuSinclairDefense";

export class BladeLineageSalsuSinclair implements IdentityBase{
    readonly Id: number = 11002;
    readonly Name: string = "Blade Lineage Salsu";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 86;
    readonly HealthPerLevel: number = 2.96;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [60, 30];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new BladeLineageSalsuSinclairSkill1, 
                                new BladeLineageSalsuSinclairSkill2, 
                                new BladeLineageSalsuSinclairSkill3, 
                                new BladeLineageSalsuSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Slayer",
            PassiveTypeEnum.Combat,
            "The last Coin on the last skill in the chain deals +20% damage.<br>"+
            "Whenever an ally other than this unit gains [Poise] Count, this unit gains +1 [Poise] Count at a 50% chance.",
            [{sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Bloodied Hands",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed gains +1 final Power for their last skill.",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/BladeLineageSalsu/11002gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/BladeLineageSalsu/11002gacksunginfo.png";
}