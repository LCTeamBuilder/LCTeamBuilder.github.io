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
import { MolarOfficeFixerYiSangDefense } from "./MolarOfficeFixerYiSangDefense";
import { MolarOfficeFixerYiSangSkill1 } from "./MolarOfficeFixerYiSangSkill1";
import { MolarOfficeFixerYiSangSkill2 } from "./MolarOfficeFixerYiSangSkill2";
import { MolarOfficeFixerYiSangSkill3 } from "./MolarOfficeFixerYiSangSkill3";

export const MolarOfficeFixerYiSang: Identity = {
    Id: 10105,
    Name: "Molar Office Fixer",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarOfficeFixerYiSangSkill1, 
            MolarOfficeFixerYiSangSkill2, 
            MolarOfficeFixerYiSangSkill3, 
            MolarOfficeFixerYiSangDefense],
    Passives: [
        new Passive("In Times Like These...",
            PassiveTypeEnum.Combat,
            "Upon triggering [Tremor Burst] on an enemy, inflict 1 [Defense Level Down] per 4 Stagger Threshold raised (Max 5 per 1 enemy every turn)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleaning Up the Mess",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Max HP triggers [Tremor Burst] on an enemy, inflict 1 [Defense Level Down] per 4 Stagger Threshold raised (Max 3 per 1 enemy every turn)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/MolarOfficeFixer/10105gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/MolarOfficeFixer/10105gacksunginfo.png"
}