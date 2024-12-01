import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const District20YurodivyRyoshuSkill2: Skill = {
    Name: "Compression Wind-up Spanner",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] At 4+ [Tremor] Count, Clash Power +1<br>"+
            "At 4+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[On Hit] Consume [Tremor] Count on self, and inflict the same amount of [Tremor] Count on target (max 5)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/District20Yurodivy/CompressionWindupSpanner.png"
}