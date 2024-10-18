import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocSouthSection6SinclairSkill2 implements Skill {
    readonly Name: string = "Supress";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 6;
    readonly Coins: number = 2;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Inflict 6 [Tremor]"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Inflict 2 [Damage Down] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/ZweiAssociationSouthSection6/Supress.png";
}