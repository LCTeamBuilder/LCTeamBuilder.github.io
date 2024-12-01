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
import { WCorpL3CleanupAgentYiSangDefense } from "./WCorpL3CleanupAgentYiSangDefense";
import { WCorpL3CleanupAgentYiSangSkill1 } from "./WCorpL3CleanupAgentYiSangSkill1";
import { WCorpL3CleanupAgentYiSangSkill2 } from "./WCorpL3CleanupAgentYiSangSkill2";
import { WCorpL3CleanupAgentYiSangSkill3 } from "./WCorpL3CleanupAgentYiSangSkill3";

export const WCorpL3CleanupAgentYiSang: Identity = {
    Id: 10106,
    Name: "W Corp. L3 Cleanup Agent",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupAgentYiSangSkill1, 
            WCorpL3CleanupAgentYiSangSkill2, 
            WCorpL3CleanupAgentYiSangSkill3, 
            WCorpL3CleanupAgentYiSangDefense],
    Passives: [
        new Passive("Emptied Thought",
            PassiveTypeEnum.Combat,
            "- At Turn End, gain 1 [Haste] per 5 [Charge] Count on self next turn. (Max 3)<br>"+
            "- If this unit's Skill consumed [Charge] Count, apply 3 [Charge Barrier] to 1 ally with the lowest HP percentage",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleanup Demonstration",
            PassiveTypeEnum.Support,
            "1 Ally with the highest [Charge] Count deals more damage against targets with [Rupture] based on [Rupture] on target (+1.5% per [Rupture]. Max +15% damage)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/WCorpL3CleanupAgent/10106gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/WCorpL3CleanupAgent/10106gacksunginfo.png"
}