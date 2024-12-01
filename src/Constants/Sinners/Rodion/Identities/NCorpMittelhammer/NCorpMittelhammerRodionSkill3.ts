import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpMittelhammerRodionSkill3: Skill = {
    Name: "Ironclad Retribution",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit is [Fanatic], deal +15% damage<br>"+
            "Deal +5% damage for each 'N Corp. Fanatic' present in the party"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/IroncladRetribution.png"
}