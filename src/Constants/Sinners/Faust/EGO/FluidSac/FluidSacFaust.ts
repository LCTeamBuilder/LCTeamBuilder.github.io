import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { FluidSacFaustAwakening } from "./FluidSacFaustAwakening";
import { FluidSacFaustCorrosion } from "./FluidSacFaustCorrosion";

export class FluidSacFaust implements Ego{
    readonly Id: number = 20202;
    readonly Name: string = "Fluid Sac";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new FluidSacFaustAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new FluidSacFaustCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Liquid Veil", PassiveTypeEnum.Ego, "At the start of the turn, apply 2 [Protection] to the ally with the least HP. (Including self.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Gloom, amount: 4 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Faust/EGO/FluidSac/20202cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Faust/EGO/FluidSac/20202awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Faust/EGO/FluidSac/20202profilesummary.png";
}