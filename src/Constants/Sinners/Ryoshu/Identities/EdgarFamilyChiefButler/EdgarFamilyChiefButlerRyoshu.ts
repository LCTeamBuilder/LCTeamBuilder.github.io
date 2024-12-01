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
import { EdgarFamilyChiefButlerRyoshuDefense } from "./EdgarFamilyChiefButlerRyoshuDefense";
import { EdgarFamilyChiefButlerRyoshuSkill1 } from "./EdgarFamilyChiefButlerRyoshuSkill1";
import { EdgarFamilyChiefButlerRyoshuSkill2 } from "./EdgarFamilyChiefButlerRyoshuSkill2";
import { EdgarFamilyChiefButlerRyoshuSkill3 } from "./EdgarFamilyChiefButlerRyoshuSkill3";

export const EdgarFamilyChiefButlerRyoshu: Identity = {
    Id: 10408,
    Name: "Edgar Family Chief Butler",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [EdgarFamilyChiefButlerRyoshuSkill1, 
            EdgarFamilyChiefButlerRyoshuSkill2, 
            EdgarFamilyChiefButlerRyoshuSkill3, 
            EdgarFamilyChiefButlerRyoshuDefense],
    Passives: [
        new Passive("Clearing Household Chores",
            PassiveTypeEnum.Combat,
            "On Hit against targets with [B.M.], gain +1 [Poise] Count, and gain 1 [Haste] next turn (3 times per turn)<br>"+
            "On Crit against targets with [B.M.], eliminate [B.M.] on target, then, if this unit's Speed is faster than the target's, deal +10% Damage on Critical Hit for every 1 Speed difference (max 60%)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleaning Command",
            PassiveTypeEnum.Support,
            "When the ally that was deployed last wins a Clash, gain +1 [Poise] Count (3 times per turn), and gain 1 [Haste] next turn (once per turn)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/EdgarFamilyChiefButler/10408gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/EdgarFamilyChiefButler/10408gacksunginfo.png"
}