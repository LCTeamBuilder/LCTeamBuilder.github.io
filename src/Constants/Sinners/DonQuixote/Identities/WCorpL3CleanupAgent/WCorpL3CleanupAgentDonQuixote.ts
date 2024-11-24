import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { WCorpL3CleanupAgentDonQuixoteSkill1 } from "./WCorpL3CleanupAgentDonQuixoteSkill1";
import { WCorpL3CleanupAgentDonQuixoteSkill2 } from "./WCorpL3CleanupAgentDonQuixoteSkill2";
import { WCorpL3CleanupAgentDonQuixoteSkill3 } from "./WCorpL3CleanupAgentDonQuixoteSkill3";
import { WCorpL3CleanupAgentDonQuixoteDefense } from "./WCorpL3CleanupAgentDonQuixoteDefense";

export class WCorpL3CleanupAgentDonQuixote implements Identity{
    readonly Id: number = 10302;
    readonly Name: string = "W Corp. L3 Cleanup Agent";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.51;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WCorpL3CleanupAgentDonQuixoteSkill1, 
                                new WCorpL3CleanupAgentDonQuixoteSkill2, 
                                new WCorpL3CleanupAgentDonQuixoteSkill3, 
                                new WCorpL3CleanupAgentDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Quick Recharge",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain [Charge] Count by (Gloom Reson. / 3).",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Broken Spirit",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed gains +1 final Power for their first skill.",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/WCorpCleanupCrew/10302gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/WCorpCleanupCrew/10302gacksunginfo.png";
}