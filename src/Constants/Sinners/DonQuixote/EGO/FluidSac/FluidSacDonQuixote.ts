import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { FluidSacDonQuixoteAwakening } from "./FluidSacDonQuixoteAwakening";
import { FluidSacDonQuixoteCorrosion } from "./FluidSacDonQuixoteCorrosion";

export class FluidSacDonQuixote implements Ego{
    readonly Id: number = 20302;
    readonly Name: string = "Fluid Sac";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new FluidSacDonQuixoteAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new FluidSacDonQuixoteCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Wave of Depression", PassiveTypeEnum.Ego, 
                "The target of the rightmost skill on the Dashboard loses SP by (2x Gloom A-Reson.) after the attack.<br>"+
                "(Targets without SP values take Gloom damage instead.)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 0.5},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Gloom, amount: 4 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/EGO/FluidSac/20302cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/DonQuixote/EGO/FluidSac/20302awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/DonQuixote/EGO/FluidSac/20302profilesummary.png";
}