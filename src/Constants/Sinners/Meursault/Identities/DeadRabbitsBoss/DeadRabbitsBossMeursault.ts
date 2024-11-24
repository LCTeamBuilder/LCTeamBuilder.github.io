import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { DeadRabbitsBossMeursaultSkill1 } from "./DeadRabbitsBossMeursaultSkill1";
import { DeadRabbitsBossMeursaultSkill2 } from "./DeadRabbitsBossMeursaultSkill2";
import { DeadRabbitsBossMeursaultSkill3 } from "./DeadRabbitsBossMeursaultSkill3";
import { DeadRabbitsBossMeursaultDefense } from "./DeadRabbitsBossMeursaultDefense";

export class DeadRabbitsBossMeursault implements Identity{
    readonly Id: number = 10509;
    readonly Name: string = "Dead Rabbits Boss";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new DeadRabbitsBossMeursaultSkill1, 
                                new DeadRabbitsBossMeursaultSkill2, 
                                new DeadRabbitsBossMeursaultSkill3, 
                                new DeadRabbitsBossMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Buy Time",
            PassiveTypeEnum.Combat,
            "Clash Power +1 against targets with [Rupture]<br>"+
            "Clash Power +2 if target has 5+ [Rupture] Count",
            [{sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("My Responsibility",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed hits an enemy with 3+ [Rupture], inflict 1 [Offense Level Down] (3 times per enemy per turn)",
            [{sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/DeadRabbitsBoss/10509gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/DeadRabbitsBoss/10509gacksunginfo.png";
}