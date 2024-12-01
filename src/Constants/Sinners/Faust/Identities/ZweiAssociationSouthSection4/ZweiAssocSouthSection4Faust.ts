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
import { ZweiAssocSouthSection4FaustDefense } from "./ZweiAssocSouthSection4FaustDefense";
import { ZweiAssocSouthSection4FaustSkill1 } from "./ZweiAssocSouthSection4FaustSkill1";
import { ZweiAssocSouthSection4FaustSkill2 } from "./ZweiAssocSouthSection4FaustSkill2";
import { ZweiAssocSouthSection4FaustSkill3 } from "./ZweiAssocSouthSection4FaustSkill3";

export const ZweiAssocSouthSection4Faust: Identity = {
    Id: 10205,
    Name: "Zwei Assoc. South Section 4",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ZweiAssocSouthSection4FaustSkill1, 
            ZweiAssocSouthSection4FaustSkill2, 
            ZweiAssocSouthSection4FaustSkill3, 
            ZweiAssocSouthSection4FaustDefense],
    Passives: [
        new Passive("Territory Protection",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, apply 2 [Defense Level Up] to the 2 allies adjacent to this unit on the Dashboard.<br>"+
            "If the allies HP is below 50%, apply an additional 2 [Defense Level Up]",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Protection Request Received",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, apply 2 [Defense Level Up] to the ally with the lowest HP percentage<br>"+
            "If target's HP is below 50%, apply an additional 2 [Defense Level Up]",
            [{ sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/ZweiAssociationSouthSection4/10205gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/ZweiAssociationSouthSection4/10205gacksunginfo.png"
}