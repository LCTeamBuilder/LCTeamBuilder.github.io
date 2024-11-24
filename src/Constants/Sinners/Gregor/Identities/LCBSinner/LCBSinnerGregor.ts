import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerGregorSkill1 } from "./LCBSinnerGregorSkill1";
import { LCBSinnerGregorSkill2 } from "./LCBSinnerGregorSkill2";
import { LCBSinnerGregorSkill3 } from "./LCBSinnerGregorSkill3";
import { LCBSinnerGregorDefense } from "./LCBSinnerGregorDefense";

export class LCBSinnerGregor implements Identity{
    readonly Id: number = 11201;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 72;
    readonly HealthPerLevel: number = 2.48;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = +0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LCBSinnerGregorSkill1, 
                                new LCBSinnerGregorSkill2, 
                                new LCBSinnerGregorSkill3, 
                                new LCBSinnerGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Forced Survival",
            PassiveTypeEnum.Combat,
            "Heal 5 HP at the start of the combat phase.",
            [{sin: SinEnum.Gloom , amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Gene Code G-0",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, the ally with the least HP heals 5 HP.",
            [{sin: SinEnum.Gloom, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/LCBSinner/11201normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/LCBSinner/11201normalinfo.png";
}