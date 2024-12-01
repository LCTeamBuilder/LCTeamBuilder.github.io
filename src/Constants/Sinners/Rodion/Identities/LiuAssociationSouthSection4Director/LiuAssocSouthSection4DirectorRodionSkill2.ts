import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection4DirectorRodionSkill2: Skill = {
    Name: "Fiery Knifehand-Combust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict +1 [Burn] Count<br>"+
            "[On Hit] If the target has 6+ [Burn] Count, apply 3 [Burn] for 2 targets with no [Burn] or with the least [Burn] Count", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LiuAssociationSouthSection4Director/FieryKnifehandCombust.png"
}