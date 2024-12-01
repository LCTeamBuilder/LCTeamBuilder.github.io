import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection6MeursaultSkill3: Skill = {
    Name: "Perfected Death Fist",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Burn] Count<br>"+
            "[On Hit] If target has 6+ [Burn], inflict 3 [Burn] on 2 random enemies", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/PerfectedDeathFist.png"
}