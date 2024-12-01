import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanCaptainGregorSkill3: Skill = {
    Name: "Shadowcloud Shattercleave",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 7+ [Bleed], Clash Power +1<br>"+
            "[On Use] If the target has 10+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Offense Level Down]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Offense Level Down]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Offense Level Down] next turn", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Plus Coin Drop] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/ShadowcloudShattercleave.png"
}