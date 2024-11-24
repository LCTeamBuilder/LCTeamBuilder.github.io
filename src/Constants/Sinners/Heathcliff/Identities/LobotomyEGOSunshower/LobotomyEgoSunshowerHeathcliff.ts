import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LobotomyEgoSunshowerHeathcliffSkill1 } from "./LobotomyEgoSunshowerHeathcliffSkill1";
import { LobotomyEgoSunshowerHeathcliffSkill2 } from "./LobotomyEgoSunshowerHeathcliffSkill2";
import { LobotomyEgoSunshowerHeathcliffSkill3 } from "./LobotomyEgoSunshowerHeathcliffSkill3";
import { LobotomyEgoSunshowerHeathcliffDefense } from "./LobotomyEgoSunshowerHeathcliffDefense";

export class LobotomyEgoSunshowerHeathcliff implements Identity{
    readonly Id: number = 10705;
    readonly Name: string = "Lobotomy E.G.O::Sunshower";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 86;
    readonly HealthPerLevel: number = 2.96;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [55, 20];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LobotomyEgoSunshowerHeathcliffSkill1, 
                                new LobotomyEgoSunshowerHeathcliffSkill2, 
                                new LobotomyEgoSunshowerHeathcliffSkill3, 
                                new LobotomyEgoSunshowerHeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Rain of Tears",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, spend 1 [Sinking] Count and lose SP by the current amount of Sinking.<br>"+
            "Before being hit by an attack, gain [Protection] equal to this unit's [Sinking]. (Up to 5 [Protection] can be gained per turn)<br>"+
            "When hit, gain 1 [Blunt DMG Up] next turn. (3 per turn)",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Ragged Umbrella",
            PassiveTypeEnum.Support,
            "1 ally with the least SP loses 10 SP when hit by an attack and gains 1 [Blunt DMG Up] next turn. (Once per turn)",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/LobotomyEGOSunshower/10705gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/LobotomyEGOSunshower/10705gacksunginfo.png";
}