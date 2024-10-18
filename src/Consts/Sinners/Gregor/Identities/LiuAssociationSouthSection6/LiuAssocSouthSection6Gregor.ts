import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LiuAssocSouthSection6GregorSkill1 } from "./LiuAssocSouthSection6GregorSkill1";
import { LiuAssocSouthSection6GregorSkill2 } from "./LiuAssocSouthSection6GregorSkill2";
import { LiuAssocSouthSection6GregorSkill3 } from "./LiuAssocSouthSection6GregorSkill3";
import { LiuAssocSouthSection6GregorDefense } from "./LiuAssocSouthSection6GregorDefense";

export class LiuAssocSouthSection6Gregor implements IdentityBase{
    readonly Id: number = 11202;
    readonly Name: string = "Liu Assoc. South Section 6";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
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
    readonly Skills: Skill[] = [new LiuAssocSouthSection6GregorSkill1, 
                                new LiuAssocSouthSection6GregorSkill2, 
                                new LiuAssocSouthSection6GregorSkill3, 
                                new LiuAssocSouthSection6GregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Ignition",
            PassiveTypeEnum.Combat,
            "The 3rd and subsequent Coins of a skill inflict 1 [Burn] on hit.",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rushing Heart",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +30% damage with their 4th and subsequent Coins.",
            [{sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/LiuAssociationSouthSection6/11202gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/LiuAssociationSouthSection6/11202gacksunginfo.png";
}