import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3RodionDefense: Skill = {
    Name: "Courier Support & Control Sequence",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] At 15+ [Courier Trunk - Rodion], activate 'Just… a Strategic Time Off!' instead (once per turn)<br>"+
            "[Combat Start] If this Skill is to be activated, gain ([Courier Trunk - Rodion])% of this unit's max HP as Shield (max 25%, once per turn)<br>"+
            "[On Use] Gain 2 [Courier Trunk - Rodion] (once per turn)<br>"+
            "- At less than 15 [Courier Trunk - Rodion], gain 1 additional [Courier Trunk - Rodion]")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierSupportControlSequence.png"
}