import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarOfficeFixerYiSangSkill2 implements Skill {
    readonly Name: string = "Gamble";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 1;
    readonly CoinValue: number = +12;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this Skill is Discarded, gain +4 [Tremor] Count<br>"+
            "[On Use] [Discard] 1 Skill of lowest rank in all of this unit's Skill Slots"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] At 5+ [Tremor] Count, trigger [Tremor Burst]. Reduce target's [Tremor] Count by 2", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/Gamble.png";
}