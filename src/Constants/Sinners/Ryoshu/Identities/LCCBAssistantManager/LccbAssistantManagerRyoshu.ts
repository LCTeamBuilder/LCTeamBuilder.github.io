import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LccbAssistantManagerRyoshuSkill1 } from "./LccbAssistantManagerRyoshuSkill1";
import { LccbAssistantManagerRyoshuSkill2 } from "./LccbAssistantManagerRyoshuSkill2";
import { LccbAssistantManagerRyoshuSkill3 } from "./LccbAssistantManagerRyoshuSkill3";
import { LccbAssistantManagerRyoshuDefense } from "./LccbAssistantManagerRyoshuDefense";

export class LccbAssistantManagerRyoshu implements Identity{
    readonly Id: number = 10406;
    readonly Name: string = "LCCB Assistant Manager";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LccbAssistantManagerRyoshuSkill1, 
                                new LccbAssistantManagerRyoshuSkill2, 
                                new LccbAssistantManagerRyoshuSkill3, 
                                new LccbAssistantManagerRyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("A S.B.",
            PassiveTypeEnum.Combat,
            "- Always Active: Begin encounters with 7 [Ammo]<br>"+
            "- If this unit has 7+ [Poise] at Turn End, heal 8 SP.<br>"+
            "- If this unit already has max SP upon meeting the above condition, gain 1 [Poise] next turn",
            [{sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("The Lucky Cig",
            PassiveTypeEnum.Support,
            "- If 1 ally with the least [Ammo] uses a Skill that spends [Ammo], gain 3 [Poise]. (once per turn; does not apply to allies without Ammo)<br>"+
            "- If 1 ally with the least [Ammo] uses up their last [Ammo] with a Coin, after the Coin's attack ends, deal 50% of the damage dealt by that Coin against each target as bonus damage against each individual target. (rounded up)",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/LCCBAssistantManager/10406gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/LCCBAssistantManager/10406gacksunginfo.png";
}