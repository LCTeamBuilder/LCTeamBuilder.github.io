import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarOfficeFixerYiSangSkill3 implements Skill {
    readonly Name: string = "Grinding the Molars";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] [Discard] 1 Skill of lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Spend 10 [Tremor] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 Tremor<br>"+
            "If the Skill spent [Tremor] Count, trigger [Tremor Burst]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Level Down]<br>"+
            "If the Skill spent [Tremor] Count, trigger [Tremor Burst]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/GrindingTheMolars.png";
}