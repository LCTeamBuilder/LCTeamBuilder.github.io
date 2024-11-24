import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { DieciAssocSouthSection4RodionSkill1 } from "./DieciAssocSouthSection4RodionSkill1";
import { DieciAssocSouthSection4RodionSkill2 } from "./DieciAssocSouthSection4RodionSkill2";
import { DieciAssocSouthSection4RodionSkill3 } from "./DieciAssocSouthSection4RodionSkill3";
import { DieciAssocSouthSection4RodionDefense } from "./DieciAssocSouthSection4RodionDefense";

export class DieciAssocSouthSection4Rodion implements Identity{
    readonly Id: number = 10907;
    readonly Name: string = "Dieci Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 88;
    readonly HealthPerLevel: number = 3.1;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [50];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new DieciAssocSouthSection4RodionSkill1, 
                                new DieciAssocSouthSection4RodionSkill2, 
                                new DieciAssocSouthSection4RodionSkill3, 
                                new DieciAssocSouthSection4RodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Incandescent Enlightenment",
            PassiveTypeEnum.Combat,
            "Gain [Blunt DMG Up] next turn based on the damage that this unit took this turn.<br>"+
            "(Shield damage included in the calculation. Maxes out when taking damage equal to 25% of Max HP at turn start. Max [Blunt DMG Up] gained by this effect: 5)<br>"+
            "If this unit has 3 [Insight] at the end of the turn, remove 1 negative effect applied to self",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Missionary of Knowledge",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP gains [Blunt DMG Up] next turn based on the damage that they took this turn.<br>"+
            "(Shield damage included in the calculation. Maxes out when taking damage equal to 15% of Max HP at turn start. Max [Blunt DMG Up] gained by this effect: 3)",
            [{sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/DieciAssociationSouthSection4/10907gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/DieciAssociationSouthSection4/10907gacksunginfo.png";
}