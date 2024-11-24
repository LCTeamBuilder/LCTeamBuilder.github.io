import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { DieciAssocSouthSection4YiSangSkill1 } from "./DieciAssocSouthSection4YiSangSkill1";
import { DieciAssocSouthSection4YiSangSkill2 } from "./DieciAssocSouthSection4YiSangSkill2";
import { DieciAssocSouthSection4YiSangSkill3 } from "./DieciAssocSouthSection4YiSangSkill3";
import { DieciAssocSouthSection4YiSangDefense } from "./DieciAssocSouthSection4YiSangDefense";

export class DieciAssocSouthSection4YiSang implements Identity{
    readonly Id: number = 10108;
    readonly Name: string = "Dieci Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [60, 30];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new DieciAssocSouthSection4YiSangSkill1, 
                                new DieciAssocSouthSection4YiSangSkill2, 
                                new DieciAssocSouthSection4YiSangSkill3, 
                                new DieciAssocSouthSection4YiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("Sinking Knowledge",
            PassiveTypeEnum.Combat,
            "When attacked, inflict 1 [Sinking] on the attacker. When attacked while Shielded, inflict 1 additional [Sinking] on the attacker. (4 times max)",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Reviewed Knowledge",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest Speed Discards a Skill, gain (5 x Discarded Skill rank)% of the Max HP as Shield (2 times per turn)",
            [{sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/DieciAssociationSouthSection4/10108gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/DieciAssociationSouthSection4/10108gacksunginfo.png";
}