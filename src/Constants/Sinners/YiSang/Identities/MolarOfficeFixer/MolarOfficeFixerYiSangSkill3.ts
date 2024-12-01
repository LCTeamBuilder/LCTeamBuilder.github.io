import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarOfficeFixerYiSangSkill3: Skill = {
    Name: "Grinding the Molars",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] 1 Skill of lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Spend 10 [Tremor] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 Tremor<br>"+
            "If the Skill spent [Tremor] Count, trigger [Tremor Burst]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Level Down]<br>"+
            "If the Skill spent [Tremor] Count, trigger [Tremor Burst]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/GrindingTheMolars.png"
}