import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { ElectricScreamingDonQuixoteAwakening } from "./ElectricScreamingDonQuixoteAwakening";
import { ElectricScreamingDonQuixoteCorrosion } from "./ElectricScreamingDonQuixoteCorrosion";

export class ElectricScreamingDonQuixote implements EgoBase{
    readonly Id: number = 20306;
    readonly Name: string = "Electric Screaming";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new ElectricScreamingDonQuixoteAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new ElectricScreamingDonQuixoteCorrosion;
    readonly CorrosionSanityCost?: number = 25;
    readonly Passive: Passive = new Passive("Tempestuous Screaming", PassiveTypeEnum.Ego, "If the target is defeated at this unit's Slash or Envy Affinity Skill End, gain 1 [Attack Power Up] next turn (once per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Pride, amount: 2 },{sin: SinEnum.Envy, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306profilesummary.png";
}