import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { KurokumoClanWakashuRodionSkill1 } from "./KurokumoClanWakashuRodionSkill1";
import { KurokumoClanWakashuRodionSkill2 } from "./KurokumoClanWakashuRodionSkill2";
import { KurokumoClanWakashuRodionSkill3 } from "./KurokumoClanWakashuRodionSkill3";
import { KurokumoClanWakashuRodionDefense } from "./KurokumoClanWakashuRodionDefense";

export class KurokumoClanWakashuRodion implements Identity{
    readonly Id: number = 10902;
    readonly Name: string = "Kurokumo Clan Wakashu";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
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
    readonly Skills: Skill[] = [new KurokumoClanWakashuRodionSkill1, 
                                new KurokumoClanWakashuRodionSkill2, 
                                new KurokumoClanWakashuRodionSkill3, 
                                new KurokumoClanWakashuRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Dark Cloud Blade",
            PassiveTypeEnum.Combat,
            "At 5+ [Poise], counter skills use Skill 3.",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dark Cloud Sword Swordsmanship",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +10% Slash damage.",
            [{sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/KurokumoHenchwoman/10902gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/KurokumoHenchwoman/10902gacksunginfo.png";
}