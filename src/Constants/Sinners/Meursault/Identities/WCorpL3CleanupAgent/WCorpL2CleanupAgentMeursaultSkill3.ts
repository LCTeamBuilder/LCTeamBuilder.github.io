import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL2CleanupAgentMeursaultSkill3: Skill = {
    Name: "Energy Current",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If at 5+ [Charge] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 2),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 3),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/WCorpL3CleanupAgent/EnergyCurrent.png"
}