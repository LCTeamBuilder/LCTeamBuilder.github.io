import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerOutisSkill1 } from "./LCBSinnerOutisSkill1";
import { LCBSinnerOutisSkill2 } from "./LCBSinnerOutisSkill2";
import { LCBSinnerOutisSkill3 } from "./LCBSinnerOutisSkill3";
import { LCBSinnerOutisDefense } from "./LCBSinnerOutisDefense";

export class LCBSinnerOutis implements Identity{
    readonly Id: number = 11101;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 60;
    readonly HealthPerLevel: number = 2.07;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 0.5;
    readonly PierceResist: number = 1;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LCBSinnerOutisSkill1, 
                                new LCBSinnerOutisSkill2, 
                                new LCBSinnerOutisSkill3, 
                                new LCBSinnerOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Executor",
            PassiveTypeEnum.Combat,
            "If target's SP is below 0, deal +10% damage.",
            [{sin: SinEnum.Sloth, amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("Military Mindset",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +30% damage to enemies below 0 SP.",
            [{sin: SinEnum.Sloth, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/LCBSinner/11101normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/LCBSinner/11101normalinfo.png";
}