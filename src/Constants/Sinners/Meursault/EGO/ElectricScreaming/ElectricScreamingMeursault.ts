import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { ElectricScreamingMeursaultAwakening } from "./ElectricScreamingMeursaultAwakening";
import { ElectricScreamingMeursaultCorrosion } from "./ElectricScreamingMeursaultCorrosion";

export class ElectricScreamingMeursault implements Ego{
    readonly Id: number = 20506;
    readonly Name: string = "Electric Screaming";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new ElectricScreamingMeursaultAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new ElectricScreamingMeursaultCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Overloading Cables", PassiveTypeEnum.Ego, "Combat Start: At 4+ Reson., gain 2 [Offense Level Up] and 2 [Defense Level Up]<br>"+
        "If the Reson. was an Envy Reson., apply the above effects to 2 units adjacent to this unit on the Dashboard as well");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 1 },{sin: SinEnum.Envy, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506profilesummary.png";
}