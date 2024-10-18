import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { GCorpManagerCorporalGregorSkill1 } from "./GCorpManagerCorporalGregorSkill1";
import { GCorpManagerCorporalGregorSkill2 } from "./GCorpManagerCorporalGregorSkill2";
import { GCorpManagerCorporalGregorSkill3 } from "./GCorpManagerCorporalGregorSkill3";
import { GCorpManagerCorporalGregorDefense } from "./GCorpManagerCorporalGregorDefense";

export class GCorpManagerCorporalGregor implements IdentityBase{
    readonly Id: number = 11203;
    readonly Name: string = "G Corp. Manager Corporal";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new GCorpManagerCorporalGregorSkill1, 
                                new GCorpManagerCorporalGregorSkill2, 
                                new GCorpManagerCorporalGregorSkill3, 
                                new GCorpManagerCorporalGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Emergency Rations",
            PassiveTypeEnum.Combat,
            "At less than 25% HP, heal by 5% of Max HP after winning a clash.",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Gene Code G-3",
            PassiveTypeEnum.Support,
            "The ally with the least HP heals 5 HP after winning a clash.",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/GCorpCorporalManager/11203gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/GCorpCorporalManager/11203gacksunginfo.png";
}