import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { KurokumoClanWakashuHongLuSkill1 } from "./KurokumoClanWakashuHongLuSkill1";
import { KurokumoClanWakashuHongLuSkill2 } from "./KurokumoClanWakashuHongLuSkill2";
import { KurokumoClanWakashuHongLuSkill3 } from "./KurokumoClanWakashuHongLuSkill3";
import { KurokumoClanWakashuHongLuDefense } from "./KurokumoClanWakashuHongLuDefense";

export class KurokumoClanWakashuHongLu implements Identity{
    readonly Id: number = 10602;
    readonly Name: string = "Kurokumo Clan Wakashu";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new KurokumoClanWakashuHongLuSkill1, 
                                new KurokumoClanWakashuHongLuSkill2, 
                                new KurokumoClanWakashuHongLuSkill3, 
                                new KurokumoClanWakashuHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Hēiyúndào",
            PassiveTypeEnum.Combat,
            "The last Coin on the last skill in the chain inflicts 3 [Bleed].",
            [{sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Syndicate Payback",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed inflicts +1 [Bleed].",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/KurokumoClanWakashu/10602gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/KurokumoClanWakashu/10602gacksunginfo.png";
}