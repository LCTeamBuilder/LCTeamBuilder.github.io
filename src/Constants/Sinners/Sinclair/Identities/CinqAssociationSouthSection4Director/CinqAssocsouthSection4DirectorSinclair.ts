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
import { CinqAssocsouthSection4DirectorSinclairDefense } from "./CinqAssocsouthSection4DirectorSinclairDefense";
import { CinqAssocsouthSection4DirectorSinclairSkill1 } from "./CinqAssocsouthSection4DirectorSinclairSkill1";
import { CinqAssocsouthSection4DirectorSinclairSkill2 } from "./CinqAssocsouthSection4DirectorSinclairSkill2";
import { CinqAssocsouthSection4DirectorSinclairSkill3 } from "./CinqAssocsouthSection4DirectorSinclairSkill3";

export const CinqAssocsouthSection4DirectorSinclair: Identity = {
    Id: 11008,
    Name: "Cinq Assoc.South Section 4 Director",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.71,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocsouthSection4DirectorSinclairSkill1, 
            CinqAssocsouthSection4DirectorSinclairSkill2, 
            CinqAssocsouthSection4DirectorSinclairSkill3, 
            CinqAssocsouthSection4DirectorSinclairDefense],
    Passives: [
        new Passive("Slumbering Bloodlust",
            PassiveTypeEnum.Combat,
            "Turn End: Gain +2 Max Speed next turn for every 5 [Poise] Count (Max 6)<br>"+
            "Combat Start: If Speed of all allies is higher than Speed of all enemies, gain 1 [Pierce DMG Up]",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Too Slow",
            PassiveTypeEnum.Support,
            "The fastest ally, On Evade, gains 1 [Haste] next turn (Max 5)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/CinqAssociationSouthSection4Director/11008gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/CinqAssociationSouthSection4Director/11008gacksunginfo.png"
}