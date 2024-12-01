import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocWestSection3IshmaelSkill1: Skill = {
    Name: "Zwei Knight's Greatsword Form",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 3)<br>"+
            "[On Use] Base Power +1 for every 4 [Defense Level Up] (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[On Hit] Gain 2 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[On Hit] Gain 2 [Defense Level Up] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/ZweiKnightsGreatswordForm.png"
}