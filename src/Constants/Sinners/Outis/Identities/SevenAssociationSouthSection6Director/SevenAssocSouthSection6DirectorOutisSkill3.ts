import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection6DirectorOutisSkill3: Skill = {
    Name: "Exploit the Gap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power<br>"+
            "If target has 7+ [Rupture], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Deal bonus Slash damage by 15% of damage dealt<br>"+
            "[On Hit] Inflict [Weakness Analyzed] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/ExploitTheGap.png"
}