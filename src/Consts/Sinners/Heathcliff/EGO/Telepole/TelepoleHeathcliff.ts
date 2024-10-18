import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { TelepoleHeathcliffAwakening } from "./TelepoleHeathcliffAwakening";
import { TelepoleHeathcliffCorrosion } from "./TelepoleHeathcliffCorrosion";

export class TelepoleHeathcliff implements EgoBase{
    readonly Id: number = 20702;
    readonly Name: string = "Telepole";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new TelepoleHeathcliffAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new TelepoleHeathcliffCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Roar", PassiveTypeEnum.Ego, "After defeating an enemy, gain [Charge] by half that turn's Envy A-Reson.<br>(Envy A-Reson. / 2)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 3 },{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Envy, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/EGO/Telepole/20702cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Heathcliff/EGO/Telepole/20702awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Heathcliff/EGO/Telepole/20702profilesummary.png";
}