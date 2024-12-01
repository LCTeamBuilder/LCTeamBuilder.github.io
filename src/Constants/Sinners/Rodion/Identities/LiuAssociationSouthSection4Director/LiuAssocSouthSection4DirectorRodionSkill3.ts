import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection4DirectorRodionSkill3: Skill = {
    Name: "Pinpoint Blitz",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Burn], Coin Power +1<br>"+
            "If the target has 6+ [Burn] and [Burn] Count, deal +30% more damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 3),
        new SkillDescriptionPart("[On Hit] Inflict Wrath Affinity damage equal to [Burn] Potency on target. (Max 30) Reduce Target's [Burn] Count by 2.", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LiuAssociationSouthSection4Director/PinpointBlitz.png"
}