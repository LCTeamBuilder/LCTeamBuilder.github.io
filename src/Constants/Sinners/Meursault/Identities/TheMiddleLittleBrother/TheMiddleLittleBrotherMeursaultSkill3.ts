import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheMiddleLittleBrotherMeursaultSkill3 implements Skill {
    readonly Name: string = "Recording";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 4+ Envy Reson., Coin Power +1<br>"+
            "At 6+ Envy A-Reson., Coin Power +1"),
        new SkillDescriptionPart("[On Hit] If target has [Vengeance Mark], inflict 1 [Plus Coin Drop] next turn", 1),
        new SkillDescriptionPart("[On Hit] If target has [Vengeance Mark], inflict 2 [Envy Fragility] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/TheMiddleLittleBrother/Recording.png";
}