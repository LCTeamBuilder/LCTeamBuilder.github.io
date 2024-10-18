import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { SevenAssocSouthSection6RyoshuSkill1 } from "./SevenAssocSouthSection6RyoshuSkill1";
import { SevenAssocSouthSection6RyoshuSkill2 } from "./SevenAssocSouthSection6RyoshuSkill2";
import { SevenAssocSouthSection6RyoshuSkill3 } from "./SevenAssocSouthSection6RyoshuSkill3";
import { SevenAssocSouthSection6RyoshuDefense } from "./SevenAssocSouthSection6RyoshuDefense";

export class SevenAssocSouthSection6Ryoshu implements IdentityBase{
    readonly Id: number = 10402;
    readonly Name: string = "Seven Assoc. South Section 6";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 63;
    readonly HealthPerLevel: number = 2.17;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new SevenAssocSouthSection6RyoshuSkill1, 
                                new SevenAssocSouthSection6RyoshuSkill2, 
                                new SevenAssocSouthSection6RyoshuSkill3, 
                                new SevenAssocSouthSection6RyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("C. I. H.",
            PassiveTypeEnum.Combat,
            "Deal +10% Slash damage this turn.",
            [{sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Ice Breaker",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP inflicts +1 [Rupture]",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/SevenAssociationSouthSection6/10402gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/SevenAssociationSouthSection6/10402gacksunginfo.png";
}