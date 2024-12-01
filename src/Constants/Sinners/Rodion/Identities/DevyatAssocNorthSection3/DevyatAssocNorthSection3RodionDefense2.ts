import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3RodionDefense2: Skill = {
    Name: "Just… a Strategic Time Off!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If this Skill is to be activated, gain ([Courier Trunk - Rodion])% of this unit's max HP as Shield (max 25%, once per turn)<br>"+
            "[Turn End] Activate [Strategic R&R Mode]")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/JustAStrategicTimeOff.png"
}