import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { SevenAssocSouthSection6YiSangSkill1 } from "./SevenAssocSouthSection6YiSangSkill1";
import { SevenAssocSouthSection6YiSangSkill2 } from "./SevenAssocSouthSection6YiSangSkill2";
import { SevenAssocSouthSection6YiSangSkill3 } from "./SevenAssocSouthSection6YiSangSkill3";
import { SevenAssocSouthSection6YiSangDefense } from "./SevenAssocSouthSection6YiSangDefense";

export class SevenAssocSouthSection6YiSang implements IdentityBase{
    readonly Id: number = 10102;
    readonly Name: string = "Seven Assoc. South Section 6";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 5;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [60, 30];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new SevenAssocSouthSection6YiSangSkill1, 
                                new SevenAssocSouthSection6YiSangSkill2, 
                                new SevenAssocSouthSection6YiSangSkill3, 
                                new SevenAssocSouthSection6YiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("Acute Studies",
            PassiveTypeEnum.Combat,
            "In a clash, the opponent has -2 Clash Power.",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Observational Eye",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP gains +1 Clash Power in a clash.",
            [{sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/SevenAssociationSouthSection6/10102gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/SevenAssociationSouthSection6/10102gacksunginfo.png";
}