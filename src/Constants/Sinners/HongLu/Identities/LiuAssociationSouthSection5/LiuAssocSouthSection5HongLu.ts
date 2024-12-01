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
import { LiuAssocSouthSection5HongLuDefense } from "./LiuAssocSouthSection5HongLuDefense";
import { LiuAssocSouthSection5HongLuSkill1 } from "./LiuAssocSouthSection5HongLuSkill1";
import { LiuAssocSouthSection5HongLuSkill2 } from "./LiuAssocSouthSection5HongLuSkill2";
import { LiuAssocSouthSection5HongLuSkill3 } from "./LiuAssocSouthSection5HongLuSkill3";

export const LiuAssocSouthSection5HongLu: Identity = {
    Id: 10604,
    Name: "Liu Assoc. South Section 5",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection5HongLuSkill1, 
            LiuAssocSouthSection5HongLuSkill2, 
            LiuAssocSouthSection5HongLuSkill3, 
            LiuAssocSouthSection5HongLuDefense],
    Passives: [
        new Passive("Flaring Up",
            PassiveTypeEnum.Combat,
            "At 30+ SP, inflict +1 [Burn] Count with the effects of attack Skills/Coins.",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Isn't It Warm?",
            PassiveTypeEnum.Support,
            "1 ally with the most SP inflicts +1 [Burn] Count with the effects of their attack Skills/Coins.",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/LiuAssociationSouthSection5/10604gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/LiuAssociationSouthSection5/10604gacksunginfo.png"
}