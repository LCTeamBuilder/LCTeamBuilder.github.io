import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { PursuanceMeursaultAwakening } from "./PursuanceMeursaultAwakening";
import { PursuanceMeursaultCorrosion } from "./PursuanceMeursaultCorrosion";

export class PursuanceMeursault implements Ego{
    readonly Id: number = 20503;
    readonly Name: string = "Pursuance";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new PursuanceMeursaultAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new PursuanceMeursaultCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Revelation from Above", PassiveTypeEnum.Ego, "After winning a clash with the leftmost skill on the Dashboard, apply 1 [Attack Power Up] or 1 [Defense Power Up] to a random ally next turn.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 0.5},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 4 },{sin: SinEnum.Gloom, amount: 1 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Meursault/EGO/Pursuance/20503cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Meursault/EGO/Pursuance/20503awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Meursault/EGO/Pursuance/20503profilesummary.png";
}