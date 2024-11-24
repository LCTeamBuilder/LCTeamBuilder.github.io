import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { SanguineDesireRodionAwakening } from "./SanguineDesireRodionAwakening";
import { SanguineDesireRodionCorrosion } from "./SanguineDesireRodionCorrosion";

export class SanguineDesireRodion implements Ego{
    readonly Id: number = 20906;
    readonly Name: string = "Sanguine Desire";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new SanguineDesireRodionAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = new SanguineDesireRodionCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Obsession", PassiveTypeEnum.Ego, "This unit's leftmost Skill on the Dashboard inflicts double the [Bleed] Potency (once per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.75},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Lust, amount: 3 },{sin: SinEnum.Pride, amount: 3 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Rodion/EGO/SanguineDesire/20906cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Rodion/EGO/SanguineDesire/20906awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Rodion/EGO/SanguineDesire/20906profilesummary.png";
}