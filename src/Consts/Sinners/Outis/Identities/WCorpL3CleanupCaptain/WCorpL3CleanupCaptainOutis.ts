import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { WCorpL3CleanupCaptainOutisSkill1 } from "./WCorpL3CleanupCaptainOutisSkill1";
import { WCorpL3CleanupCaptainOutisSkill2 } from "./WCorpL3CleanupCaptainOutisSkill2";
import { WCorpL3CleanupCaptainOutisSkill3 } from "./WCorpL3CleanupCaptainOutisSkill3";
import { WCorpL3CleanupCaptainOutisDefense } from "./WCorpL3CleanupCaptainOutisDefense";

export class WCorpL3CleanupCaptainOutis implements IdentityBase{
    readonly Id: number = 11110;
    readonly Name: string = "W Corp. L3 Cleanup Capitan";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 70;
    readonly HealthPerLevel: number = 2.32;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new WCorpL3CleanupCaptainOutisSkill1, 
                                new WCorpL3CleanupCaptainOutisSkill2, 
                                new WCorpL3CleanupCaptainOutisSkill3, 
                                new WCorpL3CleanupCaptainOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Overcharge / Cleanup Order",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consume 10 cumulative [Charge] Count in this Encounter<br>"+
            "Turn End: Apply 1 [Clash Power Up] next turn to ([Charge]) W Corp. employees, including this unit, in reverse Deployment order (max: 5 allies)",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Refraction",
            PassiveTypeEnum.Support,
            "1 ally who has the most [Charge] Count at Turn Start: deal +10% more damage with Skills that consumed 7+ [Charge] Count (once per turn)",
            [{sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/WCorpL3CleanupCaptain/11110gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/WCorpL3CleanupCaptain/11110gacksunginfo.png";
}