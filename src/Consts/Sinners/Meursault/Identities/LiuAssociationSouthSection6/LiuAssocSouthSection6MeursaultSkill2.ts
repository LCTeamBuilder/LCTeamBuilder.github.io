import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LiuAssocSouthSection6MeursaultSkill2 implements Skill {
    readonly Name: string = "Stalwart Stance";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 7;
    readonly Coins: number = 2;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] If target has 6+ [Burn], inflict 3 [Burn] on 2 random enemies", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/StalwartStance.png";
}