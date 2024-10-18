import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LiuAssocSouthSection4RyoshuSkill1 } from "./LiuAssocSouthSection4RyoshuSkill1";
import { LiuAssocSouthSection4RyoshuSkill2 } from "./LiuAssocSouthSection4RyoshuSkill2";
import { LiuAssocSouthSection4RyoshuSkill3 } from "./LiuAssocSouthSection4RyoshuSkill3";
import { LiuAssocSouthSection4RyoshuDefense } from "./LiuAssocSouthSection4RyoshuDefense";

export class LiuAssocSouthSection4Ryoshu implements IdentityBase{
    readonly Id: number = 10407;
    readonly Name: string = "Liu Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LiuAssocSouthSection4RyoshuSkill1, 
                                new LiuAssocSouthSection4RyoshuSkill2, 
                                new LiuAssocSouthSection4RyoshuSkill3, 
                                new LiuAssocSouthSection4RyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("Flame Spread",
            PassiveTypeEnum.Combat,
            "When this unit defeats an enemy with [Burn], apply 4 [Burn] to 2 random enemies with no [Burn] or with the least Burn Potency. (Once per turn)<br>"+
            "- In Focused Encounters, to 2 randoms Parts",
            [{sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Spread Flame",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Speed defeats an enemy with [Burn], inflict 3 [Burn] on 2 random enemies (Once per turn)<br>"+
            "- In Focused Encounters, on 2 random Parts",
            [{sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/LiuAssociationSouthSection4/10407gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/LiuAssociationSouthSection4/10407gacksunginfo.png";
}