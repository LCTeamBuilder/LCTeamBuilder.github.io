import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ArdorBlossomStarIshmaelAwakening implements Skill{
    readonly Name: string = "Ardor Blossom Star";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 19;
    readonly Coins: number = 1;
    readonly CoinValue: number = +22;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[Heads Hit] Raise Stagger Threshold by 40% of damage dealt<br>"+
            "[On Hit] Inflict [Burn] by Wrath Reson.<br>"+
            "[Heads Attack End] Inflict 5 [Burn] on 3 random enemies", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803awakenprofile.png";
}