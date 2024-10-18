import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { GardenOfThornsGregorAwakening } from "./GardenOfThornsGregorAwakening";
import { GardenOfThornsGregorCorrosion } from "./GardenOfThornsGregorCorrosion";

export class GardenOfThornsGregor implements EgoBase{
    readonly Id: number = 21205;
    readonly Name: string = "Garden of Thorns";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.WAW;
    readonly AwakeningSkill: Skill = new GardenOfThornsGregorAwakening;
    readonly AwakeningSanityCost: number = 30;
    readonly CorrosionSkill?: Skill = new GardenOfThornsGregorCorrosion;
    readonly CorrosionSanityCost?: number = 35;
    readonly Passive: Passive = new Passive("Crown of Thorns", PassiveTypeEnum.Ego, "Turn Start: Inflict 2 [Rupture] Potency on a random enemy (In Focused Encounters, all parts)<br>"+
        "When activating Absolute Resonance, inflict 2 [Rupture] Potency on all enemies at Combat Start");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 0.5},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Gluttony, amount: 2 },{sin: SinEnum.Gloom, amount: 2 },{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205profilesummary.png";
}