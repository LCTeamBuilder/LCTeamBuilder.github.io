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
import { LobotomyEgoLanternDonQuixoteDefense } from "./LobotomyEgoLanternDonQuixoteDefense";
import { LobotomyEgoLanternDonQuixoteSkill1 } from "./LobotomyEgoLanternDonQuixoteSkill1";
import { LobotomyEgoLanternDonQuixoteSkill2 } from "./LobotomyEgoLanternDonQuixoteSkill2";
import { LobotomyEgoLanternDonQuixoteSkill3 } from "./LobotomyEgoLanternDonQuixoteSkill3";

export const LobotomyEgoLanternDonQuixote: Identity = {
    Id: 10307,
    Name: "Lobotomy E.G.O::Lantern",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoLanternDonQuixoteSkill1, 
            LobotomyEgoLanternDonQuixoteSkill2, 
            LobotomyEgoLanternDonQuixoteSkill3, 
            LobotomyEgoLanternDonQuixoteDefense],
    Passives: [
        new Passive("Om Nom Nom",
            PassiveTypeEnum.Combat,
            "If this unit's Skill Slot has [Aggro], Clash Power +1<br>"+
            "Heal 6 HP every time this unit hits enemies that targeted this unit with an Attack Skill in the Chaining Phase (For Abnormalities, each Part is calculated separately)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Illumilantern",
            PassiveTypeEnum.Support,
            "The ally with the highest [Aggro] Skill Slot heals 4 HP every time they hit an enemy that targets this unit (Does not apply to units without [Aggro])",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/LobotomyEGOLantern/10307gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/LobotomyEGOLantern/10307gacksunginfo.png"
}