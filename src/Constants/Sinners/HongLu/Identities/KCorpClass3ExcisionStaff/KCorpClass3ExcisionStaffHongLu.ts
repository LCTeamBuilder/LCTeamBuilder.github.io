import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { KCorpClass3ExcisionStaffHongLuDefense } from "./KCorpClass3ExcisionStaffHongLuDefense";
import { KCorpClass3ExcisionStaffHongLuSkill1 } from "./KCorpClass3ExcisionStaffHongLuSkill1";
import { KCorpClass3ExcisionStaffHongLuSkill2 } from "./KCorpClass3ExcisionStaffHongLuSkill2";
import { KCorpClass3ExcisionStaffHongLuSkill3 } from "./KCorpClass3ExcisionStaffHongLuSkill3";

export const KCorpClass3ExcisionStaffHongLu: Identity = {
    Id: 10605,
    Name: "K Corp. Class 3 Excision Staff",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 99,
    HealthPerLevel: 3.41,
    SpeedMin: 2,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KCorpClass3ExcisionStaffHongLuSkill1, 
            KCorpClass3ExcisionStaffHongLuSkill2, 
            KCorpClass3ExcisionStaffHongLuSkill3, 
            KCorpClass3ExcisionStaffHongLuDefense],
    Passives: [
        new Passive("Regeneration Ampule Activation",
            PassiveTypeEnum.Combat,
            "When hit, if at less than 20% HP, heal by 90% of Max HP and gain 1 [K Corp Ampule].<br>"+
            "After this activates, gain 1 [Fragile] every turn for the rest of the battle. (Once per battle)",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("High-grade Ampule",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, give 2 [K Corp Ampule] to 1 ally with the lowest HP percentage.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/KCorpClass3ExcisionStaff/10605gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/KCorpClass3ExcisionStaff/10605gacksunginfo.png"
}