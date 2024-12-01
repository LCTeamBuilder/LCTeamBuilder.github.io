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
import { District20YurodivyRyoshuDefense } from "./District20YurodivyRyoshuDefense";
import { District20YurodivyRyoshuSkill1 } from "./District20YurodivyRyoshuSkill1";
import { District20YurodivyRyoshuSkill2 } from "./District20YurodivyRyoshuSkill2";
import { District20YurodivyRyoshuSkill3 } from "./District20YurodivyRyoshuSkill3";

export const District20YurodivyRyoshu: Identity = {
    Id: 10409,
    Name: "District 20 Yurodivy",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 71,
    HealthPerLevel: 2.4,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [District20YurodivyRyoshuSkill1, 
            District20YurodivyRyoshuSkill2, 
            District20YurodivyRyoshuSkill3, 
            District20YurodivyRyoshuDefense],
    Passives: [
        new Passive("N.O.",
            PassiveTypeEnum.Combat,
            "- When an other ally Staggers an enemy with an attack: follow up with a Skill 1 against the Staggered enemy. (once per Turn)<br>"+
            "- If multiple enemies are Staggered at once, target the enemy with the least HP (for Abnormalities, target the Abnormality with the least HP, then, target the Part with the least HP).<br>"+
            "- When using Skill 1 with this effect, this unit gains +1 more [Tremor] Count from its Coin effects, and triggers a [Tremor Burst] with the last Coin On Hit",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("The A.I.",
            PassiveTypeEnum.Support,
            "#1 Deployed ally gains +1 more [Tremor] Count from their Skill or Coin effects (2 times per turn)",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/District20Yurodivy/10409gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/District20Yurodivy/10409gacksunginfo.png"
}