import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TCorpClass3CollectionStaffDonQuixoteSkill1 } from "./TCorpClass3CollectionStaffDonQuixoteSkill1";
import { TCorpClass3CollectionStaffDonQuixoteSkill2 } from "./TCorpClass3CollectionStaffDonQuixoteSkill2";
import { TCorpClass3CollectionStaffDonQuixoteSkill3 } from "./TCorpClass3CollectionStaffDonQuixoteSkill3";
import { TCorpClass3CollectionStaffDonQuixoteDefense } from "./TCorpClass3CollectionStaffDonQuixoteDefense";

export class TCorpClass3CollectionStaffDonQuixote implements IdentityBase{
    readonly Id: number = 10309;
    readonly Name: string = "T Corp. Class 3 Collection Staff";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 95;
    readonly HealthPerLevel: number = 3.26;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [50];
    readonly DefenseLevel: number = +4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TCorpClass3CollectionStaffDonQuixoteSkill1, 
                                new TCorpClass3CollectionStaffDonQuixoteSkill2, 
                                new TCorpClass3CollectionStaffDonQuixoteSkill3, 
                                new TCorpClass3CollectionStaffDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Golden Time - Extracting",
            PassiveTypeEnum.Combat,
            "Turn End: If this unit's HP is between 10% - 20%, instantly heal 80% of this unit's max HP, and recover from Stagger. (once per Encounter)<br><br>"+

            "When this unit loses [Borrowed Time], gain +8 [Aggro] to one of this unit's Skill Slots next turn",
            [{sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("T Corp. Physics Distortion Field",
            PassiveTypeEnum.Support,
            "When 1 ally with the slowest Speed takes damage from enemies with [Tremor] , take -10% less damage",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/TCorpClass3CollectionStaff/10309gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/TCorpClass3CollectionStaff/10309gacksunginfo.png";
}