import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { RimeShankRodionAwakening } from "./RimeShankRodionAwakening";
import { RimeShankRodionCorrosion } from "./RimeShankRodionCorrosion";

export class RimeShankRodion implements EgoBase{
    readonly Id: number = 20903;
    readonly Name: string = "Rime Shank";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new RimeShankRodionAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new RimeShankRodionCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Coldness", PassiveTypeEnum.Ego, "On hit, if the target has 5+ [Sinking], inflict 1 [Bind] and [Attack Power Down]. (3 times per unit.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gloom, amount: 5 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Rodion/EGO/RimeShank/20903cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Rodion/EGO/RimeShank/20903awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Rodion/EGO/RimeShank/20903profilesummary.png";
}