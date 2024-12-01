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
import { RCorp4thPackRhinoMeursaultDefense } from "./RCorp4thPackRhinoMeursaultDefense";
import { RCorp4thPackRhinoMeursaultSkill1 } from "./RCorp4thPackRhinoMeursaultSkill1";
import { RCorp4thPackRhinoMeursaultSkill2 } from "./RCorp4thPackRhinoMeursaultSkill2";
import { RCorp4thPackRhinoMeursaultSkill3 } from "./RCorp4thPackRhinoMeursaultSkill3";

export const RCorp4thPackRhinoMeursault: Identity = {
    Id: 10506,
    Name: "R Corp. 4th Pack Rhino",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 95,
    HealthPerLevel: 3,
    SpeedMin: 3,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [40],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RCorp4thPackRhinoMeursaultSkill1, 
            RCorp4thPackRhinoMeursaultSkill2, 
            RCorp4thPackRhinoMeursaultSkill3, 
            RCorp4thPackRhinoMeursaultDefense],
    Passives: [
        new Passive("Activate rrR-#4 Suit Pressurization",
            PassiveTypeEnum.Combat,
            "At the end of the turn, gain +2 Max Speed per 5 [Charge] Count next turn. (Max 6)<br>"+
            "At the start of the turn, if at 5+ [Charge] Count, gain 3 [Aggro] to this unit's rightmost slot.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Maneuver Training",
            PassiveTypeEnum.Support,
            "At the end of the turn, 1 ally with the highest [Charge] Count gains Max Speed +1 (Capped at 3) per 5 [Charge] Count next turn.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/RCorp4thPackRhino/10506gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/RCorp4thPackRhino/10506gacksunginfo.png"
}