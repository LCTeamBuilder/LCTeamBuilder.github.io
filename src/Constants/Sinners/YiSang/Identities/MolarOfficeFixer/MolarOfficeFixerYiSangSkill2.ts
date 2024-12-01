import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarOfficeFixerYiSangSkill2: Skill = {
    Name: "Gamble",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill is Discarded, gain +4 [Tremor] Count<br>"+
            "[On Use] [Discard] 1 Skill of lowest rank in all of this unit's Skill Slots"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] At 5+ [Tremor] Count, trigger [Tremor Burst]. Reduce target's [Tremor] Count by 2", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/Gamble.png"
}