import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ZweiAssocSouthSection4FaustSkill1 } from "./ZweiAssocSouthSection4FaustSkill1";
import { ZweiAssocSouthSection4FaustSkill2 } from "./ZweiAssocSouthSection4FaustSkill2";
import { ZweiAssocSouthSection4FaustSkill3 } from "./ZweiAssocSouthSection4FaustSkill3";
import { ZweiAssocSouthSection4FaustDefense } from "./ZweiAssocSouthSection4FaustDefense";

export class ZweiAssocSouthSection4Faust implements Identity{
    readonly Id: number = 10205;
    readonly Name: string = "Zwei Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [55, 20];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ZweiAssocSouthSection4FaustSkill1, 
                                new ZweiAssocSouthSection4FaustSkill2, 
                                new ZweiAssocSouthSection4FaustSkill3, 
                                new ZweiAssocSouthSection4FaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Territory Protection",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, apply 2 [Defense Level Up] to the 2 allies adjacent to this unit on the Dashboard.<br>"+
            "If the allies HP is below 50%, apply an additional 2 [Defense Level Up]",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Protection Request Received",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, apply 2 [Defense Level Up] to the ally with the lowest HP percentage<br>"+
            "If target's HP is below 50%, apply an additional 2 [Defense Level Up]",
            [{sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/ZweiAssociationSouthSection4/10205gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/ZweiAssociationSouthSection4/10205gacksunginfo.png";
}