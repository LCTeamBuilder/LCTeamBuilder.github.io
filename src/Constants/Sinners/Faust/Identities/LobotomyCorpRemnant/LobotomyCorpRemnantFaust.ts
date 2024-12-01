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
import { LobotomyCorpRemnantFaustDefense } from "./LobotomyCorpRemnantFaustDefense";
import { LobotomyCorpRemnantFaustSkill1 } from "./LobotomyCorpRemnantFaustSkill1";
import { LobotomyCorpRemnantFaustSkill2 } from "./LobotomyCorpRemnantFaustSkill2";
import { LobotomyCorpRemnantFaustSkill3 } from "./LobotomyCorpRemnantFaustSkill3";

export const LobotomyCorpRemnantFaust: Identity = {
    Id: 10203,
    Name: "Lobotomy Corp. Remnant",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyCorpRemnantFaustSkill1, 
            LobotomyCorpRemnantFaustSkill2, 
            LobotomyCorpRemnantFaustSkill3, 
            LobotomyCorpRemnantFaustDefense],
    Passives: [
        new Passive("Resolution",
            PassiveTypeEnum.Combat,
            "At the start of the turn, if at 4+ [Poise] Count, gain 2 [Haste].",
            [{ sin: SinEnum.Lust, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Backing",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains +2 defense skill final Power.",
            [{ sin: SinEnum.Lust, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/LobotomyCorpRemnant/10203gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/LobotomyCorpRemnant/10203gacksunginfo.png"
}