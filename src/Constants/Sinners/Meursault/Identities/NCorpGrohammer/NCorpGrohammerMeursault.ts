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
import { NCorpGrohammerMeursaultDefense } from "./NCorpGrohammerMeursaultDefense";
import { NCorpGrohammerMeursaultSkill1 } from "./NCorpGrohammerMeursaultSkill1";
import { NCorpGrohammerMeursaultSkill2 } from "./NCorpGrohammerMeursaultSkill2";
import { NCorpGrohammerMeursaultSkill3 } from "./NCorpGrohammerMeursaultSkill3";

export const NCorpGrohammerMeursault: Identity = {
    Id: 10504,
    Name: "N Corp. Großhammer",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 99,
    HealthPerLevel: 3.41,
    SpeedMin: 3,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpGrohammerMeursaultSkill1, 
            NCorpGrohammerMeursaultSkill2, 
            NCorpGrohammerMeursaultSkill3, 
            NCorpGrohammerMeursaultDefense],
    Passives: [
        new Passive("Obsessive Hammer",
            PassiveTypeEnum.Combat,
            "When below 50% HP, remove 1 negative status effect and gain 1 [Fanatic], 1 [Attack Power Up], and 3 [Protection] at the start of the combat phase.",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Highest Honor",
            PassiveTypeEnum.Support,
            "Apply 1 [Attack Power Up] and 1 [Protection] to the ally with the least HP below 50%.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 1 [Fanatic].",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/NCorpGrohammer/10504gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/NCorpGrohammer/10504gacksunginfo.png"
}