import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { ThePrincessOfLaManchalandRodionSkill1 } from "./ThePrincessOfLaManchalandRodionSkill1";
import { ThePrincessOfLaManchalandRodionSkill2 } from "./ThePrincessOfLaManchalandRodionSkill2";
import { ThePrincessOfLaManchalandRodionSkill3 } from "./ThePrincessOfLaManchalandRodionSkill3";
import { ThePrincessOfLaManchalandRodionSkill4 } from "./ThePrincessOfLaManchalandRodionSkill4";
import { ThePrincessOfLaManchalandRodionDefense } from "./ThePrincessOfLaManchalandRodionDefense";

export class ThePrincessOfLaManchalandRodion implements IdentityBase{
    readonly Id: number = 10911;
    readonly Name: string = "The Princess of La Manchaland";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.73;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 1;
    readonly Skills: Skill[] = [new ThePrincessOfLaManchalandRodionSkill1, 
                                new ThePrincessOfLaManchalandRodionSkill2, 
                                new ThePrincessOfLaManchalandRodionSkill3, 
                                new ThePrincessOfLaManchalandRodionSkill4, 
                                new ThePrincessOfLaManchalandRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will rise above the surface."),

        new Passive("Hardblood Thorn",
            PassiveTypeEnum.Combat,
            "When another ally takes [Bleed] damage or consumes [Bloodfeast], this unit gains 1 [Blooming Thorn] (5 times per turn)<br>"+
            "Heal HP on self by 20% of the damage dealt with base Skills (max 10 per Skill)<br>"+
            "- At max HP, heal 1 ally with the lowest HP percentage by excess healing",
            [{sin: SinEnum.Lust, amount: 3 }, {sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive('"Blossom with Blood…"',
            PassiveTypeEnum.Support,
            "To 1 ally with the highest [Bleed] Potency at Turn End: reduce the ally's [Bleed] Potency by 6 max, and apply ([Bleed] Potency reduced / 2) [Blooming Thorn] (rounded down)",
            [{sin: SinEnum.Lust, amount: 3 }, {sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/ThePrincessOfLaManchaland/10911gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/ThePrincessOfLaManchaland/10911gacksunginfo.png";
}