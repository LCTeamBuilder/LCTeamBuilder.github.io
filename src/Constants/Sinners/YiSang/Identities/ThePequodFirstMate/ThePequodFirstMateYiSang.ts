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
import { ThePequodFirstMateYiSangDefense } from "./ThePequodFirstMateYiSangDefense";
import { ThePequodFirstMateYiSangSkill1 } from "./ThePequodFirstMateYiSangSkill1";
import { ThePequodFirstMateYiSangSkill2 } from "./ThePequodFirstMateYiSangSkill2";
import { ThePequodFirstMateYiSangSkill3 } from "./ThePequodFirstMateYiSangSkill3";

export const ThePequodFirstMateYiSang: Identity = {
    Id: 10107,
    Name: "The Pequod First Mate",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -3,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [ThePequodFirstMateYiSangSkill1, 
            ThePequodFirstMateYiSangSkill2, 
            ThePequodFirstMateYiSangSkill3, 
            ThePequodFirstMateYiSangDefense],
    Passives: [
        new Passive("The First Mate's Harpoon",
            PassiveTypeEnum.Combat,
            "On Crit, inflict 2 more [Bleed] Potency with a Skill (6 times per turn)",
            [{ sin: SinEnum.Pride , amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("The First Mate's Acumen",
            PassiveTypeEnum.Support,
            "On Crit, 1 ally with the most [Poise] inflicts 2 additional [Bleed] Potency with a Skill (6 times per turn)",
            [{ sin: SinEnum.Pride, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/ThePequodFirstMate/10107gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/ThePequodFirstMate/10107gacksunginfo.png"
}