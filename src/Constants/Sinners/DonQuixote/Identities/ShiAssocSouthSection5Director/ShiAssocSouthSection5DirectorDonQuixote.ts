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
import { ShiAssocSouthSection5DirectorDonQuixoteDefense } from "./ShiAssocSouthSection5DirectorDonQuixoteDefense";
import { ShiAssocSouthSection5DirectorDonQuixoteSkill1 } from "./ShiAssocSouthSection5DirectorDonQuixoteSkill1";
import { ShiAssocSouthSection5DirectorDonQuixoteSkill2 } from "./ShiAssocSouthSection5DirectorDonQuixoteSkill2";
import { ShiAssocSouthSection5DirectorDonQuixoteSkill3 } from "./ShiAssocSouthSection5DirectorDonQuixoteSkill3";

export const ShiAssocSouthSection5DirectorDonQuixote: Identity = {
    Id: 10303,
    Name: "Shi Assoc. South Section 5 Director",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80, 60],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ShiAssocSouthSection5DirectorDonQuixoteSkill1, 
            ShiAssocSouthSection5DirectorDonQuixoteSkill2, 
            ShiAssocSouthSection5DirectorDonQuixoteSkill3, 
            ShiAssocSouthSection5DirectorDonQuixoteDefense],
    Passives: [
        new Passive("Prepared Mind",
            PassiveTypeEnum.Combat,
            "Gain [Haste] by (Wrath Reson. / 3) next turn.",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Divide in Two",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed deals +10% Slash damage.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/ShiAssocSouthSection5Director/10303gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/ShiAssocSouthSection5Director/10303gacksunginfo.png"
}