import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WutheringHeightsChiefButlerOutisSkill3: Skill = {
    Name: "As Mistress Commands",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 7+ [Sinking], Coin Power +1<br>"+
            "[Clash Win] Inflict +3 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Echoes of the Manor] next turn<br>"+
            "[On Hit] If the target has [Echoes of the Manor], inflict Gloom Affinity damage equal to [Sinking] Potency on target (Max 30)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/AsMistressCommands.png"
}