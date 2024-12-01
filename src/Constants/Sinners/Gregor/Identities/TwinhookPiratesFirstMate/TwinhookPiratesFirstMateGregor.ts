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
import { TwinhookPiratesFirstMateGregorDefense } from "./TwinhookPiratesFirstMateGregorDefense";
import { TwinhookPiratesFirstMateGregorSkill1 } from "./TwinhookPiratesFirstMateGregorSkill1";
import { TwinhookPiratesFirstMateGregorSkill2 } from "./TwinhookPiratesFirstMateGregorSkill2";
import { TwinhookPiratesFirstMateGregorSkill3 } from "./TwinhookPiratesFirstMateGregorSkill3";

export const TwinhookPiratesFirstMateGregor: Identity = {
    Id: 11207,
    Name: "Twinhook Pirates First Mate",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TwinhookPiratesFirstMateGregorSkill1, 
            TwinhookPiratesFirstMateGregorSkill2, 
            TwinhookPiratesFirstMateGregorSkill3, 
            TwinhookPiratesFirstMateGregorDefense],
    Passives: [
        new Passive("Bullets are Pricey",
            PassiveTypeEnum.Combat,
            "- Always Activate: Begin encounters with 7 [Ammo]<br>"+
            "- On Heads Hit against target with [Bleed], gain [Unjust Enrichment]. (Max 4)<br>"+
            "If a Coin that uses [Ammo] hits, consume all [Unjust Enrichment] and deal (25 x [Unjust Enrichment] consumed)% of damage dealt as bonus damage.<br>"+
            "- If this unit Critical Hits when out of [Ammo], consume all [Unjust Enrichment] and deal (5 x [Unjust Enrichment] consumed)% of damage dealt as bonus damage",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("New Breathing Hole",
            PassiveTypeEnum.Support,
            "If 1 ally with the most [Poise] defeats an enemy, gain 1 [Pierce DMG Up] next turn. (Once per turn)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/TwinhookPiratesFirstMate/11207gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/TwinhookPiratesFirstMate/11207gacksunginfo.png"
}