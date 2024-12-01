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
import { HookOfficeFixerHongLuDefense } from "./HookOfficeFixerHongLuDefense";
import { HookOfficeFixerHongLuSkill1 } from "./HookOfficeFixerHongLuSkill1";
import { HookOfficeFixerHongLuSkill2 } from "./HookOfficeFixerHongLuSkill2";
import { HookOfficeFixerHongLuSkill3 } from "./HookOfficeFixerHongLuSkill3";

export const HookOfficeFixerHongLu: Identity = {
    Id: 10607,
    Name: "Hook Office Fixer",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.38,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [HookOfficeFixerHongLuSkill1, 
            HookOfficeFixerHongLuSkill2, 
            HookOfficeFixerHongLuSkill3, 
            HookOfficeFixerHongLuDefense],
    Passives: [
        new Passive("Hook",
            PassiveTypeEnum.Combat,
            "Upon defeating an enemy, gain 1 [Attack Power Up] next turn (Once per turn)",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Mass-produced Bionic Gear",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed defeats an enemy inflicted with [Bleed], gain 1 [Attack Power Up] next turn (Once per turn)",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/HookOfficeFixer/10607gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/HookOfficeFixer/10607gacksunginfo.png"
}