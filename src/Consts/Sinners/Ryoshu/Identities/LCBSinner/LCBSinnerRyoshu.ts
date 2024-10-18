import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerRyoshuSkill1 } from "./LCBSinnerRyoshuSkill1";
import { LCBSinnerRyoshuSkill2 } from "./LCBSinnerRyoshuSkill2";
import { LCBSinnerRyoshuSkill3 } from "./LCBSinnerRyoshuSkill3";
import { LCBSinnerRyoshuDefense } from "./LCBSinnerRyoshuDefense";

export class LCBSinnerRyoshu implements IdentityBase{
    readonly Id: number = 10401;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 0.5;
    readonly PierceResist: number = 1;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LCBSinnerRyoshuSkill1, 
                                new LCBSinnerRyoshuSkill2, 
                                new LCBSinnerRyoshuSkill3, 
                                new LCBSinnerRyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("Indiscriminate Art",
            PassiveTypeEnum.Combat,
            "Deal and take +25% damage.",
            [{sin: SinEnum.Gluttony , amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Hustle",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP deals and takes +20% damage.",
            [{sin: SinEnum.Gluttony, amount: 3}],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/LCBSinner/10401normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/LCBSinner/10401normalinfo.png";
}