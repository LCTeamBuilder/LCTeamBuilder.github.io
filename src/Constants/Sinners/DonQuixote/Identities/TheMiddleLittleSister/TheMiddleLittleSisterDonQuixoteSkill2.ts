import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheMiddleLittleSisterDonQuixoteSkill2: Skill = {
    Name: "Proof of Loyalty",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] This Skill gains 1 'Offense Level' by (highest A-Reson./2) (Max 6)<br>"+
            "If the Highest A-Reson is Envy A-Reson., boost 'Offense Level' gained by the above effect by 50% (rounded down)<br>"+
            "Gain double the 'Offense Level' from the above effects in Focused Encounters with 7 or fewer Participant Limits."),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Damage Down]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/ProofOfLoyalty.png"
}