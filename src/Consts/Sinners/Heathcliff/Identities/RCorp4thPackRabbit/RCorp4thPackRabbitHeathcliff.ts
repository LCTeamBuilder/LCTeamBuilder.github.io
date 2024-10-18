import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { RCorp4thPackRabbitHeathcliffSkill1 } from "./RCorp4thPackRabbitHeathcliffSkill1";
import { RCorp4thPackRabbitHeathcliffSkill2 } from "./RCorp4thPackRabbitHeathcliffSkill2";
import { RCorp4thPackRabbitHeathcliffSkill3 } from "./RCorp4thPackRabbitHeathcliffSkill3";
import { RCorp4thPackRabbitHeathcliffDefense } from "./RCorp4thPackRabbitHeathcliffDefense";

export class RCorp4thPackRabbitHeathcliff implements IdentityBase{
    readonly Id: number = 10703;
    readonly Name: string = "R Corp. 4th Pack Rabbit";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RCorp4thPackRabbitHeathcliffSkill1, 
                                new RCorp4thPackRabbitHeathcliffSkill2, 
                                new RCorp4thPackRabbitHeathcliffSkill3, 
                                new RCorp4thPackRabbitHeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Raring to Graze",
            PassiveTypeEnum.Combat,
            "Gain (Wrath Reson.) [Charge] Count next turn.<br>"+
            "At 5+ [Charge] Count, gain 1 [Haste] and 1 [Attack Power Up].<br>"+
            "Always Activate: At the start of the stage, gain +3 [Ammo].",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Doggedness",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed deals +10% Pierce damage.",
            [{sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/RCorp4thPackRabbit/10703gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/RCorp4thPackRabbit/10703gacksunginfo.png";
}