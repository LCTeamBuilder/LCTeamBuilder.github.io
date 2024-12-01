import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WildHuntHeathcliffSkill2: Skill = {
    Name: "Memorial Procession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 5 [Sinking] on the target (max 2)<br>"+
            "[On Use] Atk Weight +1 for every 4 [Coffin] on self (max 2)<br>"+
            "[On Use] If this unit has [Dullahan], Atk Weight +1<br>"+
            "[After Attack] If this unit has [Dullahan], lose 10 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Impending Ruin] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/MemorialProcession.png"
}