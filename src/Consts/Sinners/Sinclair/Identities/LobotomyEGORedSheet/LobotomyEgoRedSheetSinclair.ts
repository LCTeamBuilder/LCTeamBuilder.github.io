import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LobotomyEgoRedSheetSinclairSkill1 } from "./LobotomyEgoRedSheetSinclairSkill1";
import { LobotomyEgoRedSheetSinclairSkill2 } from "./LobotomyEgoRedSheetSinclairSkill2";
import { LobotomyEgoRedSheetSinclairSkill3 } from "./LobotomyEgoRedSheetSinclairSkill3";
import { LobotomyEgoRedSheetSinclairDefense } from "./LobotomyEgoRedSheetSinclairDefense";

export class LobotomyEgoRedSheetSinclair implements IdentityBase{
    readonly Id: number = 11006;
    readonly Name: string = "Lobotomy E.G.O::Red Sheet";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.7;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LobotomyEgoRedSheetSinclairSkill1, 
                                new LobotomyEgoRedSheetSinclairSkill2, 
                                new LobotomyEgoRedSheetSinclairSkill3, 
                                new LobotomyEgoRedSheetSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Unfixing Talismans",
            PassiveTypeEnum.Combat,
            "On hit, if the target had [Rupture], gain 1 [Talisman] .",
            [{sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Wishing Talisman",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, give (Highest Reson. * 2) [Talisman] to the ally with the most HP.",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/LobotomyEGORedSheet/11006gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/LobotomyEGORedSheet/11006gacksunginfo.png";
}