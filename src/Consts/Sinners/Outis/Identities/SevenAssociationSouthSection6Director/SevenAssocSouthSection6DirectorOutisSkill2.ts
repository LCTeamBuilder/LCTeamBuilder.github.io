import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SevenAssocSouthSection6DirectorOutisSkill2 implements Skill {
    readonly Name: string = "Field Command";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[On Hit] Inflict 2 [Defense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict 2 [Defense Level Down] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/FieldCommand.png";
}