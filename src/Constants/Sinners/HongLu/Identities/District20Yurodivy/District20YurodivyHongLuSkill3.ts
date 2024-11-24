import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class District20YurodivyHongLuSkill3 implements Skill {
    readonly Name: string = "You're the Culprit!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] At less than 15 [Tremor] Count on self, consume 10 [Tremor] Count to gain Coin Power +2<br>"+
            "[On Use] Consume 15 [Tremor] Count on self to gain Coin Power +3"),
        new SkillDescriptionPart("[On Hit] If this Skill consumed [Tremor] Count on Use, trigger [Amplitude Entanglement] into [Tremor - Reverb]", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 10+ [Tremor] Count on Skill Use, trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 10+ [Tremor] Count on Skill Use, trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1)<br>"+
            "- If this unit consumed less than 15 [Tremor] Count, trigger [Tremor Burst] on self after activating the above effect", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/YoureTheCulprit.png";
}