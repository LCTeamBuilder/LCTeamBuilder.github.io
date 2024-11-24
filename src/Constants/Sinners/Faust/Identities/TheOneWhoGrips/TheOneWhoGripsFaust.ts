import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { TheOneWhoGripsFaustSkill1 } from "./TheOneWhoGripsFaustSkill1";
import { TheOneWhoGripsFaustSkill2 } from "./TheOneWhoGripsFaustSkill2";
import { TheOneWhoGripsFaustSkill3 } from "./TheOneWhoGripsFaustSkill3";
import { TheOneWhoGripsFaustDefense } from "./TheOneWhoGripsFaustDefense";

export class TheOneWhoGripsFaust implements Identity{
    readonly Id: number = 10204;
    readonly Name: string = "The One Who Grips";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TheOneWhoGripsFaustSkill1, 
                                new TheOneWhoGripsFaustSkill2, 
                                new TheOneWhoGripsFaustSkill3, 
                                new TheOneWhoGripsFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Whistles",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, heal 2 allies with the least SP for 15 SP.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 2 [Fanatic].",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Whispers",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, heal 1 ally with the least SP for 15 SP.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 2 [Fanatic] .",
            [{sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/TheOneWhoGrips/10204gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/TheOneWhoGrips/10204gacksunginfo.png";
}