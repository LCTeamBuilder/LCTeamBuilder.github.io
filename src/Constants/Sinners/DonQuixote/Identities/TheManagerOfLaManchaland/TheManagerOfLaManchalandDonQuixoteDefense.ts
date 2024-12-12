import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheManagerOfLaManchalandDonQuixoteDefense: Skill = {
    Name: "Laughters Will Subside",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[Combat Start] Consume up to 50 [Bloodfeast] and gain 1 [Hardblood] for every 10 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 10 [Bleed]<br>"+
            "[Combat Start] To 1 ally with the least HP: apply [Shimmering (Bloodfiend)] for every 50 [Bloodfeast Consumed] (shared) (max 15, once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/LaugthersWillSubside.png"
}