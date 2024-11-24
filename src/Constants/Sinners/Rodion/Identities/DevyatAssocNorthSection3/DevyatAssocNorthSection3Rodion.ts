import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { DevyatAssocNorthSection3RodionSkill1 } from "./DevyatAssocNorthSection3RodionSkill1";
import { DevyatAssocNorthSection3RodionSkill2 } from "./DevyatAssocNorthSection3RodionSkill2";
import { DevyatAssocNorthSection3RodionSkill3 } from "./DevyatAssocNorthSection3RodionSkill3";
import { DevyatAssocNorthSection3RodionDefense } from "./DevyatAssocNorthSection3RodionDefense";
import { DevyatAssocNorthSection3RodionDefense2 } from "./DevyatAssocNorthSection3RodionDefense2";

export class DevyatAssocNorthSection3Rodion implements Identity{
    readonly Id: number = 10910;
    readonly Name: string = "Devyat' Assoc. North Section 3";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 81;
    readonly HealthPerLevel: number = 2.88;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [60, 30];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new DevyatAssocNorthSection3RodionSkill1, 
                                new DevyatAssocNorthSection3RodionSkill2, 
                                new DevyatAssocNorthSection3RodionSkill3, 
                                new DevyatAssocNorthSection3RodionDefense, 
                                new DevyatAssocNorthSection3RodionDefense2];
    readonly Passives: Passive[] = [
        new Passive("Lemme go and I swear I'll make it in time!",
            PassiveTypeEnum.Combat,
            "<For Chain Battles> When, after Retreating with '[Strategic R&R Mode]', if this unit rejoins the battle, halve the [Courier Trunk] value (once per Encounter, rounded up)"),

        new Passive("Speedy Delivery",
            PassiveTypeEnum.Combat,
            "Turn Start: At 6+ Speed, or if this unit has [Haste],<br>"+
            "gain ([Courier Trunk])% of this unit's max HP as Shield (max 20%)<br><br>"+

            "Upon Retreat, apply 1 [Clash Power Up] to 2 allies next turn (prioritizes Substituted units first, then in Deployment order)<br>"+
            "- Lasts for 1 additional turn for every 15 [Courier Trunk] on self (2 more turns max)",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Outstanding Courier",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: Clash Power +1 to Skills that apply [Rupture] Potency or Count",
            [{sin: SinEnum.Gluttony, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/DevyatAssocNorthSection3/10910gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/DevyatAssocNorthSection3/10910gacksunginfo.png";
}