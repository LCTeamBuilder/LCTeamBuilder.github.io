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
import { LccbAssistantManagerRyoshuDefense } from "./LccbAssistantManagerRyoshuDefense";
import { LccbAssistantManagerRyoshuSkill1 } from "./LccbAssistantManagerRyoshuSkill1";
import { LccbAssistantManagerRyoshuSkill2 } from "./LccbAssistantManagerRyoshuSkill2";
import { LccbAssistantManagerRyoshuSkill3 } from "./LccbAssistantManagerRyoshuSkill3";

export const LccbAssistantManagerRyoshu: Identity = {
    Id: 10406,
    Name: "LCCB Assistant Manager",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LccbAssistantManagerRyoshuSkill1, 
            LccbAssistantManagerRyoshuSkill2, 
            LccbAssistantManagerRyoshuSkill3, 
            LccbAssistantManagerRyoshuDefense],
    Passives: [
        new Passive("A S.B.",
            PassiveTypeEnum.Combat,
            "- Always Active: Begin encounters with 7 [Ammo]<br>"+
            "- If this unit has 7+ [Poise] at Turn End, heal 8 SP.<br>"+
            "- If this unit already has max SP upon meeting the above condition, gain 1 [Poise] next turn",
            [{ sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("The Lucky Cig",
            PassiveTypeEnum.Support,
            "- If 1 ally with the least [Ammo] uses a Skill that spends [Ammo], gain 3 [Poise]. (once per turn, does not apply to allies without Ammo)<br>"+
            "- If 1 ally with the least [Ammo] uses up their last [Ammo] with a Coin, after the Coin's attack ends, deal 50% of the damage dealt by that Coin against each target as bonus damage against each individual target. (rounded up)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/LCCBAssistantManager/10406gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/LCCBAssistantManager/10406gacksunginfo.png"
}