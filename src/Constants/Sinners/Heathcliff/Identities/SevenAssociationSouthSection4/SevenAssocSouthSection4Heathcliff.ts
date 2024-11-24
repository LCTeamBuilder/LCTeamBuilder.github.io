import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { SevenAssocSouthSection4HeathcliffSkill1 } from "./SevenAssocSouthSection4HeathcliffSkill1";
import { SevenAssocSouthSection4HeathcliffSkill2 } from "./SevenAssocSouthSection4HeathcliffSkill2";
import { SevenAssocSouthSection4HeathcliffSkill3 } from "./SevenAssocSouthSection4HeathcliffSkill3";
import { SevenAssocSouthSection4HeathcliffDefense } from "./SevenAssocSouthSection4HeathcliffDefense";

export class SevenAssocSouthSection4Heathcliff implements Identity{
    readonly Id: number = 10706;
    readonly Name: string = "Seven Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.7;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new SevenAssocSouthSection4HeathcliffSkill1, 
                                new SevenAssocSouthSection4HeathcliffSkill2, 
                                new SevenAssocSouthSection4HeathcliffSkill3, 
                                new SevenAssocSouthSection4HeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Instinctive Read",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Fatal" (Resistance>x1.5) to, inflict +1 more [Rupture] with Skill effects<br>'+
            "If 4 or more surviving units, including this unit, are Seven Association Fixers, additional +1 more [Rupture]",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Connect The Dots",
            PassiveTypeEnum.Support,
            '1 ally with the highest Max HP inflicts +1 more [Rupture] with Skill effects when attacking a target with a damage type that the target is "Fatal" (Resistance>x1.5) to<br>'+
            "If the ally is a Seven Association Fixer, additional +1 more [Rupture]",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/SevenAssociationSouthSection4/10706gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/SevenAssociationSouthSection4/10706gacksunginfo.png";
}