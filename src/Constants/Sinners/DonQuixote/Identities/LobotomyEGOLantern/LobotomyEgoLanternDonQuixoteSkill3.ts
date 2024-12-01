import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoLanternDonQuixoteSkill3: Skill = {
    Name: "Whirlwind Om-Nom-Nom!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] If target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Heal 15 HP. Heal by +50% more HP when reusing Coin.<br>"+
            "[On Hit] Heal additional HP based on [Rupture] on target (2 HP healed per 1 [Rupture]. Max 40)<br>"+
            "At 50%- HP, reuse Coin once", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOLantern/WhirldwindOmNomNom.png"
}