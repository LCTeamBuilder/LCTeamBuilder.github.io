import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RCorp4thPackRhinoMeursaultSkill3: Skill = {
    Name: "Rhino Ram",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Charge] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 2 [Charge] Count, Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 3 [Charge] Count, Inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 2 [Charge] Count, Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 3 [Charge] Count, Inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/RhinoRam.png"
}