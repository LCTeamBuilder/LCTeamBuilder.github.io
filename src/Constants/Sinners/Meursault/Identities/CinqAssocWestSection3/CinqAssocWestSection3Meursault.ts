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
import { CinqAssocWestSection3MeursaultDefense } from "./CinqAssocWestSection3MeursaultDefense";
import { CinqAssocWestSection3MeursaultSkill1 } from "./CinqAssocWestSection3MeursaultSkill1";
import { CinqAssocWestSection3MeursaultSkill2 } from "./CinqAssocWestSection3MeursaultSkill2";
import { CinqAssocWestSection3MeursaultSkill3 } from "./CinqAssocWestSection3MeursaultSkill3";

export const CinqAssocWestSection3Meursault: Identity = {
    Id: 10511,
    Name: "Cinq Assoc. West Section 3",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocWestSection3MeursaultSkill1, 
            CinqAssocWestSection3MeursaultSkill2, 
            CinqAssocWestSection3MeursaultSkill3, 
            CinqAssocWestSection3MeursaultDefense],
    Passives: [
        new Passive("Duel Livestream",
            PassiveTypeEnum.Combat,
            "Gain 1 [Haste] next turn for every 3 [Poise] Potency on self at Turn End (max 2)<br>"+
            "On Hit with base Attack Skills: on the Slot it hit last, inflict [Focused Attack] - Meursault next turn. (once per Skill)<br>"+
            "If this unit attacked the Slot with [Focused Attack] - Meursault and defeated its owner or broke the Part, heal 7 SP",
            [{ sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("One Step Ahead",
            PassiveTypeEnum.Support,
            "The fastest ally, on Clash Win, gains 1 [Haste] next turn (2 times per turn)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/CinqAssocWestSection3/10511gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/CinqAssocWestSection3/10511gacksunginfo.png"
}