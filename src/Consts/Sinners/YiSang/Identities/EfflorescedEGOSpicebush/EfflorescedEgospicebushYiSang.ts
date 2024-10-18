import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { EfflorescedEgospicebushYiSangSkill1 } from "./EfflorescedEgospicebushYiSangSkill1";
import { EfflorescedEgospicebushYiSangSkill2 } from "./EfflorescedEgospicebushYiSangSkill2";
import { EfflorescedEgospicebushYiSangSkill3 } from "./EfflorescedEgospicebushYiSangSkill3";
import { EfflorescedEgospicebushYiSangDefense } from "./EfflorescedEgospicebushYiSangDefense";

export class EfflorescedEgospicebushYiSang implements IdentityBase{
    readonly Id: number = 10104;
    readonly Name: string = "Effloresced E.G.O::Spicebush";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new EfflorescedEgospicebushYiSangSkill1, 
                                new EfflorescedEgospicebushYiSangSkill2, 
                                new EfflorescedEgospicebushYiSangSkill3, 
                                new EfflorescedEgospicebushYiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("Full Bloom",
            PassiveTypeEnum.Combat,
            "When attacking 2 or more targets at once, deal +30% damage.",
            [{sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Pungent Spring Breeze",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% damage when attacking 2 or more targets at once.",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/EfflorescedEGOSpicebush/10104gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/EfflorescedEGOSpicebush/10104gacksunginfo.png";
}