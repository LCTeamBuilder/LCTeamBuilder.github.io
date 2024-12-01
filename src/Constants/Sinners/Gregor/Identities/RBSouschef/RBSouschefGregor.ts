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
import { RBSouschefGregorDefense } from "./RBSouschefGregorDefense";
import { RBSouschefGregorSkill1 } from "./RBSouschefGregorSkill1";
import { RBSouschefGregorSkill2 } from "./RBSouschefGregorSkill2";
import { RBSouschefGregorSkill3 } from "./RBSouschefGregorSkill3";

export const RBSouschefGregor: Identity = {
    Id: 11204,
    Name: "R.B. Sous-chef",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RBSouschefGregorSkill1, 
            RBSouschefGregorSkill2, 
            RBSouschefGregorSkill3, 
            RBSouschefGregorDefense],
    Passives: [
        new Passive("Packed Pies",
            PassiveTypeEnum.Combat,
            "Heal 8 HP at the start of the combat phase.",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Culinary Aid",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, the ally with the least HP heals 5 HP., Boost the healing of R.B. Chef de Cuisine Ryōshū's Passive 'Rustle Up' by 5.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/RBSouschef/11204gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/RBSouschef/11204gacksunginfo.png"
}