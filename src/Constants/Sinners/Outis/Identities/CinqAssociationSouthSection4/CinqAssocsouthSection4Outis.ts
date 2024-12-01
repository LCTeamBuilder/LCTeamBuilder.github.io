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
import { CinqAssocsouthSection4OutisDefense } from "./CinqAssocsouthSection4OutisDefense";
import { CinqAssocsouthSection4OutisSkill1 } from "./CinqAssocsouthSection4OutisSkill1";
import { CinqAssocsouthSection4OutisSkill2 } from "./CinqAssocsouthSection4OutisSkill2";
import { CinqAssocsouthSection4OutisSkill3 } from "./CinqAssocsouthSection4OutisSkill3";

export const CinqAssocsouthSection4Outis: Identity = {
    Id: 11106,
    Name: "Cinq Assoc.South Section 4",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocsouthSection4OutisSkill1, 
            CinqAssocsouthSection4OutisSkill2, 
            CinqAssocsouthSection4OutisSkill3, 
            CinqAssocsouthSection4OutisDefense],
    Passives: [
        new Passive("Redirect",
            PassiveTypeEnum.Combat,
            "On Evade, gain 1 [Haste] next turn, lower this unit's Stagger Threshold by 5 (Max 3)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Mentor's Counsel",
            PassiveTypeEnum.Support,
            "If the fastest ally's Speed is higher than Speed of all enemies, the fastest ally gains Clash Power +1<br>"+
            "If the said ally is a Cinq Association Fixer, the fastest ally deals +10% Pierce Damage",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/CinqAssociationSouthSection4/11106gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/CinqAssociationSouthSection4/11106gacksunginfo.png"
}