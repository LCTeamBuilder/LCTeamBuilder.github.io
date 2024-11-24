import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { BladeLineageSalsuYiSangSkill1 } from "./BladeLineageSalsuYiSangSkill1";
import { BladeLineageSalsuYiSangSkill2 } from "./BladeLineageSalsuYiSangSkill2";
import { BladeLineageSalsuYiSangSkill3 } from "./BladeLineageSalsuYiSangSkill3";
import { BladeLineageSalsuYiSangDefense } from "./BladeLineageSalsuYiSangDefense";

export class BladeLineageSalsuYiSang implements Identity{
    readonly Id: number = 10103;
    readonly Name: string = "Blade Lineage Salsu";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new BladeLineageSalsuYiSangSkill1, 
                                new BladeLineageSalsuYiSangSkill2, 
                                new BladeLineageSalsuYiSangSkill3, 
                                new BladeLineageSalsuYiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("Poised",
            PassiveTypeEnum.Combat,
            "On clash win, gain +1 [Poise] Count.<br>"+
            "Coin Power +1 For every 5 [Poise] Count. (Max 3)",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Bestow",
            PassiveTypeEnum.Support,
            "1 ally with the most SP gains +1 [Poise] Count from skills.",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/BladeLineageSalsu/10103gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/BladeLineageSalsu/10103gacksunginfo.png";
}