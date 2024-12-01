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
import { EdgarFamilyHeirGregorDefense } from "./EdgarFamilyHeirGregorDefense";
import { EdgarFamilyHeirGregorSkill1 } from "./EdgarFamilyHeirGregorSkill1";
import { EdgarFamilyHeirGregorSkill2 } from "./EdgarFamilyHeirGregorSkill2";
import { EdgarFamilyHeirGregorSkill3 } from "./EdgarFamilyHeirGregorSkill3";

export const EdgarFamilyHeirGregor: Identity = {
    Id: 11209,
    Name: "Edgar Family Heir",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [EdgarFamilyHeirGregorSkill1, 
            EdgarFamilyHeirGregorSkill2, 
            EdgarFamilyHeirGregorSkill3, 
            EdgarFamilyHeirGregorDefense],
    Passives: [
        new Passive("Endless Nightmares",
            PassiveTypeEnum.Combat,
            "Combat Start: gain 1 [Damage Up] and 1 [Fragile] for every 5 SP difference between Combat Start and last Turn Start (max 5)<br>"+
            "- Deal +2% more damage for every [Sinking] Potency on target (max 40%)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Suffering",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the least SP loses 5 SP, then gains 1 [Gloom DMG Up]",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/EdgarFamilyHeir/11209gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/EdgarFamilyHeir/11209gacksunginfo.png"
}