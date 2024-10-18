import { DamageTypeEnum, 
    DefenseTypeEnum, 
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BranchOfKnowledgeSinclairAwakening implements Skill{
    readonly Name: string = "Branch of Knowledge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 14;
    readonly Coins: number = 1;
    readonly CoinValue: number = +15;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Heads Hit] Inflict 12 Rupture.pngRupture<br>"+
        "[Heads Hit] Lose 10 SP. Gain 1 [Attack Power Up] next turn<br>"+
        "[Tails Hit] Gain 10 SP. Gain 1 [Protection] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/BranchOfKnowledge/21001awakenprofile.png";
}