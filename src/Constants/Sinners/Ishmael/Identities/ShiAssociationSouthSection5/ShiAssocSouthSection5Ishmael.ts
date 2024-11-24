import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ShiAssocSouthSection5IshmaelSkill1 } from "./ShiAssocSouthSection5IshmaelSkill1";
import { ShiAssocSouthSection5IshmaelSkill2 } from "./ShiAssocSouthSection5IshmaelSkill2";
import { ShiAssocSouthSection5IshmaelSkill3 } from "./ShiAssocSouthSection5IshmaelSkill3";
import { ShiAssocSouthSection5IshmaelDefense } from "./ShiAssocSouthSection5IshmaelDefense";

export class ShiAssocSouthSection5Ishmael implements Identity{
    readonly Id: number = 10803;
    readonly Name: string = "Shi Assoc. South Section 5";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
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
    readonly Skills: Skill[] = [new ShiAssocSouthSection5IshmaelSkill1, 
                                new ShiAssocSouthSection5IshmaelSkill2, 
                                new ShiAssocSouthSection5IshmaelSkill3, 
                                new ShiAssocSouthSection5IshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Walking the Line of Death",
            PassiveTypeEnum.Combat,
            "At less than 50% HP, gain 1 additional [Poise] from skills.",
            [{sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Strife",
            PassiveTypeEnum.Support,
            "1 ally with the least HP gains +2 counter skill final Power.",
            [{sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/ShiAssociationSouthSection5/10803gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/ShiAssociationSouthSection5/10803gacksunginfo.png";
}