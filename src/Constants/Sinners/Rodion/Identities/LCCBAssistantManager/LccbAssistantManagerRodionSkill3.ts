import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LccbAssistantManagerRodionSkill3: Skill = {
    Name: "Suppress",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target took no damage from attacks this turn, Coin Power +3"),
        new SkillDescriptionPart("[Heads Hit] Inflict 4 [Defense Power Down]<br>"+
            "[On Hit] Inflict 4 [Defense Level Down]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCCBAssistantManager/Suppress.png"
}