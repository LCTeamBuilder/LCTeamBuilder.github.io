import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageMentorMeursaultSkill2: Skill = {
    Name: "Acupuncture",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise], Coin Power +1<br>"+
            "[Combat Start] Apply 1 [Swordplay of the Homeland - Penetrating] to (Highest A-Reson.) other Blade Lineage allies in ascending order of Speeds (slowest to fastest, 2 times max)<br>"+
            "- If there are 6 or more allied Blade Lineage Identities in the Encounter, apply 2 instead<br>"+
            "[On Use] Gain +3 [Poise] Count<br>"+
            "[Clash Win] Gain 1 [Slash Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]", 1),
        new SkillDescriptionPart("+60% Damage on Critical Hit", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/Acupuncture.png"
}