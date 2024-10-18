import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { EdgarFamilyChiefButlerRyoshuSkill1 } from "./EdgarFamilyChiefButlerRyoshuSkill1";
import { EdgarFamilyChiefButlerRyoshuSkill2 } from "./EdgarFamilyChiefButlerRyoshuSkill2";
import { EdgarFamilyChiefButlerRyoshuSkill3 } from "./EdgarFamilyChiefButlerRyoshuSkill3";
import { EdgarFamilyChiefButlerRyoshuDefense } from "./EdgarFamilyChiefButlerRyoshuDefense";

export class EdgarFamilyChiefButlerRyoshu implements IdentityBase{
    readonly Id: number = 10408;
    readonly Name: string = "Edgar Family Chief Butler";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 70;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new EdgarFamilyChiefButlerRyoshuSkill1, 
                                new EdgarFamilyChiefButlerRyoshuSkill2, 
                                new EdgarFamilyChiefButlerRyoshuSkill3, 
                                new EdgarFamilyChiefButlerRyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("Clearing Household Chores",
            PassiveTypeEnum.Combat,
            "On Hit against targets with [B.M.], gain +1 [Poise] Count, and gain 1 [Haste] next turn (3 times per turn)<br>"+
            "On Crit against targets with [B.M.], eliminate [B.M.] on target; then, if this unit's Speed is faster than the target's, deal +10% Damage on Critical Hit for every 1 Speed difference (max 60%)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleaning Command",
            PassiveTypeEnum.Support,
            "When the ally that was deployed last wins a Clash, gain +1 [Poise] Count (3 times per turn), and gain 1 [Haste] next turn (once per turn)",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/EdgarFamilyChiefButler/10408gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/EdgarFamilyChiefButler/10408gacksunginfo.png";
}