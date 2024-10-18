import { KeywordEnum, 
        PassiveTypeEnum, 
        RiskLevelEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { EgoBase, Passive, Skill } from "../../../../../Models/Index";
import { ArdorBlossomStarIshmaelAwakening } from "./ArdorBlossomStarIshmaelAwakening";
import { ArdorBlossomStarIshmaelCorrosion } from "./ArdorBlossomStarIshmaelCorrosion";

export class ArdorBlossomStarIshmael implements EgoBase{
    readonly Id: number = 20803;
    readonly Name: string = "Ardor Blossom Star";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly RiskLevel: RiskLevelEnum = RiskLevelEnum.HE;
    readonly AwakeningSkill: Skill = new ArdorBlossomStarIshmaelAwakening;
    readonly AwakeningSanityCost: number = 20;
    readonly CorrosionSkill?: Skill = new ArdorBlossomStarIshmaelCorrosion;
    readonly CorrosionSanityCost?: number = 20;
    readonly Passive: Passive = new Passive("Shower of Fire", PassiveTypeEnum.Ego, "On hit, if the target had [Burn], inflict 1 [Burn] on 3 random enemies.");
    readonly Resistances: { sin: SinEnum; resistance: number; }[] = [{ sin: SinEnum.Wrath, resistance: 0.5},
                                                                { sin: SinEnum.Lust, resistance: 0.75},
                                                                { sin: SinEnum.Sloth, resistance: 2},
                                                                { sin: SinEnum.Gluttony, resistance: 1},
                                                                { sin: SinEnum.Gloom, resistance: 2},
                                                                { sin: SinEnum.Pride, resistance: 1},
                                                                { sin: SinEnum.Envy, resistance: 1}];
    readonly Cost: { sin: SinEnum; amount: number; }[] = [{sin: SinEnum.Wrath, amount: 4 },{sin: SinEnum.Lust, amount: 2 },{sin: SinEnum.Envy, amount: 1 },];
    readonly Keywords: KeywordEnum[] = [];
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803cg.png";
    readonly ProfileImageDir: string = "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803awakenprofile.png";
    readonly SummaryImageDir: string = "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803profilesummary.png";
}