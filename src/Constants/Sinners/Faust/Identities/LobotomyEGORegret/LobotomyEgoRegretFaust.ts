import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LobotomyEgoRegretFaustSkill1 } from "./LobotomyEgoRegretFaustSkill1";
import { LobotomyEgoRegretFaustSkill2 } from "./LobotomyEgoRegretFaustSkill2";
import { LobotomyEgoRegretFaustSkill3 } from "./LobotomyEgoRegretFaustSkill3";
import { LobotomyEgoRegretFaustDefense } from "./LobotomyEgoRegretFaustDefense";

export class LobotomyEgoRegretFaust implements Identity{
    readonly Id: number = 10207;
    readonly Name: string = "Lobotomy E.G.O::Regret";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LobotomyEgoRegretFaustSkill1, 
                                new LobotomyEgoRegretFaustSkill2, 
                                new LobotomyEgoRegretFaustSkill3, 
                                new LobotomyEgoRegretFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Coerced Regret",
            PassiveTypeEnum.Combat,
            "- In a clash, the target has -1 Clash Power for every 3 types of negative effects it has (Max -2 Clash Power)<br>"+
            "- When this unit is alive, enemies affected by [Tremor Burst] gain 2 [Defense Level Down]. (3 times per enemy per turn)<br>"+
            "- Mental Corruption: If at less than -25 SP at Turn End, gain 2 [Bind] and 1 [Blunt Power Up] next turn",
            [{sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Repression Work",
            PassiveTypeEnum.Support,
            "In a clash, the target of the slowest ally has -1 Clash Power if they have 3+ types of negative effects",
            [{sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/LobotomyEGORegret/10207gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/LobotomyEGORegret/10207gacksunginfo.png";
}