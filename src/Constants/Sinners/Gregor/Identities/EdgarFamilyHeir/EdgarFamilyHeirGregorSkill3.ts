import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyHeirGregorSkill3: Skill = {
    Name: "Nightmare Hunt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 3)<br>"+
            "[After Attack] If the target is Staggered, inflict +3 [Sinking] Count<br>"+
            "[After Attack] If the target is defeated, inflict +3 [Sinking] Count on 2 random enemies"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 3),
        new SkillDescriptionPart("[On Hit] Absorb 10 [Sinking] from the target and gain 1 [Plus Coin Boost] and 3 [Damage Up] next turn. 50% chance to gain the above effects without absorbing [Sinking].", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/NightmareHunt.png"
}