import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TCorpClass2CollectionStaffRodionSkill1 } from "./TCorpClass2CollectionStaffRodionSkill1";
import { TCorpClass2CollectionStaffRodionSkill2 } from "./TCorpClass2CollectionStaffRodionSkill2";
import { TCorpClass2CollectionStaffRodionSkill3 } from "./TCorpClass2CollectionStaffRodionSkill3";
import { TCorpClass2CollectionStaffRodionDefense } from "./TCorpClass2CollectionStaffRodionDefense";

export class TCorpClass2CollectionStaffRodion implements IdentityBase{
    readonly Id: number = 10909;
    readonly Name: string = "T Corp. Class 2 Collection Staff";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 86;
    readonly HealthPerLevel: number = 2.96;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TCorpClass2CollectionStaffRodionSkill1, 
                                new TCorpClass2CollectionStaffRodionSkill2, 
                                new TCorpClass2CollectionStaffRodionSkill3, 
                                new TCorpClass2CollectionStaffRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Golden Time - Standoff",
            PassiveTypeEnum.Combat,
            "Turn End: If this unit's HP is between 16% - 20%, instantly heal up to 60% of Max HP, and recover from Stagger. (once per Encounter)<br>"+
            "When Clashing against targets with [Time Moratorium], Clash Power +2<br>"+
            "Take -10% less damage from targets with [Time Moratorium]",
            [{sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("T Corp. Martial Arts",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: +1 Clash Power when Clashing against targets with 5+ Tremor",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/TCorpClass2CollectionStaff/10909gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/TCorpClass2CollectionStaff/10909gacksunginfo.png";
}