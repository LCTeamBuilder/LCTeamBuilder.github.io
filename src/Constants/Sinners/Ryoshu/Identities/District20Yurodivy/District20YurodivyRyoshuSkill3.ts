import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const District20YurodivyRyoshuSkill3: Skill = {
    Name: "Percussive Maintenance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "Consume 8 [Tremor] Count on self to gain Coin Power +1<br>"+
            "If the target has 6+ [Tremor], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/District20Yurodivy/PercussiveMaintenance.png"
}