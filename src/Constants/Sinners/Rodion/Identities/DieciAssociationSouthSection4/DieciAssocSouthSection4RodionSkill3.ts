import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4RodionSkill3: Skill = {
    Name: "Excruciating Study",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 20% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 2 Skills of the lowest ranks in all of this unit's Skill Slots<br>"+
            "[On Use] This Slot gains +5 [Aggro] next turn<br>"+
            "[On Use] If target has 7+ [Sinking], gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/ExcruciatingStudy.png"
}