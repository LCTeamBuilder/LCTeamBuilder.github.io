import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarOfficeFixerOutisSkill3: Skill = {
    Name: "Daring Decision",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] this unit's Skills in descending order of ranks from all of its Skill Slots<br>"+
            "Spend 10 [Tremor] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] If the Skill spent [Tremor] Count, inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], After [Tremor Burst], reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], After [Tremor Burst], reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], After [Tremor Burst], reduce target's [Tremor] Count by 1", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/DaringDecision.png"
}