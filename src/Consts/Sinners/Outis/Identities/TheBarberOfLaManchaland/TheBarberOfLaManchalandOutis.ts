import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TheBarberOfLaManchalandOutisSkill1 } from "./TheBarberOfLaManchalandOutisSkill1";
import { TheBarberOfLaManchalandOutisSkill2 } from "./TheBarberOfLaManchalandOutisSkill2";
import { TheBarberOfLaManchalandOutisSkill3 } from "./TheBarberOfLaManchalandOutisSkill3";
import { TheBarberOfLaManchalandOutisDefense } from "./TheBarberOfLaManchalandOutisDefense";

export class TheBarberOfLaManchalandOutis implements IdentityBase{
    readonly Id: number = 11111;
    readonly Name: string = "The Barber of La Manchaland";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.23;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 0.5;
    readonly PierceResist: number = 1;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TheBarberOfLaManchalandOutisSkill1, 
                                new TheBarberOfLaManchalandOutisSkill2, 
                                new TheBarberOfLaManchalandOutisSkill3, 
                                new TheBarberOfLaManchalandOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            'If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>'+
            'When this unit enters the field, the sleeping blood drenching the battlefield will surface.'),

        new Passive("WRONG COSTUME!!!",
            PassiveTypeEnum.Combat,
            'In a Clash against [Sewing Target], Clash Power +1<br>'+
            'On Hit, deal +1.5% more damage for every 10 [Bloodfeast Consumed] by self (max 30%)<br>'+
            'On Hit, deal +0.5% more damage for every [Bleed] on the target (max 10%)',
            [{sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Don Quixote Hardblood Arts 8: Scissors",
            PassiveTypeEnum.Support,
            '1 ally with the fastest Speed: if the enemy is killed After Attack, heal 10 HP (2 times per turn)<br>'+
            '1 ally with the fastest Speed: if the enemy is killed After Attack, inflict +1 [Bleed] Count when inflicting [Bleed] Potency with Skill or Coin effects for the next turn (3 times per turn)',
            [{sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/TheBarberOfLaManchaland/11111gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/TheBarberOfLaManchaland/11111gacksunginfo.png";
}