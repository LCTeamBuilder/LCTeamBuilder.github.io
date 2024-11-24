import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { NineTwoSinclairAwakening } from "./NineTwoSinclairAwakening";
import { NineTwoSinclairCorrosion } from "./NineTwoSinclairCorrosion";

export class NineTwoSinclair implements Ego{
    readonly Id: number = 21005;
    readonly Name: string = "9:2";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new NineTwoSinclairAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new NineTwoSinclairCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Prophecy of Ruin", PassiveTypeEnum.Ego, "On Heads Hit with a Lust affinity Skill, lower this unit and the target's SP by 4.<br>"+
        "(Does not work against without Sanity)<br>"+
        "Gain 5 Lust E.G.O resource On Kill with a Lust affinity Skill");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 2},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 2 },{sin: SinEnum.Lust, amount: 5 },{sin: SinEnum.Envy, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/EGO/92/21005cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Sinclair/EGO/92/21005awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Sinclair/EGO/92/21005profilesummary.png";
}