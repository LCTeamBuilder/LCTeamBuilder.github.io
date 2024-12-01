import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const District20YurodivyRyoshuSkill1: Skill = {
    Name: "Got a Screw Loose?",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] At 4+ [Tremor] Count, Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Gain [Tremor] Count on self equal to ([Tremor] Count on target) (max 4)", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/District20Yurodivy/GotAScrewLoose.png"
}