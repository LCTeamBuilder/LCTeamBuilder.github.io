import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Ego, Passive, Skill } from "../../../../../Models/Index";
import { CavernousWailingHongLuAwakening } from "./CavernousWailingHongLuAwakening";
import { CavernousWailingHongLuCorrosion } from "./CavernousWailingHongLuCorrosion";

export class CavernousWailingHongLu implements Ego{
    readonly Id: number = 20606;
    readonly Name: string = "Cavernous Wailing";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.TETH;
    readonly AwakeningSkill: Skill = new CavernousWailingHongLuAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new CavernousWailingHongLuCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Gloominess", PassiveTypeEnum.Ego, "When this unit uses a Skill to trigger [Tremor Burst] on an enemy, inflict 1 [Offense Level Down] and 2 [Defense Level Down] on the enemy next turn. (3 times per turn, including E.G.O Skills)");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 1},
                                                                { sin: SinEnum.Lust, resistance: 2},
                                                                { sin: SinEnum.Sloth, resistance: 0.5},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 1},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 2}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Sloth, amount: 3 },{sin: SinEnum.Gloom, amount: 3 },{sin: SinEnum.Pride, amount: 2 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/HongLu/EGO/CavernousWailing/20606cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/HongLu/EGO/CavernousWailing/20606awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/HongLu/EGO/CavernousWailing/20606profilesummary.png";
}