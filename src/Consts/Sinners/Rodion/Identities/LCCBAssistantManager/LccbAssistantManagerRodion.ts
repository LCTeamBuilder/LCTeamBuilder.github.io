import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LccbAssistantManagerRodionSkill1 } from "./LccbAssistantManagerRodionSkill1";
import { LccbAssistantManagerRodionSkill2 } from "./LccbAssistantManagerRodionSkill2";
import { LccbAssistantManagerRodionSkill3 } from "./LccbAssistantManagerRodionSkill3";
import { LccbAssistantManagerRodionDefense } from "./LccbAssistantManagerRodionDefense";

export class LccbAssistantManagerRodion implements IdentityBase{
    readonly Id: number = 10903;
    readonly Name: string = "LCCB Assistant Manager";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 63;
    readonly HealthPerLevel: number = 2.17;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LccbAssistantManagerRodionSkill1, 
                                new LccbAssistantManagerRodionSkill2, 
                                new LccbAssistantManagerRodionSkill3, 
                                new LccbAssistantManagerRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Breach Defense",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to enemies that used defense skills this turn.",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Breaching",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +20% damage to enemies that used defense skills this turn.",
            [{sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/LCCBAssistantManager/10903gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/LCCBAssistantManager/10903gacksunginfo.png";
}