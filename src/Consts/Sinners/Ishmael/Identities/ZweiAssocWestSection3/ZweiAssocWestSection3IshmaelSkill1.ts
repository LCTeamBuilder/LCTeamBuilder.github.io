import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocWestSection3IshmaelSkill1 implements Skill {
    readonly Name: string = "Zwei Knight's Greatsword Form";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 3)<br>"+
            "[On Use] Base Power +1 for every 4 [Defense Level Up] (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[On Hit] Gain 2 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[On Hit] Gain 2 [Defense Level Up] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/ZweiKnightsGreatswordForm.png";
}