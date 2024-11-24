import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ThePequodHarpooneerHeathcliffSkill1 } from "./ThePequodHarpooneerHeathcliffSkill1";
import { ThePequodHarpooneerHeathcliffSkill2 } from "./ThePequodHarpooneerHeathcliffSkill2";
import { ThePequodHarpooneerHeathcliffSkill3 } from "./ThePequodHarpooneerHeathcliffSkill3";
import { ThePequodHarpooneerHeathcliffDefense } from "./ThePequodHarpooneerHeathcliffDefense";

export class ThePequodHarpooneerHeathcliff implements Identity{
    readonly Id: number = 10707;
    readonly Name: string = "The Pequod Harpooneer";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 99;
    readonly HealthPerLevel: number = 3.41;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [80];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ThePequodHarpooneerHeathcliffSkill1, 
                                new ThePequodHarpooneerHeathcliffSkill2, 
                                new ThePequodHarpooneerHeathcliffSkill3, 
                                new ThePequodHarpooneerHeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Mutilated Tattoos",
            PassiveTypeEnum.Combat,
            "Gain 1 [Offense Level Up] and 1 [Defense Level Up] next turn every time an ally (including this unit) is attacked. Gain 2 of each instead if the ally is from The Pequod. (Max 9)<br>"+
            "Deal more damage the less HP this unit has.<br>"+
            "- Deal 1% more damage for every 1% missing HP",
            [{sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Desperation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP deals more Pierce Damage at less HP<br>"+
            "- Deal 0.3% more damage for every 1% missing HP (Max 30%)",
            [{sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/ThePequodHarpooneer/10707gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/ThePequodHarpooneer/10707gacksunginfo.png";
}