import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { YaSunyataTadRupamOutisAwakening } from "./YaSunyataTadRupamOutisAwakening";
import { YaSunyataTadRupamOutisCorrosion } from "./YaSunyataTadRupamOutisCorrosion";

export class YaSunyataTadRupamOutis implements Ego{
    readonly Id: number = 21103;
    readonly Name: string = "Ya Śūnyatā Tad Rūpam";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new YaSunyataTadRupamOutisAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = new YaSunyataTadRupamOutisCorrosion;
    readonly CorrosionSanityCost?: number = 15;
    readonly Passive: Passive = new Passive("Emptying", PassiveTypeEnum.Ego, "At the start of the turn, gain 1 [Lust DMG Up].<br>"+
        "Gain 1 more when below 0 SP.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103profilesummary.png";
}