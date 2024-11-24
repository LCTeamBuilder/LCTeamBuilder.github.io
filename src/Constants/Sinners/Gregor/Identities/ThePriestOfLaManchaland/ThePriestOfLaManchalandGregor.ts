import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ThePriestOfLaManchalandGregorSkill1 } from "./ThePriestOfLaManchalandGregorSkill1";
import { ThePriestOfLaManchalandGregorSkill2 } from "./ThePriestOfLaManchalandGregorSkill2";
import { ThePriestOfLaManchalandGregorSkill3 } from "./ThePriestOfLaManchalandGregorSkill3";
import { ThePriestOfLaManchalandGregorDefense } from "./ThePriestOfLaManchalandGregorDefense";

export class ThePriestOfLaManchalandGregor implements Identity{
    readonly Id: number = 11210;
    readonly Name: string = "The Priest of La Manchaland";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 108;
    readonly HealthPerLevel: number = 3.41;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [80];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 2;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new ThePriestOfLaManchalandGregorSkill1, 
                                new ThePriestOfLaManchalandGregorSkill2, 
                                new ThePriestOfLaManchalandGregorSkill3, 
                                new ThePriestOfLaManchalandGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will surface."),

        new Passive("Self-destructive Dedication",
            PassiveTypeEnum.Combat,
            "Turn End: heal (10 - [Ailing Heart]) SP for the ally with the least SP (excluding: self or allies that are Panicked or Corroded)<br>"+
            "In this Encounter, when this unit takes damage that brings their HP down to X, nullify that damage; then, this unit's HP cannot drop below 1 for the turn.",
            [{sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Don Quixote Hardblood Arts 6: Whip",
            PassiveTypeEnum.Support,
            "1 ally with the lowest HP percentage heals 3 HP On Hit (3 times per turn)<br>"+
            "- If the target hit by the said ally had [Bleed], heal 3 additional HP",
            [{sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/ThePriestOfLaManchaland/11210gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/ThePriestOfLaManchaland/11210gacksunginfo.png";
}