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
import { TheBarberOfLaManchalandOutisDefense } from "./TheBarberOfLaManchalandOutisDefense";
import { TheBarberOfLaManchalandOutisSkill1 } from "./TheBarberOfLaManchalandOutisSkill1";
import { TheBarberOfLaManchalandOutisSkill2 } from "./TheBarberOfLaManchalandOutisSkill2";
import { TheBarberOfLaManchalandOutisSkill3 } from "./TheBarberOfLaManchalandOutisSkill3";

export const TheBarberOfLaManchalandOutis: Identity = {
    Id: 11111,
    Name: "The Barber of La Manchaland",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.23,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [TheBarberOfLaManchalandOutisSkill1, 
            TheBarberOfLaManchalandOutisSkill2, 
            TheBarberOfLaManchalandOutisSkill3, 
            TheBarberOfLaManchalandOutisDefense],
    Passives: [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            'If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>'+
            'When this unit enters the field, the sleeping blood drenching the battlefield will surface.'),

        new Passive("WRONG COSTUME!!!",
            PassiveTypeEnum.Combat,
            'In a Clash against [Sewing Target], Clash Power +1<br>'+
            'On Hit, deal +1.5% more damage for every 10 [Bloodfeast Consumed] by self (max 30%)<br>'+
            'On Hit, deal +0.5% more damage for every [Bleed] on the target (max 10%)',
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Don Quixote Hardblood Arts 8: Scissors",
            PassiveTypeEnum.Support,
            '1 ally with the fastest Speed: if the enemy is killed After Attack, heal 10 HP (2 times per turn)<br>'+
            '1 ally with the fastest Speed: if the enemy is killed After Attack, inflict +1 [Bleed] Count when inflicting [Bleed] Potency with Skill or Coin effects for the next turn (3 times per turn)',
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/TheBarberOfLaManchaland/11111gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/TheBarberOfLaManchaland/11111gacksunginfo.png"
}