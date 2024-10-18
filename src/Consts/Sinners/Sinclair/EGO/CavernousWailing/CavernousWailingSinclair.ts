import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { CavernousWailingSinclairAwakening } from "./CavernousWailingSinclairAwakening";
import { CavernousWailingSinclairCorrosion } from "./CavernousWailingSinclairCorrosion";

export class CavernousWailingSinclair implements EgoBase{
    readonly Id: number = 21006;
    readonly Name: string = "Cavernous Wailing";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new CavernousWailingSinclairAwakening;
    readonly AwakeningSanityCost: number = 15;
    readonly CorrosionSkill?: Skill = new CavernousWailingSinclairCorrosion;
    readonly CorrosionSanityCost?: number = 15;
    readonly Passive: Passive = new Passive("Tear Film", PassiveTypeEnum.Ego, "Turn Start: If this unit has Shield, gain 1 [Protection]<br>"+
        "If this unit is under [Blubberbubble]'s effect, gain 1 additional [Protection]");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 1},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 0.75},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 1 },{sin: SinEnum.Sloth, amount: 2 },{sin: SinEnum.Gloom, amount: 3 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/EGO/CavernousWailing/21006cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Sinclair/EGO/CavernousWailing/21006awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Sinclair/EGO/CavernousWailing/21006profilesummary.png";
}