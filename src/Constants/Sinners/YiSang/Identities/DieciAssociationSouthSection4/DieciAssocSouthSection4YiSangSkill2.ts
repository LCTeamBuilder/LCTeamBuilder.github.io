import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4YiSangSkill2: Skill = {
    Name: "Seal Shut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 6% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] If the target has 5+ [Sinking], Coin Power +1<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to [Insight]", 2),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to [Insight]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/SealShut.png"
}