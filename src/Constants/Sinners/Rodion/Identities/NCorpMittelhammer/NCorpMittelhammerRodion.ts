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
import { NCorpMittelhammerRodionDefense } from "./NCorpMittelhammerRodionDefense";
import { NCorpMittelhammerRodionSkill1 } from "./NCorpMittelhammerRodionSkill1";
import { NCorpMittelhammerRodionSkill2 } from "./NCorpMittelhammerRodionSkill2";
import { NCorpMittelhammerRodionSkill3 } from "./NCorpMittelhammerRodionSkill3";

export const NCorpMittelhammerRodion: Identity = {
    Id: 10904,
    Name: "N Corp. Mittelhammer",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpMittelhammerRodionSkill1, 
            NCorpMittelhammerRodionSkill2, 
            NCorpMittelhammerRodionSkill3, 
            NCorpMittelhammerRodionDefense],
    Passives: [
        new Passive("Joy of Execution",
            PassiveTypeEnum.Combat,
            "After an enemy is defeated, gain 1 [Haste] and 1 [Damage Up] next turn.<br>"+
            "If this unit defeated an enemy, also gain 1 [Fanatic]. (Once per turn.)",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rising Faith",
            PassiveTypeEnum.Support,
            "After an enemy is defeated, apply 1 [Haste] and 1 [Damage Up] to the ally with the most SP. (Once per turn.)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/NCorpMittelhammer/10904gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/NCorpMittelhammer/10904gacksunginfo.png"
}