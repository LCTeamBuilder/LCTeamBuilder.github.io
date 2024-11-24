import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerIshmaelSkill1 } from "./LCBSinnerIshmaelSkill1";
import { LCBSinnerIshmaelSkill2 } from "./LCBSinnerIshmaelSkill2";
import { LCBSinnerIshmaelSkill3 } from "./LCBSinnerIshmaelSkill3";
import { LCBSinnerIshmaelDefense } from "./LCBSinnerIshmaelDefense";

export class LCBSinnerIshmael implements Identity{
    readonly Id: number = 10801;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 78;
    readonly HealthPerLevel: number = 2.69;
    readonly SpeedMin: number = 5;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [60, 30];
    readonly DefenseLevel: number = +0;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 1;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new LCBSinnerIshmaelSkill1, 
                                new LCBSinnerIshmaelSkill2, 
                                new LCBSinnerIshmaelSkill3, 
                                new LCBSinnerIshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Last-ditch Struggle",
            PassiveTypeEnum.Combat,
            "At less than 25% HP, gain +1 clash Power in a clash.",
            [{sin: SinEnum.Wrath , amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Determination to Survive",
            PassiveTypeEnum.Support,
            "1 ally with the least HP and less than 50% of Max HP gains +1 Clash Power in a clash.",
            [{sin: SinEnum.Wrath, amount: 6}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/LCBSinner/10801normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/LCBSinner/10801normalinfo.png";
}