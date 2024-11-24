import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { BladeLineageSalsuDonQuixoteSkill1 } from "./BladeLineageSalsuDonQuixoteSkill1";
import { BladeLineageSalsuDonQuixoteSkill2 } from "./BladeLineageSalsuDonQuixoteSkill2";
import { BladeLineageSalsuDonQuixoteSkill3 } from "./BladeLineageSalsuDonQuixoteSkill3";
import { BladeLineageSalsuDonQuixoteDefense } from "./BladeLineageSalsuDonQuixoteDefense";

export class BladeLineageSalsuDonQuixote implements Identity{
    readonly Id: number = 10308;
    readonly Name: string = "Blade Lineage Salsu";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new BladeLineageSalsuDonQuixoteSkill1, 
                                new BladeLineageSalsuDonQuixoteSkill2, 
                                new BladeLineageSalsuDonQuixoteSkill3, 
                                new BladeLineageSalsuDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Collective Breathing",
            PassiveTypeEnum.Combat,
            "When this unit gains [Poise] Potency with its own Skill or Coin effects: give 1 Poise Potency to 1 ally with no [Poise] or with the least [Poise] Potency (5 times max)",
            [{sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Nightly Stroll",
            PassiveTypeEnum.Support,
            "1 ally with the least [Poise] gains 2 more [Poise] Potency when gaining [Poise] Potency with its own Skill or Coin effects. (2 times max. Does not apply to allies without [Poise])",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/BladeLineageSalsu/10308gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/BladeLineageSalsu/10308gacksunginfo.png";
}