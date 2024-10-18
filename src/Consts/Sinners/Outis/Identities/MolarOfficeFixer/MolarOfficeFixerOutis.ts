import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { MolarOfficeFixerOutisSkill1 } from "./MolarOfficeFixerOutisSkill1";
import { MolarOfficeFixerOutisSkill2 } from "./MolarOfficeFixerOutisSkill2";
import { MolarOfficeFixerOutisSkill3 } from "./MolarOfficeFixerOutisSkill3";
import { MolarOfficeFixerOutisDefense } from "./MolarOfficeFixerOutisDefense";

export class MolarOfficeFixerOutis implements IdentityBase{
    readonly Id: number = 11105;
    readonly Name: string = "Molar Office Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 68;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new MolarOfficeFixerOutisSkill1, 
                                new MolarOfficeFixerOutisSkill2, 
                                new MolarOfficeFixerOutisSkill3, 
                                new MolarOfficeFixerOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Drinking Boast",
            PassiveTypeEnum.Combat,
            "Upon triggering [Tremor Burst] on an enemy, inflict 30% of Raised Stagger Threshold as Sloth damage (Max 20; rounded down)",
            [{sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Carrot & Stick",
            PassiveTypeEnum.Support,
            "1 ally with the most [Tremor] Count gains +1 more [Tremor] Count from Skill effects",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/MolarOfficeFixer/11105gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/MolarOfficeFixer/11105gacksunginfo.png";
}