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
import { DevyatAssocNorthSection3RodionDefense } from "./DevyatAssocNorthSection3RodionDefense";
import { DevyatAssocNorthSection3RodionDefense2 } from "./DevyatAssocNorthSection3RodionDefense2";
import { DevyatAssocNorthSection3RodionSkill1 } from "./DevyatAssocNorthSection3RodionSkill1";
import { DevyatAssocNorthSection3RodionSkill2 } from "./DevyatAssocNorthSection3RodionSkill2";
import { DevyatAssocNorthSection3RodionSkill3 } from "./DevyatAssocNorthSection3RodionSkill3";

export const DevyatAssocNorthSection3Rodion: Identity = {
    Id: 10910,
    Name: "Devyat' Assoc. North Section 3",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 81,
    HealthPerLevel: 2.88,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DevyatAssocNorthSection3RodionSkill1, 
            DevyatAssocNorthSection3RodionSkill2, 
            DevyatAssocNorthSection3RodionSkill3, 
            DevyatAssocNorthSection3RodionDefense, 
            DevyatAssocNorthSection3RodionDefense2],
    Passives: [
        new Passive("Lemme go and I swear I'll make it in time!",
            PassiveTypeEnum.Combat,
            "&ltFor Chain Battles&gt When, after Retreating with '[Strategic R&R Mode]', if this unit rejoins the battle, halve the [Courier Trunk - Rodion] - Rodion value (once per Encounter, rounded up)"),

        new Passive("Speedy Delivery",
            PassiveTypeEnum.Combat,
            "Turn Start: At 6+ Speed, or if this unit has [Haste],<br>"+
            "gain ([Courier Trunk - Rodion])% of this unit's max HP as Shield (max 20%)<br><br>"+

            "Upon Retreat, apply 1 [Clash Power Up] to 2 allies next turn (prioritizes Substituted units first, then in Deployment order)<br>"+
            "- Lasts for 1 additional turn for every 15 [Courier Trunk - Rodion] on self (2 more turns max)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Outstanding Courier",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: Clash Power +1 to Skills that apply [Rupture] Potency or Count",
            [{ sin: SinEnum.Gluttony, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/DevyatAssocNorthSection3/10910gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/DevyatAssocNorthSection3/10910gacksunginfo.png"
}