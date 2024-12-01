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
import { ThePrincessOfLaManchalandRodionDefense } from "./ThePrincessOfLaManchalandRodionDefense";
import { ThePrincessOfLaManchalandRodionSkill1 } from "./ThePrincessOfLaManchalandRodionSkill1";
import { ThePrincessOfLaManchalandRodionSkill2 } from "./ThePrincessOfLaManchalandRodionSkill2";
import { ThePrincessOfLaManchalandRodionSkill3 } from "./ThePrincessOfLaManchalandRodionSkill3";
import { ThePrincessOfLaManchalandRodionSkill4 } from "./ThePrincessOfLaManchalandRodionSkill4";

export const ThePrincessOfLaManchalandRodion: Identity = {
    Id: 10911,
    Name: "The Princess of La Manchaland",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +3,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [ThePrincessOfLaManchalandRodionSkill1, 
            ThePrincessOfLaManchalandRodionSkill2, 
            ThePrincessOfLaManchalandRodionSkill3, 
            ThePrincessOfLaManchalandRodionSkill4, 
            ThePrincessOfLaManchalandRodionDefense],
    Passives: [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will rise above the surface."),

        new Passive("Hardblood Thorn",
            PassiveTypeEnum.Combat,
            "When another ally takes [Bleed] damage or consumes [Bloodfeast], this unit gains 1 [Blooming Thorn] (5 times per turn)<br>"+
            "Heal HP on self by 20% of the damage dealt with base Skills (max 10 per Skill)<br>"+
            "- At max HP, heal 1 ally with the lowest HP percentage by excess healing",
            [{ sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive('"Blossom with Blood…"',
            PassiveTypeEnum.Support,
            "To 1 ally with the highest [Bleed] Potency at Turn End: reduce the ally's [Bleed] Potency by 6 max, and apply ([Bleed] Potency reduced / 2) [Blooming Thorn] (rounded down)",
            [{ sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/ThePrincessOfLaManchaland/10911gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/ThePrincessOfLaManchaland/10911gacksunginfo.png"
}