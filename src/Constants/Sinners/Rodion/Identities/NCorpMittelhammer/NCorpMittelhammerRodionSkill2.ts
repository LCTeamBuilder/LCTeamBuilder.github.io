import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpMittelhammerRodionSkill2: Skill = {
    Name: "Zealous Purge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Gain 1 [Fanatic] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Nails] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/ZealousPurge.png"
}