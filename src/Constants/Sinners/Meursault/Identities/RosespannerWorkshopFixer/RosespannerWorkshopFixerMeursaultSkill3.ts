import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RosespannerWorkshopFixerMeursaultSkill3: Skill = {
    Name: "Finishing Runup",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Gain +1 [Charge] Count<br>"+
            "[On Hit] Inflict 1 [Tremor]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[Heads Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 3 [Tremor]", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "When triggering [Tremor Burst] reduce [Tremor] Count by 3, then spend all [Charge] Count to further raise Stagger Threshold by ([Charge] Count x5)% (Max 50%)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/FinishingRunup.png"
}