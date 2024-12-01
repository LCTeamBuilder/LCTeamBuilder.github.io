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
import { LiuAssocSouthSection4RyoshuDefense } from "./LiuAssocSouthSection4RyoshuDefense";
import { LiuAssocSouthSection4RyoshuSkill1 } from "./LiuAssocSouthSection4RyoshuSkill1";
import { LiuAssocSouthSection4RyoshuSkill2 } from "./LiuAssocSouthSection4RyoshuSkill2";
import { LiuAssocSouthSection4RyoshuSkill3 } from "./LiuAssocSouthSection4RyoshuSkill3";

export const LiuAssocSouthSection4Ryoshu: Identity = {
    Id: 10407,
    Name: "Liu Assoc. South Section 4",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection4RyoshuSkill1, 
            LiuAssocSouthSection4RyoshuSkill2, 
            LiuAssocSouthSection4RyoshuSkill3, 
            LiuAssocSouthSection4RyoshuDefense],
    Passives: [
        new Passive("Flame Spread",
            PassiveTypeEnum.Combat,
            "When this unit defeats an enemy with [Burn], apply 4 [Burn] to 2 random enemies with no [Burn] or with the least Burn Potency. (Once per turn)<br>"+
            "- In Focused Encounters, to 2 randoms Parts",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Spread Flame",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Speed defeats an enemy with [Burn], inflict 3 [Burn] on 2 random enemies (Once per turn)<br>"+
            "- In Focused Encounters, on 2 random Parts",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/LiuAssociationSouthSection4/10407gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/LiuAssociationSouthSection4/10407gacksunginfo.png"
}