import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LiuAssocSouthSection6MeursaultSkill3 implements Skill {
    readonly Name: string = "Perfected Death Fist";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 5+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Burn] Count<br>"+
            "[On Hit] If target has 6+ [Burn], inflict 3 [Burn] on 2 random enemies", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/PerfectedDeathFist.png";
}