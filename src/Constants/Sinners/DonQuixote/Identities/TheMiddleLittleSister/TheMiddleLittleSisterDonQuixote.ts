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
import { TheMiddleLittleSisterDonQuixoteDefense } from "./TheMiddleLittleSisterDonQuixoteDefense";
import { TheMiddleLittleSisterDonQuixoteSkill1 } from "./TheMiddleLittleSisterDonQuixoteSkill1";
import { TheMiddleLittleSisterDonQuixoteSkill2 } from "./TheMiddleLittleSisterDonQuixoteSkill2";
import { TheMiddleLittleSisterDonQuixoteSkill3 } from "./TheMiddleLittleSisterDonQuixoteSkill3";

export const TheMiddleLittleSisterDonQuixote: Identity = {
    Id: 10306,
    Name: "The Middle Little Sister",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.95,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheMiddleLittleSisterDonQuixoteSkill1, 
            TheMiddleLittleSisterDonQuixoteSkill2, 
            TheMiddleLittleSisterDonQuixoteSkill3, 
            TheMiddleLittleSisterDonQuixoteDefense],
    Passives: [
        new Passive("Vengeance Tattoo",
            PassiveTypeEnum.Combat,
            "- Gain 1 [Envy DMG Up] next turn every time the enemies strike an ally (including this unit) 3 times. (Max 5)<br>"+
            "- Apply [Vengeance Mark] to the unit that dealt the most Skill damage to an ally.<br>"+
            "- If the main target has [Vengeance Mark], Coin Power +1",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Favoritism",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains 1 [Blunt DMG Up] next turn every time the enemies strike an ally (not including this unit) 6 times. (Max 2)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/TheMiddleLittleSister/10306gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/TheMiddleLittleSister/10306gacksunginfo.png"
}