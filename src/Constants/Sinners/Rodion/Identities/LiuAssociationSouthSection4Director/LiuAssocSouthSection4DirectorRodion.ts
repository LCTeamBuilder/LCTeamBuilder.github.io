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
import { LiuAssocSouthSection4DirectorRodionDefense } from "./LiuAssocSouthSection4DirectorRodionDefense";
import { LiuAssocSouthSection4DirectorRodionSkill1 } from "./LiuAssocSouthSection4DirectorRodionSkill1";
import { LiuAssocSouthSection4DirectorRodionSkill2 } from "./LiuAssocSouthSection4DirectorRodionSkill2";
import { LiuAssocSouthSection4DirectorRodionSkill3 } from "./LiuAssocSouthSection4DirectorRodionSkill3";

export const LiuAssocSouthSection4DirectorRodion: Identity = {
    Id: 10908,
    Name: "Liu Assoc. South Section 4 Director",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.74,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection4DirectorRodionSkill1, 
            LiuAssocSouthSection4DirectorRodionSkill2, 
            LiuAssocSouthSection4DirectorRodionSkill3, 
            LiuAssocSouthSection4DirectorRodionDefense],
    Passives: [
        new Passive("Burning Passion",
            PassiveTypeEnum.Combat,
            "Deal +10% more damage for every 6 [Burn] Potency on target (Max 30%)<br>"+
            "Combat Start: If all enemies have 6+ [Burn] Potency, apply 1 [Wrath DMG Up] to (Highest Wrath A-Reson.) allies in Deployment order<br>"+
            "- In Focused Encounters, the above activates when all enemy Parts have 6+ [Burn] Potency<br>"+
            "- If the ally is a Liu Association Fixer, apply 1 [Attack Power Up]",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Passionate Cheer",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +5% Pierce damage for every 6 [Burn] Potency on target On Hit (Max 15%)",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/LiuAssociationSouthSection4Director/10908gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/LiuAssociationSouthSection4Director/10908gacksunginfo.png"
}