import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3SinclairDefense: Skill = {
    Name: "Courier Assistance & Crisis Control System",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] At 15+ [Courier Trunk - Sinclair], activate 'W-wait, I need to do some maintenance…!' instead (once per turn)<br>"+
            "[Combat Start] If this Skill is to be activated, gain ([Courier Trunk - Sinclair])% of this unit's max HP as Shield (max 25%, once per turn)")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierAssistanceAndCrisisControlSystem.png"
}