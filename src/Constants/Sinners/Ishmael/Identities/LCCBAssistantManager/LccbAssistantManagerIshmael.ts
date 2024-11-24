import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LccbAssistantManagerIshmaelSkill1 } from "./LccbAssistantManagerIshmaelSkill1";
import { LccbAssistantManagerIshmaelSkill2 } from "./LccbAssistantManagerIshmaelSkill2";
import { LccbAssistantManagerIshmaelSkill3 } from "./LccbAssistantManagerIshmaelSkill3";
import { LccbAssistantManagerIshmaelDefense } from "./LccbAssistantManagerIshmaelDefense";

export class LccbAssistantManagerIshmael implements Identity{
    readonly Id: number = 10804;
    readonly Name: string = "LCCB Assistant Manager";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [55, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LccbAssistantManagerIshmaelSkill1, 
                                new LccbAssistantManagerIshmaelSkill2, 
                                new LccbAssistantManagerIshmaelSkill3, 
                                new LccbAssistantManagerIshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Eye for Weakness",
            PassiveTypeEnum.Combat,
            "Attacks inflict 1 [Tremor] in a won clash.",
            [{sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("By the Manual",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed gains +2 guard skill Final Power.",
            [{sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/LCCBAssistantManager/10804gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/LCCBAssistantManager/10804gacksunginfo.png";
}