import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { WCorpL3CleanupAgentRyoshuSkill1 } from "./WCorpL3CleanupAgentRyoshuSkill1";
import { WCorpL3CleanupAgentRyoshuSkill2 } from "./WCorpL3CleanupAgentRyoshuSkill2";
import { WCorpL3CleanupAgentRyoshuSkill3 } from "./WCorpL3CleanupAgentRyoshuSkill3";
import { WCorpL3CleanupAgentRyoshuDefense } from "./WCorpL3CleanupAgentRyoshuDefense";

export class WCorpL3CleanupAgentRyoshu implements Identity{
    readonly Id: number = 10405;
    readonly Name: string = "W Corp. L3 Cleanup Agent";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WCorpL3CleanupAgentRyoshuSkill1, 
                                new WCorpL3CleanupAgentRyoshuSkill2, 
                                new WCorpL3CleanupAgentRyoshuSkill3, 
                                new WCorpL3CleanupAgentRyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("Dimensional Demon Edge",
            PassiveTypeEnum.Combat,
            "Upon defeating an enemy, gain +3 [Charge] Count (3 times per turn)",
            [{sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dimensional Refraction Edge - Type: Blade Mk7",
            PassiveTypeEnum.Support,
            "When an ally with the lowest Max HP defeats an enemy, they gain +3 [Charge] Count (Once per turn)",
            [{sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/WCorpL3CleanupAgent/10405gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/WCorpL3CleanupAgent/10405gacksunginfo.png";
}