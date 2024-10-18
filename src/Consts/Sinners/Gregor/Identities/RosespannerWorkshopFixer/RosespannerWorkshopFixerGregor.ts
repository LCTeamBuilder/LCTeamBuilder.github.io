import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { RosespannerWorkshopFixerGregorSkill1 } from "./RosespannerWorkshopFixerGregorSkill1";
import { RosespannerWorkshopFixerGregorSkill2 } from "./RosespannerWorkshopFixerGregorSkill2";
import { RosespannerWorkshopFixerGregorSkill3 } from "./RosespannerWorkshopFixerGregorSkill3";
import { RosespannerWorkshopFixerGregorDefense } from "./RosespannerWorkshopFixerGregorDefense";

export class RosespannerWorkshopFixerGregor implements IdentityBase{
    readonly Id: number = 11205;
    readonly Name: string = "Rosespanner Workshop Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.29;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RosespannerWorkshopFixerGregorSkill1, 
                                new RosespannerWorkshopFixerGregorSkill2, 
                                new RosespannerWorkshopFixerGregorSkill3, 
                                new RosespannerWorkshopFixerGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Sawblade Fired Up",
            PassiveTypeEnum.Combat,
            "Inflict +1 Rupture to targets with [Tremor]",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Sawblade Maintenance",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Rupture] to targets with [Tremor]",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/RosespannerWorkshopFixer/11205gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/RosespannerWorkshopFixer/11205gacksunginfo.png";
}