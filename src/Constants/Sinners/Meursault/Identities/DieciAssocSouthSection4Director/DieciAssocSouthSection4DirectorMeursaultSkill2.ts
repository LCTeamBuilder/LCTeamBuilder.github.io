import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4DirectorMeursaultSkill2: Skill = {
    Name: "Moment of Erudition",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Insight] on self (max 15%)<br>"+
            "[Combat Start] Apply [Erudition] equal to [Insight] on self to 2 random allies and on self (prioritizes allies with [Discard] that has the least [Erudition])<br>"+
            "[On Use] [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots<br>"+
            "[On Use] Coin Power +1 for every 6 [Sinking] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to ([Insight] x 2)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/MomentOfErudition.png"
}