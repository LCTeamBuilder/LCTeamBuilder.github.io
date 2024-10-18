import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocWestSection3IshmaelSkill3 implements Skill {
    readonly Name: string = "Ward";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 5)<br>"+
            "[On Use] If this unit is in [Defensive Stance], deal +70% more damage<br>"+
            "[On Use] Coin Power +1 for every 4 [Defense Level Up] on self (max 4)<br>"+
            "[On Use] Gain +10 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] Consume all [Tremor] Count on self, and inflict the value of Count consumed as [Tremor] on the target. (max 20)<br>"+
            "- Deal +(excess [Tremor] x 5)% more damage (max 50%)<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] If this unit is in [Defensive Stance], trigger [Tremor Burst]; then, reduce the target's [Tremor] Count by 1", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/Ward.png";
}