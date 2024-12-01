import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarBoatworksFixerIshmaelSkill2: Skill = {
    Name: "Explosive Blast",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] Gain +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Defense Level Down] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/ExplosiveBlast.png"
}