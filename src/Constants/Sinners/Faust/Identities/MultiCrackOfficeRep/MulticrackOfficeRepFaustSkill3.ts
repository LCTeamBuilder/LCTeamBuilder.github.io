import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MulticrackOfficeRepFaustSkill3: Skill = {
    Name: "40Y-3 Charge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every [Charge] (max 4)"),
            new SkillDescriptionPart("[On Hit] Gain +([Charge] + 5) [Charge] Count (max 8)", 1),
            new SkillDescriptionPart("[On Hit] Gain +([Charge] + 5) [Charge] Count (max 8)", 2),
            new SkillDescriptionPart("At 3+ [Charge], deal +8% more damage for every [Charge] (max 40%)<br>"+
                "[On Hit] Inflict 1 [Envy Fragility] next turn<br>"+
                "- At 2+ [Charge], inflict 1 additional [Envy Fragility]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/40Y3Charge.png"
}