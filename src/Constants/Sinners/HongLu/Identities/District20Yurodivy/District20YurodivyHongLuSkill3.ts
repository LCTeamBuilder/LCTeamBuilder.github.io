import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const District20YurodivyHongLuSkill3: Skill = {
    Name: "You're the Culprit!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] At less than 15 [Tremor] Count on self, consume 10 [Tremor] Count to gain Coin Power +2<br>"+
            "[On Use] Consume 15 [Tremor] Count on self to gain Coin Power +3"),
        new SkillDescriptionPart("[On Hit] If this Skill consumed [Tremor] Count on Use, trigger [Amplitude Entanglement] into [Tremor - Reverb]", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 10+ [Tremor] Count on Skill Use, trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 10+ [Tremor] Count on Skill Use, trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1)<br>"+
            "- If this unit consumed less than 15 [Tremor] Count, trigger [Tremor Burst] on self after activating the above effect", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/YoureTheCulprit.png"
}