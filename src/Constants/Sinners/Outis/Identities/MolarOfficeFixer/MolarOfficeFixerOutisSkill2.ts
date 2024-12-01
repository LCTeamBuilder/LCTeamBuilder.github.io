import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarOfficeFixerOutisSkill2: Skill = {
    Name: "Slice",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill is Discarded, gain 1 [Offense Level Up]<br>"+
            "[On Use] [Discard] the Skill of lowest rank in all of this unit's Skill Slots"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] At 6+ [Tremor] Count, Trigger [Tremor Burst]. Reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/Slice.png"
}