import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { MolarOfficeFixerYiSangSkill1 } from "./MolarOfficeFixerYiSangSkill1";
import { MolarOfficeFixerYiSangSkill2 } from "./MolarOfficeFixerYiSangSkill2";
import { MolarOfficeFixerYiSangSkill3 } from "./MolarOfficeFixerYiSangSkill3";
import { MolarOfficeFixerYiSangDefense } from "./MolarOfficeFixerYiSangDefense";

export class MolarOfficeFixerYiSang implements IdentityBase{
    readonly Id: number = 10105;
    readonly Name: string = "Molar Office Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.51;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new MolarOfficeFixerYiSangSkill1, 
                                new MolarOfficeFixerYiSangSkill2, 
                                new MolarOfficeFixerYiSangSkill3, 
                                new MolarOfficeFixerYiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("In Times Like These...",
            PassiveTypeEnum.Combat,
            "Upon triggering [Tremor Burst] on an enemy, inflict 1 [Defense Level Down] per 4 Stagger Threshold raised (Max 5 per 1 enemy every turn)",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleaning Up the Mess",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Max HP triggers [Tremor Burst] on an enemy, inflict 1 [Defense Level Down] per 4 Stagger Threshold raised (Max 3 per 1 enemy every turn)",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/MolarOfficeFixer/10105gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/MolarOfficeFixer/10105gacksunginfo.png";
}