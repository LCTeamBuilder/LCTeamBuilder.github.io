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
import { EdgarFamilyButlerIshmaelDefense } from "./EdgarFamilyButlerIshmaelDefense";
import { EdgarFamilyButlerIshmaelSkill1 } from "./EdgarFamilyButlerIshmaelSkill1";
import { EdgarFamilyButlerIshmaelSkill2 } from "./EdgarFamilyButlerIshmaelSkill2";
import { EdgarFamilyButlerIshmaelSkill3 } from "./EdgarFamilyButlerIshmaelSkill3";

export const EdgarFamilyButlerIshmael: Identity = {
    Id: 10809,
    Name: "Edgar Family Butler",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [EdgarFamilyButlerIshmaelSkill1, 
            EdgarFamilyButlerIshmaelSkill2, 
            EdgarFamilyButlerIshmaelSkill3, 
            EdgarFamilyButlerIshmaelDefense],
    Passives: [
        new Passive("Deep Cleaning",
            PassiveTypeEnum.Combat,
            "If this unit Critically Hits against targets with Slower Speed than this unit's, inflict 1 additional Potency for negative effects with its Skills (3 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Loyal Supporter",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed attacks a target with [Sinking], deal +1% more damage for every 1 [Sinking] on target (max 20%)",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/EdgarFamilyButler/10809gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/EdgarFamilyButler/10809gacksunginfo.png"
}