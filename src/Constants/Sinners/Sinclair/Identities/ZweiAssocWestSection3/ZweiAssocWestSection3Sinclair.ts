import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ZweiAssocWestSection3SinclairSkill1 } from "./ZweiAssocWestSection3SinclairSkill1";
import { ZweiAssocWestSection3SinclairSkill2 } from "./ZweiAssocWestSection3SinclairSkill2";
import { ZweiAssocWestSection3SinclairSkill3 } from "./ZweiAssocWestSection3SinclairSkill3";
import { ZweiAssocWestSection3SinclairDefense } from "./ZweiAssocWestSection3SinclairDefense";

export class ZweiAssocWestSection3Sinclair implements Identity{
    readonly Id: number = 11010;
    readonly Name: string = "Zwei Assoc. West Section 3";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 86;
    readonly HealthPerLevel: number = 2.96;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [60];
    readonly DefenseLevel: number = +4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 2;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new ZweiAssocWestSection3SinclairSkill1, 
                                new ZweiAssocWestSection3SinclairSkill2, 
                                new ZweiAssocWestSection3SinclairSkill3, 
                                new ZweiAssocWestSection3SinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Begin Protection Mission",
            PassiveTypeEnum.Combat,
            "At Combat Start, gain [Defense Level Up] equal to [Tremor] Count on self (max 5)",
            [{sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Contract Target Protection",
            PassiveTypeEnum.Support,
            "Turn End: apply 1 [Haste] and 3 [Defense Level Up] to 1 ally with the lowest HP percentage next turn",
            [{sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/ZweiAssocWestSection3/11010gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/ZweiAssocWestSection3/11010gacksunginfo.png";
}