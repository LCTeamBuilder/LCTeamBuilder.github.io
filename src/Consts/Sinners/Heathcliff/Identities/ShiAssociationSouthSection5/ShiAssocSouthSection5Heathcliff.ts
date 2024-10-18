import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { ShiAssocSouthSection5HeathcliffSkill1 } from "./ShiAssocSouthSection5HeathcliffSkill1";
import { ShiAssocSouthSection5HeathcliffSkill2 } from "./ShiAssocSouthSection5HeathcliffSkill2";
import { ShiAssocSouthSection5HeathcliffSkill3 } from "./ShiAssocSouthSection5HeathcliffSkill3";
import { ShiAssocSouthSection5HeathcliffDefense } from "./ShiAssocSouthSection5HeathcliffDefense";

export class ShiAssocSouthSection5Heathcliff implements IdentityBase{
    readonly Id: number = 10702;
    readonly Name: string = "Shi Assoc. South Section 5";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [80, 60];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ShiAssocSouthSection5HeathcliffSkill1, 
                                new ShiAssocSouthSection5HeathcliffSkill2, 
                                new ShiAssocSouthSection5HeathcliffSkill3, 
                                new ShiAssocSouthSection5HeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Repspiration",
            PassiveTypeEnum.Combat,
            "After taking damage from attacks this turn, deal +10% damage.",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Self-neglect",
            PassiveTypeEnum.Support,
            "1 ally with the least HP deals and takes +20% damage.",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/ShiAssociationSouthSection5/10702gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/ShiAssociationSouthSection5/10702gacksunginfo.png";
}