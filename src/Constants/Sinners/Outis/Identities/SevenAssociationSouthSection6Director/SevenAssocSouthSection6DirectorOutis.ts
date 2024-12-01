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
import { SevenAssocSouthSection6DirectorOutisDefense } from "./SevenAssocSouthSection6DirectorOutisDefense";
import { SevenAssocSouthSection6DirectorOutisSkill1 } from "./SevenAssocSouthSection6DirectorOutisSkill1";
import { SevenAssocSouthSection6DirectorOutisSkill2 } from "./SevenAssocSouthSection6DirectorOutisSkill2";
import { SevenAssocSouthSection6DirectorOutisSkill3 } from "./SevenAssocSouthSection6DirectorOutisSkill3";

export const SevenAssocSouthSection6DirectorOutis: Identity = {
    Id: 11104,
    Name: "Seven Assoc. South Section 6 Director",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 5,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection6DirectorOutisSkill1, 
            SevenAssocSouthSection6DirectorOutisSkill2, 
            SevenAssocSouthSection6DirectorOutisSkill3, 
            SevenAssocSouthSection6DirectorOutisDefense],
    Passives: [
        new Passive("Grasping Vulnerabilities",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Weak" or "Fatal" to, deal +10% damage.',
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Relay Intelligence",
            PassiveTypeEnum.Support,
            '1 ally with the highest Speed deals +10% damage when attacking a target with a damage type the target is "Weak" or "Fatal" to.',
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/SevenAssociationSouthSection6Director/11104gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/SevenAssociationSouthSection6Director/11104gacksunginfo.png"
}