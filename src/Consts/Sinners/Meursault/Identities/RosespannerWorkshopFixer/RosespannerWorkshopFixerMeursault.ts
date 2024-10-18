import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { RosespannerWorkshopFixerMeursaultSkill1 } from "./RosespannerWorkshopFixerMeursaultSkill1";
import { RosespannerWorkshopFixerMeursaultSkill2 } from "./RosespannerWorkshopFixerMeursaultSkill2";
import { RosespannerWorkshopFixerMeursaultSkill3 } from "./RosespannerWorkshopFixerMeursaultSkill3";
import { RosespannerWorkshopFixerMeursaultDefense } from "./RosespannerWorkshopFixerMeursaultDefense";

export class RosespannerWorkshopFixerMeursault implements IdentityBase{
    readonly Id: number = 10505;
    readonly Name: string = "Rosespanner Workshop Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.7;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RosespannerWorkshopFixerMeursaultSkill1, 
                                new RosespannerWorkshopFixerMeursaultSkill2, 
                                new RosespannerWorkshopFixerMeursaultSkill3, 
                                new RosespannerWorkshopFixerMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Chronic Fatigue",
            PassiveTypeEnum.Combat,
            "In a clash, the opponent has -1 Clash Power if they have 5+ [Tremor].<br>"+
            "When recovering from Stagger, heal 5% of Max HP.",
            [{sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Leave by Suggestion",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed lowers the Clash Power of opponents with [Tremor] by 1.",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/RosespannerWorkshopFixer/10505gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/RosespannerWorkshopFixer/10505gacksunginfo.png";
}