import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { HolidayOutisAwakening } from "./HolidayOutisAwakening";
import { HolidayOutisCorrosion } from "./HolidayOutisCorrosion";

export class HolidayOutis implements EgoBase{
    readonly Id: number = 21105;
    readonly Name: string = "Holiday";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new HolidayOutisAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new HolidayOutisCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Fair Presents", PassiveTypeEnum.Ego, "When applying positive effects to other allies with Skill effects or Coin effects, randomly select one of the following effects:<br>"+
        "[Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect to 1 random enemy. (Activates 5 times per Turn. Can be applied up to 5 times per enemy. For abnormalities, applied to a random Part.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 0.75},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Sloth, amount: 1 },{sin: SinEnum.Pride, amount: 3 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Outis/EGO/Holiday/21105cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Outis/EGO/Holiday/21105awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Outis/EGO/Holiday/21105profilesummary.png";
}