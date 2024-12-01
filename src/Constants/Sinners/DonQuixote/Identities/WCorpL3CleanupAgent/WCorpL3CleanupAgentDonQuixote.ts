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
import { WCorpL3CleanupAgentDonQuixoteDefense } from "./WCorpL3CleanupAgentDonQuixoteDefense";
import { WCorpL3CleanupAgentDonQuixoteSkill1 } from "./WCorpL3CleanupAgentDonQuixoteSkill1";
import { WCorpL3CleanupAgentDonQuixoteSkill2 } from "./WCorpL3CleanupAgentDonQuixoteSkill2";
import { WCorpL3CleanupAgentDonQuixoteSkill3 } from "./WCorpL3CleanupAgentDonQuixoteSkill3";

export const WCorpL3CleanupAgentDonQuixote: Identity = {
    Id: 10302,
    Name: "W Corp. L3 Cleanup Agent",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupAgentDonQuixoteSkill1, 
            WCorpL3CleanupAgentDonQuixoteSkill2, 
            WCorpL3CleanupAgentDonQuixoteSkill3, 
            WCorpL3CleanupAgentDonQuixoteDefense],
    Passives: [
        new Passive("Quick Recharge",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain [Charge] Count by (Gloom Reson. / 3).",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Broken Spirit",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed gains +1 final Power for their first skill.",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/WCorpCleanupCrew/10302gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/WCorpCleanupCrew/10302gacksunginfo.png"
}