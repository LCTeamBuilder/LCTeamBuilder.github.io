import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { KCorpClass3ExcisionStaffHongLuSkill1 } from "./KCorpClass3ExcisionStaffHongLuSkill1";
import { KCorpClass3ExcisionStaffHongLuSkill2 } from "./KCorpClass3ExcisionStaffHongLuSkill2";
import { KCorpClass3ExcisionStaffHongLuSkill3 } from "./KCorpClass3ExcisionStaffHongLuSkill3";
import { KCorpClass3ExcisionStaffHongLuDefense } from "./KCorpClass3ExcisionStaffHongLuDefense";

export class KCorpClass3ExcisionStaffHongLu implements IdentityBase{
    readonly Id: number = 10605;
    readonly Name: string = "K Corp. Class 3 Excision Staff";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 99;
    readonly HealthPerLevel: number = 3.41;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [50];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new KCorpClass3ExcisionStaffHongLuSkill1, 
                                new KCorpClass3ExcisionStaffHongLuSkill2, 
                                new KCorpClass3ExcisionStaffHongLuSkill3, 
                                new KCorpClass3ExcisionStaffHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Regeneration Ampule Activation",
            PassiveTypeEnum.Combat,
            "When hit, if at less than 20% HP, heal by 90% of Max HP and gain 1 [K Corp Ampule].<br>"+
            "After this activates, gain 1 [Fragile] every turn for the rest of the battle. (Once per battle)",
            [{sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("High-grade Ampule",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, give 2 [K Corp Ampule] to 1 ally with the lowest HP percentage.",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/KCorpClass3ExcisionStaff/10605gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/KCorpClass3ExcisionStaff/10605gacksunginfo.png";
}