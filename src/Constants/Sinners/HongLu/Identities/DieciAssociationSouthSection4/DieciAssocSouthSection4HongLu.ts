import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { DieciAssocSouthSection4HongLuSkill1 } from "./DieciAssocSouthSection4HongLuSkill1";
import { DieciAssocSouthSection4HongLuSkill2 } from "./DieciAssocSouthSection4HongLuSkill2";
import { DieciAssocSouthSection4HongLuSkill3 } from "./DieciAssocSouthSection4HongLuSkill3";
import { DieciAssocSouthSection4HongLuDefense } from "./DieciAssocSouthSection4HongLuDefense";

export class DieciAssocSouthSection4HongLu implements Identity{
    readonly Id: number = 10608;
    readonly Name: string = "Dieci Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.49;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new DieciAssocSouthSection4HongLuSkill1, 
                                new DieciAssocSouthSection4HongLuSkill2, 
                                new DieciAssocSouthSection4HongLuSkill3, 
                                new DieciAssocSouthSection4HongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Peering Through a Key",
            PassiveTypeEnum.Combat,
            "When Discarding a Skill, gain 'Damage Up' equal to the Discarded Skill Rank. (Max 3 per turn)<br>"+
            "When other allies Discard a Skill, and if the ally's Discarded Skill rank is higher than this unit's [Insight] value, this unit gains +1 [Insight] .",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Enlightenment",
            PassiveTypeEnum.Support,
            "[After Attack] If the target is in a staggered or defeated state by an attack from 1 ally with the least SP, the ally heals 7 SP.",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/DieciAssociationSouthSection4/10608gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/DieciAssociationSouthSection4/10608gacksunginfo.png";
}