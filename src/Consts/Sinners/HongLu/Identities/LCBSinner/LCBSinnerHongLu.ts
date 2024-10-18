import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerHongLuSkill1 } from "./LCBSinnerHongLuSkill1";
import { LCBSinnerHongLuSkill2 } from "./LCBSinnerHongLuSkill2";
import { LCBSinnerHongLuSkill3 } from "./LCBSinnerHongLuSkill3";
import { LCBSinnerHongLuDefense } from "./LCBSinnerHongLuDefense";

export class LCBSinnerHongLu implements IdentityBase{
    readonly Id: number = 10601;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 1;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new LCBSinnerHongLuSkill1, 
                                new LCBSinnerHongLuSkill2, 
                                new LCBSinnerHongLuSkill3, 
                                new LCBSinnerHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Entertainment",
            PassiveTypeEnum.Combat,
            "Heal 6 SP next turn.",
            [{sin: SinEnum.Sloth , amount: 2}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Frivolous Jokes",
            PassiveTypeEnum.Support,
            "At the start of combat phase, the ally with the least SP heals 6 SP.",
            [{sin: SinEnum.Sloth, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/LCBSinner/10601normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/LCBSinner/10601normalinfo.png";
}