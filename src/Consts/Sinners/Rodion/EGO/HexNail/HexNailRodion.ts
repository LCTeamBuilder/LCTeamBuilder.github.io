import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { HexNailRodionAwakening } from "./HexNailRodionAwakening";
import { HexNailRodionCorrosion } from "./HexNailRodionCorrosion";

export class HexNailRodion implements EgoBase{
    readonly Id: number = 20907;
    readonly Name: string = "Hex Nail";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new HexNailRodionAwakening;
    readonly AwakeningSanityCost: number = 25;
    readonly CorrosionSkill?: Skill = new HexNailRodionCorrosion;
    readonly CorrosionSanityCost?: number = 30;
    readonly Passive: Passive = new Passive("Iron Stake against the Heart", PassiveTypeEnum.Ego, "When inflicting [Bleed] or 'Unique Bleed' against an enemy with Base Attack Skills, inflict 1 [Defense Level Down] (once per turn)<br>"+
        "- If the target has [Bleed] or 'Unique Bleed', inflict additional 2 [Bleed] (once per turn)<br><br>"+

        "If an ally, including this unit, takes direct HP damage from the enemy, inflict 1 [Curse] against the target enemy (2 times per turn)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 2},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 0.5}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Pride, amount: 1 },{sin: SinEnum.Envy, amount: 4 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Rodion/EGO/HexNail/20907cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Rodion/EGO/HexNail/20907awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Rodion/EGO/HexNail/20907profilesummary.png";
}