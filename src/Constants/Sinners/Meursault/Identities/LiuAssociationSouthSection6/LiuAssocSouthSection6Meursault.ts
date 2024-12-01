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
import { LiuAssocSouthSection6MeursaultDefense } from "./LiuAssocSouthSection6MeursaultDefense";
import { LiuAssocSouthSection6MeursaultSkill1 } from "./LiuAssocSouthSection6MeursaultSkill1";
import { LiuAssocSouthSection6MeursaultSkill2 } from "./LiuAssocSouthSection6MeursaultSkill2";
import { LiuAssocSouthSection6MeursaultSkill3 } from "./LiuAssocSouthSection6MeursaultSkill3";

export const LiuAssocSouthSection6Meursault: Identity = {
    Id: 10502,
    Name: "Liu Assoc. South Section 6",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection6MeursaultSkill1, 
            LiuAssocSouthSection6MeursaultSkill2, 
            LiuAssocSouthSection6MeursaultSkill3, 
            LiuAssocSouthSection6MeursaultDefense],
    Passives: [
        new Passive("Great Mountain",
            PassiveTypeEnum.Combat,
            "When attacked, inflict 1 [Burn] on a random enemy.<br>"+
            "(Up to 4 times)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Friction Point",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Burn]",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/LiuAssociationSouthSection6/10502gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/LiuAssociationSouthSection6/10502gacksunginfo.png"
}