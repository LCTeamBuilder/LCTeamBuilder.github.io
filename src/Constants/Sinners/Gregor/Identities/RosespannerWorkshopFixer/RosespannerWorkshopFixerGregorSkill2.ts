import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RosespannerWorkshopFixerGregorSkill2: Skill = {
    Name: "Grease Chains",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/GreaseChains.png"
}