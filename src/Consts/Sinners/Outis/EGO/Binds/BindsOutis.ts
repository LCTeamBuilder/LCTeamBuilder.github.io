import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { BindsOutisAwakening } from "./BindsOutisAwakening";
import { BindsOutisCorrosion } from "./BindsOutisCorrosion";

export class BindsOutis implements EgoBase{
    readonly Id: number = 21106;
    readonly Name: string = "Binds";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new BindsOutisAwakening;
    readonly AwakeningSanityCost: number = 10;
    readonly CorrosionSkill?: Skill = new BindsOutisCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Grand Welcome", PassiveTypeEnum.Ego, "After Attack from this unit: if the target is Staggered or defeated, gain +1 Pride E.G.O resource and +1 E.G.O resource for 1 other random Affinity (3 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 0.75}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Sloth, amount: 4 },{sin: SinEnum.Pride, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Outis/EGO/Binds/21106cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Outis/EGO/Binds/21106awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Outis/EGO/Binds/21106profilesummary.png";
}