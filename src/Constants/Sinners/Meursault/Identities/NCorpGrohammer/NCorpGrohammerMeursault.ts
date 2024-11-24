import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { NCorpGrohammerMeursaultSkill1 } from "./NCorpGrohammerMeursaultSkill1";
import { NCorpGrohammerMeursaultSkill2 } from "./NCorpGrohammerMeursaultSkill2";
import { NCorpGrohammerMeursaultSkill3 } from "./NCorpGrohammerMeursaultSkill3";
import { NCorpGrohammerMeursaultDefense } from "./NCorpGrohammerMeursaultDefense";

export class NCorpGrohammerMeursault implements Identity{
    readonly Id: number = 10504;
    readonly Name: string = "N Corp. Großhammer";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 99;
    readonly HealthPerLevel: number = 3.41;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [50];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new NCorpGrohammerMeursaultSkill1, 
                                new NCorpGrohammerMeursaultSkill2, 
                                new NCorpGrohammerMeursaultSkill3, 
                                new NCorpGrohammerMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Obsessive Hammer",
            PassiveTypeEnum.Combat,
            "When below 50% HP, remove 1 negative status effect and gain 1 [Fanatic], 1 [Attack Power Up], and 3 [Protection] at the start of the combat phase.",
            [{sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Highest Honor",
            PassiveTypeEnum.Support,
            "Apply 1 [Attack Power Up] and 1 [Protection] to the ally with the least HP below 50%.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 1 [Fanatic].",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/NCorpGrohammer/10504gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/NCorpGrohammer/10504gacksunginfo.png";
}