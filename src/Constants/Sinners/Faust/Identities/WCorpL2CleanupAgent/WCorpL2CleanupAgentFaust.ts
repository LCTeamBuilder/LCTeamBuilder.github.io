import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { WCorpL2CleanupAgentFaustSkill1 } from "./WCorpL2CleanupAgentFaustSkill1";
import { WCorpL2CleanupAgentFaustSkill2 } from "./WCorpL2CleanupAgentFaustSkill2";
import { WCorpL2CleanupAgentFaustSkill3 } from "./WCorpL2CleanupAgentFaustSkill3";
import { WCorpL2CleanupAgentFaustDefense } from "./WCorpL2CleanupAgentFaustDefense";

export class WCorpL2CleanupAgentFaust implements Identity{
    readonly Id: number = 10202;
    readonly Name: string = "W Corp. L2 Cleanup Agent";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 88;
    readonly HealthPerLevel: number = 3.05;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 4;
    readonly StaggerHpPercentThresholds: number[] = [60, 30];
    readonly DefenseLevel: number = +3
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WCorpL2CleanupAgentFaustSkill1, 
                                new WCorpL2CleanupAgentFaustSkill2, 
                                new WCorpL2CleanupAgentFaustSkill3, 
                                new WCorpL2CleanupAgentFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Self-charging",
            PassiveTypeEnum.Combat,
            "Gain +1 [Charge] Count after an attack.<br>"+
            "A random ally gains +1 [Charge] Count after an attack.",
            [{sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Radio Comms",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains +1 [Charge] Count.",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/WCorpL2CleanupAgent/10202gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/WCorpL2CleanupAgent/10202gacksunginfo.png";
}