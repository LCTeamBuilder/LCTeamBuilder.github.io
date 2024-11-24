import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { WCorpL2CleanupAgentHongLuSkill1 } from "./WCorpL2CleanupAgentHongLuSkill1";
import { WCorpL2CleanupAgentHongLuSkill2 } from "./WCorpL2CleanupAgentHongLuSkill2";
import { WCorpL2CleanupAgentHongLuSkill3 } from "./WCorpL2CleanupAgentHongLuSkill3";
import { WCorpL2CleanupAgentHongLuDefense } from "./WCorpL2CleanupAgentHongLuDefense";

export class WCorpL2CleanupAgentHongLu implements Identity{
    readonly Id: number = 10606;
    readonly Name: string = "W Corp. L2 Cleanup Agent";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [55, 20];
    readonly DefenseLevel: number = -3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WCorpL2CleanupAgentHongLuSkill1, 
                                new WCorpL2CleanupAgentHongLuSkill2, 
                                new WCorpL2CleanupAgentHongLuSkill3, 
                                new WCorpL2CleanupAgentHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Cleanup Mastery",
            PassiveTypeEnum.Combat,
            "If at 5+ [Charge] Count at the start of the combat phase, gain 2 [Haste].<br>"+
            "At 10+ [Charge] Count, gain 1 additional [Haste].",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Train Cleanup Manual",
            PassiveTypeEnum.Support,
            "An ally with the lowest Speed gains 2 Haste next turn if at 5+ [Charge] Count at the start of the combat phase",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/WCorpL2CleanupAgent/10606gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/WCorpL2CleanupAgent/10606gacksunginfo.png";
}