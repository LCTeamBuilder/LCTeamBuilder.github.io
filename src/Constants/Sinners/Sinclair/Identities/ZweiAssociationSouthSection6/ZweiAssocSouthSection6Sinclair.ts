import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ZweiAssocSouthSection6SinclairSkill1 } from "./ZweiAssocSouthSection6SinclairSkill1";
import { ZweiAssocSouthSection6SinclairSkill2 } from "./ZweiAssocSouthSection6SinclairSkill2";
import { ZweiAssocSouthSection6SinclairSkill3 } from "./ZweiAssocSouthSection6SinclairSkill3";
import { ZweiAssocSouthSection6SinclairDefense } from "./ZweiAssocSouthSection6SinclairDefense";

export class ZweiAssocSouthSection6Sinclair implements Identity{
    readonly Id: number = 11003;
    readonly Name: string = "Zwei Assoc. South Section 6";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 88;
    readonly HealthPerLevel: number = 3.05;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 4;
    readonly StaggerHpPercentThresholds: number[] = [55, 20];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ZweiAssocSouthSection6SinclairSkill1, 
                                new ZweiAssocSouthSection6SinclairSkill2, 
                                new ZweiAssocSouthSection6SinclairSkill3, 
                                new ZweiAssocSouthSection6SinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Your Shield",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, apply 2 [Defense Power Up] and 1 [Protection] to allies adjacent to this unit on the Dashboard.",
            [{sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Stubbornness",
            PassiveTypeEnum.Support,
            "1 ally with the least HP takes -10% damage.",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/ZweiAssociationSouthSection6/11003gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/ZweiAssociationSouthSection6/11003gacksunginfo.png";
}