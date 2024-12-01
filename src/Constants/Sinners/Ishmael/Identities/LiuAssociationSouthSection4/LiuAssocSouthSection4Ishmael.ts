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
import { LiuAssocSouthSection4IshmaelDefense } from "./LiuAssocSouthSection4IshmaelDefense";
import { LiuAssocSouthSection4IshmaelSkill1 } from "./LiuAssocSouthSection4IshmaelSkill1";
import { LiuAssocSouthSection4IshmaelSkill2 } from "./LiuAssocSouthSection4IshmaelSkill2";
import { LiuAssocSouthSection4IshmaelSkill3 } from "./LiuAssocSouthSection4IshmaelSkill3";

export const LiuAssocSouthSection4Ishmael: Identity = {
    Id: 10806,
    Name: "Liu Assoc. South Section 4",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection4IshmaelSkill1, 
            LiuAssocSouthSection4IshmaelSkill2, 
            LiuAssocSouthSection4IshmaelSkill3, 
            LiuAssocSouthSection4IshmaelDefense],
    Passives: [
        new Passive("Intense Blaze",
            PassiveTypeEnum.Combat,
            "Deal +10% Blunt damage for every 3 [Burn] Count on target. (Max 30%)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Intense Blaze",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +5% Blunt damage for every 3 [Burn] Count on target. (Max 15%)",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/LiuAssociationSouthSection4/10806gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/LiuAssociationSouthSection4/10806gacksunginfo.png"
}