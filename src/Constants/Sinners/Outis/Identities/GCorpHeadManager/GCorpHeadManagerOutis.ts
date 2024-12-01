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
import { GCorpHeadManagerOutisDefense } from "./GCorpHeadManagerOutisDefense";
import { GCorpHeadManagerOutisSkill1 } from "./GCorpHeadManagerOutisSkill1";
import { GCorpHeadManagerOutisSkill2 } from "./GCorpHeadManagerOutisSkill2";
import { GCorpHeadManagerOutisSkill3 } from "./GCorpHeadManagerOutisSkill3";

export const GCorpHeadManagerOutis: Identity = {
    Id: 11103,
    Name: "G Corp. Head Manager",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [GCorpHeadManagerOutisSkill1, 
            GCorpHeadManagerOutisSkill2, 
            GCorpHeadManagerOutisSkill3, 
            GCorpHeadManagerOutisDefense],
    Passives: [
        new Passive("Morale Boost",
            PassiveTypeEnum.Combat,
            "Next turn, apply 2 [Haste] to self and allies who are adjacent to this unit on the Dashboard this turn.",
            [{ sin: SinEnum.Sloth, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Resolution",
            PassiveTypeEnum.Support,
            "1 ally with the most HP randomly gains 1 [Attack Power Up], 1 [Defense Power Up], or 1 [Protection] at the start of the combat phase.",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/GCorpHeadManager/11103gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/GCorpHeadManager/11103gacksunginfo.png"
}