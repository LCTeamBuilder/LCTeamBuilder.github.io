import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentDonQuixoteSkill3: Skill = {
    Name: "Rip Space",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 1,
    Coins: 5,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Spend 10 [Charge] Count to gain +4 Coin Power<br>"+
        "At less than 10 [Charge] Count, lose 20% HP"),
        new SkillDescriptionPart("[Heads Hit] Inflict 5 [Rupture]", 5)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/WCorpL3CleanupAgent/RipSpace.png"
}