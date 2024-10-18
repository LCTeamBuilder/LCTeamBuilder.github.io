import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { SevenAssocSouthSection4FaustSkill1 } from "./SevenAssocSouthSection4FaustSkill1";
import { SevenAssocSouthSection4FaustSkill2 } from "./SevenAssocSouthSection4FaustSkill2";
import { SevenAssocSouthSection4FaustSkill3 } from "./SevenAssocSouthSection4FaustSkill3";
import { SevenAssocSouthSection4FaustDefense } from "./SevenAssocSouthSection4FaustDefense";

export class SevenAssocSouthSection4Faust implements IdentityBase{
    readonly Id: number = 10206;
    readonly Name: string = "Seven Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new SevenAssocSouthSection4FaustSkill1, 
                                new SevenAssocSouthSection4FaustSkill2, 
                                new SevenAssocSouthSection4FaustSkill3, 
                                new SevenAssocSouthSection4FaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Before The Tea Cools...",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Weak" or "Fatal" (Resistance>x1) to, gain 1 [Poise] for each [Rupture] on target before the attack (Max 20 per turn)',
            [{sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Seven Association Tea Time",
            PassiveTypeEnum.Support,
            '1 ally with the fastest Speed deals more damage based on the target\'s [Rupture] when attacking with a damage type that the target is "Weak" or "Fatal"(Resistance>x1) to<br>'+
            "(+1.5% per 1 [Rupture]; Max 15%)<br>"+
            "If the ally is a Seven Association Fixer, deal further increased damage<br>"+
            "(+0.5% per 1 [Rupture]; Max 5%)",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/SevenAssociationSouthSection4/10206gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/SevenAssociationSouthSection4/10206gacksunginfo.png";
}