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
import { SevenAssocSouthSection4FaustDefense } from "./SevenAssocSouthSection4FaustDefense";
import { SevenAssocSouthSection4FaustSkill1 } from "./SevenAssocSouthSection4FaustSkill1";
import { SevenAssocSouthSection4FaustSkill2 } from "./SevenAssocSouthSection4FaustSkill2";
import { SevenAssocSouthSection4FaustSkill3 } from "./SevenAssocSouthSection4FaustSkill3";

export const SevenAssocSouthSection4Faust: Identity = {
    Id: 10206,
    Name: "Seven Assoc. South Section 4",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 76,
    HealthPerLevel: 2.4,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection4FaustSkill1, 
            SevenAssocSouthSection4FaustSkill2, 
            SevenAssocSouthSection4FaustSkill3, 
            SevenAssocSouthSection4FaustDefense],
    Passives: [
        new Passive("Before The Tea Cools...",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Weak" or "Fatal" (Resistance>x1) to, gain 1 [Poise] for each [Rupture] on target before the attack (Max 20 per turn)',
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Seven Association Tea Time",
            PassiveTypeEnum.Support,
            '1 ally with the fastest Speed deals more damage based on the target\'s [Rupture] when attacking with a damage type that the target is "Weak" or "Fatal"(Resistance>x1) to<br>'+
            "(+1.5% per 1 [Rupture], Max 15%)<br>"+
            "If the ally is a Seven Association Fixer, deal further increased damage<br>"+
            "(+0.5% per 1 [Rupture], Max 5%)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/SevenAssociationSouthSection4/10206gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/SevenAssociationSouthSection4/10206gacksunginfo.png"
}