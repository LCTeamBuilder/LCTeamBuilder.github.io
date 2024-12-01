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
import { District20YurodivyHongLuDefense } from "./District20YurodivyHongLuDefense";
import { District20YurodivyHongLuSkill1 } from "./District20YurodivyHongLuSkill1";
import { District20YurodivyHongLuSkill2 } from "./District20YurodivyHongLuSkill2";
import { District20YurodivyHongLuSkill3 } from "./District20YurodivyHongLuSkill3";

export const District20YurodivyHongLu: Identity = {
    Id: 10609,
    Name: "District 20 Yurodivy",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [District20YurodivyHongLuSkill1, 
            District20YurodivyHongLuSkill2, 
            District20YurodivyHongLuSkill3, 
            District20YurodivyHongLuDefense],
    Passives: [
        new Passive("Vibroweld Morph-combat Cane (Unauthorized Invention)",
            PassiveTypeEnum.Combat,
            "Turn End: gain [Damage Up] next turn equal to the number of times this unit triggered [Tremor Burst] this turn (max 3)",
            [{ sin: SinEnum.Sloth, amount: 6 }],
            PassiveCostTypeEnum.Owned),

        new Passive("In the Culprit's Shoes",
            PassiveTypeEnum.Support,
            "When #1 Deployed Identity triggers [Tremor Burst] with Skill or Coin effects, 25% chance to trigger an additional [Tremor Burst] (once per turn)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/District20Yurodivy/10609gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/District20Yurodivy/10609gacksunginfo.png"
}