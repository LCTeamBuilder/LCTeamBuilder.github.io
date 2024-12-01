import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePrincessOfLaManchalandRodionSkill2: Skill = {
    Name: "In Finely Ground Mistfall",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] On self and 1 ally with the least max HP: apply 1 [Attack Power Up], consume up to 30 [Bloodfeast] and apply 1 [Blooming Thorn] for every 10 [Bloodfeast] consumed (2 times per turn)<br>"+
            "- Prioritizes &ltBloodfiend&gt allies<br>"+
            "- If the affected ally is a &ltBloodfiend&gt, this unit applies additional 1 [Attack Power Up] and 2 [Blooming Thorn]<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/InFinelyGroundMistfall.png"
}