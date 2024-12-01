import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection6YiSangSkill3: Skill = {
    Name: "Moulinet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] +1 to the value of effect applied by the last Coin", 1),
        new SkillDescriptionPart("[On Hit] +1 to the value of effect applied by the last Coin", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Pierce Fragility] next turn<br>"+
            "[On Hit] Inflict 1 [Rupture]")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/SevenAssociationSouthSection6/Moulinet.png"
}