import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MulticrackOfficeFixerHeathcliffSkill2: Skill = {
    Name: "Photoelectric Mark",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 5-9 [Charge] Count, consume 2(10 - current [Charge] Count)% HP to raise [Charge] Count to 10<br>"+
            "[On Use] Consume 10 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] If this unit consumed [Charge] Count, inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] If this unit consumed [Charge] Count, inflict 2 [Defense Level Down]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [HP Healing Down]<br>"+
            "[On Hit] Inflict [Photoelectricity] equal to [Charge] (max 3)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/PhotoelectricMark.png"
}