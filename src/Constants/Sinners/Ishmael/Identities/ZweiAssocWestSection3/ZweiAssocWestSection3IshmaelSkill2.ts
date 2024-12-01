import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocWestSection3IshmaelSkill2: Skill = {
    Name: "Can't Let You Through.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 5)<br>"+
            "[On Use] At 4+ [Defense Level Up], Coin Power +1<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Gain 4 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict [Tremor] equal to (([Tremor] Count on self)/2) (max 4)<br>"+
            "[On Hit] At 8+ [Defense Level Up], inflict 1 [Attack Power Down]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/CantLetYouThrough.png"
}