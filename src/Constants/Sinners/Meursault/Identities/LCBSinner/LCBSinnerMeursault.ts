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
import { LCBSinnerMeursaultDefense } from "./LCBSinnerMeursaultDefense";
import { LCBSinnerMeursaultSkill1 } from "./LCBSinnerMeursaultSkill1";
import { LCBSinnerMeursaultSkill2 } from "./LCBSinnerMeursaultSkill2";
import { LCBSinnerMeursaultSkill3 } from "./LCBSinnerMeursaultSkill3";

export const LCBSinnerMeursault: Identity = {
    Id: 10501,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 90,
    HealthPerLevel: 3.1,
    SpeedMin: 2,
    SpeedMax: 3,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [LCBSinnerMeursaultSkill1, 
            LCBSinnerMeursaultSkill2, 
            LCBSinnerMeursaultSkill3, 
            LCBSinnerMeursaultDefense],
    Passives: [
        new Passive("Staunchness",
            PassiveTypeEnum.Combat,
            "At less than 50% HP, gain 1 [Protection] at the start of the combat phase.",
            [{ sin: SinEnum.Sloth , amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Backup",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP takes -10% damage from attack skills.",
            [{ sin: SinEnum.Sloth, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/LCBSinner/10501normal.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/LCBSinner/10501normalinfo.png"
}