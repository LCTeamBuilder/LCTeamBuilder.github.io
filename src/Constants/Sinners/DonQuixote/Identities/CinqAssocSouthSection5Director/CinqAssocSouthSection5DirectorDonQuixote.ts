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
import { CinqAssocSouthSection5DirectorDonQuixoteDefense } from "./CinqAssocSouthSection5DirectorDonQuixoteDefense";
import { CinqAssocSouthSection5DirectorDonQuixoteSkill1 } from "./CinqAssocSouthSection5DirectorDonQuixoteSkill1";
import { CinqAssocSouthSection5DirectorDonQuixoteSkill2 } from "./CinqAssocSouthSection5DirectorDonQuixoteSkill2";
import { CinqAssocSouthSection5DirectorDonQuixoteSkill3 } from "./CinqAssocSouthSection5DirectorDonQuixoteSkill3";

export const CinqAssocSouthSection5DirectorDonQuixote: Identity = {
    Id: 10305,
    Name: "Cinq Assoc. South Section 5 Director",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 72,
    HealthPerLevel: 2.28,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocSouthSection5DirectorDonQuixoteSkill1, 
            CinqAssocSouthSection5DirectorDonQuixoteSkill2, 
            CinqAssocSouthSection5DirectorDonQuixoteSkill3, 
            CinqAssocSouthSection5DirectorDonQuixoteDefense],
    Passives: [
        new Passive("A Noble Duel",
            PassiveTypeEnum.Combat,
            "If Speed of all allies is higher than Speed of all enemies, this unit deals more damage based on the Speed difference between it and the slowest enemy. (+6% per 1 point of difference, Max 30%)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Dueling Request",
            PassiveTypeEnum.Support,
            "If Speed of all allies is higher than Speed of all enemies, the fastest ally deals more damage based on the Speed difference between it and the slowest enemy. (+3% per 1 point of difference, Max 15%)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/CinqAssociationSouthSection5Director/10305gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/CinqAssociationSouthSection5Director/10305gacksunginfo.png"
}