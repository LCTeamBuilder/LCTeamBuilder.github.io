import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { TelepoleDonQuixoteAwakening } from "./TelepoleDonQuixoteAwakening";
import { TelepoleDonQuixoteCorrosion } from "./TelepoleDonQuixoteCorrosion";

export class TelepoleDonQuixote implements Ego{
    readonly Id: number = 20303;
    readonly Name: string = "Telepole";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new TelepoleDonQuixoteAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new TelepoleDonQuixoteCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Haphazard Discharge", PassiveTypeEnum.Ego, "At the start of the combat phase, a random ally with [Charge] gains +(Envy A-Reson. / 2) [Charge] Count.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Gloom, amount: 2 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/EGO/Telepole/20303cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/DonQuixote/EGO/Telepole/20303awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/DonQuixote/EGO/Telepole/20303profilesummary.png";
}