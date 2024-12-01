import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection6MeursaultSkill2: Skill = {
    Name: "Stalwart Stance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] If target has 6+ [Burn], inflict 3 [Burn] on 2 random enemies", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/StalwartStance.png"
}