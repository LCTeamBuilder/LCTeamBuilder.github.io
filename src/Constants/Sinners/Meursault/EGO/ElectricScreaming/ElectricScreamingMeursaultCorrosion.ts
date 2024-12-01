import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ElectricScreamingMeursaultCorrosion: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 2,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 3) equal to (highest Envy Reson. - 2)<br>"+
            "[Before Attack] At 10+ [Charge] Count, apply the effects applied from 'On Hit' twice<br>"+
            "[Before Attack] If this unit has 10+ [Charge] Count, spend up to 20 [Charge] Count, deal 3% more damage for every [Charge] Count consumed (max 60%)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]<br>"+
            "[On Hit] Inflict 3 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506erosionprofile.png"
}