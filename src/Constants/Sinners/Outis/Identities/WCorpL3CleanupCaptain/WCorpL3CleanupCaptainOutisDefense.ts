import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupCaptainOutisDefense: Skill = {
    Name: "Deploy Plasma",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Base Power +1 for every [Charge] Count on self (max 10)<br>"+
            "[On Use] Gain +2 [Charge] Count (3 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/DeployPlasmaUT4.png"
}