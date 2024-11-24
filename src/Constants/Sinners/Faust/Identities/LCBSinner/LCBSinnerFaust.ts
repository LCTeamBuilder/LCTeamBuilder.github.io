import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerFaustSkill1 } from "./LCBSinnerFaustSkill1";
import { LCBSinnerFaustSkill2 } from "./LCBSinnerFaustSkill2";
import { LCBSinnerFaustSkill3 } from "./LCBSinnerFaustSkill3";
import { LCBSinnerFaustDefense } from "./LCBSinnerFaustDefense";

export class LCBSinnerFaust implements Identity{
    readonly Id: number = 10201;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 84;
    readonly HealthPerLevel: number = 2.9;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 4;
    readonly StaggerHpPercentThresholds: number[] = [60, 30, 15];
    readonly DefenseLevel: number = +1;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 1;
    readonly Skills: Skill[] = [new LCBSinnerFaustSkill1, 
                                new LCBSinnerFaustSkill2, 
                                new LCBSinnerFaustSkill3, 
                                new LCBSinnerFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Analytic Eye",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to units with negative status effects.",
            [{sin: SinEnum.Pride , amount: 2}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Keen Observation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP inflicts 2 [Offense Level Down] with attacks at a 25% chance.",
            [{sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/LCBSinner/10201normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/LCBSinner/10201normalinfo.png";
}