import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { WCorpL2CleanupAgentMeursaultSkill1 } from "./WCorpL2CleanupAgentMeursaultSkill1";
import { WCorpL2CleanupAgentMeursaultSkill2 } from "./WCorpL2CleanupAgentMeursaultSkill2";
import { WCorpL2CleanupAgentMeursaultSkill3 } from "./WCorpL2CleanupAgentMeursaultSkill3";
import { WCorpL2CleanupAgentMeursaultDefense } from "./WCorpL2CleanupAgentMeursaultDefense";

export class WCorpL2CleanupAgentMeursault implements Identity{
    readonly Id: number = 10503;
    readonly Name: string = "W Corp. L2 Cleanup Agent";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.73;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [60, 30];
    readonly DefenseLevel: number = +4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WCorpL2CleanupAgentMeursaultSkill1, 
                                new WCorpL2CleanupAgentMeursaultSkill2, 
                                new WCorpL2CleanupAgentMeursaultSkill3, 
                                new WCorpL2CleanupAgentMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Enduring Spirit",
            PassiveTypeEnum.Combat,
            "When attacked, gain +1 [Charge] Count.<br>"+
            "(Up to 6 times)<br>"+
            "After losing a clash, gain +1 [Charge] Count. (Up 6 times, counted independently of hits taken)",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Taciturn",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Rupture].",
            [{sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/WCorpCleanupCrew/10503gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/WCorpCleanupCrew/10503gacksunginfo.png";
}