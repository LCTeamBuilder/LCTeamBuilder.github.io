import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LiuAssocSouthSection6MeursaultSkill1 } from "./LiuAssocSouthSection6MeursaultSkill1";
import { LiuAssocSouthSection6MeursaultSkill2 } from "./LiuAssocSouthSection6MeursaultSkill2";
import { LiuAssocSouthSection6MeursaultSkill3 } from "./LiuAssocSouthSection6MeursaultSkill3";
import { LiuAssocSouthSection6MeursaultDefense } from "./LiuAssocSouthSection6MeursaultDefense";

export class LiuAssocSouthSection6Meursault implements Identity{
    readonly Id: number = 10502;
    readonly Name: string = "Liu Assoc. South Section 6";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LiuAssocSouthSection6MeursaultSkill1, 
                                new LiuAssocSouthSection6MeursaultSkill2, 
                                new LiuAssocSouthSection6MeursaultSkill3, 
                                new LiuAssocSouthSection6MeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Great Mountain",
            PassiveTypeEnum.Combat,
            "When attacked, inflict 1 [Burn] on a random enemy.<br>"+
            "(Up to 4 times)",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Friction Point",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Burn]",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/LiuAssociationSouthSection6/10502gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/LiuAssociationSouthSection6/10502gacksunginfo.png";
}