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
import { NCorpKleinhammerHeathcliffDefense } from "./NCorpKleinhammerHeathcliffDefense";
import { NCorpKleinhammerHeathcliffSkill1 } from "./NCorpKleinhammerHeathcliffSkill1";
import { NCorpKleinhammerHeathcliffSkill2 } from "./NCorpKleinhammerHeathcliffSkill2";
import { NCorpKleinhammerHeathcliffSkill3 } from "./NCorpKleinhammerHeathcliffSkill3";

export const NCorpKleinhammerHeathcliff: Identity = {
    Id: 10704,
    Name: "N Corp. Kleinhammer",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpKleinhammerHeathcliffSkill1, 
            NCorpKleinhammerHeathcliffSkill2, 
            NCorpKleinhammerHeathcliffSkill3, 
            NCorpKleinhammerHeathcliffDefense],
    Passives: [
        new Passive("Bugger...",
            PassiveTypeEnum.Combat,
            "When an ally is defeated, lose 10 SP and gain 1 [Blunt Power Up] next turn.<br>"+
            "If 4 or more surviving units in the team, including this unit, are 'N Corp. Fanatics', Coin Power +1.",
            [{ sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cantillation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed inflicts +1 [Nails].",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/NCorpKleinhammer/10704gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/NCorpKleinhammer/10704gacksunginfo.png"
}