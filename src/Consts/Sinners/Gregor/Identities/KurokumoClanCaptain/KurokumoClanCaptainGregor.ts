import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { KurokumoClanCaptainGregorSkill1 } from "./KurokumoClanCaptainGregorSkill1";
import { KurokumoClanCaptainGregorSkill2 } from "./KurokumoClanCaptainGregorSkill2";
import { KurokumoClanCaptainGregorSkill3 } from "./KurokumoClanCaptainGregorSkill3";
import { KurokumoClanCaptainGregorDefense } from "./KurokumoClanCaptainGregorDefense";

export class KurokumoClanCaptainGregor implements IdentityBase{
    readonly Id: number = 11208;
    readonly Name: string = "Kurokumo Clan Captain";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new KurokumoClanCaptainGregorSkill1, 
                                new KurokumoClanCaptainGregorSkill2, 
                                new KurokumoClanCaptainGregorSkill3, 
                                new KurokumoClanCaptainGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Dark Cloud Blade",
            PassiveTypeEnum.Combat,
            "Clash Win: inflict 1 [Bleed] (3 times per turn)",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dark Cloud Style",
            PassiveTypeEnum.Support,
            "When 1 ally with the slowest Speed hits and enemy with 7+ [Bleed], inflict 1 [Offense Level Down] next turn (3 times per turn)",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/KurokumoClanCaptain/11208gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/KurokumoClanCaptain/11208gacksunginfo.png";
}