import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyChiefButlerRyoshuSkill2: Skill = {
    Name: "Receiving Arts 7: Capture",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the main target's, gain Clash Power +1 for every 2 Speed difference (Max 3)<br>"+
            "[Combat Start] Consume 6 [Poise] Count on self to gain +2 Atk Weight for this Skill"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]<br>"+
            "[On Crit] Inflict 1 [B.M.]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [B.M.]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/ReceivingArts7Capture.png"
}