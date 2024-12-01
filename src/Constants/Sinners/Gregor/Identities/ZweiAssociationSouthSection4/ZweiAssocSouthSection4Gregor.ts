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
import { ZweiAssocSouthSection4GregorDefense } from "./ZweiAssocSouthSection4GregorDefense";
import { ZweiAssocSouthSection4GregorSkill1 } from "./ZweiAssocSouthSection4GregorSkill1";
import { ZweiAssocSouthSection4GregorSkill2 } from "./ZweiAssocSouthSection4GregorSkill2";
import { ZweiAssocSouthSection4GregorSkill3 } from "./ZweiAssocSouthSection4GregorSkill3";

export const ZweiAssocSouthSection4Gregor: Identity = {
    Id: 11206,
    Name: "Zwei Assoc. South Section 4",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 90,
    HealthPerLevel: 3,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ZweiAssocSouthSection4GregorSkill1, 
            ZweiAssocSouthSection4GregorSkill2, 
            ZweiAssocSouthSection4GregorSkill3, 
            ZweiAssocSouthSection4GregorDefense],
    Passives: [
        new Passive("Combat Shield",
            PassiveTypeEnum.Combat,
            "If targeted by 2 or more attacks at the start of the combat phase, gain 2 [Defense Level Up].<br>"+
            "If at 50% or less HP at the start of the combat phase, gain 3 [Defense Level Up].",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Your Shield",
            PassiveTypeEnum.Support,
            "If 1 ally with the highest Max HP is targeted by 2 or more attacks, gain 3 [Defense Level Up]",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/ZweiAssociationSouthSection4/11206gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/ZweiAssociationSouthSection4/11206gacksunginfo.png"
}