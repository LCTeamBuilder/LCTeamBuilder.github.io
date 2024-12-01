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
import { SevenAssocSouthSection6YiSangDefense } from "./SevenAssocSouthSection6YiSangDefense";
import { SevenAssocSouthSection6YiSangSkill1 } from "./SevenAssocSouthSection6YiSangSkill1";
import { SevenAssocSouthSection6YiSangSkill2 } from "./SevenAssocSouthSection6YiSangSkill2";
import { SevenAssocSouthSection6YiSangSkill3 } from "./SevenAssocSouthSection6YiSangSkill3";

export const SevenAssocSouthSection6YiSang: Identity = {
    Id: 10102,
    Name: "Seven Assoc. South Section 6",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 5,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection6YiSangSkill1, 
            SevenAssocSouthSection6YiSangSkill2, 
            SevenAssocSouthSection6YiSangSkill3, 
            SevenAssocSouthSection6YiSangDefense],
    Passives: [
        new Passive("Acute Studies",
            PassiveTypeEnum.Combat,
            "In a clash, the opponent has -2 Clash Power.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Observational Eye",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP gains +1 Clash Power in a clash.",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/SevenAssociationSouthSection6/10102gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/SevenAssociationSouthSection6/10102gacksunginfo.png"
}