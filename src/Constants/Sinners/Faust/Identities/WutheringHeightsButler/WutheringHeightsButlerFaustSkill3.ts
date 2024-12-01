import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WutheringHeightsButlerFaustSkill3: Skill = {
    Name: "Reception Arts 4: Heartseal",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 5+ [Sinking] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Echoes of the Manor] next turn<br>"+
            "[On Hit] If the target has [Echoes of the Manor], inflict +3 [Sinking] Count", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WutheringHeightsButler/ReceptionArts4Heartseal.png"
}