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
import { MolarOfficeFixerOutisDefense } from "./MolarOfficeFixerOutisDefense";
import { MolarOfficeFixerOutisSkill1 } from "./MolarOfficeFixerOutisSkill1";
import { MolarOfficeFixerOutisSkill2 } from "./MolarOfficeFixerOutisSkill2";
import { MolarOfficeFixerOutisSkill3 } from "./MolarOfficeFixerOutisSkill3";

export const MolarOfficeFixerOutis: Identity = {
    Id: 11105,
    Name: "Molar Office Fixer",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 68,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarOfficeFixerOutisSkill1, 
            MolarOfficeFixerOutisSkill2, 
            MolarOfficeFixerOutisSkill3, 
            MolarOfficeFixerOutisDefense],
    Passives: [
        new Passive("Drinking Boast",
            PassiveTypeEnum.Combat,
            "Upon triggering [Tremor Burst] on an enemy, inflict 30% of Raised Stagger Threshold as Sloth damage (Max 20, rounded down)",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Carrot & Stick",
            PassiveTypeEnum.Support,
            "1 ally with the most [Tremor] Count gains +1 more [Tremor] Count from Skill effects",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/MolarOfficeFixer/11105gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/MolarOfficeFixer/11105gacksunginfo.png"
}