import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerYiSangDefense } from "./LCBSinnerYiSangDefense";
import { LCBSinnerYiSangSkill1 } from "./LCBSinnerYiSangSkill1";
import { LCBSinnerYiSangSkill2 } from "./LCBSinnerYiSangSkill2";
import { LCBSinnerYiSangSkill3 } from "./LCBSinnerYiSangSkill3";

export class LCBSinnerYiSang implements IdentityBase{
    readonly Id: number = 10101;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 72;
    readonly HealthPerLevel: number = 2.48;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 1;
    readonly Skills: Skill[] = [new LCBSinnerYiSangSkill1, 
                                new LCBSinnerYiSangSkill2, 
                                new LCBSinnerYiSangSkill3, 
                                new LCBSinnerYiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("Information Relay",
            PassiveTypeEnum.Combat,
            "Apply 1 [Damage Up] to 2 allies placed after this unit on the Dashboard.",
            [{sin: SinEnum.Gloom, amount: 4}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Information Neutralization",
            PassiveTypeEnum.Support,
            "At the end of the turn, Heal 10 SP for 1 ally with the least SP if they lost SP.",
            [{sin: SinEnum.Gloom, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/LCBSinner/10101normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/LCBSinner/10101normalinfo.png";
}