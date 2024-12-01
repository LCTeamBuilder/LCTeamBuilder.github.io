import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoSloshingIshmaelSkill3: Skill = {
    Name: "Corrosive Splash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +16,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Inflict 5 [Tremor] and 5 [Rupture]"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 4. Inflict 5 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LobotomyEGOSloshing/CorrosiveSplash.png"
}