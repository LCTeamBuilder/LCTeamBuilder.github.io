import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ZweiAssocSouthSection4GregorSkill1 } from "./ZweiAssocSouthSection4GregorSkill1";
import { ZweiAssocSouthSection4GregorSkill2 } from "./ZweiAssocSouthSection4GregorSkill2";
import { ZweiAssocSouthSection4GregorSkill3 } from "./ZweiAssocSouthSection4GregorSkill3";
import { ZweiAssocSouthSection4GregorDefense } from "./ZweiAssocSouthSection4GregorDefense";

export class ZweiAssocSouthSection4Gregor implements Identity{
    readonly Id: number = 11206;
    readonly Name: string = "Zwei Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 90;
    readonly HealthPerLevel: number = 3;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [50];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ZweiAssocSouthSection4GregorSkill1, 
                                new ZweiAssocSouthSection4GregorSkill2, 
                                new ZweiAssocSouthSection4GregorSkill3, 
                                new ZweiAssocSouthSection4GregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Combat Shield",
            PassiveTypeEnum.Combat,
            "If targeted by 2 or more attacks at the start of the combat phase, gain 2 [Defense Level Up].<br>"+
            "If at 50% or less HP at the start of the combat phase, gain 3 [Defense Level Up].",
            [{sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Your Shield",
            PassiveTypeEnum.Support,
            "If 1 ally with the highest Max HP is targeted by 2 or more attacks, gain 3 [Defense Level Up]",
            [{sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/ZweiAssociationSouthSection4/11206gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/ZweiAssociationSouthSection4/11206gacksunginfo.png";
}