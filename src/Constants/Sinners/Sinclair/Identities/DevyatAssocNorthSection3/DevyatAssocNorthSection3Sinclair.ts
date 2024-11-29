import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { DevyatAssocNorthSection3SinclairSkill1 } from "./DevyatAssocNorthSection3SinclairSkill1";
import { DevyatAssocNorthSection3SinclairSkill2 } from "./DevyatAssocNorthSection3SinclairSkill2";
import { DevyatAssocNorthSection3SinclairSkill3 } from "./DevyatAssocNorthSection3SinclairSkill3";
import { DevyatAssocNorthSection3SinclairDefense } from "./DevyatAssocNorthSection3SinclairDefense";
import { DevyatAssocNorthSection3SinclairDefense2 } from "./DevyatAssocNorthSection3SinclairDefense2";

export class DevyatAssocNorthSection3Sinclair implements Identity{
    readonly Id: number = 11011;
    readonly Name: string = "Devyat' Assoc. North Section 3";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 1;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new DevyatAssocNorthSection3SinclairSkill1, 
                                new DevyatAssocNorthSection3SinclairSkill2, 
                                new DevyatAssocNorthSection3SinclairSkill3, 
                                new DevyatAssocNorthSection3SinclairDefense, 
                                new DevyatAssocNorthSection3SinclairDefense2];
    readonly Passives: Passive[] = [
        new Passive("I'll do better next time…",
            PassiveTypeEnum.Combat,
            "&lt;For Chain Battles&gt; When, after Retreating with '[Strategic R&R Mode]', if this unit rejoins the battle, halve the [Courier Trunk - Sinclair] value (once per Encounter, rounded up)"),

        new Passive("A moment, please…",
            PassiveTypeEnum.Combat,
            "Turn Start: At 6+ Speed, or if this unit has [Haste], gain ([Courier Trunk - Sinclair])% of this unit's max HP as Shield (max 20%)<br>"+
            "Upon Retreat, apply 1 [Clash Power Up] to 2 allies next turn (prioritizes Substituted units first, then in Deployment order)<br>"+
            "- Lasts for 1 additional turn for every 15 [Courier Trunk - Sinclair] (2 more turns max)",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Outstanding Courier",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed hits and enemy with [Rupture], inflict 1 [Defense Level Down] (3 times per enemy per turn)",
            [{sin: SinEnum.Gluttony, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/DevyatAssocNorthSection3/11011gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/DevyatAssocNorthSection3/11011gacksunginfo.png";
}