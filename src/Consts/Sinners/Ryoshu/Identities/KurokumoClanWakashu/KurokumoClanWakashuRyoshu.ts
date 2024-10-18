import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { KurokumoClanWakashuRyoshuSkill1 } from "./KurokumoClanWakashuRyoshuSkill1";
import { KurokumoClanWakashuRyoshuSkill2 } from "./KurokumoClanWakashuRyoshuSkill2";
import { KurokumoClanWakashuRyoshuSkill3 } from "./KurokumoClanWakashuRyoshuSkill3";
import { KurokumoClanWakashuRyoshuDefense } from "./KurokumoClanWakashuRyoshuDefense";

export class KurokumoClanWakashuRyoshu implements IdentityBase{
    readonly Id: number = 10403;
    readonly Name: string = "Kurokumo Clan Wakashu";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.51;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new KurokumoClanWakashuRyoshuSkill1, 
                                new KurokumoClanWakashuRyoshuSkill2, 
                                new KurokumoClanWakashuRyoshuSkill3, 
                                new KurokumoClanWakashuRyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("Kokuundō",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to targets with [Bleed].",
            [{sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Muscle in Charge",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed inflicts +1 [Bleed].",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/KurokumoClanWakashu/10403gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/KurokumoClanWakashu/10403gacksunginfo.png";
}