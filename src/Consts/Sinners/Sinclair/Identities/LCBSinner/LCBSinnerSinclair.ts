import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerSinclairDefense } from "./LCBSinnerSinclairDefense";
import { LCBSinnerSinclairSkill1 } from "./LCBSinnerSinclairSkill1";
import { LCBSinnerSinclairSkill2 } from "./LCBSinnerSinclairSkill2";
import { LCBSinnerSinclairSkill3 } from "./LCBSinnerSinclairSkill3";

export class LCBSinnerSinclair implements IdentityBase{
    readonly Id: number = 11001;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 60;
    readonly HealthPerLevel: number = 2.07;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 0.5;
    readonly PierceResist: number = 2;
    readonly BluntResist: number = 1;
    readonly Skills: Skill[] = [new LCBSinnerSinclairSkill1, 
                                new LCBSinnerSinclairSkill2, 
                                new LCBSinnerSinclairSkill3, 
                                new LCBSinnerSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Pluckiness",
            PassiveTypeEnum.Combat,
            "When an ally is defeated, gain 1 [Attack Power Up] next turn.",
            [{sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Grudge",
            PassiveTypeEnum.Support,
            "1 ally with the least SP gains 1 [Attack Power Up] the turn after an ally is defeated.",
            [{sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/LCBSinner/11001normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/LCBSinner/11001normalinfo.png";
}