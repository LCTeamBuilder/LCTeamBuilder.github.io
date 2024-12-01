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
import { GCorpManagerCorporalGregorDefense } from "./GCorpManagerCorporalGregorDefense";
import { GCorpManagerCorporalGregorSkill1 } from "./GCorpManagerCorporalGregorSkill1";
import { GCorpManagerCorporalGregorSkill2 } from "./GCorpManagerCorporalGregorSkill2";
import { GCorpManagerCorporalGregorSkill3 } from "./GCorpManagerCorporalGregorSkill3";

export const GCorpManagerCorporalGregor: Identity = {
    Id: 11203,
    Name: "G Corp. Manager Corporal",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [GCorpManagerCorporalGregorSkill1, 
            GCorpManagerCorporalGregorSkill2, 
            GCorpManagerCorporalGregorSkill3, 
            GCorpManagerCorporalGregorDefense],
    Passives: [
        new Passive("Emergency Rations",
            PassiveTypeEnum.Combat,
            "At less than 25% HP, heal by 5% of Max HP after winning a clash.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Gene Code G-3",
            PassiveTypeEnum.Support,
            "The ally with the least HP heals 5 HP after winning a clash.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/GCorpCorporalManager/11203gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/GCorpCorporalManager/11203gacksunginfo.png"
}