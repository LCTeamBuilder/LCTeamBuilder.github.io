import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { YaSunyataTadRupamHeathcliffAwakening } from "./YaSunyataTadRupamHeathcliffAwakening";
import { YaSunyataTadRupamHeathcliffCorrosion } from "./YaSunyataTadRupamHeathcliffCorrosion";

export class YaSunyataTadRupamHeathcliff implements EgoBase{
    readonly Id: number = 20704;
    readonly Name: string = "Ya Śūnyatā Tad Rūpam";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new YaSunyataTadRupamHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new YaSunyataTadRupamHeathcliffCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Dhyāna", PassiveTypeEnum.Ego, "Raise Max HP by 15% of this Identity's base Max HP when recovering from Staggered state.<br>"+
        "Then, heal by 15% of current Max HP. If at less than 30% of current Max HP, heal by 25% instead.<br>"+
        "(3 times per encounter. At Encounter End, revert to base Max HP. Current HP value will be adjusted to reflect the HP percentage at the time of Encounter End.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 0.75},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Gloom, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704profilesummary.png";
}