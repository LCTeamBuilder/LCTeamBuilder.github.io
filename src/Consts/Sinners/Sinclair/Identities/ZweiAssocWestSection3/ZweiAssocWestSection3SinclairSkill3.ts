import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocWestSection3SinclairSkill3 implements Skill {
    readonly Name: string = "Fence";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self<br>"+
            "[On Use] Coin Power +1 for every 3 [Defense Level Up] on self (max 3)"),
        new SkillDescriptionPart("[On Hit] On 1 other ally with the lowest HP percentage, apply 4 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Consume up to 8 [Tremor] Count on self, and inflict the same amount as [Tremor] Count on target<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/Fence.png";
}