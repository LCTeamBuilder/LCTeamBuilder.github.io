import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LobotomyEgoSloshingIshmaelSkill1 } from "./LobotomyEgoSloshingIshmaelSkill1";
import { LobotomyEgoSloshingIshmaelSkill2 } from "./LobotomyEgoSloshingIshmaelSkill2";
import { LobotomyEgoSloshingIshmaelSkill3 } from "./LobotomyEgoSloshingIshmaelSkill3";
import { LobotomyEgoSloshingIshmaelDefense } from "./LobotomyEgoSloshingIshmaelDefense";

export class LobotomyEgoSloshingIshmael implements Identity{
    readonly Id: number = 10805;
    readonly Name: string = "Lobotomy E.G.O::Sloshing";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 90;
    readonly HealthPerLevel: number = 3.1;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [50, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LobotomyEgoSloshingIshmaelSkill1, 
                                new LobotomyEgoSloshingIshmaelSkill2, 
                                new LobotomyEgoSloshingIshmaelSkill3, 
                                new LobotomyEgoSloshingIshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Filling Fluid",
            PassiveTypeEnum.Combat,
            "If this unit fails to deal HP damage using attack Skills in a turn, gain a Shield equal to 10% of Max HP next turn. (Max 30)",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Corrosive Slime",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest Speed triggers [Tremor Burst], they inflict 2 [Rupture].",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/LobotomyEGOSloshing/10805gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/LobotomyEGOSloshing/10805gacksunginfo.png";
}