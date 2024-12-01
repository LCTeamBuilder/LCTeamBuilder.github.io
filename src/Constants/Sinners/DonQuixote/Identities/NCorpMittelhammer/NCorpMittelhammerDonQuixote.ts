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
import { NCorpMittelhammerDonQuixoteDefense } from "./NCorpMittelhammerDonQuixoteDefense";
import { NCorpMittelhammerDonQuixoteSkill1 } from "./NCorpMittelhammerDonQuixoteSkill1";
import { NCorpMittelhammerDonQuixoteSkill2 } from "./NCorpMittelhammerDonQuixoteSkill2";
import { NCorpMittelhammerDonQuixoteSkill3 } from "./NCorpMittelhammerDonQuixoteSkill3";

export const NCorpMittelhammerDonQuixote: Identity = {
    Id: 10304,
    Name: "N Corp. Mittelhammer",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpMittelhammerDonQuixoteSkill1, 
            NCorpMittelhammerDonQuixoteSkill2, 
            NCorpMittelhammerDonQuixoteSkill3, 
            NCorpMittelhammerDonQuixoteDefense],
    Passives: [
        new Passive("Thou Shalt Hammer!",
            PassiveTypeEnum.Combat,
            "If the target has [Nails], inflict +1 [Tremor] Count.<br>"+
            "If this unit is [Fanatic], inflict +1 [Nails].",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Hammer of Zealotry",
            PassiveTypeEnum.Support,
            "1 Fanatic ally with the least SP deals +10% damage.",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/NCorpMittelhammer/10304gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/NCorpMittelhammer/10304gacksunginfo.png"
}