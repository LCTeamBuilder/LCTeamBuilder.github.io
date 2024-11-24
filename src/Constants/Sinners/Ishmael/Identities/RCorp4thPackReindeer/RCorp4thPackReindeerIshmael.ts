import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { RCorp4thPackReindeerIshmaelSkill1 } from "./RCorp4thPackReindeerIshmaelSkill1";
import { RCorp4thPackReindeerIshmaelSkill2 } from "./RCorp4thPackReindeerIshmaelSkill2";
import { RCorp4thPackReindeerIshmaelSkill3 } from "./RCorp4thPackReindeerIshmaelSkill3";
import { RCorp4thPackReindeerIshmaelDefense } from "./RCorp4thPackReindeerIshmaelDefense";

export class RCorp4thPackReindeerIshmael implements Identity{
    readonly Id: number = 10802;
    readonly Name: string = "R Corp. 4th Pack Reindeer";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.69;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RCorp4thPackReindeerIshmaelSkill1, 
                                new RCorp4thPackReindeerIshmaelSkill2, 
                                new RCorp4thPackReindeerIshmaelSkill3, 
                                new RCorp4thPackReindeerIshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Brainwave Focus",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain (Gloom Reson. / 3) [Attack Power Up].<br>"+
            "If this unit fails to deal damage this turn, lose 15 SP at the end of the turn.",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Tenacity",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% Blunt damage.",
            [{sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/RCorp4thPackReindeer/10802gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/RCorp4thPackReindeer/10802gacksunginfo.png";
}