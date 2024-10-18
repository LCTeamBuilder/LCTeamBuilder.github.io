import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TheOneWhoShallGripSinclairSkill1 } from "./TheOneWhoShallGripSinclairSkill1";
import { TheOneWhoShallGripSinclairSkill2 } from "./TheOneWhoShallGripSinclairSkill2";
import { TheOneWhoShallGripSinclairSkill3 } from "./TheOneWhoShallGripSinclairSkill3";
import { TheOneWhoShallGripSinclairDefense } from "./TheOneWhoShallGripSinclairDefense";

export class TheOneWhoShallGripSinclair implements IdentityBase{
    readonly Id: number = 11005;
    readonly Name: string = "The One Who Shall Grip";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.73;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TheOneWhoShallGripSinclairSkill1, 
                                new TheOneWhoShallGripSinclairSkill2, 
                                new TheOneWhoShallGripSinclairSkill3, 
                                new TheOneWhoShallGripSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Mad Flame",
            PassiveTypeEnum.Combat,
            "Heal 50% less SP from winning a clash or defeating an enemy.<br>"+
            "If 5 or more surviving units, including this unit, are 'N Corp. Fanatic', they deal +10% damage.",
            [{sin: SinEnum.Wrath, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Conering",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% Blunt damage.<br>"+
            "If said ally is below 0 SP, further boost their Blunt damage the lower their SP is. (Max 10%)",
            [{sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/TheOneWhoShallGrip/11005gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/TheOneWhoShallGrip/11005gacksunginfo.png";
}