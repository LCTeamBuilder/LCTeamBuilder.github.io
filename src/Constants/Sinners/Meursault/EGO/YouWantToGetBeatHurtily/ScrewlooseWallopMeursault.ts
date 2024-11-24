import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { ScrewlooseWallopMeursaultAwakening } from "./ScrewlooseWallopMeursaultAwakening";
import { ScrewlooseWallopMeursaultCorrosion } from "./ScrewlooseWallopMeursaultCorrosion";

export class ScrewlooseWallopMeursault implements Ego{
    readonly Id: number = 20502;
    readonly Name: string = "Screwloose Wallop";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new ScrewlooseWallopMeursaultAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new ScrewlooseWallopMeursaultCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Final Augment", PassiveTypeEnum.Ego, "If the E.G.O Skill is used at less than 25% HP, gain 3 [Attack Power Up], [Defense Power Up], and [Haste] every turn, but then die in 3 turns.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 2},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 0.5},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Pride, amount: 1 },{sin: SinEnum.Envy, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502profilesummary.png";
}