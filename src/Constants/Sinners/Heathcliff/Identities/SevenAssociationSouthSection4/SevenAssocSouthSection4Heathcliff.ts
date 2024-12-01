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
import { SevenAssocSouthSection4HeathcliffDefense } from "./SevenAssocSouthSection4HeathcliffDefense";
import { SevenAssocSouthSection4HeathcliffSkill1 } from "./SevenAssocSouthSection4HeathcliffSkill1";
import { SevenAssocSouthSection4HeathcliffSkill2 } from "./SevenAssocSouthSection4HeathcliffSkill2";
import { SevenAssocSouthSection4HeathcliffSkill3 } from "./SevenAssocSouthSection4HeathcliffSkill3";

export const SevenAssocSouthSection4Heathcliff: Identity = {
    Id: 10706,
    Name: "Seven Assoc. South Section 4",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection4HeathcliffSkill1, 
            SevenAssocSouthSection4HeathcliffSkill2, 
            SevenAssocSouthSection4HeathcliffSkill3, 
            SevenAssocSouthSection4HeathcliffDefense],
    Passives: [
        new Passive("Instinctive Read",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Fatal" (Resistance>x1.5) to, inflict +1 more [Rupture] with Skill effects<br>'+
            "If 4 or more surviving units, including this unit, are Seven Association Fixers, additional +1 more [Rupture]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Connect The Dots",
            PassiveTypeEnum.Support,
            '1 ally with the highest Max HP inflicts +1 more [Rupture] with Skill effects when attacking a target with a damage type that the target is "Fatal" (Resistance>x1.5) to<br>'+
            "If the ally is a Seven Association Fixer, additional +1 more [Rupture]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/SevenAssociationSouthSection4/10706gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/SevenAssociationSouthSection4/10706gacksunginfo.png"
}