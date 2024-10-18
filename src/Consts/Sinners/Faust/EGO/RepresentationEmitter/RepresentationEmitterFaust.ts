import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { RepresentationEmitterFaustAwakening } from "./RepresentationEmitterFaustAwakening";

export class RepresentationEmitterFaust implements EgoBase{
    readonly Id: number = 20201;
    readonly Name: string = "Representation Emitter";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.ZAYIN;
    readonly AwakeningSkill: Skill = new RepresentationEmitterFaustAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = undefined;
    readonly CorrosionSanityCost?: number = undefined;
    readonly Passive: Passive = new Passive("Ennui", PassiveTypeEnum.Ego, "If an enemy is staggered during this unit's attack, 1 ally with the lowest SP has +2 [SP Heal Efficiency] next turn. (Max 3 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 1},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 0.75},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Gluttony, amount: 2},
                                                        {sin: SinEnum.Pride, amount: 4}];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Faust/EGO/RepresentationEmitter/20201cg.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Faust/EGO/RepresentationEmitter/20201profilesummary.png";
}