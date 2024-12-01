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
import { FanghuntOfficeFixerHongLuDefense } from "./FanghuntOfficeFixerHongLuDefense";
import { FanghuntOfficeFixerHongLuSkill1 } from "./FanghuntOfficeFixerHongLuSkill1";
import { FanghuntOfficeFixerHongLuSkill2 } from "./FanghuntOfficeFixerHongLuSkill2";
import { FanghuntOfficeFixerHongLuSkill3 } from "./FanghuntOfficeFixerHongLuSkill3";

export const FanghuntOfficeFixerHongLu: Identity = {
    Id: 10610,
    Name: "Fanghunt Office Fixer",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [FanghuntOfficeFixerHongLuSkill1, 
            FanghuntOfficeFixerHongLuSkill2, 
            FanghuntOfficeFixerHongLuSkill3, 
            FanghuntOfficeFixerHongLuDefense],
    Passives: [
        new Passive("How to Hunt Cheerfully",
            PassiveTypeEnum.Combat,
            "If the target is a &ltBloodfiend&gt, &ltBloodbag&gt, or if the target has 10+ [Rupture], deal +10% more damage<br>"+
            "On Skill Use, if this unit has [Bleed], inflict 3 [Rupture] On Hit (2 times per turn)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Bloodfiend Hunting Manual - Styptics",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the highest sum of [Bleed] Potency and Count loses 2 [Bleed] Count<br>"+
            "When 1 ally with the fastest Speed hits an enemy with [Rupture], inflict 1 [Defense Level Down] (2 times per turn)",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/FanghuntOfficeFixer/10610gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/FanghuntOfficeFixer/10610gacksunginfo.png"
}