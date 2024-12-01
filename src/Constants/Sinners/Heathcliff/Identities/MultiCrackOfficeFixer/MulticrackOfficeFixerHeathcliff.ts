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
import { MulticrackOfficeFixerHeathcliffDefense } from "./MulticrackOfficeFixerHeathcliffDefense";
import { MulticrackOfficeFixerHeathcliffSkill1 } from "./MulticrackOfficeFixerHeathcliffSkill1";
import { MulticrackOfficeFixerHeathcliffSkill2 } from "./MulticrackOfficeFixerHeathcliffSkill2";
import { MulticrackOfficeFixerHeathcliffSkill3 } from "./MulticrackOfficeFixerHeathcliffSkill3";

export const MulticrackOfficeFixerHeathcliff: Identity = {
    Id: 10709,
    Name: "MultiCrack Office Fixer",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 71,
    HealthPerLevel: 2.55,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MulticrackOfficeFixerHeathcliffSkill1, 
            MulticrackOfficeFixerHeathcliffSkill2, 
            MulticrackOfficeFixerHeathcliffSkill3, 
            MulticrackOfficeFixerHeathcliffDefense],
    Passives: [
        new Passive("Charge Model L37",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count in this Encounter<br>"+
            "[Turn End] At 2+ [Charge], gain 1 [Haste] next turn<br>"+
            "[Turn End] At 3+ [Charge], gain 1 additional [Haste] and 1 [Clash Power Up] next turn",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Charging Module Installation",
            PassiveTypeEnum.Support,
            "#1 Deployed ally: Max [Charge] Count +5<br>"+
            "(When conditions are met, this effect will remain activated until the start of the next turn)",
            [{ sin: SinEnum.Envy, amount: 7 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/MultiCrackOfficeFixer/10709gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/MultiCrackOfficeFixer/10709gacksunginfo.png"
}