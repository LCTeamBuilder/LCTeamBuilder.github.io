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
import { LiuAssocSouthSection6GregorDefense } from "./LiuAssocSouthSection6GregorDefense";
import { LiuAssocSouthSection6GregorSkill1 } from "./LiuAssocSouthSection6GregorSkill1";
import { LiuAssocSouthSection6GregorSkill2 } from "./LiuAssocSouthSection6GregorSkill2";
import { LiuAssocSouthSection6GregorSkill3 } from "./LiuAssocSouthSection6GregorSkill3";

export const LiuAssocSouthSection6Gregor: Identity = {
    Id: 11202,
    Name: "Liu Assoc. South Section 6",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection6GregorSkill1, 
            LiuAssocSouthSection6GregorSkill2, 
            LiuAssocSouthSection6GregorSkill3, 
            LiuAssocSouthSection6GregorDefense],
    Passives: [
        new Passive("Ignition",
            PassiveTypeEnum.Combat,
            "The 3rd and subsequent Coins of a skill inflict 1 [Burn] on hit.",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rushing Heart",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +30% damage with their 4th and subsequent Coins.",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/LiuAssociationSouthSection6/11202gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/LiuAssociationSouthSection6/11202gacksunginfo.png"
}