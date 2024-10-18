import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TingtangGangGangleaderHongLuSkill1 } from "./TingtangGangGangleaderHongLuSkill1";
import { TingtangGangGangleaderHongLuSkill2 } from "./TingtangGangGangleaderHongLuSkill2";
import { TingtangGangGangleaderHongLuSkill3 } from "./TingtangGangGangleaderHongLuSkill3";
import { TingtangGangGangleaderHongLuDefense } from "./TingtangGangGangleaderHongLuDefense";

export class TingtangGangGangleaderHongLu implements IdentityBase{
    readonly Id: number = 10603;
    readonly Name: string = "Tingtang Gang Gangleader";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TingtangGangGangleaderHongLuSkill1, 
                                new TingtangGangGangleaderHongLuSkill2, 
                                new TingtangGangGangleaderHongLuSkill3, 
                                new TingtangGangGangleaderHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Gaiety",
            PassiveTypeEnum.Combat,
            "Heal (2x Gluttony Reson.) SP next turn.",
            [{sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Gambit",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +20% damage with Heads Coins.",
            [{sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/TingtangGangGangleader/10603gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/TingtangGangGangleader/10603gacksunginfo.png";
}