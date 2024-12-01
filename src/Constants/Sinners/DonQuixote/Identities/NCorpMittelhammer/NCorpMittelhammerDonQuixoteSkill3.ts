import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpMittelhammerDonQuixoteSkill3: Skill = {
    Name: "Fanatical Judgement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Nails]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Nails]<br>"+
        "[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[Heads Hit] If target has 5+ [Nails], inflict 1 [Attack Power Down] next turn<br>"+
        "[Heads Hit] If target has 5+ [Nails], inflict 2 [Paralyze] next turn<br>"+
        "[On Hit] Inflict +1 [Tremor] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/NCorpMittelhammer/FanaticalJudgement.png"
}